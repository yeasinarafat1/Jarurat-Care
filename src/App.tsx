import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ServiceTable from "./components/Sections/ServiceTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <ServiceTable />
            </>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
