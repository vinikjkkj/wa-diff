__d(
  "WAWebWindowsHybridBridgeSystemIntegrations.v2583",
  ["WAWebEventEmitter", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this,
          n,
          o;
        ((this.events = new (r("WAWebEventEmitter"))()),
          (this.$2 = function (e) {
            var n = e.tag,
              r = e.action,
              o = e.additionalData;
            t.events.trigger("MessageNotificationAction", {
              key: n,
              action: r,
              additionalData: o,
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
          (e = this.$1) == null || e.closeMessageNotification(t, n);
        }),
        (t.showMessageNotification = function (
          t,
          n,
          r,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
        ) {
          var e;
          (e = this.$1) == null ||
            e.showMessageNotification(
              t,
              n != null ? n : "",
              r,
              o,
              a,
              i != null ? i : "",
              l,
              s,
              u != null ? u : "",
              c != null ? c : "",
              d,
              m,
            );
        }),
        (t.isNotificationEnabledInSystem = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return this.$1 == null
              ? !1
              : this.$1.isNotificationEnabledInSystem();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.updateTaskbarBadge = function (t) {
          this.$1.updateTaskbarBadge(t);
        }),
        (t.getStartupTaskState = function () {
          return this.$1.getStartupTaskState();
        }),
        (t.updateStartupTask = function (t) {
          this.$1.updateStartupTask(t);
        }),
        (t.updateCurrentWebAppScreen = function (t) {
          this.$1.updateCurrentWebAppScreen(t);
        }),
        (t.playTone = function (t) {
          this.$1.playTone(t);
        }),
        e
      );
    })();
    l.WindowsHybridBridgeSystemIntegrations_v2583 = e;
  },
  98,
);
