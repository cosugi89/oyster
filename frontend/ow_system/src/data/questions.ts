export interface Question {
  id: number;
  userId: number;
  content: string;
  tags: string[];
  updatedAt: Date;
  isResolved: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    userId: 1,
    content: "Reactで状態管理はどうすればいい？",
    tags: ["React", "TypeScript", "JavaScript"],
    updatedAt: new Date("2025-09-07T12:00:00"),
    isResolved: false,
  },
  {
    id: 2,
    userId: 2,
    content:
      "TypeScriptの型定義は必須ですか？TypeScriptの型定義は必須ですか？TypeScriptの型定義は必須ですか？TypeScriptの型定義は必須ですか？",
    tags: ["TypeScript", "JavaScript"],
    updatedAt: new Date("2025-09-07T12:00:00"),
    isResolved: true,
  },
];
