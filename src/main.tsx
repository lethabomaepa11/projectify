import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/authProvider";
import { App } from "antd";
import { ProjectProvider } from "./providers/projectsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <AuthProvider>
          <ProjectProvider>
            <MyApp />
          </ProjectProvider>
        </AuthProvider>
      </BrowserRouter>
    </App>
  </StrictMode>,
);
