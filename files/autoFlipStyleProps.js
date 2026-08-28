__d(
  "autoFlipStyleProps",
  ["Locale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e || !o("Locale").isRTL()) return e;
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t[s(n)] = u(e[n]);
        }),
        t
      );
    }
    function s(e) {
      switch (e) {
        case "left":
          return "right";
        case "marginLeft":
          return "marginRight";
        case "paddingLeft":
          return "paddingRight";
        case "right":
          return "left";
        case "marginRight":
          return "marginLeft";
        case "paddingRight":
          return "paddingLeft";
        default:
          return e;
      }
    }
    function u(e) {
      switch (e) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
