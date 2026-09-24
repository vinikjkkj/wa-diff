__d(
  "WAWebVoipSelfPreviewDimensions",
  ["WAWebVoIPSelfPreviewConsts", "WAWebVoipSelfPreviewPositionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 160,
      s = 90,
      u = 98,
      c = 0.035;
    function d(t, n, r, a, i) {
      var l = Math.max(
          e,
          Math.floor(Math.sqrt(c * t.width * t.height * 1.7777777777777777)),
        ),
        d = n ? u : s,
        m = Math.max(d, Math.floor(l * (9 / 16))),
        p = a ? Math.min(l, m) : l,
        _ = a ? Math.min(l, m) : m,
        f = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewInsets(r),
        g = Math.max(0, t.width - f.left - f.right),
        h = Math.max(0, t.height - f.top - f.bottom),
        y =
          i === "enlarged"
            ? o("WAWebVoIPSelfPreviewConsts").SELF_PREVIEW_ENLARGED_SCALE
            : 1,
        C = Math.max(1, Math.min(y, g / p, h / _));
      return {
        centeredSelfPreviewHeight: m * 2,
        centeredSelfPreviewWidth: l * 2,
        selfPreviewHeight: Math.floor(m * C),
        selfPreviewWidth: Math.floor(l * C),
      };
    }
    l.computeSelfPreviewDimensions = d;
  },
  98,
);
