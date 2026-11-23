__d(
  "AdsPromotedObjectOmnichannelInStoreUtils",
  ["$InternalEnum", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    var e = {
        catalogPassesBetaGK: !1,
        hasPixel: !1,
        hasOfflineDataset: !1,
        hasApplication: !1,
        isOfflineActive: !1,
      },
      s = n("$InternalEnum").Mirrored([
        "MISSING_DATASET_WITH_WEBSITE_DATA_FROM_AD_ACCOUNT",
        "MISSING_DATASET_WITH_ASSOCIATED_APP_FROM_AD_ACCOUNT",
        "MISSING_DATASET_WITH_OFFLINE_DATA_FROM_AD_ACCOUNT",
        "MISSING_DATASET_WITH_WEBSITE_AND_OFFLINE_DATA_FROM_AD_ACCOUNT",
        "MISSING_DATASET_WITH_WEBSITE_AND_APP_DATA_FROM_AD_ACCOUNT",
        "MISSING_DATASET_WITH_ASSOCIATED_APP_AND_OFFLINE_DATA_FROM_AD_ACCOUNT",
        "MISSING_DATASET_WITH_WEBSITE_APP_AND_OFFLINE_DATA_FROM_AD_ACCOUNT",
        "ALL_SOURCES_CONNECTED_BUT_IMPROVE_QUALITY_OF_OFFLINE_DATA_FROM_AD_ACCOUNT",
        "ALL_SOURCES_CONNECTED_BUT_AD_ACCOUNT_FAILS_ODQ_EMQ_ELIGIBILITY_CONTENT",
        "MISSING_WEBSITE_DATA_FROM_CATALOG",
        "MISSING_APP_DATA_FROM_CATALOG",
        "MISSING_OFFLINE_DATA_FROM_CATALOG",
        "MISSING_WEBSITE_AND_APP_DATA_FROM_CATALOG",
        "MISSING_WEBSITE_AND_OFFLINE_DATA_FROM_CATALOG_TWO_WAY",
        "MISSING_WEBSITE_AND_OFFLINE_DATA_FROM_CATALOG_THREE_WAY",
        "MISSING_APP_AND_OFFLINE_DATA_FROM_CATALOG",
        "MISSING_WEBSITE_APP_AND_OFFLINE_DATA_FROM_CATALOG",
        "IMPROVE_QUALITY_OF_OFFLINE_DATA_FROM_CATALOG",
        "ALL_SOURCES_CONNECTED_BUT_CATALOG_FAILS_ODQ_EMQ_ELIGIBILITY_TWO_WAY",
        "ALL_SOURCES_CONNECTED_BUT_CATALOG_FAILS_ODQ_EMQ_ELIGIBILITY_THREE_WAY",
      ]);
    function u(e) {
      return _(e) || p(e);
    }
    function c(e) {
      return (
        e === "PRODUCT_SET_AND_IN_STORE" ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE
      );
    }
    function d(e) {
      return e === r("AdsPromotedObjectTypes").IN_STORE;
    }
    function m(e) {
      return (
        e === "PRODUCT_SET_WEBSITE_APP_AND_INSTORE" ||
        e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE
      );
    }
    function p(e) {
      return (
        e === "PRODUCT_SET_AND_IN_STORE" ||
        e === "PRODUCT_SET_WEBSITE_APP_AND_INSTORE"
      );
    }
    function _(e) {
      return (
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE ||
        e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE ||
        e === r("AdsPromotedObjectTypes").IN_STORE
      );
    }
    ((l.defaultCatalogAttachedOffsiteSignalContainer = e),
      (l.OmnichannelDisabledGuidenceType = s),
      (l.isOmnichannelPromotedObject = u),
      (l.isOmnichannelWebAndInStorePromotedObject = c),
      (l.isOmnichannelInStorePromotedObject = d),
      (l.isOmnichannelWebAppAndInStorePromotedObject = m),
      (l.isDynamicOmnichannelPromotedObject = p),
      (l.isStaticOmnichannelPromotedObject = _));
  },
  98,
);
