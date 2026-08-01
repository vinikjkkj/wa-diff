__d(
  "SignalValueTypeDef",
  ["BDLoggingConstants", "BDOperationLogHelper", "SignalErrorValueTypeDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "SignalValueTypeDef",
      s = "t",
      u = "ctx",
      c = "v",
      d = "e",
      m = {
        NUMBER: "NUMBER",
        STRING: "STRING",
        BOOLEAN: "BOOLEAN",
        CUSTOM_OBJECT: "CUSTOM_OBJECT",
        INT_ARRAY: "INT_ARRAY",
        TOUCH: "TOUCH",
        MAP: "MAP",
        LIST: "LIST",
        SENSOR: "SENSOR",
        ERROR: "ERROR",
      },
      p = (function () {
        function t(e, t, n, r, o) {
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = r),
            (this.$5 = o != null ? o : 0));
        }
        var n = t.prototype;
        return (
          (n.getTimeStampMS = function () {
            return this.$1;
          }),
          (n.getSignalContext = function () {
            return this.$2;
          }),
          (n.getSignalValue = function () {
            return this.$3;
          }),
          (n.getSignalValueType = function () {
            return this.$4;
          }),
          (n.isEqual = function (n, r) {
            if (n == null)
              return (
                o("BDOperationLogHelper").logWarning(
                  e,
                  o("BDLoggingConstants").OPERATIONS.SIGNAL_VALUE_NULL,
                ),
                !1
              );
            if (this.getSignalValueType() !== n.getSignalValueType()) return !1;
            if (
              this.getSignalValueType() === m.ERROR &&
              n.getSignalValueType() === m.ERROR
            )
              return this.equalValue(n);
            var t = !1;
            return (
              r.has(128) && (t = this.equalValue(n)),
              r.has(256) &&
                (t =
                  t &&
                  this.getSignalContext() != null &&
                  n.getSignalContext() != null &&
                  this.getSignalContext().getSignalValueContextName() ===
                    n.getSignalContext().getSignalValueContextName()),
              r.has(512) &&
                (t =
                  t &&
                  Math.abs(this.getTimeStampMS() - n.getTimeStampMS()) <=
                    this.$5),
              t
            );
          }),
          (n.equalValue = function (t) {
            if (this.isPrimitiveType())
              return this.getSignalValue() === t.getSignalValue();
            var e = new Error("Must implement in the subclasses");
            throw (e.stack, e);
          }),
          (n.toJSON = function (t) {
            var e = {};
            return (
              t &&
                ((e[s] = this.$1 / 1e3), this.$2 != null && (e[u] = this.$2)),
              this.$3 == null
                ? (e[d] = new (o(
                    "SignalErrorValueTypeDef",
                  ).SignalErrorValueTypeDef)(2))
                : this.addValueOrErrorToJSON(e),
              e
            );
          }),
          (n.addValueOrErrorToJSON = function (t) {
            if (this.isPrimitiveType()) t[c] = this.$3;
            else {
              var e = new Error("Must implement in the subclasses");
              throw (e.stack, e);
            }
          }),
          (n.isPrimitiveType = function () {
            switch (typeof this.$3) {
              case "number":
              case "boolean":
              case "string":
                return !0;
              default:
                return !1;
            }
          }),
          t
        );
      })();
    ((l.BD_VALUE = c),
      (l.BD_ERROR = d),
      (l.VALUE_TYPES = m),
      (l.SignalValueTypeDef = p));
  },
  98,
);
