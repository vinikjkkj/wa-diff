__d(
  "WAWebVoipSelfPreviewSizeFlipAnimation",
  ["WAWebVoipSelfPreviewPositionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { duration: 300, easing: "ease-out", fill: "none" };
    function s(e) {
      var t = e.corner,
        n = e.first,
        r = e.last,
        a = e.micMutedIndicator,
        i = e.previewElements,
        l = e.sizeControl,
        s = [],
        u = o(
          "WAWebVoipSelfPreviewPositionUtils",
        ).getSelfPreviewSizeFlipInversion(n.dimensions, r.dimensions),
        m = u.scaleX,
        p = u.scaleY,
        _ = o("WAWebVoipSelfPreviewPositionUtils").getTransformOriginForCorner(
          t,
        ),
        f = c(r.position),
        g = f + " scale(" + m + ", " + p + ")",
        h = f + " scale(1)",
        y = [
          { transform: g, transformOrigin: _ },
          { transform: h, transformOrigin: _ },
        ];
      for (var C of i) {
        var b = d(C, y);
        b != null && s.push(b);
      }
      var v = d(l, [
        { opacity: 0, transform: g, transformOrigin: _ },
        { opacity: 1, transform: h, transformOrigin: _ },
      ]);
      v != null && s.push(v);
      var S = d(a, [{ transform: c(n.position) }, { transform: f }]);
      return (S != null && s.push(S), s);
    }
    function u(e) {
      for (var t of e) t.cancel();
    }
    function c(e) {
      var t = e.x,
        n = e.y;
      return "translate(" + t + "px, " + n + "px)";
    }
    function d(t, n) {
      if (t == null || m(t)) return null;
      var r = Reflect.get(t, "animate");
      return typeof r != "function" ? null : r.call(t, n, e);
    }
    function m(e) {
      var t = e.ownerDocument.defaultView;
      return (
        t != null &&
        typeof t.matchMedia == "function" &&
        t.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
    ((l.animateSelfPreviewSizeFlip = s),
      (l.cancelSelfPreviewSizeFlipAnimations = u));
  },
  98,
);
