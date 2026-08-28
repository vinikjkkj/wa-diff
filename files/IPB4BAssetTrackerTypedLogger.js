__d(
  "IPB4BAssetTrackerTypedLogger",
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
              "logger:IPB4BAssetTrackerLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:IPB4BAssetTrackerLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:IPB4BAssetTrackerLoggerConfig",
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
          (t.setAssetRefID = function (t) {
            return ((this.$1.asset_ref_id = t), this);
          }),
          (t.setAssetRefPath = function (t) {
            return ((this.$1.asset_ref_path = t), this);
          }),
          (t.setClientURI = function (t) {
            return ((this.$1.client_uri = t), this);
          }),
          e
        );
      })(),
      l = { asset_ref_id: !0, asset_ref_path: !0, client_uri: !0 };
    i.default = e;
  },
  66,
);
