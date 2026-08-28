__d(
  "adsPlacementAssetMutationConvertFromAssetFeedSpec",
  [
    "AdsAPIObjectives",
    "AdsAdAssetSelectorTypes",
    "AdsUEditorAdgroupAssetFeedMutators",
    "ApiAdObjectTypes",
    "adsPlacementAssetMutationHasCallToAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i;
      return (
        e === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel
          ? (i = r("ApiAdObjectTypes").SHARE)
          : e === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.image
            ? r("adsPlacementAssetMutationHasCallToAction")(t) &&
              n !== r("AdsAPIObjectives").POST_ENGAGEMENT
              ? (i = r("ApiAdObjectTypes").SHARE)
              : (i = r("ApiAdObjectTypes").PHOTO)
            : (i = r("ApiAdObjectTypes").VIDEO),
        o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
          i,
          t,
          n,
          null,
        )
      );
    }
    l.default = e;
  },
  98,
);
