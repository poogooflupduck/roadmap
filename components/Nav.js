import { Grid, Spacer } from "@geist-ui/core";

const Nav = ({ children }) => {
  return (
    <Grid.Container gap={0}>
      <Grid xs={24} md={12}>
        <pre style={{ border: 0, padding: 0, marginLeft: "1em", marginBottom: "0px"}}>
          roadmap v1.0
        </pre>
      </Grid>
      <Grid
        xs={24}
        md={12}
        style={{minHeight: '64px'}}
        alignItems="center"
        alignContent="center"
        justify="flex-end"
      >
        {children}
        <Spacer w={0.5}/>
      </Grid>
    </Grid.Container>
  );
};

export default Nav;
