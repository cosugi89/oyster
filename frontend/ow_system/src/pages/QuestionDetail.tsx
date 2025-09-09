import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import Header from "@/components/layout/Header";

import { questions } from "@/data/questions.ts";
import { answers as Answers } from "@/data/answers.ts";
import { users } from "@/data/users.ts";

import type { Question } from "@/data/questions.ts";
import type { Answer } from "@/data/answers.ts";
import type { User } from "@/data/users.ts";

export default function QuestionDetail() {
  const { id } = useParams<{ id: string }>();
  const questionId = Number(id);

  // 該当の Question を取得
  const question: Question | undefined = questions.find(
    (q) => q.id === questionId
  );
  // Question に紐づく Answer を取得
  const [answers] = useState<Answer[]>(
    Answers.filter((a) => a.questionId === questionId)
  );
  // Question に紐づく ユーザー を取得
  const user: User | undefined = users.find((u) => u.id === question?.userId);

  if (!question) {
    return <div className="p-8">質問が見つかりませんでした。</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8 px-4 max-w-3xl mx-auto space-y-6">
        {/* Question */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex space-x-4 items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatarUrl} />
              </Avatar>
              <CardTitle className="text-lg">
                {user ? user.name : "不明なユーザー"}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{question.content}</p>
          </CardContent>
          <CardFooter className="text-gray-700 flex space-x-3">
            {question.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="mr-1">
                {tag}
              </Badge>
            ))}
            <p className="text-gray-600 text-sm">
              {formatDate(question.updatedAt)}
            </p>
          </CardFooter>
        </Card>

        {/* Answers */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Answers</h2>
          {answers.length === 0 ? (
            <p className="text-gray-600">まだ回答はありません。</p>
          ) : (
            answers.map((answer) => {
              const user: User | undefined = users.find(
                (u) => u.id === answer.userId
              );
              return (
                <Card key={answer.id} className="shadow-md">
                  <CardHeader>
                    <div className="flex space-x-3 items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatarUrl} />
                      </Avatar>
                      <CardTitle className="text-md font-semibold">
                        <p>{user ? user.name : "不明なユーザー"}</p>
                        <p className="text-gray-600 text-xs">
                          {formatDate(answer.updatedAt)}
                        </p>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{answer.content}</p>
                  </CardContent>
                </Card>
              );
            })
          )}
        </section>
      </div>
    </>
  );
}
