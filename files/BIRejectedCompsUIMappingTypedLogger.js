__d(
  "BIRejectedCompsUIMappingTypedLogger",
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
              "logger:BIRejectedCompsUIMappingLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:BIRejectedCompsUIMappingLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:BIRejectedCompsUIMappingLoggerConfig",
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
          (t.setAdgroupID = function (t) {
            return ((this.$1.adgroup_id = t), this);
          }),
          (t.setCompID = function (t) {
            return ((this.$1.comp_id = t), this);
          }),
          (t.setCompMappedValue = function (t) {
            return ((this.$1.comp_mapped_value = t), this);
          }),
          (t.setCompTypesWithMissingMapping = function (t) {
            return (
              (this.$1.comp_types_with_missing_mapping = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setIsBoostedPost = function (t) {
            return ((this.$1.is_boosted_post = t), this);
          }),
          (t.setNumCompsWithMissingMapping = function (t) {
            return ((this.$1.num_comps_with_missing_mapping = t), this);
          }),
          e
        );
      })(),
      l = {
        adgroup_id: !0,
        comp_id: !0,
        comp_mapped_value: !0,
        comp_types_with_missing_mapping: !0,
        event: !0,
        is_boosted_post: !0,
        num_comps_with_missing_mapping: !0,
      };
    i.default = e;
  },
  66,
);
