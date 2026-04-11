__d(
  "getVideoShareDownstreamSignalTracking",
  [
    "FBUnifiedVideoPlayerControllerContext",
    "VideoShareDownstreamSignalTrackingTypes",
    "WebStorage",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCometVideoPlayerStateAndController",
    "useProvidedControllerSubscription",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = 1e3 * 60 * 60 * 4;
    function p() {
      var t;
      if (!r("gkx")("24")) return null;
      var n =
        (t = (e || (e = r("WebStorage"))).getSessionStorage()) == null
          ? void 0
          : t.getItem(
              o("VideoShareDownstreamSignalTrackingTypes")
                .DOWNSTREAM_VIDEO_SHARE_SESSION_STORAGE_KEY,
            );
      if (n == null) return null;
      var a = JSON.parse(n);
      return !a || a.downstream_share_session_start_time + m < Date.now()
        ? null
        : a;
    }
    function _() {
      var e = p();
      return e
        ? {
            downstream_share_session_id:
              e == null ? void 0 : e.downstream_share_session_id,
            downstream_share_session_origin_uri:
              e == null ? void 0 : e.downstream_share_session_origin_uri,
            downstream_share_session_start_time:
              e == null
                ? void 0
                : e.downstream_share_session_start_time.toString(),
          }
        : null;
    }
    function f() {
      var e,
        t = o("react-compiler-runtime").c(2),
        n = (e = r("useCometVideoPlayerStateAndController")()) != null ? e : {},
        a = n.controller,
        i = d(r("FBUnifiedVideoPlayerControllerContext")),
        l = i.controller,
        s = a != null ? a : l,
        u = r("useProvidedControllerSubscription")(s, g),
        c;
      return (
        t[0] !== u
          ? ((c = function () {
              var e = {};
              return (
                (u == null ? void 0 : u.lang) != null &&
                  (e.consumption_language_code = u.lang),
                e
              );
            }),
            (t[0] = u),
            (t[1] = c))
          : (c = t[1]),
        c
      );
    }
    function g(e) {
      var t, n;
      return (t =
        e == null || (n = e.getCurrentState()) == null
          ? void 0
          : n.targetAudioTrack) != null
        ? t
        : null;
    }
    ((l.getVideoShareDownstreamSignalTrackingWithNumberStartTime = p),
      (l.getVideoShareDownstreamSignalTracking = _),
      (l.useGetConsumptionLanguage = f));
  },
  98,
);
