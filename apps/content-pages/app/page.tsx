
import Link from "next/link";
import styles from "./page.module.css";

const LINKS = [
  {
    title: "Catalog app",
    href: "/catalog",
  },
  {
    title: "Catalog app => SSR ",
    href: "catalog/ssr-catalog",
  },
  {
    title: "Checkout app",
    href: "/checkout",
  }
  ,
  {
    title: "Cart app",
    href: "/cart",
  },
];

const INTERNAL_LINKS = [
  {
    title: "Content Pages app =>  Home",
    href: "/",
  },
  {
    title: "Content Pages app => About",
    href: "/about",
  },
  {
    title: "Content Pages app => SSR",
    href: "/ssr",
  },
];



export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
        <h1>I am Content pages App - HomePage </h1>
        <h2 style={{marginTop: '50px'}}>Find apps/pages some examples below: </h2>
        <div style={{display: "flex", marginTop: '20px'}}>
          <ul>
            {INTERNAL_LINKS.map(({ title, href }) => (
              <li style={{padding: '10px'}}>
                <Link href={href}>
                  {title}
                </Link>
              </li>
            ))}
            {LINKS.map(({ title, href }) => (
              <li style={{padding: '10px'}}>
                <a href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </main>
  );
}
