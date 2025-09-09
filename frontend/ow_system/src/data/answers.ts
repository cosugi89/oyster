export interface Answer {
  id: number;
  questionId: number;
  userId: number;
  updatedAt: Date;
  content: string;
}

export const answers: Answer[] = [
  {
    id: 1,
    questionId: 1,
    userId: 3,
    updatedAt: new Date("2025-09-07T12:00:00"),
    content: "Redux Toolkit を使うと設定が簡単でおすすめです。",
  },
  {
    id: 2,
    questionId: 1,
    userId: 2,
    updatedAt: new Date("2025-09-07T12:00:00"),
    content: "小規模なプロジェクトなら Context API でも十分です。",
  },
  {
    id: 3,
    questionId: 2,
    userId: 1,
    updatedAt: new Date("2025-09-07T12:00:00"),
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui, ratione praesentium laudantium debitis et quis excepturi quam, officiis quas accusantium eius tenetur quae sit, fugit iure suscipit vitae ea!fugit iure suscipit vitae ea!",
  },
];
