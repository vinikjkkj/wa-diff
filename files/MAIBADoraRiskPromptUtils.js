__d(
  "MAIBADoraRiskPromptUtils",
  ["MAIBAEntrypointConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "gp2_ads_risk_restriction_entrypoint",
      s = "gp2_ads_unsettled_account_entrypoint";
    function u(e, t) {
      return (
        t === void 0 && (t = !1),
        (t
          ? o("MAIBAEntrypointConstants").DORA_PAYMENT_RISK_INPUT_TEXT
          : e != null
            ? e
            : o("MAIBAEntrypointConstants").DORA_INPUT_TEXT
        ).toString()
      );
    }
    function c(e, t) {
      return t != null ? e + " (Ad Account ID: " + t + ")" : e;
    }
    function d(e) {
      return c(o("MAIBAEntrypointConstants").DORA_INPUT_TEXT.toString(), e);
    }
    function m(e, t) {
      return (t === void 0 && (t = !1), c(u(void 0, t), e));
    }
    function p(t, n, r) {
      var a = {
        adAccountID: t,
        entrypointContext: {
          admin_text: o("MAIBAEntrypointConstants").DORA_ADMIN_TEXT.toString(),
          is_dora_entrypoint: !0,
          prompt_id: e,
        },
        userInput: { initialUserMessage: n },
      };
      return r != null
        ? babelHelpers.extends({}, a, { isConsentingToAdsAI: !r })
        : a;
    }
    function _(e) {
      return {
        adAccountID: e,
        entrypointContext: {
          admin_text: o(
            "MAIBAEntrypointConstants",
          ).UNSETTLED_ADMIN_TEXT.toString(),
          is_dora_entrypoint: !0,
          prompt_id: s,
        },
        userInput: {
          initialUserMessage:
            o("MAIBAEntrypointConstants").UNSETTLED_INPUT_TEXT.toString() +
            " (Ad Account ID: " +
            e +
            ")",
        },
      };
    }
    ((l.getDoraRiskInputText = u),
      (l.getDefaultDoraRiskInitialUserMessage = d),
      (l.getDoraRiskInitialUserMessage = m),
      (l.getDoraRiskChatInitiationArgs = p),
      (l.getUnsettledAccountChatInitiationArgs = _));
  },
  98,
);
