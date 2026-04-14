__d(
  "WAWebMoveResizeComponentHooks",
  [
    "WANullthrows",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeConstants",
    "WAWebVelocityAnimate",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = 20,
      c = 20;
    function d(e) {
      var t = e.aspectRatio,
        n = e.bottom,
        r = e.disableResize,
        o = e.height,
        a = e.independentResize,
        i = e.left,
        l = e.margin,
        d = e.minHeightProp,
        m = e.minWidth,
        p = e.onMove,
        _ = e.onMoveEnd,
        f = e.onMoveStart,
        g = e.onResize,
        h = e.onResizeEnd,
        y = e.onResizeStart,
        C = e.setBottom,
        b = e.setHeight,
        v = e.setLeft,
        S = e.setWidth,
        R = e.width,
        L = s(
          function (e) {
            var s = e.key,
              L = e.shiftKey;
            if (
              !(
                s !== "ArrowUp" &&
                s !== "ArrowDown" &&
                s !== "ArrowLeft" &&
                s !== "ArrowRight"
              ) &&
              !(e.target instanceof HTMLInputElement)
            )
              if ((e.preventDefault(), L && r !== !0)) {
                var E = R,
                  k = o,
                  I = a !== !0;
                s === "ArrowRight"
                  ? ((E = Math.max(m, R + c)), I && (k = E / t))
                  : s === "ArrowLeft"
                    ? ((E = Math.max(m, R - c)), I && (k = E / t))
                    : s === "ArrowUp"
                      ? I
                        ? ((E = Math.max(m, R + c * t)), (k = E / t))
                        : (k = o + c)
                      : s === "ArrowDown" &&
                        (I
                          ? ((E = Math.max(m, R - c * t)), (k = E / t))
                          : (k = Math.max(d != null ? d : m / t, o - c)));
                var T = window.innerWidth - i - l.x,
                  D = window.innerHeight - n - l.y;
                if (((E = Math.min(E, T)), (k = Math.min(k, D)), I)) {
                  var x = E / t,
                    $ = k * t;
                  x <= k ? (k = x) : (E = $);
                }
                (E !== R || k !== o) &&
                  (y == null || y(),
                  S(E),
                  b(k),
                  g == null || g(E, i, n),
                  h == null || h());
              } else {
                var P = i,
                  N = n;
                (s === "ArrowRight"
                  ? (P = i + u)
                  : s === "ArrowLeft"
                    ? (P = i - u)
                    : s === "ArrowUp"
                      ? (N = n + u)
                      : s === "ArrowDown" && (N = n - u),
                  (P = Math.max(l.x, Math.min(P, window.innerWidth - R - l.x))),
                  (N = Math.max(
                    l.y,
                    Math.min(N, window.innerHeight - o - l.y),
                  )),
                  (P !== i || N !== n) &&
                    (f == null || f(),
                    v(P),
                    C(N),
                    p == null || p(P, N),
                    _ == null || _()));
              }
          },
          [r, R, o, a, i, l.x, l.y, n, m, t, d, y, g, h, f, p, _, S, b, v, C],
        );
      return L;
    }
    function m(e, t, n, a) {
      var i = e.componentRef,
        l = e.unmountSignal,
        u = s(
          function (e) {
            (e.width != null && t(e.width),
              e.height != null && n(e.height),
              e.bottom != null && a(e.bottom));
          },
          [t, n, a],
        ),
        c = s(
          function (e, t) {
            if (i.current == null) {
              u(t);
              return;
            }
            var n = r("WAWebVelocityAnimate")(i.current, e, {
              duration: o("WAWebMoveResizeConstants")
                .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
              easing: o("WAWebMoveResizeConstants")
                .MIN_HEIGHT_CHANGE_ANIMATION_TYPE,
            });
            n.then(function () {
              l.aborted || u(t);
            }).catch(function () {
              l.aborted || u(t);
            });
          },
          [l, u, i],
        );
      return { updateDimensionState: u, animateDimensionChange: c };
    }
    function p(e) {
      var t = e.aspectRatio,
        n = e.bottom,
        a = e.componentRef,
        i = e.getRect,
        l = e.left,
        s = e.margin,
        u = e.setBottom,
        c = e.setLeft,
        d = e.unmountSignal,
        m = e.width;
      return function (e, p) {
        var _ = e.getBoundingClientRect(),
          f = {
            left: _.left - p,
            top: _.top - p,
            right: _.right + p,
            bottom: _.bottom + p,
          },
          g = i();
        if (o("WAWebMoveResizeComponentUtils").doOverlap(g, f)) {
          var h = o("WAWebMoveResizeComponentUtils").escapeDistance(g, f),
            y = o("WAWebMoveResizeComponentUtils").findEscapeDirection({
              aspectRatio: t,
              bottom: n,
              dists: h,
              left: l,
              margin: s,
              width: m,
            }),
            C = y.direction,
            b = y.distance;
          if (!(b === void 0 || C == null)) {
            var v = {};
            switch (C) {
              case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
                v = { left: l - h.toLeftDistance };
                break;
              case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
                v = { bottom: n - h.toBottomDistance };
                break;
              case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
                v = { left: l + h.toRightDistance };
                break;
              case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
                v = { bottom: n + h.toTopDistance };
                break;
              default:
                break;
            }
            r("WAWebVelocityAnimate")(r("WANullthrows")(a.current), v, {
              duration: o("WAWebMoveResizeConstants")
                .ESCAPE_OVERLAP_ANIMATION_DURATION,
            }).then(function () {
              d.aborted ||
                (v.left != null && c(v.left), v.bottom != null && u(v.bottom));
            });
          }
        }
      };
    }
    ((l.useKeyboardNavigation = d),
      (l.useDimensionAnimation = m),
      (l.createEscapeOverlapHandler = p));
  },
  98,
);
