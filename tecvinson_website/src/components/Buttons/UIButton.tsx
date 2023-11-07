import React, { ReactNode } from 'react';
import styles from './UIButton.module.css'; // Import your CSS styles

interface UIButtonProps {
  children: ReactNode;
  type?: 'secondary' | 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  /*onClick?: () => void; */
}

const UIButton: React.FC<UIButtonProps> = ({ children, type = 'primary', size = 'medium' }) => {
  const buttonClassName = `${styles.button} ${styles[type]} ${styles[size]}`;

  return (
    <button className={buttonClassName} >
      {children}
    </button>
  );
};

export default UIButton;
