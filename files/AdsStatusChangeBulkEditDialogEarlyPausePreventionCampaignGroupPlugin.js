__d(
  "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupPlugin",
  [
    "AdsEarlyPausePreventionTurnOffContainer.react",
    "AdsErrorBoundary.react",
    "AdsObjectTypes",
    "AdsStatusChangeBulkEditDialogActions",
    "CometPlaceholder.react",
    "adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupVisibilitySelector",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "adsStatusChangeBulkEditEarlyPausePrevention",
        key: "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupPlugin",
        objectLevel: r("AdsObjectTypes").CAMPAIGN_GROUP,
        visibilitySelector: o(
          "adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupVisibilitySelector",
        )
          .adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupVisibilitySelector,
        render: function (t, n, a, l, u, c) {
          var e,
            d = { bodyText: n, isPublishDisabled: a, adObjectIDs: l };
          return s.jsx(r("AdsErrorBoundary.react"), {
            moduleName: i.id,
            children: s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(
                r("AdsEarlyPausePreventionTurnOffContainer.react"),
                {
                  adAccount: t,
                  adObjectLevel: "campaign",
                  bulkData: d,
                  campaignGroupID: l[0],
                  campaignID:
                    (e = c == null ? void 0 : c.adObjectID) != null ? e : null,
                  component: "early_pause_prevention_bulk_edit_l3",
                  earlyPausePreventionData: c,
                  isShown: !0,
                  onConfirmModal: function () {
                    o("AdsStatusChangeBulkEditDialogActions").onPublish(
                      "campaign",
                      l,
                      r("nullthrows")(u),
                    );
                  },
                  onHideModal: function () {
                    o("AdsStatusChangeBulkEditDialogActions").onHide();
                  },
                },
              ),
            }),
          });
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
