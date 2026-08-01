__d(
  "CustomObjectSignalValueType",
  ["SignalValueTypeDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        return (
          e.call(
            this,
            t,
            n,
            r,
            o("SignalValueTypeDef").VALUE_TYPES.CUSTOM_OBJECT,
          ) || this
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.equalValue = function (t) {
          return this.getSignalValue().isEqual(t.getSignalValue());
        }),
        (n.addValueOrErrorToJSON = function (t) {
          t[o("SignalValueTypeDef").BD_VALUE] = this.getSignalValue().toJSON();
        }),
        t
      );
    })(o("SignalValueTypeDef").SignalValueTypeDef);
    l.default = e;
  },
  98,
);
