__d(
  "CometAIHTSLostSessionPageReload",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1,
      u = "maisa_lost_session_reload:";
    function c(e) {
      return u + e;
    }
    function d(e, t) {
      try {
        var n,
          r = JSON.parse((n = e.getItem(c(t))) != null ? n : "null");
        if (r != null && typeof r == "object") {
          var o = r.reloads,
            a = r.message;
          return {
            message: typeof a == "string" ? a : null,
            reloads: typeof o == "number" ? o : 0,
          };
        }
      } catch (e) {
        return { message: null, reloads: s };
      }
      return { message: null, reloads: 0 };
    }
    function m(t, n, o) {
      var a = c(n),
        i = JSON.stringify(o);
      return (
        (e || (e = r("WebStorage"))).setItemGuarded(t, a, i) == null &&
        t.getItem(a) === i
      );
    }
    function p(e) {
      return (e != null ? e : []).some(function (e) {
        return (e == null ? void 0 : e.requires_page_reload) === !0;
      });
    }
    function _(t, n, o) {
      var a = (e || (e = r("WebStorage"))).getSessionStorage();
      if (a == null) return !1;
      var i = d(a, t),
        l = i.reloads;
      return l >= s || !m(a, t, { message: n, reloads: l + 1 })
        ? !1
        : (o(), !0);
    }
    function f(t) {
      var n = (e || (e = r("WebStorage"))).getSessionStorageForRead();
      return n == null ? null : d(n, t).message;
    }
    function g(t) {
      var n = (e || (e = r("WebStorage"))).getSessionStorageForRead();
      if (n != null) {
        var o = d(n, t);
        if (o.message != null) {
          var a = e.getSessionStorage();
          a != null && m(a, t, { message: null, reloads: o.reloads });
        }
      }
    }
    ((l.MAX_LOST_SESSION_RELOADS_PER_THREAD = s),
      (l.sendResponseRequiresPageReload = p),
      (l.reloadPageForLostSession = _),
      (l.getLostSessionResendMessage = f),
      (l.clearLostSessionResendMessage = g));
  },
  98,
);
