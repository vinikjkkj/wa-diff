__d(
  "AdsExperimentsFunnelUserActionLoggerPlugins",
  ["AdsExperimentsFunnelLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = null,
            n = null,
            o = null;
          if (
            (t.responses.forEach(function (t) {
              var r,
                a =
                  (r = t.extraData) == null
                    ? void 0
                    : r.splitTestFreeformDuplicationConfig;
              if (a != null) {
                ((e = a.studyID),
                  (n = a.adObjectIDToCopy),
                  (o = a.adObjectLevelToCopy));
                return;
              }
            }),
            n != null)
          ) {
            var a = t.fragments.filter(function (e) {
                return e.source_ad_object_id === n;
              }),
              i = a.map(function (e) {
                return e.ad_object_id;
              });
            r("AdsExperimentsFunnelLogger").logCreationAction({
              name: "DEBUG",
              debugActionName: "COPY_VARIANT_IN_TEST_SUCCESS",
              actionPayloadValues: new Map([
                ["study_id", e],
                ["ad_object_ids", i.join(",")],
                ["study_level", o],
              ]),
            });
          }
        },
      },
      s = {
        log: function (t) {
          var e,
            n =
              (e = t.extraData) == null
                ? void 0
                : e.splitTestFreeformDuplicationConfig,
            o = n == null ? void 0 : n.studyID;
          o != null &&
            r("AdsExperimentsFunnelLogger").logCreationAction({
              name: "DEBUG",
              debugActionName: "COPY_VARIANT_IN_TEST_ERROR",
              actionPayloadValues: new Map([["study_id", o]]),
            });
        },
      },
      u = {
        log: function (t) {
          r("AdsExperimentsFunnelLogger").logCreationAction({
            name: "DEBUG",
            debugActionName: "SET_DRAFT_TEST_IN_ADGROUP",
            actionPayloadValues: new Map([
              ["study_id", t.studyID],
              ["ad_object_ids", t.adgroupIDs],
              ["study_cell_ids", t.studyCellIDs],
            ]),
          });
        },
      };
    ((l.AdsTALCreateTestWithVariantCopyCompletedReducer = e),
      (l.AdsTALCreateTestWithVariantCopyErrorReducer = s),
      (l.AdsTALCreateAdgroupDraftTestCompletedReducer = u));
  },
  98,
);
