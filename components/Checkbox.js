import { Radio } from "@geist-ui/core";
import { useState } from "react";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      onClick={() => setChecked(!checked)}
      checked={checked}
      style={{ paddingBottom: 0 }}
    >
      <div style={{fontWeight: "normal"}}>{props.text} </div>
    </Radio>
  );
};

export default Checkbox;
