__d(
  "WAWebBizFrontendGatingUtils",
  [
    "WAWebABProps",
    "WAWebContactUtils",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
    "WAWebWamEnumBizPlatform",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.paymentInfoSyncSupport &&
        o("WAWebABProps").getABPropConfigValue(
          "order_details_payment_instructions_sync_enabled",
        )
      );
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_pix_phase_1_seller_sync_enabled",
        )
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_pix_quick_reply_enabled",
        )
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_force_copy_pix_cta_enabled",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_br_copy_pix_code_api_merchant_enabled",
      );
    }
    function m(e) {
      var t = o("WAWebContactUtils").getMaybeBizPlatformForLogging(e),
        n = t !== o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      return n
        ? o("WAWebABProps").getABPropConfigValue(
            "payments_br_p2m_pix_copy_key_buyer_logging",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "payments_br_p2p_pix_copy_key_buyer_logging",
          );
    }
    function p(e) {
      var t = o("WAWebContactUtils").getMaybeBizPlatformForLogging(e),
        n = t !== o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      return n
        ? o("WAWebABProps").getABPropConfigValue(
            "payments_br_p2m_pix_copy_code_buyer_logging",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "payments_br_p2p_pix_copy_code_buyer_logging",
          );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web")
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_multiselect_enabled")
      );
    }
    ((l.isOrderDetailsPaymentInstructionsSyncEnabled = e),
      (l.isCustomPaymentMethodsSyncEnabled = s),
      (l.isPixInQuickReplyEnabled = u),
      (l.isForceCopyPixCTAEnabled = c),
      (l.isAPICopyPixCTAEnabled = d),
      (l.isCopyPixKeyBuyerLoggingEnabled = m),
      (l.isCopyPixCodeBuyerLoggingEnabled = p),
      (l.isPixOnWebEnabled = _),
      (l.isCTWASMBMultiSelectEnabled = f));
  },
  98,
);
