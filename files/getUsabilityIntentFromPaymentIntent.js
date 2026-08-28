__d(
  "getUsabilityIntentFromPaymentIntent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "ADD_PM":
          return "ADD_PM";
        case "ADD_FUNDS":
          return "SB_FUNDING";
        case "PAY_NOW":
          return "PAY_NOW";
        case "RESET_ASL":
          return "RESET_ASL";
        default:
          return null;
      }
    }
    i.default = e;
  },
  66,
);
