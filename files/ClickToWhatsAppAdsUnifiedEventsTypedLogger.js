__d(
  "ClickToWhatsAppAdsUnifiedEventsTypedLogger",
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
              "logger:ClickToWhatsAppAdsUnifiedEventsLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ClickToWhatsAppAdsUnifiedEventsLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ClickToWhatsAppAdsUnifiedEventsLoggerConfig",
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
          (t.setAdgroupID = function (t) {
            return ((this.$1.adgroup_id = t), this);
          }),
          (t.setAdsLwiGoal = function (t) {
            return ((this.$1.ads_lwi_goal = t), this);
          }),
          (t.setCampaignGroupID = function (t) {
            return ((this.$1.campaign_group_id = t), this);
          }),
          (t.setCampaignID = function (t) {
            return ((this.$1.campaign_id = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setEventInfo = function (t) {
            return ((this.$1.event_info = t), this);
          }),
          (t.setException = function (t) {
            return ((this.$1.exception = t), this);
          }),
          (t.setObjective = function (t) {
            return ((this.$1.objective = t), this);
          }),
          (t.setOdaxObjective = function (t) {
            return ((this.$1.odax_objective = t), this);
          }),
          (t.setPageID = function (t) {
            return ((this.$1.page_id = t), this);
          }),
          (t.setPostID = function (t) {
            return ((this.$1.post_id = t), this);
          }),
          (t.setProductFlow = function (t) {
            return ((this.$1.product_flow = t), this);
          }),
          (t.setSourceAppID = function (t) {
            return ((this.$1.source_app_id = t), this);
          }),
          (t.setVerificationCode = function (t) {
            return ((this.$1.verification_code = t), this);
          }),
          (t.setWhatsappCountryCode = function (t) {
            return ((this.$1.whatsapp_country_code = t), this);
          }),
          (t.setWhatsappNumber = function (t) {
            return ((this.$1.whatsapp_number = t), this);
          }),
          (t.setWhatsappNumberType = function (t) {
            return ((this.$1.whatsapp_number_type = t), this);
          }),
          (t.setWhatsappPhoneNumber = function (t) {
            return ((this.$1.whatsapp_phone_number = t), this);
          }),
          e
        );
      })(),
      l = {
        ad_account_id: !0,
        adgroup_id: !0,
        ads_lwi_goal: !0,
        campaign_group_id: !0,
        campaign_id: !0,
        event: !0,
        event_info: !0,
        exception: !0,
        objective: !0,
        odax_objective: !0,
        page_id: !0,
        post_id: !0,
        product_flow: !0,
        source_app_id: !0,
        verification_code: !0,
        whatsapp_country_code: !0,
        whatsapp_number: !0,
        whatsapp_number_type: !0,
        whatsapp_phone_number: !0,
      };
    i.default = e;
  },
  66,
);
