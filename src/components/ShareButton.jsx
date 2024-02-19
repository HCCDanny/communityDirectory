import { Button } from "@mui/joy";
import IosShare from "@mui/icons-material/IosShare";

const ShareButton = ({
  shareData,
  onInteraction,
  onSuccess,
  onError,
  onNonNativeShare,
  disabled,
}) => {
  const handleOnClick = async () => {
    onInteraction?.();
    if (navigator?.share) {
      try {
        await navigator.share(shareData);
        onSuccess?.();
      } catch (err) {
        onError?.(err);
      }
    } else {
      copyClicked();
    }
  };
  const copyClicked = async () => {
    try {
      await navigator.clipboard.writeText(shareData?.url || "");
      setState("success");
    } catch (err) {
      onError && onError(err);
      setState("error");
    }
  };

  return (
    <Button
      onClick={handleOnClick}
      endDecorator={<IosShare />}
      disabled={disabled}
    >
      Share
    </Button>
  );
};

export default ShareButton;
