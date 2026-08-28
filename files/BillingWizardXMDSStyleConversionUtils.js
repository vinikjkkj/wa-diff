__d(
  "BillingWizardXMDSStyleConversionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "highlight":
          return "blueLink";
        case "secondary":
          return "secondaryText";
        case "disabled":
          return "disabledText";
        case "positive":
          return "positive";
        case "negative":
          return "negative";
        case "white":
        case "primary":
        default:
          return "primaryText";
      }
    }
    i.getCDSColor = e;
  },
  66,
);
