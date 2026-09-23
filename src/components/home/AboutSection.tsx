import {
  Box,
  Card,
  Container,
  Typography,
} from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

import { useTranslation } from "react-i18next";

import { darkTheme } from "../../themes/darkTheme";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        backgroundColor:
          darkTheme.palette.background.default,

        py: {
          xs: 10,
          md: 16,
        },

        px: {
          xs: 2,
          md: 3,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Box
          sx={{
            order: 2,
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: 6,
              md: 12,
            },

            alignItems: "center",
          }}
        >

          <Box>
            <Typography
              sx={{
                mb: 2,

                color:
                  darkTheme.palette.primary.main,

                fontSize: "0.85rem",
                fontWeight: 800,

                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {t("about.title")}
            </Typography>

            <Typography
              component="h2"
              sx={{
                mb: 3,

                color:
                  darkTheme.palette.primary
                    .contrastText,

                fontSize: {
                  xs: "2.4rem",
                  md: "3.7rem",
                },

                fontWeight: 750,
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              {t("about.heading")}
            </Typography>

            <Typography
              sx={{
                maxWidth: 590,

                color:
                  darkTheme.palette.text.secondary,

                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },

                lineHeight: 1.9,
              }}
            >
              {t("about.description")}
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",

              minHeight: {
                xs: 320,
                md: 450,
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "32px",
              overflow: "hidden",

              background: `linear-gradient(
                135deg,
                ${darkTheme.palette.primary.light} 0%,
                ${darkTheme.palette.primary.main} 100%
              )`,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color:
                    darkTheme.palette.primary
                      .contrastText,

                  fontSize: {
                    xs: "3rem",
                    md: "4.5rem",
                  },

                  fontWeight: 800,
                  letterSpacing: "-3px",
                }}
              >
                {t("about.student")}
              </Typography>

              <Typography
                sx={{
                  my: 2,

                  color:
                    darkTheme.palette.primary
                      .contrastText,

                  fontSize: "2rem",
                }}
              >
                ↕
              </Typography>

              <Typography
                sx={{
                  color:
                    darkTheme.palette.primary
                      .contrastText,

                  fontSize: {
                    xs: "3rem",
                    md: "4.5rem",
                  },

                  fontWeight: 800,
                  letterSpacing: "-3px",
                }}
              >
                {t("about.company")}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Card
          elevation={0}
          sx={{
            order: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            width: "100%",
            p: {
              xs: 2.5,
              md: 3,
            },
            backgroundColor:
              darkTheme.palette.background.paper,
            border: `1px solid ${darkTheme.palette.divider}`,
            borderRadius: "24px",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box>
            <Typography
              component="h3"
              sx={{
                mb: 1,
                color:
                  darkTheme.palette.primary
                    .contrastText,
                fontSize: {
                  xs: "1.35rem",
                  md: "1.55rem",
                },
                fontWeight: 700,
              }}
            >
              {t("about.qrTitle")}
            </Typography>
            <Typography
              sx={{
                color:
                  darkTheme.palette.text.secondary,
                lineHeight: 1.7,
              }}
            >
              {t("about.qrDescription")}
            </Typography>
          </Box>

          <Box
            sx={{
              flexShrink: 0,
              p: 1.5,
              backgroundColor: "#ffffff",
              borderRadius: "12px",
            }}
          >
            <QRCodeSVG
              value="https://lerlinglink.space/"
              size={140}
              level="H"
              title={t("about.qrTitle")}
            />
          </Box>
        </Card>
      </Container>
    </Box>
  );
}