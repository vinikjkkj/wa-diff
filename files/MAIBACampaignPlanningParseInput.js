__d(
  "MAIBACampaignPlanningParseInput",
  ["MAIBAWorkspaceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a,
        i = e.title;
      if (i == null || i === "") return null;
      var l = o("MAIBAWorkspaceTypes").parseAttributesJSON(e.attributes_json),
        s = l.total_budget,
        u = [],
        c = l.campaigns_json;
      if (c != null && c !== "")
        try {
          var d = JSON.parse(c);
          Array.isArray(d) && (u = d);
        } catch (e) {}
      var m = null,
        p = l.forecasted_results_json;
      if (p != null && p !== "")
        try {
          var _ = JSON.parse(p);
          Array.isArray(_) &&
            (m = _.map(function (e) {
              return {
                label:
                  typeof (e == null ? void 0 : e.label) == "string"
                    ? e.label
                    : "",
                subtitle:
                  typeof (e == null ? void 0 : e.subtitle) == "string"
                    ? e.subtitle
                    : "",
                value:
                  typeof (e == null ? void 0 : e.value) == "string"
                    ? e.value
                    : "",
              };
            }));
        } catch (e) {}
      var f = l.account_id,
        g = l.campaign_group_id,
        h = l.ad_draft_id,
        y =
          f != null &&
          f !== "" &&
          g != null &&
          g !== "" &&
          h != null &&
          h !== ""
            ? { accountID: f, campaignGroupID: g, draftID: h }
            : null;
      return {
        campaigns: u,
        draftNavigationIds: y,
        forecasted_results: m != null ? m : void 0,
        goal_context: (t = l.goal_context) != null ? t : void 0,
        goal_detail: (n = l.goal_detail) != null ? n : void 0,
        quarter: (r = l.quarter) != null ? r : "",
        summary: (a = l.summary) != null ? a : "",
        title: i,
        total_budget: s != null ? s : "",
      };
    }
    l.parseInput = e;
  },
  98,
);
