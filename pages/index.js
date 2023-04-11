import React, { useState, useCallback, useRef } from "react";
import {
  Grid,
  Card,
  Display,
  Textarea,
  Select,
  Button,
  Link,
} from "@geist-ui/core";
import { Github } from "@geist-ui/icons";
import ThemeButton from "@/components/ThemeButton";
import Checkbox from "@/components/Checkbox";
import Nav from "@/components/Nav";
import { toPng } from "html-to-image";

export default function Home(props) {
  const [value, setValue] = useState(
    `Send a doge to Mars\nBuild Mars colony\nBuild Starship\nBuild reusable rockets`
  );
  const handler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const ref = useRef(<div></div>);
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <Nav>
        <Link target="_blank" href="https://github.com/poogooflupduck">
          <Button icon={<Github />} auto />
        </Link>
        <ThemeButton switchThemes={props.switchThemes} />
        <Select placeholder="Export as">
          <Select.Option onClick={onButtonClick} value="1">
            PNG
          </Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
        </Select>
      </Nav>
      <Grid.Container gap={0} justify="center">
        <Grid xs={0} md={12}>
          <Card
            width="100%"
            height="100%"
            style={{ borderRadius: 0, padding: 0 }}
          >
            <Textarea
              width="100%"
              height="80vh"
              value={value}
              onChange={handler}
            />
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <div style={{ width: "100%" }} ref={ref}>
            <Card width="100%" height="80vh" style={{ borderRadius: 0 }}>
              <Display height="100%">
                {value.split("\n").map((node, index) =>
                  index == 0 ? (
                    <Checkbox key={index} text={node} />
                  ) : (
                    <>
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
                        h={(60 / value.split("\n").length).toString() + "vh"}
                      />
                      <Checkbox key={index} text={node} />
                    </>
                  )
                )}
              </Display>
            </Card>
          </div>
        </Grid>
        <Grid xs={24} md={0}>
          <Card
            width="100%"
            height="100vh"
            style={{ borderRadius: 0, padding: 0 }}
          >
            <Textarea
              width="100%"
              height="80vh"
              value={value}
              onChange={handler}
            />
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
