import Skeleton from "@mui/joy/Skeleton";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";

export default function DirectoryCard({ props }) {
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", display: "flex", gap: 2, marginBottom: "2rem" }}
    >
      <AspectRatio>
        <Skeleton variant="overlay">
          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />
        </Skeleton>
      </AspectRatio>
      <Typography>
        <Skeleton>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries.
        </Skeleton>
      </Typography>
    </Card>
  );
}
