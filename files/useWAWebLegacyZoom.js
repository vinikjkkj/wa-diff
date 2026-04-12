__d(
  "useWAWebLegacyZoom",
  ["WAWebMediaIncrementalZoom", "WAWebMediaViewerConstants", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = e.applyPanOffset,
        n = e.calculatePanToCenter,
        r = e.clampPan,
        a = e.containerRef,
        i = e.getContainerAndImageDimensions,
        l = e.minScaleToFit,
        s = e.setZoomMode,
        m = e.zoomAtPoint,
        p = e.zoomCtx,
        _ = e.zoomMode,
        f = _ === o("WAWebMediaIncrementalZoom").ZoomMode.LEGACY,
        g = d(null);
      c(function () {
        return function () {
          g.current != null && window.clearTimeout(g.current);
        };
      }, []);
      var h = d(p.msgId);
      c(
        function () {
          p.msgId !== h.current &&
            ((h.current = p.msgId),
            s(o("WAWebMediaIncrementalZoom").ZoomMode.INCREMENTAL));
        },
        [s, p.msgId],
      );
      var y = u(
          function () {
            s(o("WAWebMediaIncrementalZoom").ZoomMode.INCREMENTAL);
          },
          [s],
        ),
        C = u(
          function (e, r) {
            var a = p.currentImageScale === l;
            if (f && !a) {
              var i = n(l);
              (i && (p.setCurrentImageScale(l), t(i), p.setCurrentZoomLevel(1)),
                (g.current = window.setTimeout(function () {
                  ((g.current = null),
                    s(o("WAWebMediaIncrementalZoom").ZoomMode.INCREMENTAL));
                }, 300)));
            } else if (a) {
              var u = l * o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR;
              (m({ scale: u, x: e, y: r }),
                p.setCurrentZoomLevel(
                  o("WAWebMediaIncrementalZoom").approximateZoomLevel(u, l),
                ),
                s(o("WAWebMediaIncrementalZoom").ZoomMode.LEGACY));
            }
          },
          [f, p, l, m, s, n, t],
        ),
        b = u(
          function (e) {
            var n = a.current;
            if (n) {
              var o = i();
              if (o) {
                var l = o.containerH,
                  s = o.containerW,
                  u = o.imageH,
                  c = o.imageW,
                  d = p.currentImageScale,
                  m = c * d,
                  _ = u * d,
                  f = n.getBoundingClientRect(),
                  g = e.clientX - f.left,
                  h = e.clientY - f.top,
                  y = s / 2,
                  C = l / 2,
                  b = m - s,
                  v = _ - l,
                  S,
                  R;
                if (b > 0) {
                  var L = y - g;
                  ((S = (1.2 * L * b) / s), (S = (s - m) / 2 + S));
                } else S = (s - m) / 2;
                if (v > 0) {
                  var E = C - h;
                  ((R = (1.2 * E * v) / l), (R = (l - _) / 2 + R));
                } else R = (l - _) / 2;
                var k = r(S, R, d);
                t(k);
              }
            }
          },
          [a, i, p.currentImageScale, r, t],
        );
      return {
        handleClick: C,
        handleLegacyMouseMove: b,
        resetToIncremental: y,
      };
    }
    l.useWAWebLegacyZoom = m;
  },
  98,
);
