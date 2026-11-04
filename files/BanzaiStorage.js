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
                  String(
                    t.getItem(
                      (s || (s = r("BanzaiConsts"))).LAST_STORAGE_FLUSH,
                    ),
                  ),
                  10,
                ));
              var o = _,
                a =
                  o &&
                  (u || (u = r("performanceAbsoluteNow")))() - o >=
                    (s || (s = r("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
              (a && n(),
                (a || _ == null || _ === 0 || Number.isNaN(_)) &&
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
              var a = function (i) {
                for (var a = [], l = 0; l < e.length; l++) {
                  var s = e.key(l);
                  typeof s == "string" &&
                    s.indexOf(c) === 0 &&
                    s.indexOf("bz:__") !== 0 &&
                    a.push(s);
                }
                (a.forEach(function (a) {
                  var i = e.getItem(a);
                  if ((e.removeItem(a), !(i == null || i === ""))) {
                    var l = n("cr:8958").parse(i);
                    l.forEach(function (e) {
                      if (e) {
                        var n = (e.__meta = e.pop()),
                          a = o("BanzaiUtils").canSend(e);
                        if (a) {
                          var i =
                            r("CurrentUser").getPossiblyNonFacebookUserID();
                          (n.userID === i || i === "0") &&
                            (o("BanzaiUtils").resetPostStatus(e), t(e));
                        }
                      }
                    });
                  }
                }),
                  i && i.unlock());
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
            if (!(!t || i.length <= 0)) {
              var l = i.map(function (e) {
                return [e[0], e[1], e[2], e[3] || 0, e[4], e.__meta];
              });
              (a.splice(0, a.length),
                (e || (e = r("WebStorage"))).setItemGuarded(
                  t,
                  c +
                    o("WebSession").getId() +
                    "." +
                    (u || (u = r("performanceAbsoluteNow")))(),
                  n("cr:8958").stringify(l),
                ));
            }
          }
        },
      },
      y = h;
    l.default = y;
  },
  98,
);
