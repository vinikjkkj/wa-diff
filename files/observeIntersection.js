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
      var y = f,
        C = f.targetToCallbacksMap.get(t);
      (C == null &&
        (t instanceof Element
          ? f.intersectionObserver.observe(t)
          : t.observeUsing(f.intersectionObserver),
        (f.referenceCount += 1),
        (C = []),
        f.targetToCallbacksMap.set(t, C)),
        C.push(n));
      var b = t,
        v = n,
        S = !1,
        R = function () {
          if (!S) {
            var e = b,
              t = v;
            (e != null || s(0, 173939), t != null || s(0, 173937));
            var n = y.targetToCallbacksMap.get(e);
            if ((n != null || s(0, 2440), n.length === 1))
              (e instanceof Element
                ? y.intersectionObserver.unobserve(e)
                : e.unobserveUsing(y.intersectionObserver),
                y.targetToCallbacksMap.delete(e),
                (y.referenceCount -= 1),
                (b = null));
            else {
              var r = n.indexOf(t);
              (r !== -1 || s(0, 2441), n.splice(r, 1));
            }
            (y.referenceCount === 0 &&
              (p != null || s(0, 2442),
              delete p[a],
              l && Object.keys(p).length === 0 && d.delete(i)),
              (v = null),
              (b = null),
              (l = null),
              (S = !0));
          }
        };
      return {
        remove: function () {
          R && (R(), (R = null));
        },
      };
    }
    i.exports = p;
  },
  34,
);
