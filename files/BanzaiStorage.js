__d(
  "BanzaiStorage",
  [
    "BanzaiConsts",
    "BanzaiUtils",
    "CurrentUser",
    "SetIdleTimeoutAcrossTransitions",
    "WebSession",
    "WebStorage",
    "WebStorageMutex",
    "cr:8958",
    "isInIframe",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "bz:",
      d = r("isInIframe")(),
      m,
      p = !1,
      _ = null;
    function f() {
      var e = "check_quota";
      try {
        var t = g();
        return t ? (t.setItem(e, e), t.removeItem(e), !0) : !1;
      } catch (e) {
        return !1;
      }
    }
    function g() {
      return (
        p || ((p = !0), (m = (e || (e = r("WebStorage"))).getLocalStorage())),
        m
      );
    }
    var h = {
        flush: function (n) {
          if (!d) {
            var t = g();
            if (t) {
              _ == null &&
                (_ = parseInt(
                  t.getItem((s || (s = r("BanzaiConsts"))).LAST_STORAGE_FLUSH),
                  10,
                ));
              var o =
                _ &&
                (u || (u = r("performanceAbsoluteNow")))() - _ >=
                  (s || (s = r("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
              (o && n(),
                (o || _ == null || _ === 0 || Number.isNaN(_)) &&
                  ((_ = (u || (u = r("performanceAbsoluteNow")))()),
                  (e || (e = r("WebStorage"))).setItemGuarded(
                    t,
                    (s || (s = r("BanzaiConsts"))).LAST_STORAGE_FLUSH,
                    _.toString(),
                  )));
            }
          }
        },
        restore: function (t) {
          if (!d) {
            var e = g();
            if (e) {
              var a = function (a) {
                for (var o = [], i = 0; i < e.length; i++) {
                  var l = e.key(i);
                  typeof l == "string" &&
                    l.indexOf(c) === 0 &&
                    l.indexOf("bz:__") !== 0 &&
                    o.push(l);
                }
                (o.forEach(function (o) {
                  var a = e.getItem(o);
                  if ((e.removeItem(o), !(a == null || a === ""))) {
                    var i = n("cr:8958").parse(a);
                    i.forEach(function (e) {
                      if (e) {
                        var n = (e.__meta = e.pop()),
                          o = r("BanzaiUtils").canSend(e);
                        if (o) {
                          var a =
                            r("CurrentUser").getPossiblyNonFacebookUserID();
                          (n.userID === a || a === "0") &&
                            (r("BanzaiUtils").resetPostStatus(e), t(e));
                        }
                      }
                    });
                  }
                }),
                  a && a.unlock());
              };
              f()
                ? new (r("WebStorageMutex"))("banzai").lock(a)
                : o("SetIdleTimeoutAcrossTransitions").start(a, 0);
            }
          }
        },
        store: function (a) {
          if (!d) {
            var t = g(),
              i = a.filter(function (e) {
                return (
                  e.__meta.status !== (s || (s = r("BanzaiConsts"))).POST_SENT
                );
              });
            !t ||
              i.length <= 0 ||
              ((i = i.map(function (e) {
                return [e[0], e[1], e[2], e[3] || 0, e[4], e.__meta];
              })),
              a.splice(0, a.length),
              (e || (e = r("WebStorage"))).setItemGuarded(
                t,
                c +
                  o("WebSession").getId() +
                  "." +
                  (u || (u = r("performanceAbsoluteNow")))(),
                n("cr:8958").stringify(i),
              ));
          }
        },
      },
      y = h;
    l.default = y;
  },
  98,
);
