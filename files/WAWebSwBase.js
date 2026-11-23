__d(
  "WAWebSwBase",
  ["Promise", "WALogger", "WAWebBuildConstants", "WAWebSWBus", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t) {
      (self.addEventListener("install", function (a) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["[sw] installing"])),
        );
        var r = t
          .filter(function (e) {
            return e.matchInstall(a);
          })
          .map(function (e) {
            return (d || (d = n("Promise"))).resolve(e.onInstall(a));
          });
        a.waitUntil(
          (d || (d = n("Promise")))
            .all(r)
            .then(function () {
              return self.skipWaiting();
            })
            .catch(function (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "onInstall error: ",
                    "",
                  ])),
                String(e),
              );
            }),
        );
      }),
        self.addEventListener("activate", function (r) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sw] activating",
              ])),
          );
          var e = t
            .filter(function (e) {
              return e.matchActivate(r);
            })
            .map(function (e) {
              return e.onActivate(r);
            });
          r.waitUntil(
            self.clients
              .claim()
              .then(function () {
                return (d || (d = n("Promise"))).all(e);
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "onActivate error: ",
                      ".",
                    ])),
                  String(e),
                );
              }),
          );
        }),
        self.addEventListener("fetch", function (n) {
          var e = t.find(function (e) {
            return e.matchFetch(n);
          });
          if (!o("WAWebBuildConstants").isWindowsOfflineUrl(n.request.url) && e)
            return n.respondWith(e.onFetch(n));
        }),
        self.addEventListener("push", function (n) {
          var e = t.find(function (e) {
            return e.matchPush(n);
          });
          if (e) return e.onPush(n);
        }),
        self.addEventListener("notificationclick", function (n) {
          var e = t.find(function (e) {
            return e.matchNotificationClick(n);
          });
          if (e) return e.onNotificationClick(n);
        }),
        self.addEventListener("notificationclose", function (n) {
          var e = t.find(function (e) {
            return e.matchNotificationClose(n);
          });
          if (e) return e.onNotificationClose(n);
        }),
        self.addEventListener("periodicsync", function (n) {
          var e = t.find(function (e) {
            return e.matchPeriodicSync(n);
          });
          if (e) return e.onPeriodicSync(n);
        }));
      var a = new (r("WAWebSWBus"))(function (e) {
        var o = e.action,
          a = e.message,
          i = t.find(function (e) {
            return e.matchAction(o);
          });
        return i
          ? i.onAction(o, a)
          : (d || (d = n("Promise"))).reject(r("err")("Invalid Action: " + o));
      });
      a.init();
    }
    l.addSWBaseHandlers = m;
  },
  98,
);
