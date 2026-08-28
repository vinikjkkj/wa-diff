__d(
  "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
  [
    "LoadObject",
    "adsCreateStoreSelector",
    "adsUEditorAdgroupSelector",
    "adsUEditorCampaignGroupSelector",
    "adsUEditorCampaignSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSlowSelectorsLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.length !== t.length
        ? !1
        : e.every(function (e, n) {
            return (
              e.adgroup === t[n].adgroup &&
              e.campaign === t[n].campaign &&
              e.campaignGroup === t[n].campaignGroup
            );
          });
    }
    var s = [],
      u = r("LoadObject").withValue([], { creatorModuleID: i.id }),
      c = [
        r("adsUEditorAdgroupSelector"),
        r("adsUEditorCampaignGroupSelector"),
        r("adsUEditorCampaignSelector"),
        r("adsUEditorSelectedAdgroupIDsSelector"),
      ],
      d = r("adsCreateStoreSelector")(
        function (e) {
          return c.flatMap(function (t) {
            return t.getStores(e);
          });
        },
        function (n) {
          var t = [],
            a = r("adsUEditorSelectedAdgroupIDsSelector")(n);
          for (var l of a) {
            var c = r("adsUEditorAdgroupSelector")({
              adgroupID: l,
              adgroupSelector: n.adgroupSelector,
            });
            if (!c) return r("LoadObject").loading({ creatorModuleID: i.id });
            var d = c.adset_id,
              m = r("adsUEditorCampaignSelector")({
                campaignID: d,
                campaignSelector: n.campaignSelector,
              });
            if (!m) return r("LoadObject").loading({ creatorModuleID: i.id });
            var p = c.campaign_id,
              _ = r("adsUEditorCampaignGroupSelector")({
                campaignGroupID: p,
                campaignGroupSelector: n.campaignGroupSelector,
              });
            if (!_) return r("LoadObject").loading({ creatorModuleID: i.id });
            t.push({ adgroup: c, campaign: m, campaignGroup: _ });
          }
          return (
            e(s, t) ||
              ((s = t),
              (u = r("LoadObject").withValue(t, { creatorModuleID: i.id }))),
            o("adsUEditorSlowSelectorsLogging").checkAndLogAdgroupLoadObject(u)
          );
        },
        {
          isGetStoresPure: c.every(function (e) {
            return e.isGetStoresPure;
          }),
          name: i.id + ".selector",
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);
