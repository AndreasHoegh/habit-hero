interface AvatarData {
  image: string;
}

interface AvatarProps {
  avatar: AvatarData;
  onCustomize: () => void;
}

const Avatar = ({ avatar, onCustomize }: AvatarProps) => (
  <div>
    <img src={avatar.image} alt="Avatar" className="w-10 h-10 rounded-full" />
    <button onClick={onCustomize}>Customize</button>
  </div>
);

export default Avatar;
