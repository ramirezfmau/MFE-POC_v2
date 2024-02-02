
import Link from "next/link";
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
async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products`)

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return (
    <main className={styles.main}>
      <h1>I am SSR Content Pages</h1>
      <div style={{ display: "flex" }}>
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
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {
          data.map((product: any) =>
            <div style={{width: "300px"}}>
              <img src={product.image} style={{width: "300px", height: "300px", padding: "40px"}}/>
              {product.title}
              {product.price}
              {product.description}
              {product.category}
            </div>
          )
        }
      </div>
    </main>
  );
}

