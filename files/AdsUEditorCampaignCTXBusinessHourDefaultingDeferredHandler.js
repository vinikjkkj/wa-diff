__d(
  "AdsUEditorCampaignCTXBusinessHourDefaultingDeferredHandler",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsDataAtom",
    "AdsEditingCampaignContext",
    "AdsPageStore",
    "AdsUEditorCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
    "AdsUEditorCampaignGroupToggleDayPartingAction",
    "AdsUEditorContextFactory",
    "AdsUEditorHostIDs",
    "adsStorePromiseAsyncGetForSyncStore",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        var e = o("AdsUEditorContextFactory").getForIDs(
          r("AdsEditingCampaignContext"),
          t,
          i.id,
        );
        r("promiseDone")(
          r("adsStorePromiseAsyncGetForSyncStore")(
            r("adsUEditorAdObjectsForSelectedCampaignsSelector").getStores(e),
            function () {
              var n = r("adsUEditorAdObjectsForSelectedCampaignsSelector")(e);
              if (n.length !== t.length) return null;
              var o = new Set(
                n.flatMap(function (e) {
                  var t,
                    n = e.campaign,
                    r = (t = n.promoted_object) == null ? void 0 : t.page_id;
                  return r == null ? [] : [r];
                }),
              );
              return o.size === 1 ? Array.from(o)[0] : null;
            },
            function (e) {
              return e != null;
            },
            function () {
              return !1;
            },
            { timeout: 1e4 },
          ),
          function (n) {
            n != null &&
              r("promiseDone")(
                r("adsStorePromiseAsyncGetForSyncStore")(
                  r("AdsPageStore"),
                  function () {
                    return r("AdsPageStore").getLoadObject(n);
                  },
                ),
                function () {
                  var n = o(
                    "AdsUEditorCTXBusinessHourDaypartingUtils",
                  ).getCTXBusinessHourCreationDefault(
                    r("adsUEditorAdObjectsForSelectedCampaignsSelector")(e),
                    t,
                    !0,
                  );
                  n != null &&
                    (n.campaignGroupIDs.length > 0 &&
                      r(
                        "AdsUEditorCampaignGroupToggleDayPartingAction",
                      ).dispatch(
                        {
                          campaignGroupIDs: n.campaignGroupIDs,
                          campaignIDs: n.campaignIDs,
                          hostID: r("AdsUEditorHostIDs").EDITING,
                          useDayParting: !0,
                        },
                        {
                          line: "77",
                          module:
                            "AdsUEditorCampaignCTXBusinessHourDefaultingDeferredHandler.js",
                          moduleID: i.id,
                        },
                      ),
                    r(
                      "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
                    ).dispatch(
                      {
                        campaignIDs: n.campaignIDs,
                        hostID: r("AdsUEditorHostIDs").EDITING,
                        adsetSchedule: n.adsetSchedule,
                        pacingType: ["day_parting"],
                      },
                      {
                        line: "84",
                        module:
                          "AdsUEditorCampaignCTXBusinessHourDefaultingDeferredHandler.js",
                        moduleID: i.id,
                      },
                    ));
                },
              );
          },
          function () {},
        );
      });
    }
    function u(e) {
      e.every(function (e) {
        return r("AdsCampaignDraftFragmentStore").getIsNewSelector()(e);
      }) && s(e);
    }
    var c = {
      applyCTXBusinessHourCreationDefault: s,
      applyCTXBusinessHourCreationDefaultForNewCampaigns: u,
    };
    l.default = c;
  },
  98,
);
