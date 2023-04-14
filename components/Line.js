import { Card } from "@geist-ui/core";

const Line = (props) => {
  return (
    <Card
      style={{
        borderLeftWidth: "1px",
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottom: 0,
        marginTop: "-6px",
        marginBottom: "-6px",
        marginLeft: "7.3px",
        borderRadius: 0,
      }}
      h={props.h}
    />
  );
};

export default Line;
