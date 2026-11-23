__d(
  "WAWebBizAIPaymentNativeMethodsAdapter",
  [
    "WAWebAddEditPixFeature",
    "WAWebBizAiAgentGating",
    "WAWebBizFrontendGatingUtils",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebPrimaryFeaturesModel",
    "WAWebUprPaymentKeySyncGating",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o(
        "WAWebBizFrontendGatingUtils",
      ).isCustomPaymentMethodsSyncEnabled();
    }
    function s() {
      return e() && o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled();
    }
    function u() {
      return (
        o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport &&
        o("WAWebUprPaymentKeySyncGating").isCustomPaymentMethodsSyncEnabled()
      );
    }
    function c() {
      var e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
      );
      if (e == null) return { count: null, pix: null, status: "unknown" };
      var t = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
      return t != null
        ? { count: 1, pix: babelHelpers.extends({}, t), status: "available" }
        : { count: 0, pix: null, status: "available" };
    }
    function d() {
      var e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
      );
      if (e == null) return { count: null, keys: null, status: "unknown" };
      var t = o("WAWebUserPrefsCustomPaymentMethods")
        .getAllUprStoredKeys()
        .filter(function (e) {
          return o(
            "WAWebUprPaymentKeySyncGating",
          ).isCustomPaymentMethodsSyncEnabledForCountry(e.country);
        });
      return { count: t.length, keys: t, status: "available" };
    }
    function m(e) {
      !s() ||
        !o("WAWebBizAiAgentGating").isCheckoutEnabled() ||
        o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
          "settings",
          "from_business_tools",
          null,
          null,
          function () {
            return e();
          },
        );
    }
    function p() {
      return { pix: c(), upr: d() };
    }
    ((l.isNativeSyncEligible = e),
      (l.isPixManageEligible = s),
      (l.isUprSyncEligible = u),
      (l.readPixSnapshot = c),
      (l.readUprSnapshot = d),
      (l.openPixSetupOrManage = m),
      (l.readNativeMethodsSnapshot = p));
  },
  98,
);
