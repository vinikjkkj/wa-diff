__d(
  "WAWebBizShimmerRows.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { shimmer: { rowGap: "x1qvou4u", width: "xh8yej3", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.count,
        r = e.height,
        a = r === void 0 ? 12 : r,
        i;
      if (t[0] !== n || t[1] !== a) {
        var l;
        (t[3] !== a
          ? ((l = function (t, n) {
              return s.jsx(
                o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                { height: a, width: "100%" },
                n,
              );
            }),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
          (i = Array(n).fill().map(l)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i));
      } else i = t[2];
      var c;
      return (
        t[5] !== i
          ? ((c = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: u.shimmer,
              children: i,
            })),
            (t[5] = i),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    l.default = c;
  },
  98,
);
