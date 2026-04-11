__d(
  "CookieCore",
  ["CookieCoreConfig", "CookieDomain", "CookieStore"],
  function (t, n, r, o, a, i, l) {
    var e = /_js_(.*)/,
      s;
    function u() {
      return (s || (s = o("CookieStore").newCookieStore()), s);
    }
    function c() {
      return "." + r("CookieDomain").domain;
    }
    function d(e) {
      return window.self === window.top;
    }
    function m(e, t) {
      v(e) && _(e, t, R(e), L(e), S(e), E(e));
    }
    function p(e, t, n) {
      v(e) && _(e, t, R(e), L(e), S(e), E(e), n);
    }
    function _(e, t, n, r, o, a, i) {
      var l = Date.now(),
        s = n;
      if (s != null) {
        if (s > l) s -= l;
        else if (s === 1) {
          h(e, r, i);
          return;
        }
      }
      u().setCookie(l, e, t, r, i != null ? i : c(), s, o, a);
    }
    function f(e, t) {
      d(e) && m(e, t);
    }
    function g(e, t, n, r, o, a) {
      d(e) && _(e, t, n, r, o, null, a);
    }
    function h(e, t, n) {
      t === void 0 && (t = "/");
      var r = t || "/";
      u().clearCookie(e, r, n != null ? n : c());
    }
    function y(e) {
      return v(e) ? u().getCookie(e) : null;
    }
    function C(e) {
      return {
        insecure: e.i || !1,
        path: e.p || "/",
        ttlSeconds: e.t || 0,
        sameSite: e.s || "None",
      };
    }
    function b(t) {
      if (r("CookieCoreConfig")[t] !== void 0)
        return C(r("CookieCoreConfig")[t]);
      var n = t.match(e);
      return n && n.length > 1 ? b(n[1]) : null;
    }
    function v(e) {
      return b(e) !== null;
    }
    function S(e) {
      var t = b(e);
      return t == null ? !0 : !t.insecure;
    }
    function R(e) {
      var t = b(e);
      return t == null ? null : t.ttlSeconds * 1e3;
    }
    function L(e) {
      var t = b(e);
      return t == null ? "/" : t.path;
    }
    function E(e) {
      var t = b(e);
      return t == null || t.sameSite == null ? null : t.sameSite;
    }
    ((l.set = m),
      (l.setWithDomain_FOR_MESSENGER_LS_ONLY = p),
      (l.setWithoutChecks = _),
      (l.setIfFirstPartyContext = f),
      (l.setWithoutChecksIfFirstPartyContext = g),
      (l.clear = h),
      (l.get = y));
  },
  98,
);
