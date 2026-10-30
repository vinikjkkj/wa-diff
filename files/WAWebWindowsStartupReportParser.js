__d(
  "WAWebWindowsStartupReportParser",
  [],
  function (t, n, r, o, a, i) {
    var e = 1,
      l = 7,
      s = /^[\w:]{1,64}$/,
      u = /^[a-z0-9_]{1,64}$/,
      c = /^hyb_[a-z0-9_]{1,60}$/,
      d = 128;
    function m(e) {
      var t = C(y(e));
      if (t == null || !p(t)) return null;
      var n = Array.isArray(t.attempts) ? t.attempts : [],
        r = t.current == null ? null : _(t.current);
      return t.current != null && r == null
        ? null
        : {
            level: b(t.level),
            nowSinceProcessStartMs: b(t.nowSinceProcessStartMs),
            current: r,
            currentPending: t.currentPending === !0,
            attempts: n.map(f).filter(Boolean).slice(0, l),
          };
    }
    function p(t) {
      return (
        t.version === e &&
        E(t.level) &&
        R(t.nowSinceProcessStartMs) &&
        Array.isArray(t.attempts)
      );
    }
    function _(e) {
      var t = C(e),
        n = C(t == null ? void 0 : t.points),
        r = g(t == null ? void 0 : t.annotations);
      return t == null || n == null || r == null || !k(t.id) || !E(t.navOutcome)
        ? null
        : {
            id: String(t.id),
            navOutcome: b(t.navOutcome),
            points: h(n, u, S, b),
            annotations: r,
          };
    }
    function f(e) {
      var t = C(e),
        n = g(t == null ? void 0 : t.annotations);
      return t == null || n == null || !k(t.id) || !E(t.navOutcome)
        ? null
        : { id: String(t.id), navOutcome: b(t.navOutcome), annotations: n };
    }
    function g(e) {
      var t,
        n,
        r,
        o = C(e);
      return o == null
        ? null
        : {
            int: h((t = C(o.int)) != null ? t : {}, c, L, b),
            string: h((n = C(o.string)) != null ? n : {}, c, I, String),
            bool: h((r = C(o.bool)) != null ? r : {}, c, T, Boolean),
          };
    }
    function h(e, t, n, r) {
      var o = {};
      return (
        Object.keys(e).forEach(function (a) {
          var i = e[a];
          t.test(a) && n(i) && (o[a] = r(i));
        }),
        o
      );
    }
    function y(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function C(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function b(e) {
      return typeof e == "number" ? e : 0;
    }
    function v(e) {
      return typeof e == "number" && Number.isFinite(e);
    }
    function S(e) {
      return v(e) && b(e) >= 0;
    }
    function R(e) {
      return v(e) && b(e) > 0;
    }
    function L(e) {
      return Number.isSafeInteger(e);
    }
    function E(e) {
      return L(e) && b(e) >= 0;
    }
    function k(e) {
      return typeof e == "string" && s.test(e);
    }
    function I(e) {
      return typeof e == "string" && e.length <= d;
    }
    function T(e) {
      return typeof e == "boolean";
    }
    i.parseStartupReport = m;
  },
  66,
);
