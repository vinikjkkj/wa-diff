__d(
  "WAWebWindowsTaskbarController",
  [
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsTaskbarNotificationOption",
    "WAWebWindowsUserPrefsNotifications",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          var e = this;
          ((this.$1 = function () {
            e.ResetTaskbarBadge();
          }),
            o("WAWebCmd").Cmd.on("starting_logout_from_bridge", this.$1));
        }
        var t = e.prototype;
        return (
          (t.UpdateTaskbarBadge = function (t) {
            var e,
              n =
                (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) ==
                null
                  ? void 0
                  : e.systemIntegrationsBridge;
            n != null && n.updateTaskbarBadge(t);
          }),
          (t.ChangeTaskbarNotificationSetting = function (t) {
            (o(
              "WAWebWindowsUserPrefsNotifications",
            ).setTaskbarNotificationSetting(t),
              t ===
              o("WAWebWindowsTaskbarNotificationOption")
                .TaskbarNotificationOption.Never
                ? this.ResetTaskbarBadge()
                : this.$2());
          }),
          (t.ResetTaskbarBadge = function () {
            this.UpdateTaskbarBadge(0);
          }),
          (t.$2 = function () {
            var e = o("WAWebChatCollection").ChatCollection.getUnreadCount();
            this.UpdateTaskbarBadge(e);
          }),
          (t.OnIsAppInSystemTrayChanged = function (t) {
            switch (
              o(
                "WAWebWindowsUserPrefsNotifications",
              ).getTaskbarNotificationSetting()
            ) {
              case o("WAWebWindowsTaskbarNotificationOption")
                .TaskbarNotificationOption.Always:
                break;
              case o("WAWebWindowsTaskbarNotificationOption")
                .TaskbarNotificationOption.OnlyWhenAppIsOpen:
                t ? this.ResetTaskbarBadge() : this.$2();
                break;
              case o("WAWebWindowsTaskbarNotificationOption")
                .TaskbarNotificationOption.Never:
                this.ResetTaskbarBadge();
                break;
            }
          }),
          e
        );
      })(),
      s = new e();
    l.WATaskbarController = s;
  },
  98,
);
