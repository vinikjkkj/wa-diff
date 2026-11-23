__d(
  "MAIBACampaignPlanningExperience",
  [
    "MAIBACampaignPlanningExperience.entrypoint",
    "MAIBACampaignPlanningParseInput",
    "MAIBACampaignPlanningPillDescriptor.react",
    "MAIBAR23LoggingUtils",
    "MAIBAWorkspaceExperienceRegistry",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPillDescriptor: o("MAIBACampaignPlanningPillDescriptor.react")
          .getCampaignPlanningPillDescriptor,
        loadExperienceEntryPoint: function (t, n, a) {
          var e,
            i,
            l,
            s = o("MAIBACampaignPlanningParseInput").parseInput(n);
          if (s == null) return null;
          var u =
              (e = (i = s.draftNavigationIds) == null ? void 0 : i.accountID) !=
              null
                ? e
                : null,
            c = (l = s.draftNavigationIds) == null ? void 0 : l.campaignGroupID,
            d = [],
            m = new Set(),
            p = [],
            _ = [];
          for (var f of s.campaigns) {
            var g,
              h = (g = f.campaign_group_id) != null ? g : c;
            h != null && h !== "" && !m.has(h) && (m.add(h), d.push(h));
            var y = f.campaign_id;
            y != null && y !== "" && p.push(y);
            var C = f.adgroup_ids;
            if (C != null && C !== "")
              for (var b of C.split(",")) {
                var v = b.trim();
                v !== "" && _.push(v);
              }
          }
          o("MAIBAR23LoggingUtils").logMAIBAR23Event({
            event: "e2e_campaign_planning_loaded",
            botResponseId: n.request_id,
            conversationID: a,
            campaignGroupIDs: d,
            campaignIDs: p,
            adgroupIDs: _,
            logOnce: !0,
          });
          var S = o("RelayHooks").loadEntryPoint(
            t,
            r("MAIBACampaignPlanningExperience.entrypoint"),
            {
              accountID: u,
              adgroupIDs: _,
              campaignGroupIDs: d,
              campaignIDs: p,
              workspaceVersion: n.version,
            },
          );
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            S,
            function (e) {
              var t = e.entity;
              return { entity: t, input: s };
            },
            function (e) {
              var t = e.entity;
              return { entity: t, input: s, surface: "inline_publish" };
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
