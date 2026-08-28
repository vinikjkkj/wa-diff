__d(
  "AdsAPIAdgroupCallToActionValueRecord",
  [
    "AdsAPIAdgroupCallToActionRecord",
    "AdsAPIAdgroupPhotoDataRecord",
    "AdsAPIAdgroupTemplateDataRecord",
    "AdsAPIAdgroupVideoDataRecord",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPIAdgroupCallToActionRecord").getSpec().value;
    function s(t) {
      var n,
        a,
        i,
        l = e,
        s = r("adsConvertAdObjectRecordToPlainJS")(t);
      if (
        (t == null ||
        (n = t.creative) == null ||
        (n = n.object_story_spec) == null
          ? void 0
          : n.template_data) != null
      )
        l = r("AdsAPIAdgroupTemplateDataRecord")
          .getSpec()
          .call_to_action.getSpec().value;
      else if (
        (t == null ||
        (a = t.creative) == null ||
        (a = a.object_story_spec) == null
          ? void 0
          : a.video_data) != null
      )
        l = r("AdsAPIAdgroupVideoDataRecord")
          .getSpec()
          .call_to_action.getSpec().value;
      else if (
        (t == null ||
        (i = t.creative) == null ||
        (i = i.object_story_spec) == null
          ? void 0
          : i.photo_data) != null
      ) {
        if (
          o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoData(s)
        )
          return r("immutable").Map();
        l = r("AdsAPIAdgroupPhotoDataRecord")
          .getSpec()
          .call_to_action.getSpec().value;
      }
      return new l({});
    }
    l.createEmptyCallToActionValueFromAdgroup = s;
  },
  98,
);
