__d(
  "useWebBloksViewTransformsExtensionWrapperVisibilityState",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.alpha,
        r = e.scaleX,
        a = e.scaleY,
        i = m(null),
        l = i[0],
        s = i[1],
        u = m(null),
        d = u[0],
        p = u[1],
        _ = m(null),
        f = _[0],
        g = _[1],
        h,
        y;
      (t[0] !== n || t[1] !== l
        ? ((h = function () {
            var e =
              Math.round(((n != null ? n : 1) + Number.EPSILON) * 100) / 100;
            (e === 0 && (l === "entered" || l === null)
              ? s("exited")
              : e > 0 && (l === "exited" || l === null) && s("entered"),
              g("opacity"));
          }),
          (y = [n, l]),
          (t[0] = n),
          (t[1] = l),
          (t[2] = h),
          (t[3] = y))
        : ((h = t[2]), (y = t[3])),
        c(h, y));
      var C, b;
      (t[4] !== d || t[5] !== r || t[6] !== a
        ? ((C = function () {
            var e =
                Math.round(((r != null ? r : 1) + Number.EPSILON) * 100) / 100,
              t =
                Math.round(((a != null ? a : 1) + Number.EPSILON) * 100) / 100;
            (e === 0 && t === 0 && (d === "entered" || d === null)
              ? p("exited")
              : e > 0 &&
                t > 0 &&
                (d === "exited" || d === null) &&
                p("entered"),
              g("scale"));
          }),
          (b = [r, a, d]),
          (t[4] = d),
          (t[5] = r),
          (t[6] = a),
          (t[7] = C),
          (t[8] = b))
        : ((C = t[7]), (b = t[8])),
        c(C, b));
      var v;
      e: {
        if (f === "opacity") {
          v = l;
          break e;
        } else if (f === "scale") {
          v = d;
          break e;
        }
        v = void 0;
      }
      var S = v;
      return S;
    }
    l.default = p;
  },
  98,
);
