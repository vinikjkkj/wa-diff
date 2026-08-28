__d(
  "AdsUEditorAdgroupPartnershipAdsMutators",
  [
    "$InternalEnum",
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupAudiosAdsMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "ADVANTAGE_PLUS_CREATIVE",
      "PAC",
      "TESTIMONIAL",
    ]);
    function s(e) {
      var t = e;
      return (
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.delete(t)),
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.delete(t)),
        (t = o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(t)),
        t
      );
    }
    ((l.PartnershipAdRemoveFeatureType = e),
      (l.removeUnsupportedAdvantagePlusCreativeFeatures = s));
  },
  98,
);
