__d(
  "WAWebBizFrontendGatingUtils",
  [
    "WAWebABProps",
    "WAWebContactUtils",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
    "WAWebUprPaymentKeySyncGating",
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
      return o("WAWebMobilePlatforms").isSMB();
    }
    function d(e) {
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
    function m(e) {
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
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web")
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_multiselect_enabled")
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_lists_dropdown_application_fix_enabled",
        )
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o(
          "WAWebUprPaymentKeySyncGating",
        ).isCustomPaymentMethodsSyncEnabledForCountry("MX")
      );
    }
    function h() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o(
          "WAWebUprPaymentKeySyncGating",
        ).isCustomPaymentMethodsSyncEnabledForCountry("ID")
      );
    }
    function y(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o(
          "WAWebUprPaymentKeySyncGating",
        ).isCustomPaymentMethodsSyncEnabledForCountry(e)
      );
    }
    function C() {
      var e,
        t =
          (e = o("WAWebABProps").getABPropConfigValue(
            "payments_upr_send_key_from_web",
          )) != null
            ? e
            : "";
      return t === ""
        ? new Set()
        : new Set(
            t
              .split(",")
              .map(function (e) {
                return e.trim().toUpperCase();
              })
              .filter(function (e) {
                return e !== "";
              }),
          );
    }
    function b(e) {
      return e == null || e === "" ? !1 : C().has(e.toUpperCase());
    }
    ((l.isOrderDetailsPaymentInstructionsSyncEnabled = e),
      (l.isCustomPaymentMethodsSyncEnabled = s),
      (l.isPixInQuickReplyEnabled = u),
      (l.isForceCopyPixCTAEnabled = c),
      (l.isCopyPixKeyBuyerLoggingEnabled = d),
      (l.isCopyPixCodeBuyerLoggingEnabled = m),
      (l.isPixOnWebEnabled = p),
      (l.isCTWASMBListsMultiSelectEnabled = _),
      (l.isCTWASMBListsDropdownApplicationFixEnabled = f),
      (l.isClabeSyncEnabled = g),
      (l.isIdPaymentAccountSyncEnabled = h),
      (l.isUprSendEnabledForCountry = y),
      (l.isUprAttachmentTrayEnabled = b));
  },
  98,
);
