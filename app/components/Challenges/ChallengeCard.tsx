interface Challenge {
  id: string;
  name: string;
  description: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin: (challengeId: string) => void;
}

const ChallengeCard = ({ challenge, onJoin }: ChallengeCardProps) => (
  <div>
    <h3>{challenge.name}</h3>
    <p>{challenge.description}</p>
    <button onClick={() => onJoin(challenge.id)}>Join Challenge</button>
  </div>
);

export default ChallengeCard;
