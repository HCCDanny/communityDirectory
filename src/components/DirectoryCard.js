import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import CardContent from "@mui/joy/CardContent";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";

export default function DirectoryCard({ props }) {
  return (
    <Card
      orientation="horizontal"
      sx={{
        width: "100%",
        flexWrap: "wrap",
        [`& > *`]: {
          "--stack-point": "500px",
          minWidth:
            "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
        },
        //  resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      {/* <Link to={props.id} underline="none"> */}
      <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
        <img
          src="https://hull-communitydirectory.powerappsportals.com/lwh_logo.png"
          srcSet="https://hull-communitydirectory.powerappsportals.com/lwh_logo.png"
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
        <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
          <Button
            variant="soft"
            color="primary"
            component="a"
            href={"tel:" + props.phone}
            fullWidth={true}
          >
            Call
          </Button>
          <Button
            variant="soft"
            color="primary"
            component="a"
            href={"mailto:" + props.email}
            fullWidth={true}
          >
            Email
          </Button>
          <Button
            variant="soft"
            color="primary"
            component="a"
            href={props.website}
            fullWidth={true}
          >
            Website
          </Button>
        </Box>
      </CardContent>
      {/* </Link> */}
    </Card>
  );
}
