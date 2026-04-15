__d(
  "WAWebBloksWidgetErrorFallback.react",
  ["WAWebFlex.react", "WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.error,
        a = n == null ? void 0 : n.message,
        i;
      return (
        t[0] !== a
          ? ((i = s.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              children: s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: a,
              }),
            })),
            (t[0] = a),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    l.default = u;
  },
  98,
);
