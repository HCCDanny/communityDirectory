const renderCategoryColour = (param) => {
  switch (param) {
    case "Carers":
      return "primary";
    case "Activities and Groups":
      return "neutral";
    case "Supported Accommodation":
      return "danger";
    case "Help At Home":
      return "success";
    default:
      return "primary";
  }
};

export default renderCategoryColour;
