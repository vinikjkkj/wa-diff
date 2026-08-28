__d(
  "GeoPrivateBaseChartUtils",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useMemo,
      c = s.useState,
      d = 50,
      m = 25,
      p = 25,
      _ = 500,
      f = { small: 12, large: 32 };
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n = m + (typeof e == "object" ? e.top + e.bottom : e * 2),
        r = d + (typeof e == "object" ? e.left + e.right : e * 2),
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = { minHeight: n, minWidth: r }),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.axes,
        r = e.gutter,
        a = e.height,
        i = e.maxBarWidth,
        l = e.width,
        s;
      t[0] !== a || t[1] !== l
        ? ((s = { height: a, width: l }), (t[0] = a), (t[1] = l), (t[2] = s))
        : (s = t[2]);
      var u = y(s),
        g;
      t[3] !== r || t[4] !== u
        ? ((g = { gutter: r, rootRect: u }), (t[3] = r), (t[4] = u), (t[5] = g))
        : (g = t[5]);
      var h = C(g),
        S = c(p),
        R = S[0],
        L = S[1],
        E = c(p),
        k = E[0],
        I = E[1],
        T = c(p),
        D = T[0],
        x = T[1],
        $ = c(p),
        P = $[0],
        N = $[1],
        M;
      t[6] !== D || t[7] !== R || t[8] !== k || t[9] !== P
        ? ((M = { bottom: D, left: R, right: k, top: P }),
          (t[6] = D),
          (t[7] = R),
          (t[8] = k),
          (t[9] = P),
          (t[10] = M))
        : (M = t[10]);
      var w;
      t[11] !== n || t[12] !== h || t[13] !== M
        ? ((w = { axes: n, offset: M, oldRect: h }),
          (t[11] = n),
          (t[12] = h),
          (t[13] = M),
          (t[14] = w))
        : (w = t[14]);
      var A = v(w),
        F = u.width > _ ? f.large : f.small,
        O;
      t[15] !== n || t[16] !== A || t[17] !== F
        ? ((O = { axes: n, axesRect: A, gutter: F }),
          (t[15] = n),
          (t[16] = A),
          (t[17] = F),
          (t[18] = O))
        : (O = t[18]);
      var B = b(O),
        W;
      e: {
        if (Math.round(B.height) < m || Math.round(B.width) < d) {
          W = null;
          break e;
        }
        var q;
        (t[19] !== A || t[20] !== B || t[21] !== i || t[22] !== u
          ? ((q = {
              axesRect: A,
              contentRect: B,
              maxBarWidth: i,
              onAxesBottomOffsetChange: x,
              onAxesLeftOffsetChange: L,
              onAxesRightOffsetChange: I,
              onAxesTopOffsetChange: N,
              rootRect: u,
            }),
            (t[19] = A),
            (t[20] = B),
            (t[21] = i),
            (t[22] = u),
            (t[23] = q))
          : (q = t[23]),
          (W = q));
      }
      return W;
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.height,
        r = e.width,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = {
              bottom: n,
              left: 0,
              height: n,
              right: r,
              top: 0,
              width: r,
              x: 0,
              y: 0,
            }),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.gutter,
        r = e.rootRect,
        a;
      t[0] !== n
        ? ((a =
            typeof n == "object"
              ? function (e) {
                  return n[e];
                }
              : function (e) {
                  return n;
                }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== i || t[3] !== r
          ? ((l = S(r, {
              left: i("left"),
              right: i("right"),
              top: i("top"),
              bottom: i("bottom"),
            })),
            (t[2] = i),
            (t[3] = r),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.axes,
        r = e.axesRect,
        a = e.gutter,
        i;
      t[0] !== a
        ? ((i = { bottom: 0, left: a, right: a, top: 0 }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== r || t[4] !== i
          ? ((l = { axes: n, oldRect: r, offset: i }),
            (t[2] = n),
            (t[3] = r),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        v(l)
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.axes,
        r = e.offset,
        a = e.oldRect,
        i;
      t[0] !== n || t[1] !== r
        ? ((i =
            typeof r == "object"
              ? function (e) {
                  return n.has(e) ? r[e] : 0;
                }
              : function (e) {
                  return n.has(e) ? r : 0;
                }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      return (
        t[3] !== l || t[4] !== a
          ? ((s = S(a, {
              bottom: l("bottom"),
              left: l("left"),
              right: l("right"),
              top: l("top"),
            })),
            (t[3] = l),
            (t[4] = a),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function S(e, t) {
      var n = e.left + t.left,
        r = e.right - t.right,
        o = e.bottom - t.bottom,
        a = e.top + t.top;
      return {
        top: a,
        bottom: o,
        left: n,
        right: r,
        x: n,
        y: a,
        width: r - n,
        height: o - a,
      };
    }
    function R(e, t, n) {
      return (
        n === void 0 && (n = !1),
        t != null && n
          ? "key_" + e.toString() + "-" + t.toString()
          : "key_" + e.toString()
      );
    }
    function L(e, t, n) {
      return (
        n === void 0 && (n = !1),
        t != null && n ? e.toString() + "-" + t.toString() : "" + e.toString()
      );
    }
    ((l.useMinimumChartDimensions = g),
      (l.useGeoPrivateChartContextValue = h),
      (l.getSafeNameKey = R),
      (l.getColorNameKey = L));
  },
  98,
);
