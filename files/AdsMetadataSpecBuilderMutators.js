__d(
  "AdsMetadataSpecBuilderMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .website_media_spec.delete,
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_media_spec.scope.set(t),
      )(e);
    }
    function s(t) {
      return e(t, "DATA_UNAVAILABLE");
    }
    function u(t) {
      return e(t, "NEVER_FETCHED");
    }
    function c(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.creative_sourcing_spec.website_media_spec.delete(e);
    }
    function d(e, t, n, a, i) {
      var l,
        s = t === "OPT_IN";
      return o("AdsMutators").chain(
        (l = r("AdsAdgroupRecordAccessors")).creative.creative_sourcing_spec
          .website_media_spec.delete,
        l.creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
          t,
        ),
        l.creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
          n,
        ),
        l.creative.creative_sourcing_spec.website_media_spec.scope.set(
          "HAS_DATA",
        ),
        l.creative.creative_sourcing_spec.website_media_spec.media.set(
          s ? a : r("immutable").List(),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_media_spec.image_clusters.set(
          s ? i : r("immutable").List(),
        ),
      )(e);
    }
    function m(e) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_media_spec.scope.set(
          "HAS_DATA",
        ),
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .website_media_spec.adex_had_data.delete,
      )(e);
    }
    function p(e, t, n) {
      var a;
      return ((a = e.creative) == null ||
      (a = a.creative_sourcing_spec) == null ||
      (a = a.website_media_spec) == null
        ? void 0
        : a.scope) === "DATA_UNAVAILABLE"
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
              t,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
              n,
            ),
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .website_media_spec.adex_had_data.delete,
          )(e);
    }
    function _(t, n) {
      return n == null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.website_media_spec.delete(t)
        : n === "HAS_DATA"
          ? m(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_media_spec.delete(t),
            )
          : e(t, n);
    }
    var f = {
      buildDataAvailableSpec: d,
      buildDataUnavailable: s,
      buildIneligibleSpec: c,
      buildNeverFetchedSpec: u,
      markDataAvailable: m,
      resetToScope: _,
      withEnrollment: p,
    };
    l.WebsiteMediaSpecBuilder = f;
  },
  98,
);
