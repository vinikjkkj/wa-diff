__d(
  "WAWebMoveResizeComponentHooks",
  [
    "WANullthrows",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeConstants",
    "WAWebVelocityAnimate",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = 20,
      c = 20;
    function d(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.aspectRatio,
        r = e.bottom,
        a = e.disableResize,
        i = e.height,
        l = e.independentResize,
        s = e.left,
        d = e.margin,
        m = e.minHeightProp,
        p = e.minWidth,
        _ = e.onMove,
        f = e.onMoveEnd,
        g = e.onMoveStart,
        h = e.onResize,
        y = e.onResizeEnd,
        C = e.onResizeStart,
        b = e.setBottom,
        v = e.setHeight,
        S = e.setLeft,
        R = e.setWidth,
        L = e.width,
        E;
      t[0] !== n ||
      t[1] !== r ||
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== s ||
      t[6] !== d.x ||
      t[7] !== d.y ||
      t[8] !== m ||
      t[9] !== p ||
      t[10] !== _ ||
      t[11] !== f ||
      t[12] !== g ||
      t[13] !== h ||
      t[14] !== y ||
      t[15] !== C ||
      t[16] !== b ||
      t[17] !== v ||
      t[18] !== S ||
      t[19] !== R ||
      t[20] !== L
        ? ((E = function (t) {
            var e = t.key,
              o = t.shiftKey;
            if (
              !(
                e !== "ArrowUp" &&
                e !== "ArrowDown" &&
                e !== "ArrowLeft" &&
                e !== "ArrowRight"
              ) &&
              !(t.target instanceof HTMLInputElement)
            )
              if ((t.preventDefault(), o && a !== !0)) {
                var E = L,
                  k = i,
                  I = l !== !0;
                e === "ArrowRight"
                  ? ((E = Math.max(p, L + c)), I && (k = E / n))
                  : e === "ArrowLeft"
                    ? ((E = Math.max(p, L - c)), I && (k = E / n))
                    : e === "ArrowUp"
                      ? I
                        ? ((E = Math.max(p, L + c * n)), (k = E / n))
                        : (k = i + c)
                      : e === "ArrowDown" &&
                        (I
                          ? ((E = Math.max(p, L - c * n)), (k = E / n))
                          : (k = Math.max(m != null ? m : p / n, i - c)));
                var T = window.innerWidth - s - d.x,
                  D = window.innerHeight - r - d.y;
                if (((E = Math.min(E, T)), (k = Math.min(k, D)), I)) {
                  var x = E / n,
                    $ = k * n;
                  x <= k ? (k = x) : (E = $);
                }
                (E !== L || k !== i) &&
                  (C == null || C(),
                  R(E),
                  v(k),
                  h == null || h(E, s, r),
                  y == null || y());
              } else {
                var P = s,
                  N = r;
                (e === "ArrowRight"
                  ? (P = s + u)
                  : e === "ArrowLeft"
                    ? (P = s - u)
                    : e === "ArrowUp"
                      ? (N = r + u)
                      : e === "ArrowDown" && (N = r - u),
                  (P = Math.max(d.x, Math.min(P, window.innerWidth - L - d.x))),
                  (N = Math.max(
                    d.y,
                    Math.min(N, window.innerHeight - i - d.y),
                  )),
                  (P !== s || N !== r) &&
                    (g == null || g(),
                    S(P),
                    b(N),
                    _ == null || _(P, N),
                    f == null || f()));
              }
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = s),
          (t[6] = d.x),
          (t[7] = d.y),
          (t[8] = m),
          (t[9] = p),
          (t[10] = _),
          (t[11] = f),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y),
          (t[15] = C),
          (t[16] = b),
          (t[17] = v),
          (t[18] = S),
          (t[19] = R),
          (t[20] = L),
          (t[21] = E))
        : (E = t[21]);
      var k = E;
      return k;
    }
    function m(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(12),
        s = e.componentRef,
        u = e.unmountSignal,
        c;
      l[0] !== a || l[1] !== n || l[2] !== i || l[3] !== t
        ? ((c = function (r) {
            (r.width != null && t(r.width),
              r.height != null && n(r.height),
              r.bottom != null && a(r.bottom),
              r.left != null && i(r.left));
          }),
          (l[0] = a),
          (l[1] = n),
          (l[2] = i),
          (l[3] = t),
          (l[4] = c))
        : (c = l[4]);
      var d = c,
        m;
      l[5] !== s || l[6] !== u || l[7] !== d
        ? ((m = function (t, n) {
            if (s.current == null) {
              d(n);
              return;
            }
            var e = r("WAWebVelocityAnimate")(s.current, t, {
              duration: o("WAWebMoveResizeConstants")
                .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
              easing: o("WAWebMoveResizeConstants")
                .MIN_HEIGHT_CHANGE_ANIMATION_TYPE,
            });
            e.then(function () {
              u.aborted || d(n);
            }).catch(function () {
              u.aborted || d(n);
            });
          }),
          (l[5] = s),
          (l[6] = u),
          (l[7] = d),
          (l[8] = m))
        : (m = l[8]);
      var p = m,
        _;
      return (
        l[9] !== p || l[10] !== d
          ? ((_ = { updateDimensionState: d, animateDimensionChange: p }),
            (l[9] = p),
            (l[10] = d),
            (l[11] = _))
          : (_ = l[11]),
        _
      );
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
