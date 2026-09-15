__d(
  "observeIntersection",
  ["invariant", "ErrorGuard"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = typeof WeakMap == "function",
      c = { __noRoot: !0 },
      d = u ? new WeakMap() : new Map();
    function m(e) {
      var t = e.threshold;
      if (Array.isArray(t)) {
        var n = {};
        (t.forEach(function (e) {
          n[String(e)] = !0;
        }),
          (t = Object.keys(n).sort()));
      }
      var r = babelHelpers.extends({}, e, { threshold: t }),
        o = {};
      return (
        Object.keys(r)
          .sort()
          .forEach(function (e) {
            o[e] = r[e];
          }),
        JSON.stringify(o)
      );
    }
    function p(t, n, o) {
      o === void 0 && (o = {});
      var a = m({
          rootMargin: o.rootMargin,
          scrollMargin: o.scrollMargin,
          threshold: o.threshold,
        }),
        i = o.root || c,
        l = d.get(i);
      l == null && ((l = {}), d.set(i, l));
      var p = l[a];
      if (p == null) {
        var _ = void 0;
        Array.isArray(o.threshold)
          ? (_ = o.threshold.slice())
          : typeof o.threshold == "number" && (_ = [o.threshold]);
        var f = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              p != null || s(0, 2439);
              var n = [],
                o = t.target.reactFragments;
              o != null &&
                o.forEach(function (e) {
                  var t,
                    r =
                      (t = p) == null ? void 0 : t.targetToCallbacksMap.get(e);
                  r != null && (n = n.concat(r));
                });
              var a = p.targetToCallbacksMap.get(t.target);
              (a != null && (n = n.concat(a)),
                n.length > 0 &&
                  n.forEach(function (n) {
                    (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [t], {
                      name: "observeIntersection",
                    });
                  }));
            });
          },
          babelHelpers.extends({}, o, { threshold: _ }),
        );
        ((p = {
          intersectionObserver: f,
          referenceCount: 0,
          targetToCallbacksMap: u ? new WeakMap() : new Map(),
        }),
          (l[a] = p));
      }
      var g = p.targetToCallbacksMap.get(t);
      (g == null &&
        (t instanceof Element
          ? p.intersectionObserver.observe(t)
          : t.observeUsing(p.intersectionObserver),
        (p.referenceCount += 1),
        (g = []),
        p.targetToCallbacksMap.set(t, g)),
        g.push(n));
      var h = t,
        y = n,
        C = !1,
        b = function () {
          if (!C) {
            var e = h,
              t = y;
            (e != null || s(0, 173939), t != null || s(0, 173937));
            var n = p.targetToCallbacksMap.get(e);
            if ((n != null || s(0, 2440), n.length === 1))
              (e instanceof Element
                ? p.intersectionObserver.unobserve(e)
                : e.unobserveUsing(p.intersectionObserver),
                p.targetToCallbacksMap.delete(e),
                (p.referenceCount -= 1),
                (h = null));
            else {
              var r = n.indexOf(t);
              (r !== -1 || s(0, 2441), n.splice(r, 1));
            }
            (p.referenceCount === 0 &&
              (l != null || s(0, 2442),
              delete l[a],
              i && Object.keys(l).length === 0 && d.delete(i)),
              (y = null),
              (h = null),
              (i = null),
              (C = !0));
          }
        };
      return {
        remove: function () {
          b && (b(), (b = null));
        },
      };
    }
    i.exports = p;
  },
  34,
);
