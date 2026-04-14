__d(
  "WAWebAdsManagementSpinner.react",
  ["WAWebFlex.react", "WAWebSpinner.react", "react"],
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
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [u.paddingHoriz24, u.paddingTop16],
        children: s.jsx(o("WAWebFlex.react").FlexRow, {
          alignSelf: "center",
          children: s.jsx(o("WAWebSpinner.react").Spinner, {
            size: 50,
            stroke: 3,
          }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
