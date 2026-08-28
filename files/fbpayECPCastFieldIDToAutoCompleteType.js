__d(
  "fbpayECPCastFieldIDToAutoCompleteType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "fullName":
        case "care_of":
          return "name";
        case "country_code":
        case "country":
          return "country";
        case "street1":
          return "address-line1";
        case "street2":
          return "address-line2";
        case "zip":
          return "postal-code";
        default:
          return "off";
      }
    }
    i.default = e;
  },
  66,
);
