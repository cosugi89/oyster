export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatarUrl?: string;
  bio?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    password: "password",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    bio: "フロントエンドエンジニア",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    password: "password",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    bio: "バックエンドエンジニア",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    password: "password",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    bio: "QAサイト運営者",
  },
];
