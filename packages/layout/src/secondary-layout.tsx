import { ReactNode } from "react";

export interface LayoutProps {
  children?: ReactNode
}

export const SecondaryLayout = ({children }: LayoutProps) => (
  <div style={{display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", justifyContent: "space-between"}}>
    <div style={{backgroundColor: "#bbf7d0", width: "100%", textAlign: "center", padding: "20px", color: '#000'}}>Second Layout</div>

    <div style={{margin: "60px 0", color: '#000' }}>{children}</div>

    <footer style={{backgroundColor: "#bbf7d0", width: "100%", textAlign: "center", padding: "20px", color: '#000'}}>
        Second Footer
    </footer>
  </div>
)
