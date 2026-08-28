__d(
  "AdsExperimentsAdObjectIDsInDraftTestProviderPlugin",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsLoadObjectUtils",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "DuplicationUpgradeAbTestingExperimentUtils",
    "adsUEditorAccountIDSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = [],
        n = [],
        a = (e = r("immutable")).Map(),
        i = e.Map(),
        l = e.Map(),
        u = e.Map(),
        c = e.Map(),
        d = r("AdsCampaignGroupDraftFragmentStore").getNewIDsFor(
          r("adsUEditorAccountIDSelector")(),
        );
      if (d.size > 0) {
        var m = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPECampaignGroupSelectors").getAllSelector()(d),
        );
        m.forEach(function (e) {
          var r = o(
            "DuplicationUpgradeAbTestingExperimentUtils",
          ).isDuplicationUpgradeLightweightABTest(e.lightweight_split_test);
          e.include_in_ad_study_cell_id != null &&
            (n.push(e.id),
            e.source_campaign_id != null && !r && t.push(e.source_campaign_id));
          var u = e.include_in_ad_study_id;
          if (u != null) {
            var c = r ? null : e.source_campaign_id,
              d = s({
                adObjectIDToStudyID: l,
                studyIDToAdObjectIDs: a,
                studyID: u,
                adObjectID: e.id,
                adObjectSourceID: c,
              }),
              m = d.updatedAdObjectIDToStudyID,
              p = d.updatedStudyIDToAdObjectIDs;
            ((l = m), (a = p), (i = i.set(u, "campaign")));
          }
        });
      }
      var p = [],
        _ = [],
        f = r("AdsCampaignDraftFragmentStore").getNewIDsFor(
          r("adsUEditorAccountIDSelector")(),
        );
      if (f.size > 0) {
        var g = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPECampaignSelectors").getAllSelector()(f),
        );
        g.forEach(function (e) {
          var t = o(
            "DuplicationUpgradeAbTestingExperimentUtils",
          ).isDuplicationUpgradeLightweightABTest(e.lightweight_split_test);
          e.include_in_ad_study_cell_id != null &&
            (_.push(e.id),
            e.source_adset_id != null && !t && p.push(e.source_adset_id));
          var n = e.include_in_ad_study_id;
          if (n != null) {
            var r = t ? null : e.source_adset_id,
              u = s({
                adObjectIDToStudyID: l,
                studyIDToAdObjectIDs: a,
                studyID: n,
                adObjectID: e.id,
                adObjectSourceID: r,
              }),
              c = u.updatedAdObjectIDToStudyID,
              d = u.updatedStudyIDToAdObjectIDs;
            ((l = c), (a = d), (i = i.set(n, "ad_set")));
          }
        });
      }
      var h = [],
        y = [],
        C = r("immutable").Map(),
        b = r("immutable").Map(),
        v = r("AdsAdgroupDraftFragmentStore").getNewIDsFor(
          r("adsUEditorAccountIDSelector")(),
        );
      if (v.size > 0) {
        var S = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPEAdgroupSelectors").getAllSelector_LEGACY()(v),
        );
        S.forEach(function (e) {
          var t = e.include_in_ad_study_id;
          if (
            (e.include_in_ad_study_cell_id != null &&
              (y.push(e.id),
              e.source_ad_id != null && h.push(e.source_ad_id),
              (C = C.set(e.campaign_id, r("nullthrows")(t))),
              (b = b.set(e.adset_id, r("nullthrows")(t)))),
            t != null)
          ) {
            var n = s({
                adObjectIDToStudyID: l,
                studyIDToAdObjectIDs: a,
                studyID: t,
                adObjectID: e.id,
                adObjectSourceID: e.source_ad_id,
              }),
              o = n.updatedAdObjectIDToStudyID,
              u = n.updatedStudyIDToAdObjectIDs;
            ((l = o), (a = u), (i = i.set(t, "ad")));
          }
        });
      }
      return {
        originalAdgroupIDs: r("immutable").Set(h),
        variantAdgroupIDs: r("immutable").Set(y),
        originalCampaignGroupIDs: r("immutable").Set(t),
        variantCampaignGroupIDs: r("immutable").Set(n),
        originalCampaignIDs: r("immutable").Set(p),
        variantCampaignIDs: r("immutable").Set(_),
        adObjectIDToStudyID: l,
        studyIDToAdObjectIDs: a,
        studyIDToStudyLevel: i,
        studyIDToStudyType: r("immutable").Map(),
        parentCampaignGroupIDToMCTID: C,
        parentCampaignGroupIDToPublishedMCTID: u,
        parentCampaignIDToMCTID: b,
        publishedAdgroupIDToCreativeMulticellTestStudyID: c,
        creativeMulticellstudyIDToBudget: new Map(),
      };
    }
    function s(e) {
      var t = e.adObjectID,
        n = e.adObjectIDToStudyID,
        o = e.adObjectSourceID,
        a = e.studyID,
        i = e.studyIDToAdObjectIDs,
        l = n,
        s = i,
        u = r("immutable").Set([t]);
      (o != null && (u = u.add(o)),
        u.toArray().forEach(function (e) {
          l = l.set(e, a);
        }));
      var c = i.get(a);
      return (
        c == null ||
          (u = r("immutable").Set([].concat(u.toArray(), c.toArray()))),
        (s = s.set(a, u)),
        { updatedAdObjectIDToStudyID: l, updatedStudyIDToAdObjectIDs: s }
      );
    }
    var u = { initialState: e() },
      c = u;
    l.default = c;
  },
  98,
);
