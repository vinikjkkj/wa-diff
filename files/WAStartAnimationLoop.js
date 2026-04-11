__d(
  "WAStartAnimationLoop",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = t != null ? t : {},
        r = n.delay,
        o = r === void 0 ? 0 : r,
        a = n.targetWindow,
        i = a === void 0 ? window : a,
        l,
        s,
        u,
        c = function () {
          ((s = !0), i.cancelAnimationFrame(l));
        },
        d = function (n) {
          ((u == null || n - u >= o) && (e(n), (u = n)),
            !s && (l = i.requestAnimationFrame(d)));
        };
      return ((l = i.requestAnimationFrame(d)), c);
    }
    i.startAnimationLoop = e;
  },
  66,
);
