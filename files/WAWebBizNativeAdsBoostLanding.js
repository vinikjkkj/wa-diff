__d(
  "WAWebBizNativeAdsBoostLanding",
  ["WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === "FIRST_TIME_WAA_ELIGIBLE"
        ? !0
        : e === "RETURNING_WITH_ADS" && s(t);
    }
    function s(e) {
      return ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.type === "catalog_product"
        ? o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled()
        : ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.type === "status"
          ? o("WAWebBizNativeAdsGatingUtils").nativeAdsStatusBoostEnabled()
          : e == null
            ? !1
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e) {
      return e === "whatsapp_smb_web_status"
        ? "whatsapp_smb_web_status"
        : e === "whatsapp_smb_web_catalog_product" &&
            o(
              "WAWebBizNativeAdsGatingUtils",
            ).boostCreationLogsCatalogEntryPointEnabled()
          ? "whatsapp_smb_web_catalog_product"
          : e === "whatsapp_smb_web_catalog" &&
              o(
                "WAWebBizNativeAdsGatingUtils",
              ).boostCreationLogsCatalogEntryPointEnabled()
            ? "whatsapp_smb_web_catalog"
            : null;
    }
    ((l.shouldBoostOpenAdCreation = e), (l.getBoostCreationEntryPoint = u));
  },
  98,
);
