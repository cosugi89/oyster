export interface Answer {
  id: number;
  question_id: number;
  user_id: number;
  updated_at: Date;
  content: string;
}

export const answers: Answer[] = [
  {
    id: 1,
    question_id: 1,
    user_id: 3,
    updated_at: new Date("2025-09-07T12:00:00"),
    content: "Redux Toolkit を使うと設定が簡単でおすすめです。",
  },
  {
    id: 2,
    question_id: 1,
    user_id: 2,
    updated_at: new Date("2025-09-07T12:00:00"),
    content: "小規模なプロジェクトなら Context API でも十分です。",
  },
  {
    id: 3,
    question_id: 2,
    user_id: 1,
    updated_at: new Date("2025-09-07T12:00:00"),
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui, ratione praesentium laudantium debitis et quis excepturi quam, officiis quas accusantium eius tenetur quae sit, fugit iure suscipit vitae ea!fugit iure suscipit vitae ea!",
  },
];
