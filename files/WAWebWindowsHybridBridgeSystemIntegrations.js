__d(
  "WAWebWindowsHybridBridgeSystemIntegrations",
  [
    "WAWebEventEmitter",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this,
          n,
          o;
        ((this.events = new (r("WAWebEventEmitter"))()),
          (this.$2 = function (e) {
            var n = e.action,
              r = e.additionalData,
              o = e.tag;
            t.events.trigger("MessageNotificationAction", {
              key: o,
              action: n,
              additionalData: r,
            });
          }),
          (this.$1 = e),
          (n = this.$1) == null ||
            n.addEventListener("MessageNotificationActionEvent", this.$2),
          (o = this.$1) == null || o.subscribe(null));
      }
      var t = e.prototype;
      return (
        (t.closeMessageNotification = function (t, n) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.close_message_notification",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "closeMessageNotification",
                type: "sync",
              },
              function () {
                var r;
                return (r = e.$1) == null
                  ? void 0
                  : r.closeMessageNotification(t, n);
              },
            ));
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
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.show_message_notification",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "systemIntegrations",
                method: "showMessageNotification",
                type: "sync",
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
                    type: "sync",
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
                type: "sync",
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
                type: "sync",
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
                type: "sync",
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
                type: "sync",
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
                type: "sync",
              },
              function () {
                return e.$1.playTone(t);
              },
            ));
        }),
        e
      );
    })();
    l.WindowsHybridBridgeSystemIntegrations = e;
  },
  98,
);
