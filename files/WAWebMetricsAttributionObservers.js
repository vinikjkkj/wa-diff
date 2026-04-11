__d(
  "WAWebMetricsAttributionObservers",
  [
    "WAWebAppTracker",
    "WAWebCallCollection",
    "WAWebNetworkStatus",
    "cr:13156",
    "cr:13920",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:13156")) != null ? e : {},
      u = s.WAWebScalingControlManager;
    function c() {
      var e = o("WAWebAppTracker").AppTrackerType.VoipAudio,
        t = function () {
          var t = r("WAWebCallCollection").activeCall;
          t != null
            ? ((e =
                t.isVideo === !0
                  ? o("WAWebAppTracker").AppTrackerType.VoipVideo
                  : o("WAWebAppTracker").AppTrackerType.VoipAudio),
              o("WAWebAppTracker").AppTracker.start(e))
            : o("WAWebAppTracker").AppTracker.stop(e);
        };
      r("WAWebCallCollection").on("change:activeCall", t);
    }
    function d() {
      r("WAWebNetworkStatus").on("change:online", function () {
        r("WAWebNetworkStatus").online === !1
          ? o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.Disconnected,
            )
          : o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.Disconnected,
            );
      });
    }
    function m() {
      if (!(u == null || n("cr:13920") == null)) {
        var e = function (t) {
          t === 1
            ? o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.LayoutZoom,
              )
            : o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.LayoutZoom,
              );
        };
        (u.getZoomLevel().then(function (t) {
          return e(t != null ? t : 1);
        }),
          n("cr:13920").on("zoomUpdate", function (t) {
            e(t != null ? t : 1);
          }));
      }
    }
    function p() {
      (c(), d(), m());
    }
    l.initializeMetricsAttributionObservers = p;
  },
  98,
);
