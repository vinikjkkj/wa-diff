__d(
  "WAWebCartDeleteIcon.react",
  [
    "fbt",
    "WAWebDeleteIcon.react",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        deleteIcon: { color: "xhslqc4", ":hover_color": "x12ln5q2", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Remove from cart")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsx(r("WDSButton.react"), {
              "aria-label": a,
              Icon: o("WAWebDeleteIcon.react").DeleteIcon,
              onPress: n,
              variant: "borderless",
              xstyle: c.deleteIcon,
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = d;
  },
  226,
);
