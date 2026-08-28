__d(
  "AdsExperimentsChooseABTestStateReducerPlugins",
  [
    "AdsExperimentsBudgetUtils",
    "adsExperimentsChooseABTestInitialState",
    "adsExperimentsChooseABTestReducer",
    "adsExperimentsGetABTestStudyLevelForCreation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return r("adsExperimentsChooseABTestInitialState");
        },
      },
      s = {
        reduce: function (t, n) {
          var e = n.action;
          return r("adsExperimentsChooseABTestReducer")(t, e);
        },
      },
      u = {
        reduce: function (t, n) {
          var e,
            r,
            a = n.auxilaryData,
            i = n.campaignGroup,
            l =
              ((e = t.campaignGroup) == null ? void 0 : e.id) !==
              (i == null ? void 0 : i.id),
            s =
              ((r = t.auxilaryData) == null
                ? void 0
                : r.getAuxiliaryData().uniqueID) !==
              (a == null ? void 0 : a.getAuxiliaryData().uniqueID),
            u =
              !l &&
              o("AdsExperimentsBudgetUtils").isCBOEnabled(t.campaignGroup) !==
                o("AdsExperimentsBudgetUtils").isCBOEnabled(i);
          if (!l && !u && !s) return t;
          var c = t.variable;
          return g(
            u
              ? babelHelpers.extends({}, t, {
                  campaignGroup: i,
                  auxilaryData: a,
                })
              : babelHelpers.extends({}, t, {
                  campaignGroup: i,
                  auxilaryData: a,
                  campaign: null,
                  variable:
                    c != null &&
                    (c == null ? void 0 : c.prefilledFromURL) === !0
                      ? babelHelpers.extends({}, c, {
                          validForCampaignGroup: !1,
                        })
                      : null,
                }),
          );
        },
      },
      c = {
        reduce: function (t, n) {
          var e = n.campaign;
          return babelHelpers.extends({}, t, { campaign: e });
        },
      },
      d = {
        reduce: function (t, n) {
          var e = n.adgroup,
            r = n.campaign,
            o = e == null || r == null;
          return babelHelpers.extends({}, t, {
            adgroup: o ? null : e,
            campaign: o ? null : r,
          });
        },
      },
      m = {
        reduce: function (t, n) {
          var e = n.upgradeSolutionIDs,
            r = n.usecase,
            o = n.visibleSolutionsRanked;
          return g(
            babelHelpers.extends({}, t, {
              variable:
                r == null
                  ? null
                  : {
                      usecase: r,
                      upgradeSolutionIDs: e,
                      prefilledFromURL: !1,
                      validForCampaignGroup: !0,
                      visibleSolutionsRanked: o,
                    },
            }),
          );
        },
      },
      p = {
        reduce: function (t, n) {
          var e = n.usecase;
          return g(
            babelHelpers.extends({}, t, {
              variable: {
                usecase: e,
                prefilledFromURL: !0,
                validForCampaignGroup: !1,
              },
            }),
          );
        },
      },
      _ = {
        reduce: function (t) {
          return g(
            babelHelpers.extends({}, t, {
              variable:
                t.variable && t.variable.prefilledFromURL
                  ? babelHelpers.extends({}, t.variable, {
                      validForCampaignGroup: !0,
                    })
                  : null,
            }),
          );
        },
      },
      f = {
        reduce: function (t, n) {
          var e = n.studyLevel;
          return babelHelpers.extends({}, t, { studyLevel: e });
        },
      };
    function g(e) {
      var t,
        n = o(
          "adsExperimentsGetABTestStudyLevelForCreation",
        ).adsExperimentsGetABTestStudyLevelForCreation({
          adAccount: e.adAccount,
          usecase: (t = e.variable) == null ? void 0 : t.usecase,
          campaignGroup: e.campaignGroup,
          prefilledAdObjectLevel: e.prefilledAdObjectLevel,
        });
      return babelHelpers.extends({}, e, { studyLevel: n });
    }
    var h = {
        reduce: function (t, n) {
          var e = n.shouldAutosaveAudience;
          return babelHelpers.extends({}, t, { shouldAutosaveAudience: e });
        },
      },
      y = {
        reduce: function (t, n) {
          var e = n.selectedCampaignGroupID,
            r = n.selectedCampaignID,
            o = n.setupType,
            a = n.testType;
          return babelHelpers.extends({}, t, {
            recommendedTest: {
              selectedCampaignGroupID: e,
              selectedCampaignID: r,
              setupType: o,
              testType: a,
            },
          });
        },
      };
    ((l.AdsExperimentsResetCreateABTestStateReducerPlugin = e),
      (l.AdsExperimentsChooseABTestReducerPlugin = s),
      (l.AdsExperimentsChooseABTestSetCampaignGroupReducerPlugin = u),
      (l.AdsExperimentsChooseABTestSetCampaignReducerPlugin = c),
      (l.AdsExperimentsChooseABTestSetAdgroupReducerPlugin = d),
      (l.AdsExperimentsChooseABTestSetVariableReducerPlugin = m),
      (l.AdsExperimentsChooseABTestSetPrefilledVariableFromURLReducerPlugin =
        p),
      (l.AdsExperimentsChooseABTestSetPrefilledVariableIsValidReducerPlugin =
        _),
      (l.AdsExperimentsChooseABTestSetStudyLevelReducerPlugin = f),
      (l.AdsExperimentsChooseABTestSetAutosaveAudienceReducerPlugin = h),
      (l.AdsExperimentsChooseABTestSetRecommendedTestConfigReducerPlugin = y));
  },
  98,
);
