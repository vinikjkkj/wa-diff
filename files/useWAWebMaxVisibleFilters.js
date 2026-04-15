__d(
  "useWAWebMaxVisibleFilters",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState,
      p = 20,
      _ = 10,
      f = 8,
      g = 40,
      h = 2,
      y = 1,
      C = 100,
      b = 50;
    function v(e, t) {
      var n = o("react-compiler-runtime").c(15),
        r = m(h),
        a = r[0],
        i = r[1],
        l = d(null),
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = []), (n[0] = s))
        : (s = n[0]);
      var u = d(s),
        v = d(null),
        S = d(0),
        R;
      n[1] !== e
        ? ((R = function () {
            var t = e.current,
              n = l.current;
            if (!(t == null || n == null)) {
              var r = t.offsetWidth;
              if (!(r < C)) {
                for (
                  var o = r - p - _ - g - f, a = 0, s = 0, c = 0;
                  c < u.current.length;
                  c++
                ) {
                  var d = u.current[c];
                  if (d != null) {
                    var m = d.offsetWidth,
                      h = c === 0 ? m : m + f;
                    if (a + h <= o) ((a = a + h), s++);
                    else break;
                  }
                }
                var b = Math.max(s, y);
                i(b);
              }
            }
          }),
          (n[1] = e),
          (n[2] = R))
        : (R = n[2]);
      var L = R,
        E,
        k;
      (n[3] !== L || n[4] !== e
        ? ((E = function () {
            var t = e.current;
            if (t != null) {
              var n = function () {
                  var e = Date.now(),
                    t = e - S.current;
                  (v.current != null && window.clearTimeout(v.current),
                    t >= b && ((S.current = e), L()),
                    (v.current = window.setTimeout(function () {
                      ((S.current = Date.now()), L());
                    }, b)));
                },
                r = new ResizeObserver(n);
              r.observe(t);
              var o = window.requestAnimationFrame(function () {
                L();
              });
              return function () {
                (r.disconnect(),
                  v.current != null && window.clearTimeout(v.current),
                  window.cancelAnimationFrame(o));
              };
            }
          }),
          (k = [e, L]),
          (n[3] = L),
          (n[4] = e),
          (n[5] = E),
          (n[6] = k))
        : ((E = n[5]), (k = n[6])),
        c(E, k));
      var I;
      n[7] !== L || n[8] !== t.length
        ? ((I = function () {
            u.current = u.current.slice(0, t.length);
            var e = window.requestAnimationFrame(function () {
              L();
            });
            return function () {
              window.cancelAnimationFrame(e);
            };
          }),
          (n[7] = L),
          (n[8] = t.length),
          (n[9] = I))
        : (I = n[9]);
      var T;
      (n[10] !== L || n[11] !== t
        ? ((T = [t, L]), (n[10] = L), (n[11] = t), (n[12] = T))
        : (T = n[12]),
        c(I, T));
      var D;
      return (
        n[13] !== a
          ? ((D = {
              maxVisibleCount: a,
              measurementContainerRef: l,
              pillRefs: u,
            }),
            (n[13] = a),
            (n[14] = D))
          : (D = n[14]),
        D
      );
    }
    l.default = v;
  },
  98,
);
