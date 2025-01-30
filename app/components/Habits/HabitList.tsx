import HabitCard from "./HabitCard";
import type { Habit } from "../../types";

interface HabitListProps {
  habits: Habit[];
  onComplete: (habitId: string) => void;
}

const HabitList = ({ habits, onComplete }: HabitListProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {habits.map((habit) => (
      <HabitCard key={habit.id} habit={habit} onComplete={onComplete} />
    ))}
  </div>
);

export default HabitList;
