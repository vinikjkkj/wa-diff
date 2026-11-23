__d(
  "VideoPlayerPortalingPlaceState",
  [
    "FBLogger",
    "GlobalVideoPortsContexts",
    "GlobalVideoPortsID",
    "getErrorSafe",
    "gkx",
    "react",
    "usePrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n = r("usePrevious")(e);
      u(
        function () {
          e !== n &&
            n !== null &&
            n &&
            !e &&
            t(o("GlobalVideoPortsID").makeVideoID());
        },
        [e, n, t],
      );
    }
    function m(e, t) {
      var n = c(null),
        r = n[0],
        a = n[1];
      e !== r &&
        (r !== null && r && !e && t(o("GlobalVideoPortsID").makeVideoID()),
        a(e));
    }
    var p = r("gkx")("24382") ? m : d;
    function _(e) {
      var t = e.portalingEnabled,
        n = e.portalingFromVideoID,
        a = o("GlobalVideoPortsContexts").useGlobalVideoPortsLoader(),
        i = o("GlobalVideoPortsContexts").useGlobalVideoPortsManager(),
        l = o("GlobalVideoPortsContexts").useGlobalVideoPortsState(),
        s = i != null && l != null,
        d = (s || a != null) && (t || n != null),
        m = c(function () {
          return o("GlobalVideoPortsID").makePlaceID();
        }),
        _ = m[0],
        f = c(function () {
          return o("GlobalVideoPortsID").makeVideoID();
        }),
        g = f[0],
        h = f[1],
        y = d && t && n != null,
        C = y && n != null ? n : g;
      return (
        p(y, h),
        u(
          function () {
            d &&
              !s &&
              a &&
              a().catch(function (e) {
                r("FBLogger")("video_playback_www")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("GlobalVideoPortsLoader failed to load");
              });
          },
          [s, d, a],
        ),
        {
          canBecomePortableLater: d,
          currentVideoID: C,
          globalVideoPortsManager: i,
          globalVideoPortsState: l,
          thisPlaceID: _,
        }
      );
    }
    ((l.useRegenerateUniqueVideoID_exportedForTest = p),
      (l.useVideoPlayerPortalingPlaceState = _));
  },
  98,
);
