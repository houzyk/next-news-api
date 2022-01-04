/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

// css
import styles from "../styles/About.module.css";

export function About ({ me }) {
  // returns a page component with profile details
  return (
    <div className="container">
      <h1>{me.name}</h1>
      <p>
        <a
          href={me.html_url}
          target="_blank"
        >
          {me.login}
        </a>
      </p>
      <p>
        {me.company}
      </p>
      <img
        src={me.avatar_url}
        alt="profile photo"
        className={styles.photo}
      />
    </div>
  );
}

// gets profile data to render server-side
export async function getServerSideProps (context) {
  // fetches profile data from github api and parses into json
  const apiResp = await fetch("https://api.github.com/users/houzyk");
  const me = await apiResp.json();

  // returns a props object to the About component containing fetched json data
  return {
    props: {
      me
    }
  };
}

export default About;
