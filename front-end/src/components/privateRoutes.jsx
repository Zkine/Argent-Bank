import { Outlet, Navigate } from "react-router-dom";
import { useStore } from "react-redux";

export default function PrivateRoutes() {
  const store = useStore();
  return store.getState().profil.length !== 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}
