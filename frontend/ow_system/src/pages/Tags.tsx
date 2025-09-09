import { useState } from "react";
import { questions, type Question } from "@/data/questions";
import { Badge } from "@/components/ui/badge"; // shadcn の Badge を利用想定
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function toLocaleDateString() {
  // 全タグをユニーク化
  const allTags = Array.from(new Set(questions.flatMap((q) => q.tags)));

  const [activeTag, setActiveTag] = useState<string | null>(null);

  // フィルタリングされた質問リスト
  const filteredQuestions =
    activeTag === null
      ? questions
      : questions.filter((q) => q.tags.includes(activeTag));

  return (
    <div className="space-y-6 p-6">
      {/* タグ一覧 */}
      <div className="flex flex-wrap gap-2">
        {/* All を押すと全件表示 */}
        <Badge
          variant={activeTag === null ? "default" : "secondary"}
          onClick={() => setActiveTag(null)}
          className="cursor-pointer"
        >
          All
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={activeTag === tag ? "default" : "secondary"}
            onClick={() => setActiveTag(tag)}
            className="cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* 質問一覧 */}
      <div className="space-y-4">
        {filteredQuestions.map((q: Question) => (
          <Card key={q.id}>
            <CardHeader className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                更新日: {q.updated_at.toLocaleDateString()}
              </span>
              {q.isResolved && (
                <span className="text-xs text-green-600 font-bold">
                  Resolved
                </span>
              )}
            </CardHeader>
            <CardContent>
              <p className="mb-2">{q.content}</p>
              <div className="flex flex-wrap gap-1">
                {q.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
