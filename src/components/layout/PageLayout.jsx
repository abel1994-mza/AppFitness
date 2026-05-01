import { Outlet } from "react-router-dom";
import BackButton from "../ui/BackButton";

const PageLayout = () => {
  return (
    <div className="bg-bg min-h-screen">

      {/* HEADER MOBILE */}
      <div className="md:hidden flex items-center gap-3 px-6 py-4">
        <BackButton />
      </div>

      {/* CONTENIDO DINÁMICO */}
      <Outlet />

    </div>
  );
};

export default PageLayout;