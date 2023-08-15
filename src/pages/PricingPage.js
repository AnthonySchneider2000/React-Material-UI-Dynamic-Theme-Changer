import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useThemeContext } from "../utils/ThemeContext";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const tiers = [
  {
    title: "Basic Tour",
    price: "10",
    description: [
      "1 tour included",
      "Limited availability",
      "Standard tour content",
      "Email support",
    ],
  },
  {
    title: "Professional Tour",
    subheader: "Most popular",
    price: "30",
    description: [
      "5 tours included",
      "Flexible scheduling",
      "Custom tour content",
      "Priority email support",
    ],
  },
  {
    title: "Group Tour",
    price: "100",
    description: [
      "Unlimited group tours",
      "Priority scheduling",
      "Custom tour content",
      "Phone & email support",
    ],
  },
];

export default function Pricing() {
  const { currentTheme } = useThemeContext();

  return (
    <Layout title="Pricing" toolbarHeight={100}>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Discover our comprehensive tier offerings, expertly designed to match
          your distinct preferences.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={
                    tier.title === "Professional Tour" ? <StarIcon /> : null
                  }
                  subheaderTypographyProps={{
                    align: "center",
                    color: currentTheme.palette.primary.contrastText,
                  }}
                  sx={{
                    color: currentTheme.palette.primary.contrastText,
                    backgroundColor: currentTheme.palette.primary.main,
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="contained"
                    component={Link}
                    to="/checkout"
                  >
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
