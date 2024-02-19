import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import OpenInNew from "@mui/icons-material/OpenInNew";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CardContent from "@mui/joy/CardContent";
import Sheet from "@mui/joy/Sheet";
import renderCategoryColour from "../functions/categoryColours";
import DefaultCardImage from "../icons/lwh_logo_no_text.png";

export default function DirectoryCard({ data }) {
  return (
    <>
      {data?.map((item) => (
        <Card
          key={item.id}
          orientation="horizontal"
          sx={{
            flexWrap: "wrap",
            marginBottom: "2rem",
            boxShadow: "sm",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img
              src={DefaultCardImage}
              srcSet={DefaultCardImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {item.organisation}
            </Typography>
            <Chip color={renderCategoryColour(item["services"][0])}>
              {item.services}
            </Chip>
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,
                "& > div": { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-s">
                  {item.description?.length > 150
                    ? `${item.description.substring(0, 150)}...`
                    : item.description}
                </Typography>
              </div>
            </Sheet>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                marginBottom: "1rem",
                "& > button": { flex: 1 },
              }}
            >
              <Button
                disabled={!item.phone}
                variant="soft"
                color="primary"
                component="a"
                href={"tel:" + item.phone}
                fullWidth={true}
              >
                Call
              </Button>
              <Button
                disabled={!item.email}
                variant="soft"
                color="primary"
                component="a"
                href={"mailto:" + item.email}
                fullWidth={true}
              >
                Email
              </Button>
              <Button
                disabled={!item.web}
                startDecorator={<OpenInNew />}
                target="_blank"
                variant="soft"
                color="primary"
                component="a"
                href={item.web}
                fullWidth={true}
                aria-label="Open in new tab"
              >
                Website
              </Button>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                size="lg"
                color="primary"
                component="a"
                href={item.id}
                fullWidth={true}
                endDecorator={<KeyboardArrowRight />}
              >
                Find out more
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
