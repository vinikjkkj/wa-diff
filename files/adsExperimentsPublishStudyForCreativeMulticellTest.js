__d(
  "adsExperimentsPublishStudyForCreativeMulticellTest",
  [
    "AdStudiesLoader",
    "AdStudyGraphAPIUtils",
    "AdsExperimentsFunnelLogger",
    "AdsTALStudyType",
    "adsExperimentsDeleteFreeformStudy",
    "adsExperimentsGetAdjustedStudyStartTime",
    "emptyFunction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccount,
        n = e.adStudy,
        a = e.showFailedToast,
        i = e.showSuccessToast,
        l = r("adsExperimentsGetAdjustedStudyStartTime")({
          question: "CAMPAIGN_COMPARISON",
          studyStartTime: n.start_time,
          studyType: o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2,
          timezoneID: t.timezone_id,
        });
      r("promiseDone")(
        o("AdStudyGraphAPIUtils").updateStudy({
          id: n.id,
          status: "ON",
          start_time: l.getUnixTimestampSeconds(),
          cooldown_start_time: l.getUnixTimestampSeconds(),
        }),
        function (e) {
          if (e.success) {
            var o;
            (r("AdsExperimentsFunnelLogger")
              .withAccountID(t.account_id)
              .setAction("COPY_VARIANT_IN_TEST_PUBLISH_SUCCESS")
              .addActionPayload("lightweightSplitTestType", n.lightweight_type)
              .addActionPayload("studyID", n.id)
              .addActionPayload("is_from_ui", 1)
              .addActionPayload(
                "mct_entry_source",
                n == null || (o = n.creative_multicell_test_config) == null
                  ? void 0
                  : o.entry_source,
              )
              .log(),
              i(n.type));
          } else {
            var l;
            (r("promiseDone")(
              r("adsExperimentsDeleteFreeformStudy")({
                studyID: n.id,
                error: null,
                setFreeformDuplicationTestError: r("emptyFunction"),
              }),
            ),
              r("AdsExperimentsFunnelLogger")
                .withAccountID(t.account_id)
                .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ERROR")
                .addActionPayload(
                  "lightweightSplitTestType",
                  n.lightweight_type,
                )
                .addActionPayload("studyID", n.id)
                .addActionPayload("is_from_ui", 1)
                .addActionPayload("response", e)
                .addActionPayload(
                  "mct_entry_source",
                  n == null || (l = n.creative_multicell_test_config) == null
                    ? void 0
                    : l.entry_source,
                )
                .log(),
              a());
          }
        },
        function (e) {
          var o;
          (r("promiseDone")(
            r("adsExperimentsDeleteFreeformStudy")({
              studyID: n.id,
              error: null,
              setFreeformDuplicationTestError: r("emptyFunction"),
            }),
          ),
            r("AdsExperimentsFunnelLogger")
              .withAccountID(t.account_id)
              .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ERROR")
              .addActionPayload("lightweightSplitTestType", n.lightweight_type)
              .addActionPayload("studyID", n.id)
              .addActionPayload("is_from_ui", 1)
              .addActionPayload("error", e)
              .addActionPayload(
                "mct_entry_source",
                n == null || (o = n.creative_multicell_test_config) == null
                  ? void 0
                  : o.entry_source,
              )
              .log(),
            a());
        },
      );
    }
    function s(t) {
      var n = t.adAccount,
        a = t.adStudy,
        i = t.showFailedToast,
        l = t.showSuccessToast;
      window.setTimeout(function () {
        r("promiseDone")(
          o("AdStudiesLoader").loadAdStudy(a.id),
          function (t) {
            if (t.status === "ON") {
              var o;
              (r("AdsExperimentsFunnelLogger")
                .withAccountID(n.account_id)
                .setAction("COPY_VARIANT_IN_TEST_PUBLISH_SUCCESS")
                .addActionPayload(
                  "lightweightSplitTestType",
                  a.lightweight_type,
                )
                .addActionPayload("studyID", a.id)
                .addActionPayload("is_from_ui", 1)
                .addActionPayload(
                  "mct_entry_source",
                  a == null || (o = a.creative_multicell_test_config) == null
                    ? void 0
                    : o.entry_source,
                )
                .log(),
                l(t.type));
            } else
              e({
                adStudy: a,
                adAccount: n,
                showSuccessToast: l,
                showFailedToast: i,
              });
          },
          function (e) {
            var t;
            r("AdsExperimentsFunnelLogger")
              .withAccountID(n.account_id)
              .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ERROR")
              .addActionPayload("lightweightSplitTestType", a.lightweight_type)
              .addActionPayload("studyID", a.id)
              .addActionPayload("is_from_ui", 1)
              .addActionPayload("error", e)
              .addActionPayload(
                "mct_entry_source",
                a == null || (t = a.creative_multicell_test_config) == null
                  ? void 0
                  : t.entry_source,
              )
              .log();
          },
        );
      }, 3e3);
    }
    l.default = s;
  },
  98,
);
