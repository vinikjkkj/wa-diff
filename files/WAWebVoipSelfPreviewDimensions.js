__d(
  "WAWebVoipSelfPreviewDimensions",
  ["WAWebVoIPSelfPreviewConsts", "WAWebVoipSelfPreviewPositionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 160,
      s = 90,
      u = 98,
      c = 0.035;
    function d(t) {
      var n = t.containerSize,
        r = t.isCallLinkLobby,
        a = t.isPopout,
        i = t.isVideoMuted,
        l = t.selfPreviewSize,
        d = Math.max(
          e,
          Math.floor(Math.sqrt(c * n.width * n.height * (16 / 9))),
        ),
        m = r ? u : s,
        p = Math.max(m, Math.floor(d * (9 / 16))),
        _ = i ? Math.min(d, p) : d,
        f = i ? Math.min(d, p) : p,
        g = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewInsets(a),
        h = Math.max(0, n.width - g.left - g.right),
        y = Math.max(0, n.height - g.top - g.bottom),
        C =
          l === "enlarged"
            ? o("WAWebVoIPSelfPreviewConsts").SELF_PREVIEW_ENLARGED_SCALE
            : 1,
        b = Math.max(1, Math.min(C, h / _, y / f));
      return {
        centeredSelfPreviewHeight: p * 2,
        centeredSelfPreviewWidth: d * 2,
        selfPreviewHeight: Math.floor(p * b),
        selfPreviewWidth: Math.floor(d * b),
      };
    }
    l.computeSelfPreviewDimensions = d;
  },
  98,
);
