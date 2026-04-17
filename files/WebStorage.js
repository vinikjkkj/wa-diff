__d(
  "WebStorage",
  ["CookieConsent", "FBLogger", "err", "getErrorSafe", "isQuotaExceededError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = {},
      c = "localStorage",
      d = "sessionStorage",
      m = !1,
      p = typeof window != "undefined" ? window : self;
    function _(t, n, o) {
      return (e || (e = r("CookieConsent"))).isFirstPartyStorageAllowed()
        ? (Object.prototype.hasOwnProperty.call(t, o) || (t[o] = n(o)), t[o])
        : (m ||
            (r("FBLogger")("web_storage").warn(
              "Failed to get %s because of missing cookie consent",
              o.toString(),
            ),
            (m = !0)),
          null);
    }
    function f(e) {
      try {
        return p[e];
      } catch (e) {
        r("FBLogger")("web_storage").warn(
          "Failed to get storage for read %s",
          r("getErrorSafe")(e).message,
        );
      }
      return null;
    }
    function g(e) {
      var t = null;
      try {
        if (
          ((t = p[e]),
          t != null &&
            typeof t.setItem == "function" &&
            typeof t.removeItem == "function")
        ) {
          var n = "__test__" + Date.now();
          (t.setItem(n, ""), t.removeItem(n));
        } else return null;
      } catch (n) {
        if (
          o("isQuotaExceededError").isStorageQuotaExceededError(
            t,
            r("getErrorSafe")(n),
          ) === !1
        )
          return (
            r("FBLogger")("web_storage")
              .catching(r("getErrorSafe")(n))
              .warn("Failed to get WebStorage of type `%s`", e),
            null
          );
      }
      return t;
    }
    function h(e) {
      var t = null;
      try {
        if (
          ((t = p[e]),
          t != null &&
            typeof t.setItem == "function" &&
            typeof t.removeItem == "function")
        ) {
          var n = "__test__" + Date.now();
          (t.setItem(n, ""), t.removeItem(n));
        }
      } catch (e) {
        if (
          o("isQuotaExceededError").isStorageQuotaExceededError(
            t,
            r("getErrorSafe")(e),
          ) === !0
        )
          return !0;
      }
      return !1;
    }
    function y(e) {
      for (var t = [], n = 0; n < e.length; n++) t.push(e.key(n) || "");
      return t;
    }
    function C(e, t, n) {
      if (e == null) return r("err")("storage cannot be null");
      var o = null;
      try {
        e.setItem(t, n);
      } catch (i) {
        var a = y(e).map(function (t) {
          var n = (e.getItem(t) || "").length;
          return t + "(" + n + ")";
        });
        o = r("err")(
          "%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s",
          r("getErrorSafe")(i).name ? r("getErrorSafe")(i).name + ": " : "",
          t,
          n.length,
          a.join(),
        );
      }
      return o;
    }
    var b = {
        getLocalStorage: function () {
          return _(s, g, c);
        },
        getAllowlistedKeyFromLocalStorage: function (t) {
          var e;
          return (e = _(u, f, c)) == null ? void 0 : e.getItem(t);
        },
        getSessionStorage: function () {
          return _(s, g, d);
        },
        getAllowlistedKeyFromSessionStorage: function (t) {
          var e;
          return (e = _(u, f, d)) == null ? void 0 : e.getItem(t);
        },
        getLocalStorageForRead: function () {
          return _(u, f, c);
        },
        getSessionStorageForRead: function () {
          return _(u, f, d);
        },
        isLocalStorageQuotaExceeded: function () {
          return h(c);
        },
        isSessionStorageQuotaExceeded: function () {
          return h(d);
        },
        setItemGuarded: C,
        setAllowlistedKeyToLocalStorage: function (t, n, r) {
          return C(t, n, r);
        },
        clearCaches: function () {
          ((s = {}), (u = {}));
        },
      },
      v = b;
    l.default = v;
  },
  98,
);
