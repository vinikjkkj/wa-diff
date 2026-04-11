__d(
  "useWAWebIntersection",
  ["WAHash", "WANullthrows", "err", "once", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = { root: null, rootMargin: "0px", threshold: 0 },
      m = { intersectionRatio: 0, isIntersecting: !1 };
    function p(e) {
      e === void 0 && (e = {});
      var t = c(null),
        n = t[0],
        r = t[1],
        o = c(m),
        a = o[0],
        i = o[1],
        l = g(e);
      return (
        u(
          function () {
            if (n) return _().observe(n, i, e);
          },
          [n, l],
        ),
        [r, a]
      );
    }
    var _ = r("once")(function () {
        return new f();
      }),
      f = function () {
        var e = this;
        ((this.$1 = new Map()),
          (this.$2 = function (t) {
            var n = g(t);
            if (!e.$1.has(n)) {
              var o = new Map(),
                a = new IntersectionObserver(function (e) {
                  for (var t of e) {
                    var n = o.get(t.target),
                      r = t.intersectionRatio,
                      a = t.isIntersecting;
                    n == null || n({ intersectionRatio: r, isIntersecting: a });
                  }
                }, t);
              e.$1.set(n, { observer: a, callbacks: o });
            }
            return r("WANullthrows")(e.$1.get(n));
          }),
          (this.$3 = function (t) {
            var n = g(t);
            e.$1.delete(n);
          }),
          (this.observe = function (t, n, o) {
            var a = e.$2(o),
              i = a.callbacks,
              l = a.observer;
            if (i.has(t))
              throw r("err")("You can't observe the same element twice.");
            return (
              i.set(t, n),
              l.observe(t),
              function () {
                (l.unobserve(t),
                  i.delete(t),
                  i.size === 0 && (l.disconnect(), e.$3(o)));
              }
            );
          }));
      };
    function g(e) {
      var t = babelHelpers.extends({}, d, e),
        n = t.root,
        o = t.rootMargin,
        a = t.threshold,
        i = [n, o, a],
        l = i
          .map(function (e) {
            return r("WAHash")(e);
          })
          .join("-");
      return l;
    }
    l.default = p;
  },
  98,
);
