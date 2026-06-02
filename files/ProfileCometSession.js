__d(
  "ProfileCometSession",
  [
    "ProfileCometSessionConfig",
    "ProfileCometSessionUtil",
    "ProfileEngagementFalcoEvent",
    "WebStorage",
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
      return (g(t, a), d(t, a, n == null ? void 0 : n.tracePolicy), a);
    }
    function p(e, t) {
      var n = f(e);
      return n === null ? m(e, t) : n;
    }
    function _(t) {
      var n = s(t),
        o = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (n === null || !o) return null;
      var a = o.getItem(n);
      if (a == null) return null;
      var i = a.split(":"),
        l = i[0],
        u = i[1],
        c = parseInt(u, 10);
      return [l, c];
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
    function g(t, n) {
      var o = Date.now(),
        a = s(t),
        i = (e || (e = r("WebStorage"))).getLocalStorage();
      return i && a !== null
        ? ((e || (e = r("WebStorage"))).setItemGuarded(i, a, n + ":" + o), n)
        : null;
    }
    function h(e, t) {
      var n = p(e, t);
      return n == null ? null : (g(e, n), n);
    }
    function y(e, t) {
      return p(e, t);
    }
    function C(e, t, n) {
      if (t != null) {
        var r = f(e);
        if (r === null) return (d(e, t, n), g(e, t));
      }
      return h(e);
    }
    function b(e, t, n, r) {
      return o("ProfileCometSessionUtil").isSameProfileSession(t, n) ||
        r === "popstate" ||
        r === "initial"
        ? h(e, n)
        : m(e, n);
    }
    ((l.extend = h), (l.get = y), (l.initOrExtend = C), (l.navigate = b));
  },
  98,
);
