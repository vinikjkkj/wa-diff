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
    var d = new Set(["social_recommendations"]);
    function m(e) {
      var t;
      if (e == null) return null;
      var n =
        (t = o("ConstUriUtils").getUri(e)) == null
          ? void 0
          : t.getQueryParam("ref");
      return typeof n == "string" && d.has(n) ? n : null;
    }
    function p(e, t, n, o) {
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
    function _(t, n) {
      var o = (e || (e = r("WebStorage"))).getLocalStorage();
      if (!o) return null;
      var a = r("uuidv4")();
      return (
        v(t, a),
        p(
          t,
          a,
          n == null ? void 0 : n.tracePolicy,
          m(n == null ? void 0 : n.url),
        ),
        a
      );
    }
    function f(e, t) {
      var n = y(e);
      return n === null ? _(e, t) : n;
    }
    function g(t) {
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
    function h(e) {
      var t = g(e);
      if (t !== null) {
        var n = t[0],
          r = t[1];
        if (Date.now() - r < o("ProfileCometSessionConfig").TIMEOUT_MS)
          return n;
      }
      return null;
    }
    function y(e) {
      return h(s(e));
    }
    function C(t) {
      var n = s(t);
      if (n === null) return null;
      var o = n + ":logging",
        a = h(o);
      if (a !== null) return a;
      var i = (e || (e = r("WebStorage"))).getLocalStorage();
      if (!i) return null;
      var l = r("uuidv4")();
      return b(o, l);
    }
    function b(t, n) {
      var o = Date.now(),
        a = (e || (e = r("WebStorage"))).getLocalStorage();
      return a && t != null
        ? ((e || (e = r("WebStorage"))).setItemGuarded(a, t, n + ":" + o), n)
        : null;
    }
    function v(e, t) {
      return b(s(e), t);
    }
    function S(e, t) {
      var n = f(e, t);
      return n == null ? null : (v(e, n), n);
    }
    function R(e, t) {
      var n;
      return r("gkx")("7772") ? ((n = y(e)) != null ? n : C(e)) : f(e, t);
    }
    function L(e, t, n, r) {
      if (t != null) {
        var o = y(e);
        if (o === null) return (p(e, t, n, m(r)), v(e, t));
      }
      return S(e);
    }
    function E(e, t, n, r) {
      return o("ProfileCometSessionUtil").isSameProfileSession(t, n) ||
        r === "popstate" ||
        r === "initial"
        ? S(e, n)
        : _(e, n);
    }
    ((l.extend = S), (l.get = R), (l.initOrExtend = L), (l.navigate = E));
  },
  98,
);
