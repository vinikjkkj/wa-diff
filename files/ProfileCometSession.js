__d(
  "ProfileCometSession",
  [
    "ConstUriUtils",
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
    function d(e) {
      var t;
      if (e == null) return null;
      var n =
        (t = o("ConstUriUtils").getUri(e)) == null
          ? void 0
          : t.getQueryParam("ref");
      return typeof n == "string" && n !== "" ? n : null;
    }
    function m(e, t, n, o) {
      (o === void 0 && (o = null),
        r("ProfileEngagementFalcoEvent").log(function () {
          return babelHelpers.extends(
            { content_id: null },
            o != null ? { event_metadata: { ref: o } } : null,
            {
              profile_event_type: "profile_session_impression",
              profile_id: e,
              profile_product_bucket: "profile_core",
              profile_session_id: t,
              profile_surface: c(n),
            },
          );
        }));
    }
    function p(t, n) {
      var o = (e || (e = r("WebStorage"))).getLocalStorage();
      if (!o) return null;
      var a = r("uuidv4")();
      return (b(t, a), m(t, a, n == null ? void 0 : n.tracePolicy), a);
    }
    function _(e, t) {
      var n = h(e);
      return n === null ? p(e, t) : n;
    }
    function f(t) {
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
    function g(e) {
      var t = f(e);
      if (t !== null) {
        var n = t[0],
          r = t[1];
        if (Date.now() - r < o("ProfileCometSessionConfig").TIMEOUT_MS)
          return n;
      }
      return null;
    }
    function h(e) {
      return g(s(e));
    }
    function y(t) {
      var n = s(t);
      if (n === null) return null;
      var o = n + ":logging",
        a = g(o);
      if (a !== null) return a;
      var i = (e || (e = r("WebStorage"))).getLocalStorage();
      if (!i) return null;
      var l = r("uuidv4")();
      return C(o, l);
    }
    function C(t, n) {
      var o = Date.now(),
        a = (e || (e = r("WebStorage"))).getLocalStorage();
      return a && t != null
        ? ((e || (e = r("WebStorage"))).setItemGuarded(a, t, n + ":" + o), n)
        : null;
    }
    function b(e, t) {
      return C(s(e), t);
    }
    function v(e, t) {
      var n = _(e, t);
      return n == null ? null : (b(e, n), n);
    }
    function S(e, t) {
      var n;
      return r("gkx")("7772") ? ((n = h(e)) != null ? n : y(e)) : _(e, t);
    }
    function R(e, t, n, r) {
      if (t != null) {
        var o = h(e);
        if (o === null) return (m(e, t, n, d(r)), b(e, t));
      }
      return v(e);
    }
    function L(e, t, n, r) {
      return o("ProfileCometSessionUtil").isSameProfileSession(t, n) ||
        r === "popstate" ||
        r === "initial"
        ? v(e, n)
        : p(e, n);
    }
    ((l.extend = v), (l.get = S), (l.initOrExtend = R), (l.navigate = L));
  },
  98,
);
