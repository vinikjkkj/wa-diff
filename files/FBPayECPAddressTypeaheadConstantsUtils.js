__d(
  "FBPayECPAddressTypeaheadConstantsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "NO_TYPEAHEAD_SUGGESTION_AVAILABLE";
    function l(e) {
      switch (e) {
        case "billing":
          return "BILLING";
        default:
          return "ECP";
      }
    }
    ((i.NO_TYPEAHEAD_SUGGESTION_AVAILABLE = e),
      (i.castAllPaymentTypeFields = l));
  },
  66,
);
