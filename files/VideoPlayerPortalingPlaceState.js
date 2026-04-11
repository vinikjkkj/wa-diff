__d(
  "VideoPlayerPortalingPlaceState",
  [
    "FBLogger",
    "GlobalVideoPortsContexts",
    "GlobalVideoPortsID",
    "getErrorSafe",
    "gkx",
    "react",
    "react-compiler-runtime",
    "usePrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a = r("usePrevious")(e),
        i,
        l;
      (n[0] !== e || n[1] !== a || n[2] !== t
        ? ((i = function () {
            e !== a &&
              a !== null &&
              a &&
              !e &&
              t(o("GlobalVideoPortsID").makeVideoID());
          }),
          (l = [e, a, t]),
          (n[0] = e),
          (n[1] = a),
          (n[2] = t),
          (n[3] = i),
          (n[4] = l))
        : ((i = n[3]), (l = n[4])),
        u(i, l));
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
      var t = o("react-compiler-runtime").c(11),
        n = e.portalingEnabled,
        r = e.portalingFromVideoID,
        a = o("GlobalVideoPortsContexts").useGlobalVideoPortsLoader(),
        i = o("GlobalVideoPortsContexts").useGlobalVideoPortsManager(),
        l = o("GlobalVideoPortsContexts").useGlobalVideoPortsState(),
        s = i != null && l != null,
        d = (s || a != null) && (n || r != null),
        m = c(h),
        _ = m[0],
        y = c(g),
        C = y[0],
        b = y[1],
        v = d && n && r != null,
        S = v && r != null ? r : C;
      p(v, b);
      var R, L;
      (t[0] !== s || t[1] !== d || t[2] !== a
        ? ((R = function () {
            d && !s && a && a().catch(f);
          }),
          (L = [s, d, a]),
          (t[0] = s),
          (t[1] = d),
          (t[2] = a),
          (t[3] = R),
          (t[4] = L))
        : ((R = t[3]), (L = t[4])),
        u(R, L));
      var E;
      return (
        t[5] !== d || t[6] !== S || t[7] !== i || t[8] !== l || t[9] !== _
          ? ((E = {
              canBecomePortableLater: d,
              currentVideoID: S,
              globalVideoPortsManager: i,
              globalVideoPortsState: l,
              thisPlaceID: _,
            }),
            (t[5] = d),
            (t[6] = S),
            (t[7] = i),
            (t[8] = l),
            (t[9] = _),
            (t[10] = E))
          : (E = t[10]),
        E
      );
    }
    function f(e) {
      r("FBLogger")("video_playback_www")
        .catching(r("getErrorSafe")(e))
        .mustfix("GlobalVideoPortsLoader failed to load");
    }
    function g() {
      return o("GlobalVideoPortsID").makeVideoID();
    }
    function h() {
      return o("GlobalVideoPortsID").makePlaceID();
    }
    ((l.useRegenerateUniqueVideoID_exportedForTest = p),
      (l.useVideoPlayerPortalingPlaceState = _));
  },
  98,
);
