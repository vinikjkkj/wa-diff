__d(
  "colorMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
      negative: "rgb(var(--status-alert))",
      positive: "rgb(var(--status-positive))",
      primary: "rgb(var(--ig-primary-icon))",
      secondary: "rgb(var(--ig-secondary-icon))",
    });
    function l(t) {
      var n;
      return (n = e[t]) != null ? n : t;
    }
    i.useThemeColor = l;
  },
  66,
);
