import styles from "./page.module.css";

const LINKS = [
  {
    title: "Go to Home",
    href: "/",
  },
  {
    title: "Go to Catalog",
    href: "/catalog",
  },
  {
    title: "Go to Checkout",
    href: "/checkout",
  }
  ,
  {
    title: "Go to Cart",
    href: "/cart",
  },
  {
    title: "Go to About",
    href: "/about",
  },
  {
    title: "Go to SSR",
    href: "/ssr",
  },
  {
    title: "Go to SSR Catalog",
    href: "/catalog/ssr-catalog",
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
