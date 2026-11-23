__d(
  "AdsTransparencyWAISTTypedLogger",
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
              "logger:AdsTransparencyWAISTLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsTransparencyWAISTLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsTransparencyWAISTLoggerConfig",
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
          (t.setAdID = function (t) {
            return ((this.$1.ad_id = t), this);
          }),
          (t.setAdImpPageType = function (t) {
            return ((this.$1.ad_imp_page_type = t), this);
          }),
          (t.setAdvertiserID = function (t) {
            return ((this.$1.advertiser_id = t), this);
          }),
          (t.setEntity = function (t) {
            return ((this.$1.entity = t), this);
          }),
          (t.setEntityID = function (t) {
            return ((this.$1.entity_id = t), this);
          }),
          (t.setEntryProduct = function (t) {
            return ((this.$1.entry_product = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setMessage = function (t) {
            return ((this.$1.message = t), this);
          }),
          (t.setParentEntity = function (t) {
            return ((this.$1.parent_entity = t), this);
          }),
          (t.setRenderedString = function (t) {
            return ((this.$1.rendered_string = t), this);
          }),
          (t.setSessionID = function (t) {
            return ((this.$1.session_id = t), this);
          }),
          (t.setTargetingData = function (t) {
            return ((this.$1.targeting_data = t), this);
          }),
          (t.setTargetingType = function (t) {
            return ((this.$1.targeting_type = t), this);
          }),
          (t.setWaistEntrypoint = function (t) {
            return ((this.$1.waist_entrypoint = t), this);
          }),
          (t.setWaistVersion = function (t) {
            return ((this.$1.waist_version = t), this);
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
        ad_id: !0,
        ad_imp_page_type: !0,
        advertiser_id: !0,
        entity: !0,
        entity_id: !0,
        entry_product: !0,
        event: !0,
        message: !0,
        parent_entity: !0,
        rendered_string: !0,
        session_id: !0,
        targeting_data: !0,
        targeting_type: !0,
        waist_entrypoint: !0,
        waist_version: !0,
      };
    i.default = e;
  },
  66,
);
