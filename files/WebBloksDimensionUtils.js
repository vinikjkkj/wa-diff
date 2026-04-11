__d(
  "WebBloksDimensionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.endsWith("%")
        ? "%"
        : e.endsWith("dp") || e.endsWith("sp")
          ? "dp"
          : e.endsWith("px")
            ? "px"
            : null;
    }
    function l(t) {
      if (t == null) return null;
      var n = e(t);
      return n ? { value: parseFloat(t), type: n } : null;
    }
    i.parseDimension = l;
  },
  66,
);
