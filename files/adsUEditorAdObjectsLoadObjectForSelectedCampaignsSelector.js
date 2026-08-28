__d(
  "adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector",
  [
    "LoadObject",
    "adsCreateStoreSelector",
    "adsUEditorCampaignGroupSelector",
    "adsUEditorCampaignSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "adsUEditorSlowSelectorsLogging",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return (
          t.length === n.length &&
          t.every(function (e, t) {
            return r("shallowEqual")(e, n[t]);
          })
        );
      },
      s = [],
      u = r("LoadObject").withValue([], { creatorModuleID: i.id }),
      c = [
        r("adsUEditorCampaignGroupSelector"),
        r("adsUEditorCampaignSelector"),
        r("adsUEditorSelectedCampaignIDsSelector"),
      ],
      d = r("adsCreateStoreSelector")(
        function (e) {
          return c.flatMap(function (t) {
            return t.getStores(e);
          });
        },
        function (n) {
          var t = [],
            a = r("adsUEditorSelectedCampaignIDsSelector")(n);
          for (var l of a) {
            var c = r("adsUEditorCampaignSelector")({
              campaignID: l,
              campaignSelector: n.campaignSelector,
            });
            if (!c) return r("LoadObject").loading({ creatorModuleID: i.id });
            var d = c.campaign_id,
              m = r("adsUEditorCampaignGroupSelector")({
                campaignGroupID: d,
                campaignGroupSelector: n.campaignGroupSelector,
              });
            if (!m) return r("LoadObject").loading({ creatorModuleID: i.id });
            t.push({ campaign: c, campaignGroup: m });
          }
          return (
            e(s, t) ||
              ((s = t),
              (u = r("LoadObject").withValue(t, { creatorModuleID: i.id }))),
            o("adsUEditorSlowSelectorsLogging").checkAndLogCampaignError(u)
          );
        },
        {
          isGetStoresPure: c.every(function (e) {
            return e.isGetStoresPure;
          }),
          name:
            i.id + ".adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector",
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);
