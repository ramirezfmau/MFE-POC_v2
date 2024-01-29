
import styles from "./page.module.css";

const LINKS = [
  {
    title: "HomePage",
    href: "/",
  },
  {
    title: "Catalog",
    href: "/catalog",
  },
  {
    title: "About",
    href: "/about",
  },

];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>

        <h1>I am the checkout</h1>
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
