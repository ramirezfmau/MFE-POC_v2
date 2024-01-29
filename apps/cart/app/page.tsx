import styles from "./page.module.css";

const LINKS = [
  {
    title: "Homepage",
    href: "/",
  },
  {
    title: "Checkout",
    href: "/checkout",
  }
];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>

        <h1>I am the Cart</h1>
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
