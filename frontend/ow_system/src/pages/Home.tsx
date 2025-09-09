import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/utils";
import { questions, type Question } from "@/data/questions";
import { answers, type Answer } from "@/data/answers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="p-8 w-11/12">
      {questions.map((question: Question) => {
        const answer: Answer | undefined = answers.find(
          (a) => question.id === a.question_id
        );
        return (
          <Accordion
            type="single"
            collapsible
            className="shadow-md px-8 py-4 rounded-md mb-4"
            value={openItem ?? undefined}
            onValueChange={(val) => setOpenItem(val)}
          >
            <AccordionItem
              value={question.id.toString()}
              className="border-none group"
            >
              <AccordionTrigger>
                <div className="space-y-4">
                  <div>
                    {question.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="mr-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className={`pr-5 text-base ${
                      openItem === question.id.toString()
                        ? "truncate-2" // 開いているとき
                        : "truncate-1" // 閉じているとき
                    }`}
                  >
                    {question.content}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance border-t pt-6 text-base">
                {answer ? answer.content : "回答はまだありません"}
                <div className="flex justify-between pr-10 items-center mt-2">
                  <p className="text-gray-600 text-sm">
                    {formatDate(question.updated_at)} 投稿
                  </p>
                  <Link to={`/question_detail/${question.id}`} className="">
                    <Button
                      variant="destructive"
                      className="text-xs text-muted"
                    >
                      <span>Read More</span>
                      <ExternalLink />
                    </Button>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </section>
  );
}
