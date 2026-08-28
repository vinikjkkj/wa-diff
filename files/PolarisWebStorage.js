__d(
  "PolarisWebStorage",
  ["ErrorPubSub", "PolarisCookies", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {};
    window.storageCache = s;
    function u(e) {
      return o("PolarisCookies").needsToConfirmCookies()
        ? null
        : (Object.prototype.hasOwnProperty.call(s, e) || (s[e] = p(e)), s[e]);
    }
    function c(e) {
      try {
        var t = window[e];
        if (t) {
          var n = "__test__" + Date.now();
          (t.setItem(n, ""), t.removeItem(n));
        }
        return !0;
      } catch (e) {
        return !1;
      }
    }
    function d() {
      return c("localStorage");
    }
    function m() {
      return c("sessionStorage");
    }
    function p(e) {
      return c(e) ? window[e] : null;
    }
    function _() {
      return u("localStorage");
    }
    function f() {
      return u("sessionStorage");
    }
    function g(e) {
      for (var t = [], n = 0; n < e.length; n++) t.push(e.key(n));
      return t;
    }
    function h(t, n, o) {
      var a = null;
      try {
        t.setItem(n, o);
      } catch (l) {
        var i = g(t).map(function (e) {
          var n,
            r,
            o =
              (n = (r = t.getItem(e)) == null ? void 0 : r.length) != null
                ? n
                : -1;
          return e + "(" + o + ")";
        });
        ((a = r("err")(
          "Storage quota exceeded while setting %s(%s). Items(length) follows: %s",
          n,
          o.length,
          i.join(),
        )),
          (e || (e = r("ErrorPubSub"))).reportError(a));
      }
      return a;
    }
    var y = {
        getLocalStorage: _,
        getSessionStorage: f,
        isLocalStorageSupported: d,
        isSessionStorageSupported: m,
        setItemGuarded: h,
      },
      C = y;
    l.default = C;
  },
  98,
);
