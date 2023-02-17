import { Navbar } from "./Navbar";
import { AppRouter } from "./AppRouter";

function AppWithRouter() {
  return (
    <div>
      <Navbar />
      <hr />
      <AppRouter />
    </div>
  );
}

export default AppWithRouter;
