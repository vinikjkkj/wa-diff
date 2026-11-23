__d(
  "WhatsAppFlowsStringUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function l(e) {
      return e.replace(/,\s*([\]}])/g, "$1");
    }
    ((i.capitalize = e), (i.removeTrailingCommas = l));
  },
  66,
);
