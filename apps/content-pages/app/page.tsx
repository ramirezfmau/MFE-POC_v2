
import Link from "next/link";
import styles from "./page.module.css";

const LINKS = [
  {
    title: "Go to Catalog",
    href: "/catalog",
  },
  {
    title: "Go to Checkout",
    href: "/checkoutb",
  }
  ,
  {
    title: "Go to Cart",
    href: "/cart",
  },
  {
    title: "Go to SSR Catalog",
    href: "catalog/ssr-catalog",
  }
];

const INTERNAL_LINKS = [
  {
    title: "Go to Home",
    href: "/",
  },
  {
    title: "Go to About",
    href: "/about",
  },
  {
    title: "Go to SSR",
    href: "/ssr",
  },
];



export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
        <h1>I am the Homepage and Content pages</h1>
        <div style={{display: "flex"}}>
          {INTERNAL_LINKS.map(({ title, href }) => (
          <Link href={href} style={{padding: "50px"}}>
            {title}
          </Link>
          ))}
          {LINKS.map(({ title, href }) => (
          <a href={href} style={{padding: "50px"}}>
            {title}
          </a>
          ))}
        </div>
    </main>
  );
}
