import { ReactNode } from "react";

export interface LayoutProps {
  children?: ReactNode
}

export const MainLayout = ({children }: LayoutProps) => (
  <div style={{display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", justifyContent: "space-between"}}>
    <div style={{backgroundColor: "#a5b4fc", width: "100%", textAlign: "center", padding: "20px"}}>Main Layout</div>

    <div style={{margin: "60px 0"}}>{children}</div>

    <footer style={{backgroundColor: "#a5b4fc", width: "100%", textAlign: "center", padding: "20px"}}>
        Footer
    </footer>
  </div>
)
