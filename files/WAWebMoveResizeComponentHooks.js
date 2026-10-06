__d(
  "WAWebMoveResizeComponentHooks",
  [
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeConstants",
    "WAWebVelocityAnimate",
    "nullthrows",
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
    function m(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.componentRef,
        a = e.setBottom,
        i = e.setHeight,
        l = e.setLeft,
        s = e.setWidth,
        u = e.unmountSignal,
        c;
      t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== s
        ? ((c = function (t) {
            (t.width != null && s(t.width),
              t.height != null && i(t.height),
              t.bottom != null && a(t.bottom),
              t.left != null && l(t.left));
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = s),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        m;
      t[5] !== n || t[6] !== u || t[7] !== d
        ? ((m = function (t, a) {
            if (n.current == null) {
              d(a);
              return;
            }
            var e = r("WAWebVelocityAnimate")(n.current, t, {
              duration: o("WAWebMoveResizeConstants")
                .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
              easing: o("WAWebMoveResizeConstants")
                .MIN_HEIGHT_CHANGE_ANIMATION_TYPE,
            });
            e.then(function () {
              u.aborted || d(a);
            }).catch(function () {
              u.aborted || d(a);
            });
          }),
          (t[5] = n),
          (t[6] = u),
          (t[7] = d),
          (t[8] = m))
        : (m = t[8]);
      var p = m,
        _;
      return (
        t[9] !== p || t[10] !== d
          ? ((_ = { updateDimensionState: d, animateDimensionChange: p }),
            (t[9] = p),
            (t[10] = d),
            (t[11] = _))
          : (_ = t[11]),
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
            r("WAWebVelocityAnimate")(r("nullthrows")(a.current), v, {
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
