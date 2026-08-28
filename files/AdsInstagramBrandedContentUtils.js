__d(
  "AdsInstagramBrandedContentUtils",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLoadStateUtils_LEGACY",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").POST_ENGAGEMENT ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e === r("AdsAPIObjectives").APP_INSTALLS ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").VIDEO_VIEWS ||
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").MESSAGES ||
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
      );
    }
    function s(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e === r("AdsAPIObjectives").APP_INSTALLS ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").VIDEO_VIEWS ||
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").MESSAGES ||
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
      );
    }
    function u(e, t) {
      var n;
      if (e == null) return null;
      var r = t(e);
      return o("AdsLoadStateUtils_LEGACY").isLoaded(r)
        ? (n = r.instagram_accounts) == null || (n = n.data[0]) == null
          ? void 0
          : n.id
        : null;
    }
    function c(e, t) {
      var n;
      if (e == null) return null;
      var r = t(e);
      return o("AdsLoadStateUtils_LEGACY").isLoaded(r)
        ? o(
            "AdsInstagramUserIdMigrationUtils",
          ).convertIGIDV2FromStringToStrongType(
            (n = r.instagram_accounts) == null || (n = n.data[0]) == null
              ? void 0
              : n.id_v2,
          )
        : null;
    }
    function d(e, t) {
      var n = t;
      if (r("isFalsey")(n)) {
        var o, a, i, l, s, u;
        n =
          ((o = e.creative) == null
            ? void 0
            : o.branded_content_boosting_type) === "CREATOR_INLINE" ||
          ((a = e.creative) == null
            ? void 0
            : a.branded_content_boosting_type) === "CREATOR_BOOST"
            ? (i = e.creative) == null || (i = i.object_story_spec) == null
              ? void 0
              : i.page_id
            : ((l = e.creative) == null
                  ? void 0
                  : l.branded_content_boosting_type) === "SPONSOR_INLINE" ||
                ((s = e.creative) == null
                  ? void 0
                  : s.branded_content_boosting_type) === "SPONSOR_BOOST"
              ? (u = e.creative) == null ||
                (u = u.facebook_branded_content) == null
                ? void 0
                : u.sponsor_page_id
              : null;
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.branded_content.promoted_page_id.set(n, e);
    }
    var m = function (t, n) {
      var e,
        o = t;
      return (
        n === null &&
        ((e = o.creative) == null || (e = e.branded_content) == null
          ? void 0
          : e.promoted_page_id) != null
          ? (o = r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content.promoted_page_id.delete(o))
          : (o = d(o, n)),
        o
      );
    };
    ((l.isValidIgBrandedContentObjective = e),
      (l.isValidIgBrandedContentStoryObjective = s),
      (l.getInstagramAccountIDFromPage = u),
      (l.getInstagramUserIDFromPage = c),
      (l.setPromotedPageIDforL1Ads = d),
      (l.updatePromotedPageIDForPartnershipAd = m));
  },
  98,
);
