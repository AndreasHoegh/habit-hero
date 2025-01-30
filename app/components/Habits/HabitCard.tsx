import type { Habit } from "../../types";

interface HabitCardProps {
  habit: Habit;
  onComplete: (habitId: string) => void;
}

const HabitCard = ({ habit, onComplete }: HabitCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{habit.name}</h3>
        <p className="text-gray-600 text-sm">{habit.description}</p>
      </div>
      <button
        onClick={() => onComplete(habit.id.toString())}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
      >
        Complete
      </button>
    </div>

    <div className="mt-4">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{habit.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-teal-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${habit.progress}%` }}
        />
      </div>
    </div>
  </div>
);

export default HabitCard;
