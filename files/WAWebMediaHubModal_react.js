__d(
  "WAWebMediaHubModal.react",
  [
    "WAWebAppTracker",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubGallery.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime",
    "useWAWebAppTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.initialTab;
      r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.MediaMgr, !0);
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s.jsx(r("WAWebMediaHubGallery.react"), {})), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = s.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.MediaHub,
              testid: void 0,
              children: s.jsx(
                o("WAWebMediaHubContextProvider").WAWebMediaHubContextProvider,
                { initialTab: n, children: a },
              ),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
