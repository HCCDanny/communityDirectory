import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import OpenInNew from "@mui/icons-material/OpenInNew";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CardContent from "@mui/joy/CardContent";
import Sheet from "@mui/joy/Sheet";
import DefaultCardImage from "/public/assets/lwh_logo_no_text.png";

export default function DirectoryCard({ props }) {
  return (
    <Card
      key={props.id}
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
          {props.organisation}
        </Typography>
        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
          {props.service}
        </Typography>
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
              {props.description.length > 150
                ? `${props.description.substring(0, 150)}...`
                : props.description}
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
            disabled={!props.phone}
            variant="soft"
            color="primary"
            component="a"
            href={"tel:" + props.phone}
            fullWidth={true}
          >
            Call
          </Button>
          <Button
            disabled={!props.email}
            variant="soft"
            color="primary"
            component="a"
            href={"mailto:" + props.email}
            fullWidth={true}
          >
            Email
          </Button>
          <Button
            disabled={!props.web}
            startDecorator={<OpenInNew />}
            target="_blank"
            variant="soft"
            color="primary"
            component="a"
            href={props.web}
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
            href={props.id}
            fullWidth={true}
            endDecorator={<KeyboardArrowRight />}
          >
            Find out more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
