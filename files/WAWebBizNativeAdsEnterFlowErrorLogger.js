__d(
  "WAWebBizNativeAdsEnterFlowErrorLogger",
  ["WAWebBizAdLogger", "WAWebBizAdManagementLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("WAWebBizAdLogger").logCritical({
        action: "enter",
        context: "flow",
        event: "enter_flow_error",
        eventCategory: "error",
        loggerContext: {
          entryPoint: "whatsapp_smb_web_manage_ads_native",
          flow: "create",
          flowID: n,
          pageID: t,
          product: "boosted_message",
          codebase: "whatsapp_smb",
          platform: "whatsapp_smb_web",
        },
        overrideErrorClassName: e.name,
        overrideErrorMessage: e.message,
        overrideErrorSummary: e.description,
        overrideErrorTrace: e.stack,
      });
    }
    function s(e, t, n) {
      var r;
      (r = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
        r.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
        r.LWI_SCREEN_ACTION.LWI_GENERIC_ERROR_SHOWN,
        r.LWI_ADS_IDENTITY_TYPE.PAGE,
        t,
        null,
        JSON.stringify({ pageId: n, error_message: e.message }),
      );
    }
    ((l.logAdCreationEnterFlowError = e), (l.logManageAdsGenericError = s));
  },
  98,
);
