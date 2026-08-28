__d(
  "AdsInterfacesFieldUsageTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
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
              "logger:AdsInterfacesFieldUsageLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsInterfacesFieldUsageLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsInterfacesFieldUsageLoggerConfig",
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
          (t.setAdObjectIds = function (t) {
            return (
              (this.$1.ad_object_ids = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setAdgroupID = function (t) {
            return ((this.$1.adgroup_id = t), this);
          }),
          (t.setCampaignID = function (t) {
            return ((this.$1.campaign_id = t), this);
          }),
          (t.setEventIndex = function (t) {
            return ((this.$1.event_index = t), this);
          }),
          (t.setEventName = function (t) {
            return ((this.$1.event_name = t), this);
          }),
          (t.setFields = function (t) {
            return (
              (this.$1.fields = n("GeneratedLoggerUtils").serializeVector(t)),
              this
            );
          }),
          (t.setLevel = function (t) {
            return ((this.$1.level = t), this);
          }),
          (t.setObjective = function (t) {
            return ((this.$1.objective = t), this);
          }),
          (t.setSessionID = function (t) {
            return ((this.$1.session_id = t), this);
          }),
          (t.setSource = function (t) {
            return ((this.$1.source = t), this);
          }),
          (t.setSpecDiff = function (t) {
            return ((this.$1.spec_diff = t), this);
          }),
          (t.updateExtraData = function (t) {
            var e = n("nullthrows")(n("GeneratedLoggerUtils").serializeMap(t));
            return (
              n("GeneratedLoggerUtils").checkExtraDataFieldNames(e, l),
              (this.$1 = babelHelpers.extends({}, this.$1, e)),
              this
            );
          }),
          (t.addToExtraData = function (t, n) {
            var e = {};
            return ((e[t] = n), this.updateExtraData(e));
          }),
          e
        );
      })(),
      l = {
        ad_account_id: !0,
        ad_object_ids: !0,
        adgroup_id: !0,
        campaign_id: !0,
        event_index: !0,
        event_name: !0,
        fields: !0,
        level: !0,
        objective: !0,
        session_id: !0,
        source: !0,
        spec_diff: !0,
      };
    i.default = e;
  },
  66,
);
