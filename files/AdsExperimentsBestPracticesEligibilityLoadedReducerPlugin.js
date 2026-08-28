__d(
  "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsExperimentsLightweightCreationStepType",
    "AdsSelectorUtils",
    "JSResource",
    "Laminar",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        reduce: o("Laminar").withFluxSelectors(
          { adAccountLoader: r("AdsAccountStore").getSelectedAccount },
          function (t, n, a) {
            var i = a.adAccountLoader;
            return (
              r("JSResource").loadAll(
                [
                  r("JSResource")("AdsAdObjectsSelectors").__setRef(
                    "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
                  ),
                ],
                function (n) {
                  var a = n.getChildAdObjectIDsLoadObjectSelector;
                  (s || (s = r("AdsDataAtom"))).isDispatching() &&
                    (s || (s = r("AdsDataAtom"))).waitFor(
                      (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                        [a],
                      ),
                    );
                  var l = t.filter(function (e) {
                    var t = e.step;
                    return (
                      t ===
                      r("AdsExperimentsLightweightCreationStepType")
                        .INELIGIBLE_CLEAN_UP
                    );
                  });
                  (l.size > 0 &&
                    r("JSResource").loadAll(
                      [
                        r("JSResource")(
                          "AdsExperimentsLightweightSetOptInBackOnAfterIneligible",
                        ).__setRef(
                          "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
                        ),
                      ],
                      function (e) {
                        e(l);
                      },
                    ),
                    r("JSResource").loadAll(
                      [
                        r("JSResource")(
                          "adsExperimentsCheckBestPracticeEligibility",
                        ).__setRef(
                          "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
                        ),
                        r("JSResource")(
                          "AdsExperimentsGetBestPracticesNextStepUtils",
                        ).__setRef(
                          "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
                        ),
                      ],
                      function (e, n) {
                        var o = e.adsExperimentsCheckBestPracticeEligibility,
                          a =
                            n.adsExperimentsGetBestPracticesNextStepFromEligibility,
                          l = t
                            .filter(function (e) {
                              return (
                                e.step ===
                                  r("AdsExperimentsLightweightCreationStepType")
                                    .CHECKING_ELIGIBILITY ||
                                e.step ===
                                  r("AdsExperimentsLightweightCreationStepType")
                                    .PUBLISHED_A_CHECKING_ELIGIBILITY
                              );
                            })
                            .map(function (e, t) {
                              var n = e.adObjectLevel,
                                r = e.campaignGroupDurationRelatedParams,
                                l = e.isFastStartEligible,
                                s = e.lightweightOptions,
                                u = e.lightweightType,
                                c = e.step,
                                d = e.studyLevel,
                                m = e.studyLevelAdObjectID,
                                p = i.mapValue(function (e) {
                                  return o({
                                    adObjectID: t,
                                    adAccount: e,
                                    isFastStartEligible: l,
                                    lightweightType: u,
                                    isFromPublish: !0,
                                  });
                                });
                              return {
                                adObjectLevel: n,
                                lightweightOptions: s,
                                lightweightType: u,
                                adObjectID: t,
                                isFastStartEligible: l,
                                campaignGroupDurationRelatedParams: r,
                                isLightweightABTestCreation: !0,
                                step: a(c, p),
                                studyLevelAdObjectID: m,
                                studyLevel: d,
                              };
                            });
                        c(t, l);
                      },
                    ));
                },
              ),
              t.filter(function (e) {
                var t = e.step;
                return (
                  t !==
                  r("AdsExperimentsLightweightCreationStepType")
                    .INELIGIBLE_CLEAN_UP
                );
              })
            );
          },
        ),
      };
    function c(e, t) {
      t.size !== 0 &&
        r("JSResource").loadAll(
          [
            r("JSResource")(
              "AdsExperimentsInitLightweightCreationAction",
            ).__setRef(
              "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
            ),
          ],
          function (n) {
            (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              n.dispatch(
                { lightweightCreationStatus: r("filterNulls")(t.toArray()) },
                {
                  line: "162",
                  module:
                    "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin.js",
                  moduleID: i.id,
                },
              );
            });
            var o = t.filter(function (t, n) {
              var o;
              return (
                ((o = e.get(n)) == null ? void 0 : o.step) ===
                  r("AdsExperimentsLightweightCreationStepType")
                    .PUBLISHED_A_CHECKING_ELIGIBILITY &&
                t.step ===
                  r("AdsExperimentsLightweightCreationStepType").PUBLISHED_A
              );
            });
            o.size > 0 &&
              r("JSResource").loadAll(
                [
                  r("JSResource")(
                    "AdsExperimentsLightweightVersionAPublishedAction",
                  ).__setRef(
                    "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
                  ),
                ],
                function (e) {
                  e.dispatch(
                    { adObjectIDs: Array.from(o.keys()) },
                    {
                      line: "180",
                      module:
                        "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
          },
        );
    }
    var d = u;
    l.default = d;
  },
  98,
);
