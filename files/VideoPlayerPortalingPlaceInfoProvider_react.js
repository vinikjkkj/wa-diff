__d(
  "VideoPlayerPortalingPlaceInfoProvider.react",
  [
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "useEmptyFunction",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useEffect,
      p = u.useMemo,
      _ = c(null);
    function f(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.currentPlaceID,
        i = e.currentVideoID,
        l = e.portalingEnabled,
        u = e.previousPlaceMetaData,
        c = e.thisPlaceID;
      r("vulture")("C-zMudZGB3mYf4pNc88NBbejV1g=");
      var d;
      t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== u || t[4] !== c
        ? ((d = {
            currentPlaceID: a,
            currentVideoID: i,
            portalingEnabled: l,
            previousPlaceMetaData: u,
            thisPlaceID: c,
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = u),
          (t[4] = c),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      return (
        t[6] !== n || t[7] !== m
          ? ((p = s.jsx(_.Provider, { value: m, children: n })),
            (t[6] = n),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    var g = r("useEmptyFunction");
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t = d(_);
      if ((g(t), t == null)) {
        var n;
        return (
          e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = {
                currentPlaceID: null,
                currentVideoID: null,
                portalingEnabled: !1,
                previousPlaceMetaData: null,
                thisPlaceID: null,
              }),
              (e[0] = n))
            : (n = e[0]),
          n
        );
      }
      return t;
    }
    ((l.VideoPlayerPortalingPlaceInfoProvider = f),
      (l.useVideoPlayerPortalingPlaceInfo = h));
  },
  98,
);
