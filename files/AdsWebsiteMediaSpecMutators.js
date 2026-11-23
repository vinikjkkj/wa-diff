__d(
  "AdsWebsiteMediaSpecMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .website_media_spec.delete,
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_media_spec.adex_had_data.set(
          !1,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_media_spec.adex_had_impression.set(
          !1,
        ),
      )(e);
    }
    function s(e) {
      return r("justknobx")._("7643")
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.website_media_spec.adex_had_data.set(
            !0,
          )(e);
    }
    ((l.resetWebsiteMediaSpec = e), (l.markLegacyWebsiteMediaHadData = s));
  },
  98,
);
