__d(
  "AdsUEditorAdgroupCallAdsConfigurationUtils",
  [
    "AdsAdgroupRecordAccessors",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "immutable",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.business_hours.set(
        r("immutable").fromJS(t),
        e,
      );
    }
    function s(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.business_hours.delete(
        e,
      );
    }
    function u(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.phone_number.delete(e);
    }
    function c(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.agent_greeting.delete(
        e,
      );
      return (
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_ads_configuration.bizai_config.delete(
          t,
        )),
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_ads_configuration.greeting_audio_url.delete(
          t,
        )),
        t
      );
    }
    function d(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.delete(e);
      if (r("gkx")("4369")) {
        var n,
          o =
            (n = r("adsConvertAdObjectRecordToPlainJS")(t).creative) == null
              ? void 0
              : n.asset_feed_spec;
        if (o != null && r("isEmptyObject")(o))
          return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            t,
          );
      }
      return t;
    }
    ((l.setBusinessHours = e),
      (l.clearBusinessHours = s),
      (l.clearPhoneNumber = u),
      (l.clearBizAICallScreeningConfig = c),
      (l.clearCallAdsConfiguration = d));
  },
  98,
);
