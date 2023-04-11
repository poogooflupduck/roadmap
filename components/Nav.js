import { Text, Code, Spacer } from "@geist-ui/core";

const Nav = ({ children }) => {
  return (
    <div
    
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        marginLeft: "1em",
        marginRight: "1em"
      }}
    >
      <pre style={{ border: 0, padding: 0 }}>roadmap v1.0</pre>
      <Spacer height="100%" style={{flexGrow: 1}} />
      {children}
    </div>
  );
};

export default Nav;
