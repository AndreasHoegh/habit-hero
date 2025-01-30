type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationProps {
  message: string;
  type: NotificationType;
}

const Notification = ({ message, type }: NotificationProps) => (
  <div className={`notification ${type}`}>{message}</div>
);

export default Notification;
