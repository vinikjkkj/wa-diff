__d(
  "WAWebVoipVideoCaptureSourceRect",
  ["WAWebVoipVideoFrameCtor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 5,
      u = 60;
    function c(e) {
      return e - (e % 2);
    }
    function d(e, t, n) {
      return e <= 0 || t <= 0 || n <= 0 ? 0 : c(Math.floor((e * n) / t));
    }
    function m(e, t, n) {
      var r = Math.min(t, Math.max(0, e.x)),
        o = Math.min(n, Math.max(0, e.y)),
        a = Math.max(r, Math.min(t, e.x + e.width)),
        i = Math.max(o, Math.min(n, e.y + e.height));
      return {
        x: r,
        y: o,
        width: c(Math.max(0, a - r)),
        height: c(Math.max(0, i - o)),
      };
    }
    function p(e) {
      var t = e.codedHeight,
        n = e.codedWidth,
        r = e.height,
        o = e.visibleHeight,
        a = e.visibleWidth,
        i = e.width,
        l = e.x,
        s = e.y;
      return (
        i > 0 &&
        r > 0 &&
        a > 0 &&
        o > 0 &&
        n > 0 &&
        t > 0 &&
        (a !== n || o !== t || l !== 0 || s !== 0)
      );
    }
    function _(e) {
      var t = r("WAWebVoipVideoFrameCtor")();
      if (t == null) return null;
      var n = null;
      try {
        n = new t(e, { timestamp: 0 });
        var o = n.visibleRect,
          a = c(n.displayWidth),
          i = c(n.displayHeight),
          l = c(n.codedWidth),
          s = c(n.codedHeight),
          u = {
            x: o != null ? Math.floor(o.x) : 0,
            y: o != null ? Math.floor(o.y) : 0,
            width:
              o != null
                ? Math.max(0, Math.floor(o.width))
                : Math.max(0, Math.floor(n.displayWidth)),
            height:
              o != null
                ? Math.max(0, Math.floor(o.height))
                : Math.max(0, Math.floor(n.displayHeight)),
          },
          _ = m(u, l, s),
          f = {
            x: _.x,
            y: _.y,
            width: d(a, u.width, _.width),
            height: d(i, u.height, _.height),
            visibleWidth: _.width,
            visibleHeight: _.height,
            codedWidth: l,
            codedHeight: s,
          };
        return p(f) ? f : null;
      } catch (e) {
        return null;
      } finally {
        if (n != null)
          try {
            n.close();
          } catch (e) {}
      }
    }
    function f(t) {
      return t <= e || t % s === 0;
    }
    function g(e, t) {
      if (t >= u) return { detectionAttempts: t, sourceContentRect: null };
      var n = t + 1;
      return f(n)
        ? { detectionAttempts: n, sourceContentRect: _(e) }
        : { detectionAttempts: n, sourceContentRect: null };
    }
    function h(e, t) {
      var n = Math.floor(e.videoWidth),
        r = Math.floor(e.videoHeight);
      if (n <= 0 || r <= 0 || t.codedWidth <= 0 || t.codedHeight <= 0)
        return null;
      var o = n / t.codedWidth,
        a = r / t.codedHeight,
        i = Math.max(0, Math.floor(t.x * o)),
        l = Math.max(0, Math.floor(t.y * a)),
        s = Math.max(0, n - i),
        u = Math.max(0, r - l),
        c = Math.min(s, Math.ceil(t.visibleWidth * o)),
        d = Math.min(u, Math.ceil(t.visibleHeight * a));
      return c <= 0 || d <= 0 ? null : { x: i, y: l, width: c, height: d };
    }
    function y(e, t, n) {
      return e.width === t && e.height === n
        ? null
        : { resizeWidth: t, resizeHeight: n };
    }
    ((l.MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS = u),
      (l.closestEven = c),
      (l.getVideoSourceContentRect = _),
      (l.probeVideoSourceContentRect = g),
      (l.getVideoElementSourceCropRect = h),
      (l.getImageBitmapResizeOptionsForSourceCropRect = y));
  },
  98,
);
