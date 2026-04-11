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
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s,
      u = "bz:",
      c = n("isInIframe")(),
      d,
      m = !1,
      p = null;
    function _() {
      var e = "check_quota";
      try {
        var t = f();
        return t ? (t.setItem(e, e), t.removeItem(e), !0) : !1;
      } catch (e) {
        return !1;
      }
    }
    function f() {
      return (
        m || ((m = !0), (d = (e || (e = n("WebStorage"))).getLocalStorage())),
        d
      );
    }
    var g = {
      flush: function (r) {
        if (!c) {
          var t = f();
          if (t) {
            p == null &&
              (p = parseInt(
                t.getItem((l || (l = n("BanzaiConsts"))).LAST_STORAGE_FLUSH),
                10,
              ));
            var o =
              p &&
              (s || (s = n("performanceAbsoluteNow")))() - p >=
                (l || (l = n("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
            (o && r(),
              (o || p == null || p === 0 || Number.isNaN(p)) &&
                ((p = (s || (s = n("performanceAbsoluteNow")))()),
                (e || (e = n("WebStorage"))).setItemGuarded(
                  t,
                  (l || (l = n("BanzaiConsts"))).LAST_STORAGE_FLUSH,
                  p.toString(),
                )));
          }
        }
      },
      restore: function (t) {
        if (!c) {
          var e = f();
          if (e) {
            var r = function (o) {
              for (var r = [], a = 0; a < e.length; a++) {
                var i = e.key(a);
                typeof i == "string" &&
                  i.indexOf(u) === 0 &&
                  i.indexOf("bz:__") !== 0 &&
                  r.push(i);
              }
              (r.forEach(function (r) {
                var o = e.getItem(r);
                if ((e.removeItem(r), !(o == null || o === ""))) {
                  var a = n("cr:8958").parse(o);
                  a.forEach(function (e) {
                    if (e) {
                      var r = (e.__meta = e.pop()),
                        o = n("BanzaiUtils").canSend(e);
                      if (o) {
                        var a = n("CurrentUser").getPossiblyNonFacebookUserID();
                        (r.userID === a || a === "0") &&
                          (n("BanzaiUtils").resetPostStatus(e), t(e));
                      }
                    }
                  });
                }
              }),
                o && o.unlock());
            };
            _()
              ? new (n("WebStorageMutex"))("banzai").lock(r)
              : n("SetIdleTimeoutAcrossTransitions").start(r, 0);
          }
        }
      },
      store: function (r) {
        if (!c) {
          var t = f(),
            o = r.filter(function (e) {
              return (
                e.__meta.status !== (l || (l = n("BanzaiConsts"))).POST_SENT
              );
            });
          !t ||
            o.length <= 0 ||
            ((o = o.map(function (e) {
              return [e[0], e[1], e[2], e[3] || 0, e[4], e.__meta];
            })),
            r.splice(0, r.length),
            (e || (e = n("WebStorage"))).setItemGuarded(
              t,
              u +
                n("WebSession").getId() +
                "." +
                (s || (s = n("performanceAbsoluteNow")))(),
              n("cr:8958").stringify(o),
            ));
        }
      },
    };
    a.exports = g;
  },
  null,
);
