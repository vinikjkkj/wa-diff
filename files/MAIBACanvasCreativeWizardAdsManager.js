__d(
  "MAIBACanvasCreativeWizardAdsManager",
  [
    "AdsManagerRelayEnvironmentProvider.react",
    "MAIBAAdDraftEditorContext",
    "MAIBACanvasCreativeWizardSeed.react",
    "MAIBAUEditorDraftBridgeAdapter",
    "MAIBAUEditorDraftBridgeProvider.react",
    "isMAIBAAdsManagerCatalogEnabled",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.adgroupID,
        n = e.mediaFormat,
        a = e.onHide,
        i = e.onReady,
        l = o(
          "MAIBAAdDraftEditorContext",
        ).useMAIBAAdDraftEditorContextRequired(),
        u = l.product,
        c = s.jsx(r("MAIBACanvasCreativeWizardSeed.react"), {
          adgroupID: t,
          mediaFormat: n,
          onHide: a,
          onReady: i,
        });
      return s.jsx(r("AdsManagerRelayEnvironmentProvider.react"), {
        children: r("isMAIBAAdsManagerCatalogEnabled")(u)
          ? c
          : s.jsx(r("MAIBAUEditorDraftBridgeProvider.react"), {
              adgroupID: t,
              children: c,
            }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      (o("MAIBAUEditorDraftBridgeAdapter").selectCampaignGroupForEditing(
        e.campaignGroupID,
      ),
        o("MAIBAUEditorDraftBridgeAdapter").selectCampaignForEditing(
          e.campaignID,
        ),
        o("MAIBAUEditorDraftBridgeAdapter").selectAdgroupForEditing(
          e.adgroupID,
        ));
    }
    ((l.MAIBACreativeWizardModal = u), (l.dispatchSelectionForWizard = c));
  },
  98,
);
