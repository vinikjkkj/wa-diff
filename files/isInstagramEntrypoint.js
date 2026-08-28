__d(
  "isInstagramEntrypoint",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = String(e).toLowerCase();
      return (
        t.startsWith("ig_") ||
        t.startsWith("instagram_") ||
        t.includes("_ig_") ||
        t.endsWith("_ig")
      );
    }
    i.default = e;
  },
  66,
);
