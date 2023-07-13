import { PropsWithChildren } from 'react';
import './AlertMessage.css';

interface AlertMessageProps {
  type: 'SUCCESS' | 'ERROR';
}

export const AlertMessage: React.FC<PropsWithChildren<AlertMessageProps>> = ({
  type,
  children
}) => {
  return <div className={`alert-message ${type.toLowerCase()}`}>{children}</div>;
};
