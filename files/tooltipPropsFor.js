__d(
  "tooltipPropsFor",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (!e) return {};
      var r = { "data-tooltip-content": e, "data-hover": "tooltip" };
      return (
        t && (r["data-tooltip-position"] = t),
        n && (r["data-tooltip-alignh"] = n),
        r
      );
    }
    i.default = e;
  },
  66,
);
