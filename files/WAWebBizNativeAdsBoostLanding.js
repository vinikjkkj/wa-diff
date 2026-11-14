__d(
  "WAWebBizNativeAdsBoostLanding",
  ["WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === "FIRST_TIME_WAA_ELIGIBLE"
        ? !0
        : e === "RETURNING_WITH_ADS" &&
            t != null &&
            o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled();
    }
    function s(e) {
      var t =
        e === "whatsapp_smb_web_catalog_product"
          ? "whatsapp_smb_web_catalog_product"
          : e === "whatsapp_smb_web_catalog"
            ? "whatsapp_smb_web_catalog"
            : null;
      return t == null ||
        !o(
          "WAWebBizNativeAdsGatingUtils",
        ).boostCreationLogsCatalogEntryPointEnabled()
        ? null
        : t;
    }
    ((l.shouldBoostOpenAdCreation = e), (l.getCatalogBoostEntryPoint = s));
  },
  98,
);
