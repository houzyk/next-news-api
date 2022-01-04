// next router
import { useRouter } from "next/router";

// css
import styles from "../styles/Nextbar.module.css";

export function NextBar ({pageNumber}) {
  const router = useRouter();

  if (pageNumber <= 1) {
    return (
      <div className={styles.nextbar}>
        <div>
          {pageNumber}
        </div>
        <div
          onClick={() => router.push(`/feed/${pageNumber + 1}`)}>
          Next
        </div>
      </div>
    );
  } else if (pageNumber >= 5) {
    return (
      <div className={styles.nextbar}>
        <div
          onClick={() => router.push(`/feed/${pageNumber - 1}`)}>
          Previous
        </div>
        <div>
          {pageNumber}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.nextbar}>
        <div
          onClick={() => router.push(`/feed/${pageNumber - 1}`)}>
          Previous
        </div>
        <div>
          {pageNumber}
        </div>
        <div
          onClick={() => router.push(`/feed/${pageNumber + 1}`)}>
          Next
        </div>
      </div>
    );
  }
};
