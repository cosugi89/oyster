import { useParams } from "react-router-dom";
import { users, type User } from "@/data/users";
import { questions, type Question } from "@/data/questions";
import { answers, type Answer } from "@/data/answers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const user: User | undefined = users.find((u) => u.id === userId);
  const userQuestions: Question[] = questions.filter((q) => {
    return answers.some((a) => a.userId === user?.id && a.questionId === q.id);
  });
  const userAnswers: Answer[] = answers.filter((a) => a.userId === user?.id);

  if (!user) {
    return <div className="p-8">ユーザーが見つかりませんでした。</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 max-w-4xl mx-auto space-y-6">
      {/* ユーザー情報 */}
      <Card className="shadow-lg flex items-center space-x-4 p-4">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          {user.bio && <p className="text-gray-700 mt-1">{user.bio}</p>}
        </div>
      </Card>

      {/* ユーザーが投稿した質問 */}
      <section>
        <h3 className="text-lg font-semibold mb-2">質問した内容</h3>
        {userQuestions.length === 0 ? (
          <p className="text-gray-600">まだ質問はありません。</p>
        ) : (
          userQuestions.map((q) => (
            <Card key={q.id} className="shadow-md mb-2">
              <CardHeader>
                <CardTitle>{q.content}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{q.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </section>

      {/* ユーザーが投稿した回答 */}
      <section>
        <h3 className="text-lg font-semibold mb-2">回答した内容</h3>
        {userAnswers.length === 0 ? (
          <p className="text-gray-600">まだ回答はありません。</p>
        ) : (
          userAnswers.map((a) => {
            const user: User | undefined = users.find((u) => u.id === a.userId);
            return (
              <Card key={a.id} className="shadow-md mb-2">
                <CardHeader>
                  <CardTitle>{user ? user.id : "不明なユーザー"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{a.content}</p>
                </CardContent>
              </Card>
            );
          })
        )}
      </section>
    </div>
  );
}
