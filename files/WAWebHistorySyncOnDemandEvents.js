__d(
  "WAWebHistorySyncOnDemandEvents",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.triggerSuccessHistorySyncOd = function (t) {
            this.trigger(
              "history_sync_on_demand_events:success_history_sync_od",
              t,
            );
          }),
          (n.triggerErrorHistorySyncOd = function (t) {
            this.trigger(
              "history_sync_on_demand_events:error_history_sync_od",
              t,
            );
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.WAWebHistorySyncOnDemandEvents = s;
  },
  98,
);
