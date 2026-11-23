__d(
  "CampaignPDREnableDownloadCheckLoadSuccessDataAction",
  [
    "BrandSafetyCampaignPDREnableDownloadCheckProvider",
    "CampaignPDREnableDownloadCheckLoadSuccessDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("CampaignPDREnableDownloadCheckLoadSuccessDataReducerPlugin"),
            n("BrandSafetyCampaignPDREnableDownloadCheckProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "campaign_pdr_enable_download_check_load_success",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
