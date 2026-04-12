__d(
  "useWAWebIsReadyToShowStickers.react",
  ["WAWebPanelsDisplayLocation", "react", "useWAWebTimeout"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = s(
          e !==
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
        ),
        n = t[0],
        r = t[1];
      return (
        o("useWAWebTimeout").useTimeout(
          function () {
            return r(!0);
          },
          250,
          { immediate: !0 },
        ),
        n
      );
    }
    l.useIsReadyToShowStickers = u;
  },
  98,
);
