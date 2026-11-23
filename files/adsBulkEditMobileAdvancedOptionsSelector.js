__d(
  "adsBulkEditMobileAdvancedOptionsSelector",
  [
    "AdsBrandSafetyUtils",
    "AdsEditingCampaignEditorContext",
    "AdsUEditorCampaignSelectors",
    "IsAppAdUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "adsUEditorSelectedCampaignIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("adsUEditorSelectedCampaignIDsSelector"),
          o("AdsUEditorCampaignSelectors").eligibilityInformationMap,
        ],
        function (t, n, o) {
          var e = t.capabilities,
            a = r("adsUEditorSelectedCampaignGroupsSelector")(
              r("AdsEditingCampaignEditorContext"),
            ).every(function (e) {
              return r("IsAppAdUtils").isMAIIOS14CampaignGroup(e);
            }),
            i = r("AdsBrandSafetyUtils").getMobileAdvancedOptionsUISpec({
              infoMap: o,
              rfVideoFlag: !1,
              directInstallEligible: !0,
              isIOS14CampaignGroup: a,
            });
          return { accountCapabilities: e, ids: n, mobileDevices: i };
        },
        { name: i.id + ".adsBulkEditMobileAdvancedOptionsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
