__d(
  "WAWebAiThreadListMonthDivider.react",
  ["WAWebClock", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.timestamp,
        n = o("WAWebClock").Clock.monthYearStr(t);
      return s.jsx("div", {
        className: "xdx6fka xvtqlqk x1tiyuxx x1nbhmlj",
        children: s.jsx(r("WDSText.react"), {
          type: "Body3Emphasized",
          colorName: "contentDeemphasized",
          children: n,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
