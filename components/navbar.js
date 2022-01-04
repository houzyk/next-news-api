// next router
import { useRouter } from "next/router";

// css
import styles from "../styles/Navbar.module.css";

export function Navbar () {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div
        onClick={() => router.push('/')}>
        Home
      </div>
      <div
        onClick={() => router.push('/feed/1')}>
        Feed
      </div>
      <div
        onClick={() => router.push('/about')}>
        About
      </div>
    </div>
  );
};
