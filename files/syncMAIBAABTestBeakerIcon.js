__d(
  "syncMAIBAABTestBeakerIcon",
  ["FBLogger", "MAIBALinkAdObjectToStudyAction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t = JSON.parse(e);
        t.ad_object_id != null &&
          t.ad_study_id != null &&
          r("MAIBALinkAdObjectToStudyAction").dispatch(
            { adObjectID: t.ad_object_id, studyID: t.ad_study_id },
            {
              line: "23",
              module: "syncMAIBAABTestBeakerIcon.js",
              moduleID: i.id,
            },
          );
      } catch (t) {
        r("FBLogger")("maiba_ab_test_sync").warn(
          "Failed to parse link_ad_object_to_study result: %s",
          e,
        );
      }
    }
    l.default = e;
  },
  98,
);
