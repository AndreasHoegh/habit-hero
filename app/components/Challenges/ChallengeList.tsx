import ChallengeCard from "./ChallengeCard";

interface Challenge {
  id: string;
  name: string;
  description: string;
}

interface ChallengeListProps {
  challenges: Challenge[];
  onJoin: (challengeId: string) => void;
}

const ChallengeList = ({ challenges, onJoin }: ChallengeListProps) => (
  <div>
    {challenges.map((challenge) => (
      <ChallengeCard key={challenge.id} challenge={challenge} onJoin={onJoin} />
    ))}
  </div>
);

export default ChallengeList;
