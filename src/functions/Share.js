import { useState } from "react";

const Share = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  disabled,
}) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleNonNativeShare = () => {
    setOpenPopup(true);
  };

  return <>{children}</>;
};

interface Props {
  children: React.ReactNode;
  shareData: ShareData;
  onSuccess?: () => void;
  onError?: (error?: unknown) => void;
  onInteraction?: () => void;
  disabled?: boolean;
}

export default Share;
