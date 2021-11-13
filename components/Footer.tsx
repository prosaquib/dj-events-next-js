import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

const Footer:React.FC<any> = props => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
          <Link href='/about'>
            <a>About Us</a>
          </Link>
      </p>
    </footer>
  )
}

export default Footer
