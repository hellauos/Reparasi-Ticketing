import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./components/Landing";
import { UsersList } from "./pages/Users/UsersList";
import { TicketsList } from "./pages/Tickets/TicketsList";

export default function App() {
  return (
    <Routes>
      {/* path = "/" -> root URL */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Navigate to="/app/users" replace />} />
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
          <Route path="tickets">
            <Route index element={<TicketsList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
