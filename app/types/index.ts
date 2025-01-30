export interface Habit {
  id: string | number;
  name: string;
  description: string;
  progress: number;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  points: number;
}

export interface User {
  name: string;
  avatar: string;
  points: number;
}
