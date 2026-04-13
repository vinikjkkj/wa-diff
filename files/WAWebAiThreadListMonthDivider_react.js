__d(
  "WAWebAiThreadListMonthDivider.react",
  ["WAWebClock", "WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.timestamp,
        a;
      t[0] !== n
        ? ((a = o("WAWebClock").Clock.monthYearStr(n)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xdx6fka xvtqlqk x1tiyuxx x1nbhmlj" }), (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== i
          ? ((u = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: s.jsx(r("WDSText.react"), {
                  type: "Body3Emphasized",
                  colorName: "contentDeemphasized",
                  children: i,
                }),
              }),
            )),
            (t[3] = i),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);
