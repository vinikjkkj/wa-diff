__d(
  "WAWebBloksWidgetErrorFallback.react",
  ["WAWebFlex.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.boundaryName,
        n = e.error,
        a = e.handleClick;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        children: s.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: n == null ? void 0 : n.message,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
