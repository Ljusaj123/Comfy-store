import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav>
      <section className="align-items py-2">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
