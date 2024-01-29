
import styles from "./../page.module.css";

const LINKS = [
  {
    title: "Go to Catalog",
    href: "/catalog",
  },
  {
    title: "Go to Checkout",
    href: "/checkout",
  }
];

export default function About(): React.ReactNode {
  return (
    <main className={styles.main}>
        <h1>I am About</h1>
        <div style={{display: "flex"}}>
          {LINKS.map(({ title, href }) => (
            <a href={href} key={title} title={title} style={{padding: "50px"}}>
              {title}
            </a>
          ))}
        </div>
    </main>
  );
}

