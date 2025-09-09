export interface Question {
  id: number;
  user_id: number;
  content: string;
  tags: string[];
  updated_at: Date;
  isResolved: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    user_id: 1,
    content: "Reactで状態管理はどうすればいい？",
    tags: ["React", "TypeScript", "JavaScript"],
    updated_at: new Date("2025-09-07T12:00:00"),
    isResolved: false,
  },
  {
    id: 2,
    user_id: 2,
    content:
      "TypeScriptの型定義は必須ですか？TypeScriptの型定義は必須ですか？TypeScriptの型定義は必須ですか？TypeScriptの型定義は必須ですか？",
    tags: ["TypeScript", "JavaScript"],
    updated_at: new Date("2025-09-07T12:00:00"),
    isResolved: true,
  },
];
