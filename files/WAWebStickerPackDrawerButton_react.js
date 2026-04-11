__d(
  "WAWebStickerPackDrawerButton.react",
  [
    "fbt",
    "WDSButton.react",
    "WDSIconIcFastForward.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.handleClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Share this pack")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              Icon: r("WDSIconIcFastForward.react"),
              label: a,
              onPress: n,
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = c;
  },
  226,
);
