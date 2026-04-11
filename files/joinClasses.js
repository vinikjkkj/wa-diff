__d(
  "joinClasses",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = e || "",
          n = arguments.length <= 1 ? 0 : arguments.length - 1,
          r = 0;
        r < n;
        r++
      ) {
        var o =
          r + 1 < 1 || arguments.length <= r + 1 ? void 0 : arguments[r + 1];
        o != null && o !== "" && (t = (t ? t + " " : "") + o);
      }
      return t;
    }
    i.default = e;
  },
  66,
);
