__d(
  "WAWebMediaHubModal.react",
  [
    "WAWebAppTracker",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubGallery.react",
    "WAWebModal.react",
    "react",
    "useWAWebAppTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.initialTab;
      return (
        r("useWAWebAppTracker")(
          o("WAWebAppTracker").AppTrackerType.MediaMgr,
          !0,
        ),
        s.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.MediaHub,
          testid: void 0,
          children: s.jsx(
            o("WAWebMediaHubContextProvider").WAWebMediaHubContextProvider,
            {
              initialTab: t,
              children: s.jsx(r("WAWebMediaHubGallery.react"), {}),
            },
          ),
        })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
