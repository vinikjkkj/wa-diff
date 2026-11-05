__d(
  "ProfileCometSession",
  [
    "ProfileCometSessionConfig",
    "ProfileCometSessionUtil",
    "ProfileEngagementFalcoEvent",
    "WebStorage",
    "gkx",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = u();
      return t === null
        ? null
        : o("ProfileCometSessionConfig").PREFIX + ":" + e + ":" + t;
    }
    function u() {
      var t = (e || (e = r("WebStorage"))).getSessionStorageForRead();
      if (!t) return null;
      var n = o("ProfileCometSessionConfig").PREFIX + ":tabID",
        a = t.getItem(n);
      if (a == null) {
        a = r("uuidv4")();
        var i = (e || (e = r("WebStorage"))).getSessionStorage();
        if (!i) return null;
        i.setItem(n, a);
      }
      return a;
    }
    function c(e) {
      return e == null
        ? "timeline"
        : e === "comet.profile.timeline.grid"
          ? "timeline_overview"
          : e.startsWith("comet.profile.collection.friend")
            ? "friends_page"
            : e.startsWith("comet.profile.collection")
              ? "about_page"
              : "timeline";
    }
    function d(e, t, n) {
      r("ProfileEngagementFalcoEvent").log(function () {
        return {
          content_id: null,
          profile_event_type: "profile_session_impression",
          profile_id: e,
          profile_product_bucket: "profile_core",
          profile_session_id: t,
          profile_surface: c(n),
        };
      });
    }
    function m(t, n) {
      var o = (e || (e = r("WebStorage"))).getLocalStorage();
      if (!o) return null;
      var a = r("uuidv4")();
      return (C(t, a), d(t, a, n == null ? void 0 : n.tracePolicy), a);
    }
    function p(e, t) {
      var n = g(e);
      return n === null ? m(e, t) : n;
    }
    function _(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (t == null || !n) return null;
      var o = n.getItem(t);
      if (o == null) return null;
      var a = o.split(":"),
        i = a[0],
        l = a[1],
        s = parseInt(l, 10);
      return [i, s];
    }
    function f(e) {
      var t = _(e);
      if (t !== null) {
        var n = t[0],
          r = t[1];
        if (Date.now() - r < o("ProfileCometSessionConfig").TIMEOUT_MS)
          return n;
      }
      return null;
    }
    function g(e) {
      return f(s(e));
    }
    function h(t) {
      var n = s(t);
      if (n === null) return null;
      var o = n + ":logging",
        a = f(o);
      if (a !== null) return a;
      var i = (e || (e = r("WebStorage"))).getLocalStorage();
      if (!i) return null;
      var l = r("uuidv4")();
      return y(o, l);
    }
    function y(t, n) {
      var o = Date.now(),
        a = (e || (e = r("WebStorage"))).getLocalStorage();
      return a && t != null
        ? ((e || (e = r("WebStorage"))).setItemGuarded(a, t, n + ":" + o), n)
        : null;
    }
    function C(e, t) {
      return y(s(e), t);
    }
    function b(e, t) {
      var n = p(e, t);
      return n == null ? null : (C(e, n), n);
    }
    function v(e, t) {
      var n;
      return r("gkx")("7772") ? ((n = g(e)) != null ? n : h(e)) : p(e, t);
    }
    function S(e, t, n) {
      if (t != null) {
        var r = g(e);
        if (r === null) return (d(e, t, n), C(e, t));
      }
      return b(e);
    }
    function R(e, t, n, r) {
      return o("ProfileCometSessionUtil").isSameProfileSession(t, n) ||
        r === "popstate" ||
        r === "initial"
        ? b(e, n)
        : m(e, n);
    }
    ((l.extend = b), (l.get = v), (l.initOrExtend = S), (l.navigate = R));
  },
  98,
);
