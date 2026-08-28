__d(
  "AdsDOFAdgroupSpecPathPluginCommon",
  [
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "ApiAdObjectTypes",
    "FBLogger",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.object_type,
        a = r("adsConvertAdObjectRecordToPlainJS")(e);
      switch (n) {
        case r("ApiAdObjectTypes").PHOTO:
          return o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoData(a)
            ? r("AdsAdgroupCombinedFieldMappings").UCA_PHOTO_DOF_MAPPING
            : r("AdsAdgroupCombinedFieldMappings").PHOTO_DOF_MAPPING;
        case r("ApiAdObjectTypes").VIDEO:
          return r("AdsAdgroupCombinedFieldMappings").VIDEO_DOF_MAPPING;
        case r("ApiAdObjectTypes").SHARE:
          return r("AdsAdgroupCombinedFieldMappings").LINK_DOF_MAPPING;
        case r("ApiAdObjectTypes").STATUS:
        case r("ApiAdObjectTypes").POST_DELETED:
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        default:
          throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
            "DoF optimization can only be used with ApiAdObjectTypes.PHOTO/VIDEO/SHARE.",
          );
      }
    }
    l.getAPIFieldMappingForDofAdgroup = e;
  },
  98,
);
