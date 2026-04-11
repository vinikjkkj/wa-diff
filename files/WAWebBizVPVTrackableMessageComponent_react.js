__d(
  "WAWebBizVPVTrackableMessageComponent.react",
  [
    "WAWebBizVPVDebugOverlay.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizMessageVPVLogger",
    "useWAWebVPVOverlayEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.component,
        a = e.visibilityData,
        i = u(!1),
        l = i[0],
        c = i[1],
        d;
      t[0] !== a
        ? ((d = babelHelpers.extends({}, a, { onVisibilityChange: c })),
          (t[0] = a),
          (t[1] = d))
        : (d = t[1]);
      var m = r("useWAWebBizMessageVPVLogger")(d),
        p = m[0],
        _ = r("useWAWebVPVOverlayEnabled")(),
        f;
      t[2] !== _
        ? ((f = _ ? { position: "relative" } : void 0), (t[2] = _), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== l || t[5] !== _ || t[6] !== a
        ? ((g = _
            ? s.jsx(r("WAWebBizVPVDebugOverlay.react"), {
                visible: l,
                visibilityData: a,
              })
            : null),
          (t[4] = l),
          (t[5] = _),
          (t[6] = a),
          (t[7] = g))
        : (g = t[7]);
      var h;
      return (
        t[8] !== n || t[9] !== f || t[10] !== g || t[11] !== p
          ? ((h = s.jsxs("div", { ref: p, style: f, children: [g, n] })),
            (t[8] = n),
            (t[9] = f),
            (t[10] = g),
            (t[11] = p),
            (t[12] = h))
          : (h = t[12]),
        h
      );
    }
    l.default = c;
  },
  98,
);
