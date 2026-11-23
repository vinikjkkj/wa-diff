__d(
  "AdsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignPlugin",
  [
    "AdsErrorBoundary.react",
    "AdsObjectTypes",
    "AdsStatusChangeBulkEditDialogActions",
    "CTXEarlyPausePreventionComponentContainer.react",
    "CometPlaceholder.react",
    "adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignVisibilitySelector",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "adsStatusChangeBulkEditCTXEarlyPausePrevention",
        key: "AdsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignPlugin",
        objectLevel: r("AdsObjectTypes").CAMPAIGN,
        visibilitySelector: o(
          "adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignVisibilitySelector",
        )
          .adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignVisibilitySelector,
        render: function (t, n, a, l) {
          return s.jsx(r("AdsErrorBoundary.react"), {
            moduleName: i.id,
            children: s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(
                o("CTXEarlyPausePreventionComponentContainer.react")
                  .CTXEarlyPausePreventionComponentContainer,
                {
                  bulk: a,
                  component: "BulkEdit",
                  ctxPausePreventionData: l,
                  isShown: !0,
                  objectID: t,
                  objectLevel: "ad_set",
                  onConfirmModal: function () {
                    o("AdsStatusChangeBulkEditDialogActions").onPublish(
                      "ad_set",
                      t,
                      r("nullthrows")(n),
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
