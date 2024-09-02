import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import SavedJob from "./pages/saved-job";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/Job";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-jobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRouter from "./components/protected-router";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRouter>
            <Onboarding />
          </ProtectedRouter>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRouter>
            <JobListing />
          </ProtectedRouter>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRouter>
            <JobPage />
          </ProtectedRouter>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRouter>
            <PostJob />
          </ProtectedRouter>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRouter>
            <SavedJob />
          </ProtectedRouter>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRouter>
            <MyJobs />
          </ProtectedRouter>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
