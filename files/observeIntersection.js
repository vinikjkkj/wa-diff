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
        l = i,
        p = d.get(i);
      if (p == null) {
        var _ = {};
        ((p = _), d.set(i, _));
      }
      var f = p[a];
      if (f == null) {
        var g = void 0;
        Array.isArray(o.threshold)
          ? (g = o.threshold.slice())
          : typeof o.threshold == "number" && (g = [o.threshold]);
        var h = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              f != null || s(0, 2439);
              var n = [],
                o = t.target.reactFragments;
              o != null &&
                o.forEach(function (e) {
                  var t,
                    r =
                      (t = f) == null ? void 0 : t.targetToCallbacksMap.get(e);
                  r != null && (n = n.concat(r));
                });
              var a = f.targetToCallbacksMap.get(t.target);
              (a != null && (n = n.concat(a)),
                n.length > 0 &&
                  n.forEach(function (n) {
                    (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [t], {
                      name: "observeIntersection",
                    });
                  }));
            });
          },
          babelHelpers.extends({}, o, { threshold: g }),
        );
        ((f = {
          intersectionObserver: h,
          referenceCount: 0,
          targetToCallbacksMap: u ? new WeakMap() : new Map(),
        }),
          (p[a] = f));
      }
      var y = f.targetToCallbacksMap.get(t);
      (y == null &&
        (t instanceof Element
          ? f.intersectionObserver.observe(t)
          : t.observeUsing(f.intersectionObserver),
        (f.referenceCount += 1),
        (y = []),
        f.targetToCallbacksMap.set(t, y)),
        y.push(n));
      var C = t,
        b = n,
        v = !1,
        S = function () {
          if (!v) {
            var e = C,
              t = b;
            (e != null || s(0, 173939), t != null || s(0, 173937));
            var n = f.targetToCallbacksMap.get(e);
            if ((n != null || s(0, 2440), n.length === 1))
              (e instanceof Element
                ? f.intersectionObserver.unobserve(e)
                : e.unobserveUsing(f.intersectionObserver),
                f.targetToCallbacksMap.delete(e),
                (f.referenceCount -= 1),
                (C = null));
            else {
              var r = n.indexOf(t);
              (r !== -1 || s(0, 2441), n.splice(r, 1));
            }
            (f.referenceCount === 0 &&
              (p != null || s(0, 2442),
              delete p[a],
              l && Object.keys(p).length === 0 && d.delete(i)),
              (b = null),
              (C = null),
              (l = null),
              (v = !0));
          }
        };
      return {
        remove: function () {
          S && (S(), (S = null));
        },
      };
    }
    i.exports = p;
  },
  34,
);
