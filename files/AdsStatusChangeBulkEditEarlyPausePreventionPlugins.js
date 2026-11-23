__d(
  "AdsStatusChangeBulkEditEarlyPausePreventionPlugins",
  [
    "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupPlugin",
    "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n(
          "AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupPlugin",
        ),
        n("AdsStatusChangeBulkEditDialogEarlyPausePreventionCampaignPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
