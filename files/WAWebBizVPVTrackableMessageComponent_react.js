__d(
  "WAWebBizVPVTrackableMessageComponent.react",
  [
    "WAWebBizVPVDebugOverlay.react",
    "react",
    "useWAWebBizMessageVPVLogger",
    "useWAWebVPVOverlayEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = e.component,
        n = e.visibilityData,
        o = u(!1),
        a = o[0],
        i = o[1],
        l = r("useWAWebBizMessageVPVLogger")(
          babelHelpers.extends({}, n, { onVisibilityChange: i }),
        ),
        c = l[0],
        d = r("useWAWebVPVOverlayEnabled")();
      return s.jsxs("div", {
        ref: c,
        style: d ? { position: "relative" } : void 0,
        children: [
          d
            ? s.jsx(r("WAWebBizVPVDebugOverlay.react"), {
                visible: a,
                visibilityData: n,
              })
            : null,
          t,
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
