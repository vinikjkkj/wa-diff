__d(
  "WAWebBizNativeAdsEntryPointUtils",
  [
    "FBLogger",
    "WAWebCTWAConstants",
    "WAWebWamEnumBannerTypes",
    "WAWebWamEnumLwiEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "banner":
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER;
        case "business_home_qp_card":
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
            .SMB_BUSINESS_HOME_QP_CARD;
        default:
          return (
            r("FBLogger")("wa_ctwa_web").warn(
              "getLwiEntryPointFromCampaignType: unknown campaign type: " +
                String(e),
            ),
            o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER
          );
      }
    }
    function s(e) {
      switch (e) {
        case o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP:
          return o("WAWebWamEnumBannerTypes").BANNER_TYPES
            .SMB_CHAT_LIST_QP_BANNER;
        case o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD:
          return o("WAWebWamEnumBannerTypes").BANNER_TYPES
            .SMB_BUSINESS_HOME_BANNER;
      }
    }
    function u(e) {
      switch (e) {
        case o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP:
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER;
        case o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD:
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
            .SMB_BUSINESS_HOME_QP_CARD;
        default:
          return (
            r("FBLogger")("wa_ctwa_web").warn(
              "getLwiEntryPointFromSurfaceId: unknown surface id: " + String(e),
            ),
            o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER
          );
      }
    }
    ((l.getLwiEntryPointFromCampaignType = e),
      (l.getBannerTypeFromSurfaceId = s),
      (l.getLwiEntryPointFromSurfaceId = u));
  },
  98,
);
