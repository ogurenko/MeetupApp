import classes from "./Layout.module.css";
import MainNav from "./MainNav";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
