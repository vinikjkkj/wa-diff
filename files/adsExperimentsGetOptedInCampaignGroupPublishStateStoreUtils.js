__d(
  "adsExperimentsGetOptedInCampaignGroupPublishStateStoreUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignGroupCombinedStore",
    "AdsDraftFragmentStore",
    "adsConvertAdObjectRecordToPlainJS",
    "first",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.response.fragment_statuses,
        n =
          t == null
            ? void 0
            : t.data.filter(function (e) {
                return e.ad_object_type === "campaign";
              }),
        a =
          t == null
            ? void 0
            : t.data.filter(function (e) {
                var t;
                if (
                  e == null ||
                  e.ad_object_type !== "campaign" ||
                  e.status !== "SUCCESS"
                )
                  return !1;
                var n = e.ad_object_id,
                  a =
                    n != null
                      ? (t = r("AdsCampaignGroupCombinedStore").getObject(n)) ==
                        null
                        ? void 0
                        : t.getValue()
                      : null;
                return (
                  a != null &&
                  !o("AdsAPICampaignGroupRecordUtils").isSmartAppPromotion(
                    r("adsConvertAdObjectRecordToPlainJS")(a),
                  ) &&
                  (!o("AdsAPICampaignGroupRecordUtils").isAutomatedShoppingAds(
                    a,
                  ) ||
                    a.ad_creation_package_config == null) &&
                  a.is_opted_into_experiments === !0
                );
              }),
        i = n != null && n.length > 1,
        l = a != null && a.length > 0,
        s = !i && a != null ? r("first")(a) : null,
        u = s == null ? void 0 : s.ad_object_id;
      return {
        isBulkPublishReasonForNoData: l && i,
        isOptedInCampaignGroupPublished: l && !i,
        campaignGroupID: u,
      };
    }
    function u(t) {
      var n = t.response.fragment_statuses,
        o =
          n == null
            ? void 0
            : n.data.filter(function (e) {
                return e.ad_object_type === "campaign";
              });
      return o == null
        ? void 0
        : o
            .map(function (t) {
              var n, o, a, i, l, s, u, c, d, m, p;
              if (t.status !== "SUCCESS") return null;
              var _ = r("AdsDraftFragmentStore").getCached(t.fragment_id),
                f =
                  ((n = _.values) == null ||
                  (n = n.find(function (e) {
                    return e.field === "is_opted_into_experiments";
                  })) == null
                    ? void 0
                    : n.new_value) === "true";
              if (
                !f ||
                ((o = _.values) == null
                  ? void 0
                  : o.find(function (e) {
                      return e.field === "ab_test_config";
                    })) == null
              )
                return null;
              var g = JSON.parse(
                  (a =
                    (i = _.values) == null ||
                    (i = i.find(function (e) {
                      return e.field === "ab_test_config";
                    })) == null
                      ? void 0
                      : i.new_value) != null
                    ? a
                    : "{}",
                ),
                h = JSON.parse(
                  (l =
                    (s = _.values) == null ||
                    (s = s.find(function (e) {
                      return e.field === "lightweight_split_test_options";
                    })) == null
                      ? void 0
                      : s.new_value) != null
                    ? l
                    : "{}",
                ),
                y =
                  (u = _.values) == null ||
                  (u = u.find(function (e) {
                    return e.field === "lightweight_split_test";
                  })) == null ||
                  (u = u.new_value) == null
                    ? void 0
                    : u.replace(/\"/g, "");
              return {
                durationInSeconds: g.duration_in_seconds,
                keyMetric: g.key_metric,
                testVariable: g.test_variable,
                creativeMulticellTest: (e || (e = r("isEmpty")))(
                  g.creative_multicell_test,
                )
                  ? null
                  : {
                      adgroupIDs:
                        (c = g.creative_multicell_test) == null
                          ? void 0
                          : c.adgroup_ids,
                      studyID:
                        (d = g.creative_multicell_test) == null
                          ? void 0
                          : d.study_id,
                      dailyBudget:
                        (m = g.creative_multicell_test) == null
                          ? void 0
                          : m.daily_budget,
                      budgetPercentage:
                        (p = g.creative_multicell_test) == null
                          ? void 0
                          : p.budget_percentage,
                    },
                upgradeSolutionIDs: h.upgrade_solution_ids,
                campaignGroupID: t.ad_object_id,
                lightweightSplitTest: y,
              };
            })
            .filter(Boolean);
    }
    ((l.adsExperimentsGetOptedInCampaignGroupPublishStateFromPublishResponse =
      s),
      (l.adsExperimentsGetOptedInCampaignGroupABTestConfigsFromPublishResponse =
        u));
  },
  98,
);
