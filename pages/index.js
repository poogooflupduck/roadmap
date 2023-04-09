import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Grid, Card, Display, Textarea } from "@geist-ui/core";
import Checkbox from "@/components/Checkbox";
import Nav from "@/components/Nav";
import satori from "satori";

export default function Home() {
  const [value, setValue] = useState(
    `Build Mars colony\nBuild Starship\nBuild reusable rockets`
  );
  const handler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Nav />
      <Grid.Container gap={0} justify="center">
        <Grid xs={24} md={12}>
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
        <Grid xs={24} md={12}>
          <Card width="100%" height="100vh" style={{ borderRadius: 0 }}>
            <Display>
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
                        marginLeft: "7px",
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
        </Grid>
      </Grid.Container>
    </>
  );
}
