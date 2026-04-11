__d(
  "WebSession",
  ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 36,
      u = 6,
      c = Math.pow(s, u);
    function d(e) {
      return e == null || Number.isFinite(e) === !1 || e <= 0 ? null : e;
    }
    function m(e) {
      if (e == null) return null;
      var t = parseInt(e, 10);
      return "" + t !== e
        ? (r("FBLogger")("web_session").warn(
            "Expected the web session expiry time to parse as an integer. Found `%s`.",
            String(e),
          ),
          null)
        : d(t);
    }
    function p(e) {
      return e == null
        ? null
        : e.length !== u
          ? (r("FBLogger")("web_session").warn(
              "Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.",
              u,
              e.length,
              e,
            ),
            null)
          : /^[a-z0-9]+$/.test(e) === !1
            ? (r("FBLogger")("web_session").warn(
                "Expected the web session ID to be a base-%d encoded string. Received `%s`.",
                s,
                e,
              ),
              null)
            : e;
    }
    function _(e) {
      if (e == null) return null;
      if (typeof e != "string" && !(e instanceof String))
        return (
          r("FBLogger")("web_session").warn(
            "A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.",
            e,
          ),
          null
        );
      var t = e.split(":"),
        n = t[0],
        o = t[1],
        a = m(o),
        i = p(n);
      return a == null || i == null ? null : { expiryTime: a, id: i };
    }
    function f() {
      var e = Math.floor(o("Random").random() * c),
        t = e.toString(s);
      return "0".repeat(u - t.length) + t;
    }
    var g = null;
    function h() {
      return (g == null && (g = f()), g);
    }
    function y(t) {
      t === void 0 && (t = Date.now());
      var n = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (n == null) return null;
      try {
        var o = _(n.getItem("Session"));
        return o && t < o.expiryTime ? o : null;
      } catch (e) {
        return null;
      }
    }
    function C() {
      var t = (e || (e = r("WebStorage"))).getSessionStorageForRead();
      if (t == null) return null;
      var n = p(t.getItem("TabId"));
      if (n == null) {
        var o = (e || (e = r("WebStorage"))).getSessionStorage();
        if (o == null) return null;
        var a = f();
        return (e.setItemGuarded(o, "TabId", a), a);
      }
      return n;
    }
    function b(t) {
      if (t !== void 0 && d(t) == null) {
        r("FBLogger")("web_session").warn(
          "`WebSession.extend()` was passed an invalid target expiry time `%s`.",
          t,
        );
        return;
      }
      var n = Date.now(),
        o = t != null ? t : n + r("WebSessionDefaultTimeoutMs"),
        a = y(n);
      if (!((a && a.expiryTime >= o) || o <= n)) {
        var i = (e || (e = r("WebStorage"))).getLocalStorage();
        if (i != null) {
          var l = a == null ? f() : a.id;
          (e || (e = r("WebStorage"))).setItemGuarded(
            i,
            "Session",
            l + ":" + o,
          );
        }
      }
    }
    function v() {
      var e;
      return (e = y()) == null ? void 0 : e.id;
    }
    function S() {
      var e,
        t,
        n = h(),
        r = (e = v()) != null ? e : "",
        o = (t = C()) != null ? t : "";
      return r + ":" + o + ":" + n;
    }
    function R() {
      return h();
    }
    ((l.getTabId = C),
      (l.extend = b),
      (l.getSessionId = v),
      (l.getId = S),
      (l.getPageId_DO_NOT_USE = R));
  },
  98,
);
