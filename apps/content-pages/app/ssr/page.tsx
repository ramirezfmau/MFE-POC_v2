
import Link from "next/link";
import styles from "./../page.module.css";

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
      <h1>I am Content Pages App - Server Side Rendering Example </h1>
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

