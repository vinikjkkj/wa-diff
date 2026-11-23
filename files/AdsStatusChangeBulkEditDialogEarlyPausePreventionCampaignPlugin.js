__d(
  "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignPlugin",
  [
    "AdsEarlyPausePreventionTurnOffContainer.react",
    "AdsErrorBoundary.react",
    "AdsObjectTypes",
    "AdsStatusChangeBulkEditDialogActions",
    "CometPlaceholder.react",
    "adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignVisibilitySelector",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "adsStatusChangeBulkEditEarlyPausePrevention",
        key: "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignPlugin",
        objectLevel: r("AdsObjectTypes").CAMPAIGN,
        visibilitySelector: o(
          "adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignVisibilitySelector",
        )
          .adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignVisibilitySelector,
        render: function (t, n, a, l, u, c) {
          var e;
          return s.jsx(r("AdsErrorBoundary.react"), {
            moduleName: i.id,
            children: s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(
                r("AdsEarlyPausePreventionTurnOffContainer.react"),
                {
                  adAccount: t,
                  adObjectLevel: "ad_set",
                  bulkData: {
                    bodyText: n,
                    isPublishDisabled: a,
                    adObjectIDs: l,
                  },
                  campaignGroupID:
                    (e = c == null ? void 0 : c.adObjectID) != null ? e : null,
                  campaignID: l[0],
                  component: "early_pause_prevention_bulk_edit_l2",
                  earlyPausePreventionData: c,
                  isShown: !0,
                  onConfirmModal: function () {
                    o("AdsStatusChangeBulkEditDialogActions").onPublish(
                      "ad_set",
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
