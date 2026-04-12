__d(
  "useWAWebMaxVisibleFilters",
  ["react"],
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
      var n = m(h),
        r = n[0],
        o = n[1],
        a = d(null),
        i = d([]),
        l = d(null),
        s = d(0),
        v = u(
          function () {
            var t = e.current,
              n = a.current;
            if (!(t == null || n == null)) {
              var r = t.offsetWidth;
              if (!(r < C)) {
                for (
                  var l = r - p - _ - g - f, s = 0, u = 0, c = 0;
                  c < i.current.length;
                  c++
                ) {
                  var d = i.current[c];
                  if (d != null) {
                    var m = d.offsetWidth,
                      h = c === 0 ? m : m + f;
                    if (s + h <= l) ((s += h), u++);
                    else break;
                  }
                }
                var b = Math.max(u, y);
                o(b);
              }
            }
          },
          [e],
        );
      return (
        c(
          function () {
            var t = e.current;
            if (t != null) {
              var n = function () {
                  var e = Date.now(),
                    t = e - s.current;
                  (l.current != null && window.clearTimeout(l.current),
                    t >= b && ((s.current = e), v()),
                    (l.current = window.setTimeout(function () {
                      ((s.current = Date.now()), v());
                    }, b)));
                },
                r = new ResizeObserver(n);
              r.observe(t);
              var o = window.requestAnimationFrame(function () {
                v();
              });
              return function () {
                (r.disconnect(),
                  l.current != null && window.clearTimeout(l.current),
                  window.cancelAnimationFrame(o));
              };
            }
          },
          [e, v],
        ),
        c(
          function () {
            i.current = i.current.slice(0, t.length);
            var e = window.requestAnimationFrame(function () {
              v();
            });
            return function () {
              window.cancelAnimationFrame(e);
            };
          },
          [t, v],
        ),
        { maxVisibleCount: r, measurementContainerRef: a, pillRefs: i }
      );
    }
    l.default = v;
  },
  98,
);
