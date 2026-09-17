__d(
  "WAWebWaapiAnimateMerge",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set(["offset", "easing", "composite"]),
      l = "linear";
    function s(e) {
      var t = new Map();
      for (var n of e)
        for (var r of u(n)) {
          var o;
          t.set(r, ((o = t.get(r)) != null ? o : 0) + 1);
        }
      var a = function (n) {
          var e;
          return ((e = t.get(n)) != null ? e : 0) > 1;
        },
        i = [];
      e.forEach(function (e, t) {
        var n = u(e),
          r = n.filter(function (e) {
            return !a(e);
          });
        r.length !== 0 &&
          i.push({
            keyframes: r.length === n.length ? e.keyframes : c(e.keyframes, r),
            duration: e.duration,
            delay: e.delay,
            easing: e.easing,
            entryIndices: [t],
          });
      });
      for (var l of t) {
        var s = l[0],
          p = l[1];
        p <= 1 || i.push(m(s, d(e, s)));
      }
      return i;
    }
    function u(t) {
      var n = t.keyframes[t.keyframes.length - 1];
      return Object.keys(n).filter(function (t) {
        return !e.has(t);
      });
    }
    function c(e, t) {
      var n = new Set(t),
        r = [];
      for (var o of e) {
        var a = {};
        (o.offset != null && (a.offset = o.offset),
          o.easing != null && (a.easing = o.easing),
          o.composite != null && (a.composite = o.composite));
        var i = !1;
        for (var l of n) {
          var s = o[l];
          s != null && ((a[l] = String(s)), (i = !0));
        }
        i && r.push(a);
      }
      return r;
    }
    function d(e, t) {
      var n = [];
      return (
        e.forEach(function (e, r) {
          var o = e.keyframes[e.keyframes.length - 1];
          if (o[t] != null) {
            var a = e.keyframes.length === 2 ? e.keyframes[0] : null,
              i = a == null ? void 0 : a[t];
            n.push({
              from: i != null ? String(i) : null,
              to: String(o[t]),
              delay: e.delay,
              duration: e.duration,
              easing: e.easing,
              entryIndex: r,
            });
          }
        }),
        n
      );
    }
    function m(e, t) {
      var n = [].concat(t).sort(function (e, t) {
          return e.delay - t.delay || e.entryIndex - t.entryIndex;
        }),
        r = 0,
        o = n.map(function (e) {
          var t = Math.max(e.delay, r),
            n = t + Math.max(e.duration, 0);
          return ((r = n), { tween: e, start: t, end: n });
        }),
        a = r,
        i = [],
        s = null;
      return (
        o.forEach(function (t, n) {
          var r,
            o,
            l = t.end,
            u = t.start,
            c = t.tween,
            d = a === 0 ? 0 : u / a,
            m = a === 0 ? 1 : l / a,
            f =
              (r = (o = c.from) != null ? o : s) != null
                ? r
                : n === 0
                  ? _(e, c.to)
                  : c.to;
          n === 0 && d > 0 && i.push(p(e, f, { offset: 0, easing: c.easing }));
          var g = i[i.length - 1];
          (g != null && g.offset === d && String(g[e]) === f
            ? (g.easing = c.easing)
            : i.push(p(e, f, { offset: d, easing: c.easing })),
            i.push(p(e, c.to, { offset: m })),
            (s = c.to));
        }),
        {
          keyframes: i,
          duration: a,
          delay: 0,
          easing: l,
          entryIndices: n.map(function (e) {
            return e.entryIndex;
          }),
        }
      );
    }
    function p(e, t, n) {
      var r = {};
      return (
        (n == null ? void 0 : n.offset) != null && (r.offset = n.offset),
        (r[e] = t),
        (n == null ? void 0 : n.easing) != null && (r.easing = n.easing),
        r
      );
    }
    function _(e, t) {
      return e !== "transform"
        ? t
        : t.replace(/([a-zA-Z]+)\(([^)]*)\)/g, function (e, t) {
            return /^translate/i.test(t)
              ? t + "(0px)"
              : /^scale/i.test(t)
                ? t + "(1)"
                : /^rotate/i.test(t)
                  ? t + "(0deg)"
                  : t + "(0)";
          });
    }
    i.mergeNodeEntries = s;
  },
  66,
);
