__d(
  "WaitTimeReliabilityTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:WaitTimeReliabilityLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:WaitTimeReliabilityLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:WaitTimeReliabilityLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setAdAccountID = function (t) {
            return ((this.$1.ad_account_id = t), this);
          }),
          (t.setClientTime = function (t) {
            return ((this.$1.client_time = t), this);
          }),
          (t.setDuration = function (t) {
            return ((this.$1.duration = t), this);
          }),
          (t.setEventName = function (t) {
            return ((this.$1.event_name = t), this);
          }),
          (t.setIsFirstOfSession = function (t) {
            return ((this.$1.is_first_of_session = t), this);
          }),
          (t.setIsLocalStorageAvailable = function (t) {
            return ((this.$1.is_local_storage_available = t), this);
          }),
          (t.setIsUsingBanzaiStream = function (t) {
            return ((this.$1.is_using_banzai_stream = t), this);
          }),
          (t.setLoadingMarkerCount = function (t) {
            return ((this.$1.loading_marker_count = t), this);
          }),
          (t.setPointCount = function (t) {
            return ((this.$1.point_count = t), this);
          }),
          (t.setSessionID = function (t) {
            return ((this.$1.session_id = t), this);
          }),
          (t.setTraceID = function (t) {
            return ((this.$1.trace_id = t), this);
          }),
          (t.setTraceSize = function (t) {
            return ((this.$1.trace_size = t), this);
          }),
          e
        );
      })(),
      l = {
        ad_account_id: !0,
        client_time: !0,
        duration: !0,
        event_name: !0,
        is_first_of_session: !0,
        is_local_storage_available: !0,
        is_using_banzai_stream: !0,
        loading_marker_count: !0,
        point_count: !0,
        session_id: !0,
        trace_id: !0,
        trace_size: !0,
      };
    i.default = e;
  },
  66,
);
