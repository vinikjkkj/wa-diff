__d(
  "VideoPlayerPortalingPlaceInfoProvider.react",
  ["FBLogger", "react", "react-compiler-runtime", "useEmptyFunction"],
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
        r = e.currentPlaceID,
        a = e.currentVideoID,
        i = e.portalingEnabled,
        l = e.previousPlaceMetaData,
        u = e.thisPlaceID,
        c;
      t[0] !== r || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u
        ? ((c = {
            currentPlaceID: r,
            currentVideoID: a,
            portalingEnabled: i,
            previousPlaceMetaData: l,
            thisPlaceID: u,
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m;
      return (
        t[6] !== n || t[7] !== d
          ? ((m = s.jsx(_.Provider, { value: d, children: n })),
            (t[6] = n),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
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
