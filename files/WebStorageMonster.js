__d(
  "WebStorageMonster",
  [
    "AsyncRequest",
    "CacheStorage",
    "Event",
    "ExecutionEnvironment",
    "NetworkStatus",
    "StringTransformations",
    "UserActivity",
    "WebStorage",
    "WebStorageCleanupReason",
    "WebStorageMonsterLoggingURI",
    "ifRequired",
    "isEmpty",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1e4,
      d = 5,
      m = !1;
    function p(e) {
      var t = {};
      for (var n in e) {
        var o = e.getItem(n),
          a = r("StringTransformations").unicodeEscape(n);
        typeof o == "string" && (t[a] = o.length);
      }
      return t;
    }
    function _(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorage();
      !n ||
        t == null ||
        !t.keys ||
        h._getLocalStorageKeys().forEach(function (e) {
          t.keys.includes(e) && (n.removeItem(e), "" + e);
        });
    }
    function f(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorage();
      n &&
        h._getLocalStorageKeys().forEach(function (e) {
          t.some(function (t) {
            return new RegExp(t).test(e);
          }) || (n.removeItem(e), "" + e);
        });
    }
    function g(e, t) {
      if (
        (e === void 0 && (e = !1),
        t === void 0 && (t = c),
        r("UserActivity").isActive(t))
      ) {
        var n = Math.max(c, Math.floor(t / d));
        r("setTimeoutAcrossTransitions")(function () {
          g(e, n);
        }, n);
      } else {
        h.cleanNow(e);
        var o = t * d;
        r("setTimeoutAcrossTransitions")(function () {
          g(e, o);
        }, o);
      }
    }
    var h = {
        _getLocalStorageKeys: function () {
          var t = (e || (e = r("WebStorage"))).getLocalStorage();
          return t ? Object.keys(t) : [];
        },
        cleanNow: function (n) {
          n === void 0 && (n = !1);
          var t = Date.now(),
            o = {},
            a = (e || (e = r("WebStorage"))).getLocalStorage();
          a && (o.local_storage = p(a));
          var i = e.getSessionStorage();
          i && (o.session_storage = p(i));
          var l = !(s || (s = r("isEmpty")))(o),
            u = Date.now();
          if (((o.logtime = u - t), l)) {
            var c,
              d = r("WebStorageMonsterLoggingURI").uri;
            if (d === null) return null;
            var m = function () {
              new (r("AsyncRequest"))(d)
                .setData(o)
                .setHandler(function (e) {
                  var t = e.getPayload();
                  (t &&
                    t.keys &&
                    (t.keys = t.keys.map(
                      r("StringTransformations").unicodeUnescape,
                    )),
                    n || _(t),
                    r("NetworkStatus").reportSuccess());
                })
                .setErrorHandler(function () {
                  r("NetworkStatus").reportError();
                })
                .setOption("retries", 2)
                .send();
            };
            if (r("NetworkStatus").isOnline()) m();
            else {
              var f = function (t) {
                var e = t.online;
                e && (m(), c.remove());
              };
              c = r("NetworkStatus").onChange(f);
            }
          }
        },
        cleanOnLogout: function (n, a) {
          (o("WebStorageCleanupReason").setLastCleanupReason(a),
            r("CacheStorage").disablePersistentWrites(),
            r("ifRequired")("WebAsyncStorage", function (e) {
              e.disablePersistentWrites();
            }),
            f(n || []));
          var t = (e || (e = r("WebStorage"))).getSessionStorage();
          (t && t.clear(),
            r("ifRequired")("WebAsyncStorage", function (e) {
              e.clear(function () {});
            }));
        },
        registerLogoutForm: function (t, n) {
          r("Event").listen(t, "submit", function (e) {
            h.cleanOnLogout(n, "WebStorageMonster.registerLogoutForm");
          });
        },
        schedule: function (t) {
          (t === void 0 && (t = !1),
            !(m || !(u || (u = r("ExecutionEnvironment"))).isInBrowser) &&
              ((m = !0), g(t)));
        },
      },
      y = h;
    l.default = y;
  },
  98,
);
