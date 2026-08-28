__d(
  "AdsIntelligentComponentServerContextTypes",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("immutable").Record(((e = {}), (e.objective = null), e)),
      d = r("immutable").Record(((s = {}), (s.creative = null), s)),
      m = r("immutable").Record(
        ((u = {}),
        (u.ad_account_id = null),
        (u.object_id = null),
        (u.campaign_group = c()),
        (u.adgroup = d()),
        (u.create_dialog_open = !1),
        (u.edit_tray_open = !1),
        (u.page_id_selected = !1),
        (u.pe_audience_splitting_open = !1),
        (u.pe_pane = null),
        (u.placements_cycle = null),
        (u.rule_dialog_open = !1),
        (u.tags = null),
        (u.tool = null),
        u),
      );
    ((l.AdsAPICampaignGroupServerRecordFactory = c),
      (l.AdsAPIAdgroupServerRecordFactory = d),
      (l.AdsIntelligentComponentServerContextRecordFactory = m));
  },
  98,
);
