__d(
  "cometVirtualizationMarginRecord",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2,
      l = 200,
      s = 400,
      u = 2400,
      c = 8,
      d = 1e4,
      m = 20,
      p = /^[a-zA-Z0-9_]{1,64}$/,
      _ = new Set(["__proto__", "constructor", "prototype"]);
    function f(e) {
      if (Number.isNaN(e) || e <= 0) return String(s);
      var t = Math.min(u, Math.max(s, e));
      return String(Math.floor(t / l) * l);
    }
    function g(e) {
      return !_.has(e) && p.test(e);
    }
    function h(e) {
      var t = Number(e);
      return (
        Number.isInteger(t) &&
        t >= s &&
        t <= u &&
        t % l === 0 &&
        String(t) === e
      );
    }
    function y(e) {
      return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : null;
    }
    function C(e) {
      var t = y(e);
      return t != null && Number.isInteger(t) ? t : null;
    }
    function b(e) {
      return typeof e == "number" && Number.isFinite(e) && e >= 0 ? e : null;
    }
    function v(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.bottomMargin,
        r = e.sampleCount,
        o = e.topMargin,
        a = b(o),
        i = b(n),
        l = b(r);
      return a == null ||
        i == null ||
        l == null ||
        !Number.isInteger(l) ||
        a > t ||
        i > t
        ? null
        : { bottomMargin: i, sampleCount: l, topMargin: a };
    }
    function S(e) {
      return e === u ? d : e + l;
    }
    function R(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.bottomMargin,
        r = e.lastUpdated,
        o = e.sampleCount,
        a = e.sessionBase,
        i = e.topMargin,
        l = y(i),
        s = y(n),
        u = C(o);
      if (l == null || s == null || u == null || l > t || s > t) return null;
      var c = typeof r == "number" && Number.isFinite(r) ? r : 0;
      return {
        bottomMargin: s,
        lastUpdated: c,
        sampleCount: u,
        sessionBase: v(a, t),
        topMargin: l,
      };
    }
    function L(t) {
      try {
        if (t == null || typeof t != "object") return null;
        var n = t.records,
          r = t.version;
        if (r !== e || n == null || typeof n != "object") return null;
        var o = {};
        for (var a of Object.keys(n))
          if (g(a)) {
            var i = null;
            try {
              i = n[a];
            } catch (e) {
              i = null;
            }
            if (!(i == null || typeof i != "object")) {
              var l = {};
              for (var s of Object.keys(i))
                if (h(s)) {
                  var u = null;
                  try {
                    u = R(i[s], S(Number(s)));
                  } catch (e) {
                    u = null;
                  }
                  u != null && (l[s] = u);
                }
              Object.keys(l).length > 0 && (o[a] = l);
            }
          }
        return { records: o, version: e };
      } catch (e) {
        return null;
      }
    }
    function E() {
      return { records: {}, version: e };
    }
    function k(e) {
      return Object.keys(e).reduce(function (t, n) {
        return Math.max(t, e[n].lastUpdated);
      }, 0);
    }
    function I(e) {
      var t = e.records;
      if (t != null) {
        var n = Object.keys(t);
        n.forEach(function (e) {
          var n = t[e],
            r = Object.keys(n);
          if (r.length === 0) {
            delete t[e];
            return;
          }
          r.length <= c ||
            r
              .sort(function (e, t) {
                return n[e].lastUpdated - n[t].lastUpdated;
              })
              .slice(0, r.length - c)
              .forEach(function (e) {
                delete n[e];
              });
        });
        var r = Object.keys(t);
        r.length <= m ||
          r
            .sort(function (e, n) {
              return k(t[e]) - k(t[n]);
            })
            .slice(0, r.length - m)
            .forEach(function (e) {
              delete t[e];
            });
      }
    }
    ((i.PERSISTED_MARGIN_VERSION = e),
      (i.MAX_BUCKETS_PER_SURFACE = c),
      (i.MAX_SURFACES = m),
      (i.getScreenBucket = f),
      (i.isValidSurface = g),
      (i.parsePersistedMarginPayload = L),
      (i.createEmptyPayload = E),
      (i.pruneRecords = I));
  },
  66,
);
