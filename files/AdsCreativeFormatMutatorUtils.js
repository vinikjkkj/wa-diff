__d(
  "AdsCreativeFormatMutatorUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUnifiedCreativeAdTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!r("gkx")("21741")) return e;
      var n = o("AdsUnifiedCreativeAdTypes").AdsUnifiedCreativeAdTypePivots[t];
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.media_type.set(n.media_type),
        r("AdsAdgroupRecordAccessors").creative.text_type.set(n.text_type),
        n.optimization_type != null
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.set(
              n.optimization_type,
            )
          : function (e) {
              return e;
            },
      )(e);
    }
    function s(e, t) {
      return r("gkx")("21741")
        ? r("AdsAdgroupRecordAccessors").creative.media_type.set(t, e)
        : e;
    }
    function u(e, t) {
      return r("gkx")("21741")
        ? r("AdsAdgroupRecordAccessors").creative.text_type.set(t, e)
        : e;
    }
    function c(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.branded_content.ad_format.set(1, e);
    }
    ((l.mutateCreativeFormat = e),
      (l.mutateCreativeMediaType = s),
      (l.mutateCreativeTextType = u),
      (l.mutateBrandedContentAdRenderFormat = c));
  },
  98,
);
