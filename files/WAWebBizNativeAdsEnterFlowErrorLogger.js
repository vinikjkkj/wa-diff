__d(
  "WAWebBizNativeAdsEnterFlowErrorLogger",
  [
    "WAWebBizAdLogger",
    "WAWebBizNativeAdsWamLogger",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiScreenAction",
    "WAWebWamEnumLwiScreenReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("WAWebBizAdLogger").logCritical({
        action: "enter",
        context: "flow",
        event: "enter_flow_error",
        eventCategory: "error",
        loggerContext: {
          codebase: "whatsapp_smb",
          entryPoint: "whatsapp_smb_web_manage_ads_native",
          flow: "create",
          flowID: n,
          pageID: t,
          platform: "whatsapp_smb_web",
          product: "boosted_message",
        },
        overrideErrorClassName: e.name,
        overrideErrorMessage: e.message,
        overrideErrorSummary: e.description,
        overrideErrorTrace: e.stack,
      });
    }
    function s(e, t, n) {
      o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(
        o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE
          .LWI_SCREEN_PERFORMANCE,
        o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
          .LWI_GENERIC_ERROR_SHOWN,
        o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE,
        t,
        null,
        JSON.stringify({ error_message: e.message, pageId: n }),
      );
    }
    ((l.logAdCreationEnterFlowError = e), (l.logManageAdsGenericError = s));
  },
  98,
);
