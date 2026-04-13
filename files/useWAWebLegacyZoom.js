__d(
  "useWAWebLegacyZoom",
  [
    "WAWebMediaIncrementalZoom",
    "WAWebMediaViewerConstants",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.applyPanOffset,
        r = e.calculatePanToCenter,
        a = e.clampPan,
        i = e.containerRef,
        l = e.getContainerAndImageDimensions,
        s = e.minScaleToFit,
        u = e.setZoomMode,
        m = e.zoomAtPoint,
        p = e.zoomCtx,
        _ = e.zoomMode,
        f = _ === o("WAWebMediaIncrementalZoom").ZoomMode.LEGACY,
        g = d(null),
        h,
        y;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            return function () {
              g.current != null && window.clearTimeout(g.current);
            };
          }),
          (y = []),
          (t[0] = h),
          (t[1] = y))
        : ((h = t[0]), (y = t[1])),
        c(h, y));
      var C = d(p.msgId),
        b,
        v;
      (t[2] !== u || t[3] !== p.msgId
        ? ((b = function () {
            p.msgId !== C.current &&
              ((C.current = p.msgId),
              u(o("WAWebMediaIncrementalZoom").ZoomMode.INCREMENTAL));
          }),
          (v = [u, p.msgId]),
          (t[2] = u),
          (t[3] = p.msgId),
          (t[4] = b),
          (t[5] = v))
        : ((b = t[4]), (v = t[5])),
        c(b, v));
      var S;
      t[6] !== u
        ? ((S = function () {
            u(o("WAWebMediaIncrementalZoom").ZoomMode.INCREMENTAL);
          }),
          (t[6] = u),
          (t[7] = S))
        : (S = t[7]);
      var R = S,
        L;
      t[8] !== n ||
      t[9] !== r ||
      t[10] !== f ||
      t[11] !== s ||
      t[12] !== u ||
      t[13] !== m ||
      t[14] !== p
        ? ((L = function (t, a) {
            var e = p.currentImageScale === s;
            if (f && !e) {
              var i = r(s);
              (i && (p.setCurrentImageScale(s), n(i), p.setCurrentZoomLevel(1)),
                (g.current = window.setTimeout(function () {
                  ((g.current = null),
                    u(o("WAWebMediaIncrementalZoom").ZoomMode.INCREMENTAL));
                }, 300)));
            } else if (e) {
              var l = s * o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR;
              (m({ scale: l, x: t, y: a }),
                p.setCurrentZoomLevel(
                  o("WAWebMediaIncrementalZoom").approximateZoomLevel(l, s),
                ),
                u(o("WAWebMediaIncrementalZoom").ZoomMode.LEGACY));
            }
          }),
          (t[8] = n),
          (t[9] = r),
          (t[10] = f),
          (t[11] = s),
          (t[12] = u),
          (t[13] = m),
          (t[14] = p),
          (t[15] = L))
        : (L = t[15]);
      var E = L,
        k;
      t[16] !== n ||
      t[17] !== a ||
      t[18] !== i ||
      t[19] !== l ||
      t[20] !== p.currentImageScale
        ? ((k = function (t) {
            var e = i.current;
            if (e) {
              var r = l();
              if (r) {
                var o = r.containerH,
                  s = r.containerW,
                  u = r.imageH,
                  c = r.imageW,
                  d = p.currentImageScale,
                  m = c * d,
                  _ = u * d,
                  f = e.getBoundingClientRect(),
                  g = t.clientX - f.left,
                  h = t.clientY - f.top,
                  y = s / 2,
                  C = o / 2,
                  b = m - s,
                  v = _ - o,
                  S,
                  R;
                if (b > 0) {
                  var L = y - g;
                  ((S = (1.2 * L * b) / s), (S = (s - m) / 2 + S));
                } else S = (s - m) / 2;
                if (v > 0) {
                  var E = C - h;
                  ((R = (1.2 * E * v) / o), (R = (o - _) / 2 + R));
                } else R = (o - _) / 2;
                var k = a(S, R, d);
                n(k);
              }
            }
          }),
          (t[16] = n),
          (t[17] = a),
          (t[18] = i),
          (t[19] = l),
          (t[20] = p.currentImageScale),
          (t[21] = k))
        : (k = t[21]);
      var I = k,
        T;
      return (
        t[22] !== E || t[23] !== I || t[24] !== R
          ? ((T = {
              handleClick: E,
              handleLegacyMouseMove: I,
              resetToIncremental: R,
            }),
            (t[22] = E),
            (t[23] = I),
            (t[24] = R),
            (t[25] = T))
          : (T = t[25]),
        T
      );
    }
    l.useWAWebLegacyZoom = m;
  },
  98,
);
