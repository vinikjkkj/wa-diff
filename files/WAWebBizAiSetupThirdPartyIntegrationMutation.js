__d(
  "WAWebBizAiSetupThirdPartyIntegrationMutation",
  ["WAWebBizAiSetupThirdPartyIntegrationMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "CONNECT_CREDENTIALS_REJECTED",
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiSetupThirdPartyIntegrationMutation.graphql"));
    function c(e) {
      var t = e == null ? void 0 : e.setup_3p_integration;
      return {
        errorCode:
          (t == null ? void 0 : t.error_code) == null ? null : t.error_code,
        success: (t == null ? void 0 : t.success) === !0,
      };
    }
    function d(e) {
      return e === s;
    }
    ((l.SETUP_THIRD_PARTY_INTEGRATION_MUTATION = u),
      (l.getSetupThirdPartyIntegrationResult = c),
      (l.isSetupThirdPartyIntegrationCredentialRejection = d));
  },
  98,
);
