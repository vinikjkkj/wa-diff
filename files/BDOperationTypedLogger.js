__d(
  "BDOperationTypedLogger",
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
              "logger:BDOperationLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:BDOperationLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:BDOperationLoggerConfig",
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
          (t.setBdSessionID = function (t) {
            return ((this.$1.bd_session_id = t), this);
          }),
          (t.setComponent = function (t) {
            return ((this.$1.component = t), this);
          }),
          (t.setDurationUs = function (t) {
            return ((this.$1.duration_us = t), this);
          }),
          (t.setExceptionMessage = function (t) {
            return ((this.$1.exception_message = t), this);
          }),
          (t.setExceptionStackTrace = function (t) {
            return ((this.$1.exception_stack_trace = t), this);
          }),
          (t.setExceptionType = function (t) {
            return ((this.$1.exception_type = t), this);
          }),
          (t.setIntValue = function (t) {
            return ((this.$1.int_value = t), this);
          }),
          (t.setLevel = function (t) {
            return ((this.$1.level = t), this);
          }),
          (t.setOperation = function (t) {
            return ((this.$1.operation = t), this);
          }),
          (t.setOperationInfo = function (t) {
            return (
              (this.$1.operation_info = n("GeneratedLoggerUtils").serializeMap(
                t,
              )),
              this
            );
          }),
          (t.setSessionlets = function (t) {
            return (
              (this.$1.sessionlets = n("GeneratedLoggerUtils").serializeVector(
                t,
              )),
              this
            );
          }),
          e
        );
      })(),
      l = {
        bd_session_id: !0,
        component: !0,
        duration_us: !0,
        exception_message: !0,
        exception_stack_trace: !0,
        exception_type: !0,
        int_value: !0,
        level: !0,
        operation: !0,
        operation_info: !0,
        sessionlets: !0,
      };
    i.default = e;
  },
  66,
);
