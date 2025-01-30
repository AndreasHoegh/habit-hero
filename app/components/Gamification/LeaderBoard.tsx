"use client";

interface LeaderboardUser {
  id: string;
  name: string;
  points: number;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
}

const Leaderboard = ({ users }: LeaderboardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-teal-700">Leaderboard</h2>
    <div className="space-y-3">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-3 rounded-lg transition-all hover:scale-102 hover:bg-teal-50"
        >
          <div className="flex items-center gap-3">
            <span
              className={`
              w-8 h-8 flex items-center justify-center rounded-full font-bold
              ${
                index === 0
                  ? "bg-yellow-400 text-white"
                  : index === 1
                  ? "bg-gray-300 text-white"
                  : index === 2
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }
            `}
            >
              {index + 1}
            </span>
            <span className="font-medium">{user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-teal-600">{user.points}</span>
            <span className="text-sm text-gray-500">pts</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Leaderboard;
