__d(
  "WADeviceNotificationFlushable",
  ["WAGlobals", "WALogger", "WANotifyDeviceChange", "WAOfflineUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = ["ack"],
      p = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.handleDeviceNotification = function (t) {
            var e = t.ack,
              n = babelHelpers.objectWithoutPropertiesLoose(t, m);
            return (this.$1.push(n.notification), t.ack());
          }),
          (n.flush = async function (n, r) {
            if (
              (r.LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "flushing device notification payload",
                  ])),
              ),
              this.$1.length !== 0)
            ) {
              var t = new Map(),
                a = this.$1;
              this.$1 = [];
              for (var i of a) {
                var l = i.jid;
                t.set(l, i);
              }
              var u = Array.from(t.values());
              (r.LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "flushing device notification payload with ",
                    " entries from ",
                    "",
                  ])),
                u.length,
                Array.from(t.keys()).join(","),
              ),
                await n.cryptoManager.storage.updateUserDevicesInfo(u),
                await Promise.all(
                  u.map(function (e) {
                    var t = e.jid;
                    return f(
                      t,
                      o("WAGlobals").getWaOneQueue().getMode() !==
                        o("WAOfflineUtils").ServerRPCMode.ONLINE,
                    );
                  }),
                ));
            }
          }),
          t
        );
      })(),
      _ = new p();
    async function f(e, t) {
      if (!t) {
        var n = o("WAGlobals").getMyUserJid();
        if (e === n) {
          var r = await o("WAGlobals")
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
                  d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  e,
                ));
            });
        }
      }
    }
    l.deviceNotificationFlushable = _;
  },
  98,
);
