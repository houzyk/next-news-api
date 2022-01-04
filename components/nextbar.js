// next router
import { useRouter } from "next/router";

// css
import styles from "../styles/Nextbar.module.css";

export function NextBar ({pageNumber}) {
  const router = useRouter();

  return (
    <div className={styles.nextbar}>
      <div
        onClick={() => router.push('/')}>
        Home
      </div>
      <div>
        {pageNumber}
      </div>
      <div
        onClick={() => router.push('/about')}>
        About
      </div>
    </div>
  );
};
