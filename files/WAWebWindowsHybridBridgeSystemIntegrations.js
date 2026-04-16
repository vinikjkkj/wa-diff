__d(
  "WAWebWindowsHybridBridgeSystemIntegrations",
  ["WAWebEventEmitter", "WAWebODS", "asyncToGeneratorRuntime"],
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
          var e;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.close_message_notification",
          ),
            (e = this.$1) == null || e.closeMessageNotification(t, n));
        }),
        (t.showMessageNotification = function (
          t,
          n,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
        ) {
          var e;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.show_message_notification",
          ),
            (e = this.$1) == null ||
              e.showMessageNotification(
                t,
                n != null ? n : "",
                o,
                a,
                i,
                l != null ? l : "",
                s,
                u,
                c != null ? c : "",
                d != null ? d : "",
                m,
                p,
              ));
        }),
        (t.isNotificationEnabledInSystem = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return this.$1 == null
              ? !1
              : (r("WAWebODS").incr(
                  "web.hybrid.bridge.system_integrations.send.is_notification_enabled_in_system",
                ),
                this.$1.isNotificationEnabledInSystem());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.updateTaskbarBadge = function (t) {
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.update_taskbar_badge",
          ),
            this.$1.updateTaskbarBadge(t));
        }),
        (t.getStartupTaskState = function () {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.system_integrations.send.get_startup_task_state",
            ),
            this.$1.getStartupTaskState()
          );
        }),
        (t.updateStartupTask = function (t) {
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.update_startup_task",
          ),
            this.$1.updateStartupTask(t));
        }),
        (t.updateCurrentWebAppScreen = function (t) {
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.update_current_web_app_screen",
          ),
            this.$1.updateCurrentWebAppScreen(t));
        }),
        (t.playTone = function (t) {
          (r("WAWebODS").incr(
            "web.hybrid.bridge.system_integrations.send.play_tone",
          ),
            this.$1.playTone(t));
        }),
        e
      );
    })();
    l.WindowsHybridBridgeSystemIntegrations = e;
  },
  98,
);
