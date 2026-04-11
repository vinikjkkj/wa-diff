__d(
  "CoreVideoPlayerWithComponents.react",
  [
    "VideoPlayerComponentContainer.react",
    "VideoPlayerPortalingPlace.react",
    "VideoPlayerTracePolicyProvider.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        a = e.coreVideoPlayerMetaData,
        i = e.implementations,
        l = e.portalingEnabled,
        u = e.portalingFromVideoID,
        c = e.portalingPlaceMetaData,
        d = e.portalingRenderPlaceholder,
        m;
      t[0] !== n
        ? ((m = function (t) {
            return s.jsx(
              r("VideoPlayerComponentContainer.react"),
              babelHelpers.extends({}, t, { children: n }),
            );
          }),
          (t[0] = n),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== u ||
      t[6] !== c ||
      t[7] !== d ||
      t[8] !== p
        ? ((_ = s.jsx(r("VideoPlayerPortalingPlace.react"), {
            coreVideoPlayerMetaData: a,
            implementations: i,
            portalingEnabled: l,
            portalingFromVideoID: u,
            portalingPlaceMetaData: c,
            renderComponents: p,
            renderPlaceholder: d,
          })),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = c),
          (t[7] = d),
          (t[8] = p),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== a.initialTracePolicy ||
        t[11] !== a.routeTracePolicy ||
        t[12] !== _
          ? ((f = s.jsx(r("VideoPlayerTracePolicyProvider.react"), {
              initialTracePolicy: a.initialTracePolicy,
              routeTracePolicy: a.routeTracePolicy,
              children: _,
            })),
            (t[10] = a.initialTracePolicy),
            (t[11] = a.routeTracePolicy),
            (t[12] = _),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
    l.default = c;
  },
  98,
);
