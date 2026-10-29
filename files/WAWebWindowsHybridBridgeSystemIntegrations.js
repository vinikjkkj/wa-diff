__d(
  "WAWebWindowsHybridBridgeSystemIntegrations",
  [
    "WAWebABProps",
    "WAWebEventEmitter",
    "WAWebODS",
    "WAWebWindowsHybridBridgeJsonEvents",
    "WAWebWindowsHybridBridgeTrace",
    "WAWebWindowsNotificationCloseBatcher",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this,
          n,
          a,
          i;
        ((this.events = new (r("WAWebEventEmitter"))()),
          (this.$2 = new (o(
            "WAWebWindowsNotificationCloseBatcher",
          ).WindowsNotificationCloseBatcher)({
            isEnabled: function () {
              return o("WAWebABProps").getABPropConfigValue(
                "web_anr_batch_close_notification_bridge_operations",
              );
            },
            sendClose: function (n) {
              return t.$3(n);
            },
            sendCloses: function (n) {
              return t.$4(n);
            },
          })),
          (this.$5 = function (e) {
            var n = o("WAWebWindowsHybridBridgeTrace").traceBridgeRead(
                {
                  bridge: "systemIntegrations",
                  method: "MessageNotificationActionEvent",
                },
                function () {
                  return {
                    action: e.action,
                    additionalData: e.additionalData,
                    tag: e.tag,
                  };
                },
              ),
              r = n.action,
              a = n.additionalData,
              i = n.tag;
            t.$7({ action: r, additionalData: a, tag: i });
          }),
          (this.$6 = function (e) {
            var n = o(
              "WAWebWindowsHybridBridgeJsonEvents",
            ).parseHybridBridgeJsonEvent("notificationActionJsonEvent", e, s);
            n != null && t.$7(n);
          }),
          (this.$1 = e),
          (n = this.$1) == null ||
            n.addEventListener("MessageNotificationActionEvent", this.$5),
          (a = this.$1) == null ||
            a.addEventListener("notificationActionJsonEvent", this.$6),
          (i = this.$1) == null || i.subscribe(null));
      }
      var t = e.prototype;
      return (
        (t.$7 = function (t) {
          var e = t.action,
            n = t.additionalData,
            r = t.tag;
          this.events.trigger("MessageNotificationAction", {
            key: r,
            action: e,
            additionalData: n,
          });
        }),
        (t.closeMessageNotification = function (t, n) {
          this.$2.send({ key: t, tag: n });
        }),
        (t.$3 = function (t) {
          var e = this,
            n = t.key,
            a = t.tag;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.close_message_notification",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "closeMessageNotification",
                type: "async",
              },
              function () {
                var t;
                return (t = e.$1) == null
                  ? void 0
                  : t.closeMessageNotification(n, a != null ? a : "");
              },
            ));
        }),
        (t.$4 = function (t) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.system_integrations.send.close_message_notifications",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "closeMessageNotifications",
                type: "async",
              },
              function () {
                return e.$1.closeMessageNotifications(
                  t.map(function (e) {
                    return e.key;
                  }),
                  t.map(function (e) {
                    var t;
                    return (t = e.tag) != null ? t : "";
                  }),
                );
              },
            )
          );
        }),
        (t.showMessageNotification = function (
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
          _,
        ) {
          var e = this;
          (this.$2.flush(),
            r("WAWebODS").incr(
              "web.hybrid.bridge.system_integrations.send.show_message_notification",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "showMessageNotification",
                type: "async",
              },
              function () {
                var r;
                return (r = e.$1) == null
                  ? void 0
                  : r.showMessageNotification(
                      t,
                      n != null ? n : "",
                      a,
                      i,
                      l,
                      s != null ? s : "",
                      u,
                      c,
                      d != null ? d : "",
                      m != null ? m : "",
                      p,
                      _,
                    );
              },
            ));
        }),
        (t.isNotificationEnabledInSystem = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this;
            return this.$1 == null
              ? !1
              : (r("WAWebODS").incr(
                  "web.hybrid.bridge.system_integrations.send.is_notification_enabled_in_system",
                ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "systemIntegrations",
                    method: "isNotificationEnabledInSystem",
                    type: "async",
                  },
                  function () {
                    return e.$1.isNotificationEnabledInSystem();
                  },
                ));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.updateTaskbarBadge = function (t) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.update_taskbar_badge",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "updateTaskbarBadge",
                type: "async",
              },
              function () {
                return e.$1.updateTaskbarBadge(t);
              },
            ));
        }),
        (t.getStartupTaskState = function () {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.system_integrations.send.get_startup_task_state",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "getStartupTaskState",
                type: "async",
              },
              function () {
                return e.$1.getStartupTaskState();
              },
            )
          );
        }),
        (t.updateStartupTask = function (t) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.update_startup_task",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "updateStartupTask",
                type: "async",
              },
              function () {
                return e.$1.updateStartupTask(t);
              },
            ));
        }),
        (t.updateCurrentWebAppScreen = function (t) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.update_current_web_app_screen",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "updateCurrentWebAppScreen",
                type: "async",
              },
              function () {
                return e.$1.updateCurrentWebAppScreen(t);
              },
            ));
        }),
        (t.playTone = function (t) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.play_tone",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "playTone",
                type: "async",
              },
              function () {
                return e.$1.playTone(t);
              },
            ));
        }),
        e
      );
    })();
    function s(e) {
      var t = e.action,
        n = e.additionalData,
        r = e.tag;
      return typeof r == "string" &&
        typeof t == "string" &&
        typeof n == "string"
        ? { action: t, additionalData: n, tag: r }
        : null;
    }
    l.WindowsHybridBridgeSystemIntegrations = e;
  },
  98,
);
