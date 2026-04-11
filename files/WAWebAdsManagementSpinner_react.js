__d(
  "WAWebAdsManagementSpinner.react",
  ["WAWebFlex.react", "WAWebSpinner.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
      };
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [u.paddingHoriz24, u.paddingTop16]), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: t,
              children: s.jsx(o("WAWebFlex.react").FlexRow, {
                alignSelf: "center",
                children: s.jsx(o("WAWebSpinner.react").Spinner, {
                  size: 50,
                  stroke: 3,
                }),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  98,
);
