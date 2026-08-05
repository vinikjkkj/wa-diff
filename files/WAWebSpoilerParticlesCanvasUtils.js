__d(
  "WAWebSpoilerParticlesCanvasUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.dismissing,
        n = e.isVisible,
        r = e.prefersReducedMotion,
        o = e.revealed;
      return n && !r && (!o || t);
    }
    function l(e, t, n) {
      var r,
        o = e.getContext("2d");
      if (o == null) return n;
      var a = (r = t.textContent) != null ? r : "",
        i = window.getComputedStyle(t);
      o.font =
        i.fontStyle +
        " " +
        i.fontWeight +
        " " +
        i.fontSize +
        " " +
        i.fontFamily;
      var l = o.measureText(a),
        s = l.fontBoundingBoxAscent + l.fontBoundingBoxDescent;
      return !Number.isFinite(s) || s <= 0
        ? n
        : n.map(function (e) {
            return {
              left: e.left,
              top: e.top + (e.height - s) / 2,
              width: e.width,
              height: s,
            };
          });
    }
    function s(e) {
      var t,
        n = u(e),
        r = n.lineRects,
        o = n.unionRect,
        a = (t = e.textContent) != null ? t : "";
      return {
        lineRects: r,
        signature:
          o.width +
          ":" +
          o.height +
          ":" +
          r
            .map(function (e) {
              return e.left + "," + e.top + "," + e.width + "," + e.height;
            })
            .join("|") +
          ":" +
          a,
      };
    }
    function u(e) {
      var t = e.getBoundingClientRect(),
        n = Array.from(e.getClientRects()),
        r = document.createRange();
      try {
        r.selectNodeContents(e);
        var o = Array.from(r.getClientRects()),
          a = r.getBoundingClientRect();
        (o.length > 0 && (n = o), (a.width > 0 || a.height > 0) && (t = a));
      } catch (e) {}
      return { lineRects: n.length > 0 ? n : [t], unionRect: t };
    }
    function c(e) {
      for (var t = e.parentElement; t != null; ) {
        if (
          t instanceof HTMLElement &&
          window.getComputedStyle(t).display !== "inline"
        )
          return [t];
        t = t.parentElement;
      }
      return [];
    }
    function d(e) {
      var t = e[0];
      if (t == null) return { left: 0, top: 0, width: 0, height: 0 };
      for (
        var n = t.left,
          r = t.top,
          o = t.left + t.width,
          a = t.top + t.height,
          i = 1;
        i < e.length;
        i++
      ) {
        var l = e[i];
        l != null &&
          ((n = Math.min(n, l.left)),
          (r = Math.min(r, l.top)),
          (o = Math.max(o, l.left + l.width)),
          (a = Math.max(a, l.top + l.height)));
      }
      return { left: n, top: r, width: o - n, height: a - r };
    }
    function m(e, t) {
      if (t.length === 0)
        return [{ x: 0, y: 0, width: e.width, height: e.height }];
      for (var n = [], r = 0; r < t.length; r++) {
        var o = t[r];
        o != null &&
          n.push({
            x: o.left - e.left,
            y: o.top - e.top,
            width: o.width,
            height: o.height,
          });
      }
      return n;
    }
    function p(e, t, n, r) {
      var o = t.left - n.x,
        a = o + (r ? t.width - e.width : 0),
        i = t.top - n.y;
      return { x: e.left - a, y: e.top - i };
    }
    function _(e) {
      var t = e.x,
        n = e.y;
      return t !== 0 || n !== 0 ? "translate(" + t + "px, " + n + "px)" : "";
    }
    ((i.shouldPlayAnimation = e),
      (i.getMeasuredLineRects = l),
      (i.getTextLayout = s),
      (i.getResizeTargets = c),
      (i.getUnionRect = d),
      (i.getSpoilerParticleFields = m),
      (i.getSpoilerParticlesCanvasTranslation = p),
      (i.getSpoilerParticlesCanvasTransform = _));
  },
  66,
);
