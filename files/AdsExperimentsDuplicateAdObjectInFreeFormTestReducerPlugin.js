__d(
  "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsEditorLogging",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupSetFreeformTestAction",
    "AdsUEditorCampaignGroupSetFreeformTestAction",
    "AdsUEditorCampaignSetFreeformTestAction",
    "AdsUEditorHostIDs",
    "FBLogger",
    "JSResource",
    "adsExperimentsNavigateToCreationPackageEditor",
    "adsExperimentsWaitForAdgroupsThenDispatchStoreUtils",
    "onlyx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        var e = t.adgroupID,
          n = t.leadGenFormID,
          o = t.studyCellIDs,
          a = t.studyID;
        r("adsExperimentsWaitForAdgroupsThenDispatchStoreUtils")(
          [e],
          function () {
            r("AdsUEditorAdgroupSetFreeformTestAction").dispatch(
              {
                studyCellIDs: o,
                studyID: a,
                adgroupIDs: [e],
                leadGenFormID: n,
                hostID: r("AdsUEditorHostIDs").EDITING,
              },
              {
                line: "50",
                module:
                  "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin.js",
                moduleID: i.id,
              },
            );
          },
        );
      },
      u = function (t) {
        var e = t.adAccountID,
          n = t.adObjectIDToCopy,
          o = t.campaignGroupID,
          a = t.studyCellIDs,
          l = t.studyID;
        r("AdsUEditorCampaignGroupSetFreeformTestAction").dispatch(
          {
            adAccountID: e,
            studyCellIDs: a,
            studyLevel: "campaign",
            studyID: l,
            studyType: "AB_TEST_FREEFORM",
            campaignGroupIDs: [o],
            originalCampaignGroupID: n,
            hostID: r("AdsUEditorHostIDs").EDITING,
          },
          {
            line: "72",
            module:
              "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin.js",
            moduleID: i.id,
          },
        );
      },
      c = function (t) {
        var e = t.adAccountID,
          n = t.adObjectIDToCopy,
          o = t.campaignID,
          a = t.studyCellIDs,
          l = t.studyID;
        r("AdsUEditorCampaignSetFreeformTestAction").dispatch(
          {
            adAccountID: e,
            studyCellIDs: a,
            studyID: l,
            studyLevel: "ad_set",
            studyType: "AB_TEST_FREEFORM",
            campaignIDs: [o],
            originalCampaignID: n,
            hostID: r("AdsUEditorHostIDs").EDITING,
          },
          {
            line: "96",
            module:
              "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin.js",
            moduleID: i.id,
          },
        );
      },
      d = function (t) {
        var e,
          n,
          a = t.adAccount,
          i = t.adObjectLevelToCopy,
          l = t.extraData,
          s = t.response,
          u =
            l == null || (e = l.splitTestFreeformDuplicationConfig) == null
              ? void 0
              : e.adObjectLevelToNavigate,
          c =
            l == null || (n = l.splitTestFreeformDuplicationConfig) == null
              ? void 0
              : n.adObjectIDToNavigate,
          d =
            u != null
              ? s.fragments.find(function (e) {
                  return e.ad_object_type === u && e.source_ad_object_id === c;
                })
              : null;
        if (d != null) {
          var m = o("AdsObjectTypeUtils").fromObjectLevel(d.ad_object_type);
          if (m != null) {
            var p,
              _ =
                l == null || (p = l.splitTestFreeformDuplicationConfig) == null
                  ? void 0
                  : p.creationPackageConfigID;
            if (_ != null && i === "campaign") {
              r("adsExperimentsNavigateToCreationPackageEditor")({
                creationPackageConfigID: _,
                fragments: s.fragments,
              });
              return;
            }
            r("JSResource").loadAll(
              [
                r("JSResource")("AdsCampaignStructureActionUtils").__setRef(
                  "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin",
                ),
                r("JSResource")(
                  "adsExperimentsAutoScrollAdsManagerEditorPanel",
                ).__setRef(
                  "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin",
                ),
              ],
              function (e, t) {
                var n;
                (e.updateNavigationState(
                  [d.ad_object_id],
                  m,
                  [],
                  o("AdsEditorLogging").sources.CAMPAIGN_STRUCTURE_TREE,
                ),
                  t(
                    a,
                    l == null ||
                      (n = l.splitTestFreeformDuplicationConfig) == null
                      ? void 0
                      : n.studyVariableSelected,
                  ));
              },
            );
          }
        }
      },
      m = {
        reduce: function (n, o) {
          if (o.responses.length === 1) {
            var t = r("onlyx")(o.responses),
              a = t.extraData,
              i = a != null ? a : {},
              l = i.splitTestFreeformDuplicationConfig;
            if (l == null) return n;
            var m = l.adObjectIDToCopy,
              p = l.adObjectLevelToCopy,
              _ = l.studyCellIDs,
              f = l.studyID,
              g = t.fragments.find(function (e) {
                return e.source_ad_object_id === m;
              });
            if (g == null) {
              r("FBLogger")(
                "ads_experiments",
                "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin",
              ).mustfix(
                "Ad object id for freeform test is not found in any fragment source_ad_object_id",
                m,
                t.draftID,
              );
              return;
            }
            var h = r("AdsAccountStore").getSelectedAccount().getValue(),
              y = h == null ? void 0 : h.account_id;
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              if (y != null) {
                switch (p) {
                  case "campaign":
                    u({
                      adAccountID: y,
                      adObjectIDToCopy: m,
                      campaignGroupID: g.ad_object_id,
                      studyCellIDs: _,
                      studyID: f,
                    });
                    break;
                  case "ad_set":
                    c({
                      adAccountID: y,
                      adObjectIDToCopy: m,
                      campaignID: g.ad_object_id,
                      studyCellIDs: _,
                      studyID: f,
                    });
                    break;
                  case "ad":
                    s({
                      studyCellIDs: _,
                      studyID: f,
                      adgroupID: g.ad_object_id,
                      leadGenFormID: l == null ? void 0 : l.leadGenFormID,
                    });
                    break;
                  default:
                    throw r("FBLogger")("ads_experiments").mustfixThrow(
                      "unsupported ad object level for freeform test %s",
                      p,
                    );
                }
                d({
                  response: t,
                  extraData: a,
                  adObjectLevelToCopy: p,
                  adAccount: h,
                });
              }
            });
          }
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
