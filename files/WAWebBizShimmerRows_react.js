__d(
  "WAWebBizShimmerRows.react",
  ["WAWebBaseShimmerComponents.react", "WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { shimmer: { rowGap: "x1qvou4u", width: "xh8yej3", $$css: !0 } };
    function c(e) {
      var t = e.count,
        n = e.height,
        r = n === void 0 ? 12 : n;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: u.shimmer,
        children: Array(t)
          .fill()
          .map(function (e, t) {
            return s.jsx(
              o("WAWebBaseShimmerComponents.react").RectangleShimmer,
              { height: r, width: "100%" },
              t,
            );
          }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
