__d(
  "WADeviceNotificationFlushable",
  [
    "Promise",
    "WAGlobals",
    "WALogger",
    "WANotifyDeviceChange",
    "WAOfflineUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = ["ack"],
      p,
      _ = (function () {
        function t() {
          this.$1 = [];
        }
        var r = t.prototype;
        return (
          (r.handleDeviceNotification = function (t) {
            var e = t.ack,
              n = babelHelpers.objectWithoutPropertiesLoose(t, m);
            return (this.$1.push(n.notification), t.ack());
          }),
          (r.flush = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r) {
                if (
                  (r.LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "flushing device notification payload",
                      ])),
                  ),
                  this.$1.length !== 0)
                ) {
                  var a = new Map(),
                    i = this.$1;
                  this.$1 = [];
                  for (var l of i) {
                    var u = l.jid;
                    a.set(u, l);
                  }
                  var c = Array.from(a.values());
                  (r.LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "flushing device notification payload with ",
                        " entries from ",
                        "",
                      ])),
                    c.length,
                    Array.from(a.keys()).join(","),
                  ),
                    yield t.cryptoManager.storage.updateUserDevicesInfo(c),
                    yield (p || (p = n("Promise"))).all(
                      c.map(function (e) {
                        var t = e.jid;
                        return g(
                          t,
                          o("WAGlobals").getWaOneQueue().getMode() !==
                            o("WAOfflineUtils").ServerRPCMode.ONLINE,
                        );
                      }),
                    ));
                }
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })(),
      f = new _();
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t) {
            var n = o("WAGlobals").getMyUserJid();
            if (e === n) {
              var r = yield o("WAGlobals")
                .getDependencies()
                .loadRecentParticipants(
                  o("WAGlobals").getConfig().maxUsersForNotifyDeviceChange(),
                  n,
                );
              o("WANotifyDeviceChange")
                .notifyDeviceChange({ users: r })
                .then(function () {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Notified ",
                        " contacts of device change",
                      ])),
                    r.size,
                  );
                })
                .catch(function (e) {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to notify ",
                        " contacts of device change",
                      ])),
                    r.size,
                  ),
                    o("WALogger").ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      e,
                    ));
                });
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.deviceNotificationFlushable = f;
  },
  98,
);
