// eslint-disable-next-line react/prop-types
const Layout = ({ children, isAuth }) => {
  return (
    <div className={` ${isAuth ? "bg-[#4A154B]" : "bg-none"} `}>{children}</div>
  );
};

export default Layout;
