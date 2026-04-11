__d(
  "WAWebMexExperiment",
  ["WAWebABProps", "WAWebMexEventWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(t) {
        ((this.$1 = !1),
          (this.$2 = "not provided"),
          (this.$3 = -1),
          (this.$4 = -1),
          (this.$2 = t),
          (this.$1 = e.isGraphQLenabled()));
      }
      var t = e.prototype;
      return (
        (t.toUseGraphQL = function () {
          return this.$1;
        }),
        (t.start = function () {
          this.$3 = Date.now();
        }),
        (t.stop = function () {
          this.$4 = Date.now();
        }),
        (t.logEvent = function (n) {
          var t = n.envelopeResponseStatus,
            r = n.payloadResponseStatus;
          e.isExperimentEnabled() &&
            new (o("WAWebMexEventWamEvent").MexEventWamEvent)({
              isMex: this.$1,
              mexEventOperation: this.$2,
              mexEventStartTime: this.$3,
              mexEventEndTime: this.$4,
              mexEventPayloadResponseStatus: r,
              mexEventEnvelopeResponseStatus: t,
              mexEventRequestSize: 1,
            }).commit();
        }),
        (e.isExperimentEnabled = function () {
          return o("WAWebABProps").getABPropConfigValue("mex_phase3_enabled");
        }),
        (e.isGraphQLenabled = function () {
          return e.isExperimentEnabled() && e.isGraphQLFlagSet();
        }),
        (e.isGraphQLFlagSet = function () {
          return e.isFlagSet(1);
        }),
        (e.isFlagSet = function (t) {
          var e = o("WAWebABProps").getABPropConfigValue(
            "mex_phase3_status_flags",
          );
          return (e & t) === t;
        }),
        e
      );
    })();
    l.GraphQlPerfTracker = e;
  },
  98,
);
