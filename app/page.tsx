"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import HabitList from "./components/Habits/HabitList";
import ProgressChart from "./components/Progress/ProgressChart";
import Leaderboard from "./components/Gamification/LeaderBoard";
import Notification from "./components/Notifications/Notification";
import LoadingSpinner from "./components/LoadingSpinner";
import type { Habit, LeaderboardUser } from "./types";

// Mock data (replace with API calls)
const mockHabits: Habit[] = [
  {
    id: "1",
    name: "Daily Exercise",
    description: "60 minutes of exercise",
    progress: 60,
  },
  {
    id: "2",
    name: "Read Books",
    description: "Read for 30 minutes",
    progress: 40,
  },
  {
    id: "3",
    name: "Meditation",
    description: "10 minutes of meditation",
    progress: 60,
  },
  {
    id: "4",
    name: "Journaling",
    description: "Write in your journal for 10 minutes",
    progress: 0,
  },
];

const mockLeaderboard: LeaderboardUser[] = [
  { id: "1", name: "Alice", points: 1200 },
  { id: "2", name: "Bob", points: 950 },
  { id: "3", name: "Charlie", points: 800 },
];

const mockProgressData = [5, 7, 6, 8, 4, 9, 7]; // Weekly habit completions

export default function Dashboard() {
  const [user] = useState({
    name: "John Doe",
    avatar: "/avatar.png",
    points: 1000,
  });
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<string | null>(null);

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate API call delay
  }, []);

  const handleCompleteHabit = (habitId: string) => {
    setNotification(`Habit ${habitId} completed!`);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar user={user} onLogout={() => alert("Logged out!")} />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>

        {/* Habit Tracker */}
        <section>
          <h2 className="text-xl font-bold mb-2">Your Habits</h2>
          <HabitList habits={mockHabits} onComplete={handleCompleteHabit} />
        </section>

        {/* Progress Chart */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Weekly Progress</h2>
          <ProgressChart data={mockProgressData} />
        </section>

        {/* Leaderboard */}
        <section className="mb-4">
          <Leaderboard users={mockLeaderboard} />
        </section>

        {/* Notification */}
        {notification && <Notification message={notification} type="success" />}
      </main>
    </div>
  );
}
