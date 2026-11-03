__d(
  "WAWebVoipWebCodecsEncoderCrop",
  ["WAWebVoipVideoCaptureOffThread", "WAWebVoipVideoFrameCtor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c(e) {
      return e & -2;
    }
    function d() {
      ((s = null), (u = null));
    }
    function m(e) {
      var t = e.visibleRect;
      return {
        x: t != null ? Math.max(0, Math.floor(t.x)) : 0,
        y: t != null ? Math.max(0, Math.floor(t.y)) : 0,
      };
    }
    function p(e, t) {
      var n = r("WAWebVoipVideoFrameCtor")();
      return n == null ? e : new n(e, t);
    }
    function _(e) {
      var t = e.displayWidth,
        n = e.displayHeight,
        r = m(e),
        o = r.x,
        a = r.y;
      return e.codedWidth === t && e.codedHeight === n && o === 0 && a === 0
        ? e
        : p(e, {
            visibleRect: { x: o, y: a, width: t, height: n },
            displayWidth: t,
            displayHeight: n,
          });
    }
    function f(e, t, n, r, o, a, i) {
      return p(e, {
        visibleRect: { x: t, y: n, width: r, height: o },
        displayWidth: a,
        displayHeight: i,
      });
    }
    function g(e, t, n, r) {
      if (e != null && e.width === n && e.height === r) return [e, t];
      var o = new OffscreenCanvas(n, r);
      return [o, o.getContext("2d")];
    }
    function h(t) {
      var n,
        r = t.cropH,
        a = t.cropW,
        i = t.cropX,
        l = t.cropY,
        c = t.ctx,
        d = t.frame,
        m = t.srcH,
        p = t.srcW,
        _ = t.targetH,
        f = t.targetW,
        h = g(s, u, p, m);
      ((s = h[0]), (u = h[1]));
      var y = g(c.cropCanvas, c.cropCanvasCtx, f, _),
        C = y[0],
        b = y[1];
      ((c.cropCanvas = C), (c.cropCanvasCtx = b));
      var v = u,
        S = b,
        R = s;
      return v == null || S == null || R == null
        ? (o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [webcodec-encode] cropFrame canvas context unavailable, clearing for retry",
              ])),
          ),
          (s = null),
          (u = null),
          (c.cropCanvas = null),
          (c.cropCanvasCtx = null),
          null)
        : (v.drawImage(d, 0, 0, p, m),
          S.drawImage(R, i, l, a, r, 0, 0, f, _),
          new VideoFrame(C, {
            timestamp: d.timestamp,
            duration: (n = d.duration) != null ? n : void 0,
          }));
    }
    function y(e) {
      var t = e.encoderCtx,
        n = e.frame,
        r = e.targetH,
        o = e.targetW,
        a = e.visibleRectCropWorks,
        i = n.displayWidth,
        l = n.displayHeight;
      if (o <= 0 || r <= 0 || i <= 0 || l <= 0) return n;
      var s = c(Math.max(o, 2)),
        u = c(Math.max(r, 2)),
        d = _(n),
        m = i / l,
        p = s / u;
      if (Math.abs(m - p) < 0.01) return d;
      var g, y, C, b;
      if (
        (m > p
          ? ((b = l),
            (C = Math.round(l * p)),
            (g = Math.round((i - C) / 2)),
            (y = 0))
          : ((C = i),
            (b = Math.round(i / p)),
            (g = 0),
            (y = Math.round((l - b) / 2))),
        (g &= -2),
        (y &= -2),
        (C &= -2),
        (b &= -2),
        (C = Math.min(C, i - g)),
        (b = Math.min(b, l - y)),
        C <= 0 || b <= 0)
      )
        return d;
      var v;
      return (
        a
          ? (v = f(d, g, y, C, b, s, u))
          : (v = h({
              cropH: b,
              cropW: C,
              cropX: g,
              cropY: y,
              ctx: t,
              frame: d,
              srcH: l,
              srcW: i,
              targetH: u,
              targetW: s,
            })),
        v != null && d !== n && d.close(),
        v != null ? v : d
      );
    }
    ((l.toEven = c),
      (l.resetSourceCanvas = d),
      (l.getFrameVisibleRectOrigin = m),
      (l.cropFrameToEncoderAspectRatio = y));
  },
  98,
);
