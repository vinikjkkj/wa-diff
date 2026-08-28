__d(
  "adsUEditorAdObjectsPlainLoadObjectForSelectedCampaignsSelector",
  [
    "LoadObject",
    "adsCreateStoreSelector",
    "adsUEditorCampaignGroupPlainObjectSelector",
    "adsUEditorCampaignPlainObjectSelector",
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
        r("adsUEditorCampaignGroupPlainObjectSelector"),
        r("adsUEditorCampaignPlainObjectSelector"),
        r("adsUEditorSelectedCampaignIDsSelector"),
      ],
      d = r("adsCreateStoreSelector")(
        function (e) {
          return [].concat(
            r("adsUEditorCampaignGroupPlainObjectSelector").getStores(e),
            r("adsUEditorCampaignPlainObjectSelector").getStores({
              campaignPlainObjectSelector: e.campaignPlainObjectSelector,
            }),
            r("adsUEditorSelectedCampaignIDsSelector").getStores(e),
          );
        },
        function (n) {
          var t = [],
            a = r("adsUEditorSelectedCampaignIDsSelector")(n);
          for (var l of a) {
            var c = r("adsUEditorCampaignPlainObjectSelector")({
              campaignPlainObjectSelector: n.campaignPlainObjectSelector,
              campaignID: l,
            });
            if (!c) return r("LoadObject").loading({ creatorModuleID: i.id });
            var d = c.campaign_id,
              m = r("adsUEditorCampaignGroupPlainObjectSelector")({
                campaignGroupPlainObjectSelector:
                  n.campaignGroupPlainObjectSelector,
                campaignGroupID: d,
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
            i.id +
            ".adsUEditorAdObjectsPlainLoadObjectForSelectedCampaignsSelector",
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);
