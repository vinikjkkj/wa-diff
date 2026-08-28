__d(
  "AdsUnificationCampaignEntrypointData",
  [
    "AdsAPIObjectives",
    "AdsEditingCampaignGroupEditorContext",
    "AdsLeadGenAutomationQEUtils",
    "cr:13520",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = r("gkx")("17193"),
        n = (e = r("qex")._("4886")) != null ? e : !1;
      return t || n;
    }
    function s() {
      if (n("cr:13520") == null) return { isEligibleForEntrypoint: !1 };
      var t = n("cr:13520")(r("AdsEditingCampaignGroupEditorContext")),
        a = t.objective,
        i = t.selectedCampaignGroupID;
      return i == null ||
        a == null ||
        (a !== r("AdsAPIObjectives").APP_INSTALLS &&
          a !== r("AdsAPIObjectives").OUTCOME_SALES &&
          a !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          !o("AdsLeadGenAutomationQEUtils").isLeadsObjective(a) &&
          !(o("AdsLeadGenAutomationQEUtils").isUpperFunnelObjective(a) && e()))
        ? { isEligibleForEntrypoint: !1 }
        : {
            isEligibleForEntrypoint: !0,
            entrypointParams: {
              campaign_details: t.campaignDetails,
              is_e2e_proxy_campaign_group: t.isE2EProxyCampaignGroup,
              campaign_group_daily_budget:
                t.campaignGroupDailyBudget != null
                  ? Number(t.campaignGroupDailyBudget)
                  : null,
              campaign_group_lifetime_budget:
                t.campaignGroupLifetimeBudget != null
                  ? Number(t.campaignGroupLifetimeBudget)
                  : null,
            },
          };
    }
    ((l.AdsUEditorAutomationUnificationCampaignGroupOpportunitiesHubSelector =
      n("cr:13520")),
      (l.getEntrypointParams = s));
  },
  98,
);
