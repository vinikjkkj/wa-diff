__d(
  "BrandSafetyCampaignPDREnableDownloadCheckDataManager",
  [
    "AdsPerfInteractionsController",
    "AsyncTypedRequest",
    "CampaignPDREnableDownloadCheckLoadErrorDataAction",
    "CampaignPDREnableDownloadCheckLoadErrorDataActionFlux",
    "CampaignPDREnableDownloadCheckLoadSuccessDataAction",
    "InteractionTracingMetrics",
    "XBrandSafetyCampaignLevelPDREnableDownloadControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
        "XBrandSafetyCampaignLevelPDREnableDownloadControllerRouteBuilder",
      )
        .buildUri({
          ad_account_id: e.adAccountID,
          campaign_group_ids: e.campaignGroupIds.toArray(),
          campaign_ids: e.campaignIds.toArray(),
          start_date: e.startDate,
          end_date: e.endDate,
        })
        .toString();
      new (r("AsyncTypedRequest"))(t)
        .setMethod("POST")
        .setPayloadHandler(function (t) {
          return u(e, t.should_enable_download);
        })
        .setErrorHandler(function (t) {
          return s(e, t.toError());
        })
        .send();
    }
    function s(e, t) {
      (r("CampaignPDREnableDownloadCheckLoadErrorDataAction").dispatch(
        { queryParameters: e, error: t },
        {
          line: "52",
          module: "BrandSafetyCampaignPDREnableDownloadCheckDataManager.js",
          moduleID: i.id,
        },
      ),
        r("AdsPerfInteractionsController").annotateFailure(
          "am.charts.breakdown",
          r("CampaignPDREnableDownloadCheckLoadErrorDataActionFlux").actionType,
          { error: t, errorContext: { errorCode: t.code } },
        ));
    }
    function u(e, t) {
      r("CampaignPDREnableDownloadCheckLoadSuccessDataAction").dispatch(
        { queryParameters: e, enableDownloadButton: t },
        {
          line: "67",
          module: "BrandSafetyCampaignPDREnableDownloadCheckDataManager.js",
          moduleID: i.id,
        },
      );
      var n = r("AdsPerfInteractionsController").getActiveInteraction(
        "am.charts.breakdown",
      );
      n != null &&
        r("InteractionTracingMetrics") != null &&
        r("InteractionTracingMetrics").addMarkerPoint(
          n,
          "campaign_pdr_enable_download_check_load_success",
          "AppTiming",
        );
    }
    l.load = e;
  },
  98,
);
