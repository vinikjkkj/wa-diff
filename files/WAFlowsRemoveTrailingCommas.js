__d(
  "WAFlowsRemoveTrailingCommas",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.replace(/,\s*([\]}])/g, "$1");
    }
    i.default = e;
  },
  66,
);
