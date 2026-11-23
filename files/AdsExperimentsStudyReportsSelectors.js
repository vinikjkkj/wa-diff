__d(
  "AdsExperimentsStudyReportsSelectors",
  [
    "AdsSelectionLevelSelectors",
    "AdsTALReportSplitTestSelectors",
    "LoadObject",
    "adsCreateSelector",
    "adsExperimentsIsStudyEligibleForReport",
    "adsExperimentsStudiesForSelectedLevelSelector",
    "adsGetMostRecentActiveStudy",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "only",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsExperimentsStudiesForSelectedLevelSelector"),
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
        ],
        function (t, n, o, a, i) {
          return t.map(function (e) {
            var t = e.adgroupStudies,
              l = e.campaignGroupsStudies,
              s = e.campaignsStudies,
              u = Array.from(l).filter(function (e) {
                return r("adsExperimentsIsStudyEligibleForReport")(e);
              }),
              c = Array.from(s).filter(function (e) {
                return r("adsExperimentsIsStudyEligibleForReport")(e);
              }),
              d = Array.from(t).filter(function (e) {
                return r("adsExperimentsIsStudyEligibleForReport")(e);
              }),
              m = [].concat(u, c, d),
              p = r("adsGetMostRecentActiveStudy")(m),
              _ = [];
            switch (n) {
              case "campaign":
                _ = o;
                break;
              case "ad_set":
                _ = a;
                break;
              case "ad":
                _ = i;
            }
            return p != null && _.length === 1 ? [p] : [];
          });
        },
        { name: i.id + ".adsExperimentsStudiesForReportSelector" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.map(function (e) {
            var t;
            return (t = r("only")(e)) != null
              ? t
              : r("LoadObject").empty({ creatorModuleID: i.id });
          });
        },
        { name: i.id + ".adsExperimentsReportingStudySelector" },
      ),
      u = o("AdsTALReportSplitTestSelectors").createSplitTestVariantsSelector(
        s,
      );
    ((l.adsExperimentsStudiesForReportSelector = e),
      (l.adsExperimentsReportingStudySelector = s),
      (l.adsExperimentsSplitTestVariantsSelector = u));
  },
  98,
);
