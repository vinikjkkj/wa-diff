__d(
  "adsIntelligentComponentServerContextSelectorUtils",
  ["AdsIntelligentComponentServerContextTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = {};
      e.campaign_group != null && (n.objective = e.campaign_group.objective);
      var r = {},
        a = e.adgroup;
      a != null && a[0] && (r.creative = a[0].creative);
      var i =
        ((t = {}),
        (t.ad_account_id = e.ad_account_id),
        (t.object_id = e.object_id),
        (t.campaign_group = o(
          "AdsIntelligentComponentServerContextTypes",
        ).AdsAPICampaignGroupServerRecordFactory(n)),
        (t.adgroup = o(
          "AdsIntelligentComponentServerContextTypes",
        ).AdsAPIAdgroupServerRecordFactory(r)),
        (t.create_dialog_open = e.create_dialog_open),
        (t.edit_tray_open = e.edit_tray_open),
        (t.page_id_selected = e.page_id_selected),
        (t.pe_audience_splitting_open = e.pe_audience_splitting_open),
        (t.pe_pane = e.pe_pane),
        (t.placements_cycle = e.placements_cycle),
        (t.rule_dialog_open = e.rule_dialog_open),
        (t.tags = e.tags),
        (t.tool = e.tool),
        t);
      return o(
        "AdsIntelligentComponentServerContextTypes",
      ).AdsIntelligentComponentServerContextRecordFactory(i);
    }
    l.adsIntelligentComponentServerContext = e;
  },
  98,
);
