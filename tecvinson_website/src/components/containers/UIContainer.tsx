import React, { ReactNode } from 'react';
import styles from './uicontainer.module.css'; // Import your CSS styles

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
