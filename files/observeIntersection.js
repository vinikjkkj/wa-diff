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
      p == null && ((p = {}), d.set(i, p));
      var _ = p[a];
      if (_ == null) {
        var f = void 0;
        Array.isArray(o.threshold)
          ? (f = o.threshold.slice())
          : typeof o.threshold == "number" && (f = [o.threshold]);
        var g = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              _ != null || s(0, 2439);
              var n = [],
                o = t.target.reactFragments;
              o != null &&
                o.forEach(function (e) {
                  var t,
                    r =
                      (t = _) == null ? void 0 : t.targetToCallbacksMap.get(e);
                  r != null && (n = n.concat(r));
                });
              var a = _.targetToCallbacksMap.get(t.target);
              (a != null && (n = n.concat(a)),
                n.length > 0 &&
                  n.forEach(function (n) {
                    (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [t], {
                      name: "observeIntersection",
                    });
                  }));
            });
          },
          babelHelpers.extends({}, o, { threshold: f }),
        );
        ((_ = {
          intersectionObserver: g,
          referenceCount: 0,
          targetToCallbacksMap: u ? new WeakMap() : new Map(),
        }),
          (p[a] = _));
      }
      var h = _.targetToCallbacksMap.get(t);
      (h == null &&
        (t instanceof Element
          ? _.intersectionObserver.observe(t)
          : t.observeUsing(_.intersectionObserver),
        (_.referenceCount += 1),
        (h = []),
        _.targetToCallbacksMap.set(t, h)),
        h.push(n));
      var y = t,
        C = n,
        b = !1,
        v = function () {
          if (!b) {
            var e = y,
              t = C;
            (e != null || s(0, 173939), t != null || s(0, 173937));
            var n = _.targetToCallbacksMap.get(e);
            if ((n != null || s(0, 2440), n.length === 1))
              (e instanceof Element
                ? _.intersectionObserver.unobserve(e)
                : e.unobserveUsing(_.intersectionObserver),
                _.targetToCallbacksMap.delete(e),
                (_.referenceCount -= 1),
                (y = null));
            else {
              var r = n.indexOf(t);
              (r !== -1 || s(0, 2441), n.splice(r, 1));
            }
            (_.referenceCount === 0 &&
              (p != null || s(0, 2442),
              delete p[a],
              l && Object.keys(p).length === 0 && d.delete(i)),
              (C = null),
              (y = null),
              (l = null),
              (b = !0));
          }
        };
      return {
        remove: function () {
          v && (v(), (v = null));
        },
      };
    }
    i.exports = p;
  },
  34,
);
