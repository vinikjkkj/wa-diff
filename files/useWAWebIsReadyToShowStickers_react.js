__d(
  "useWAWebIsReadyToShowStickers.react",
  [
    "WAWebPanelsDisplayLocation",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = s(
          e !==
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
        ),
        r = n[0],
        a = n[1],
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            return a(!0);
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { immediate: !0 }), (t[1] = l))
          : (l = t[1]),
        o("useWAWebTimeout").useTimeout(i, 250, l),
        r
      );
    }
    l.useIsReadyToShowStickers = u;
  },
  98,
);
