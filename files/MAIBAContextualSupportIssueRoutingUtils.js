__d(
  "MAIBAContextualSupportIssueRoutingUtils",
  ["MAIBADoraRiskPromptUtils", "MAIBAEntrypointConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "risk_disabled_new_reach_impression_opportunity_universe",
      s = "maiba_dora_risk_payment_restriction_prompt",
      u = "bsh_dora_policy_entrypoint",
      c = "gp2_ads_unsettled_account_entrypoint";
    function d(e) {
      return (
        o("MAIBAEntrypointConstants").DORA_POLICY_INPUT_TEXT.toString() +
        " (Asset ID: " +
        e +
        ", Asset Type: AD_ACCOUNT, LBD Topic ID: " +
        o("MAIBAEntrypointConstants").DORA_POLICY_LBD_TOPIC_ID.toString() +
        ")"
      );
    }
    function m(e) {
      return (
        o("MAIBAEntrypointConstants").UNSETTLED_INPUT_TEXT.toString() +
        " (Ad Account ID: " +
        e +
        ")"
      );
    }
    function p(t, n, r) {
      return {
        adAccountID: t,
        getChatInitiationArgs: function (n) {
          return o("MAIBADoraRiskPromptUtils").getDoraRiskChatInitiationArgs(
            t,
            o("MAIBADoraRiskPromptUtils").getDoraRiskInitialUserMessage(t, r),
            n,
          );
        },
        routingExperiment: { isEnabled: n, universeName: e },
        treatmentExposureUniverseNames: [s],
      };
    }
    function _(t, n) {
      return {
        adAccountID: t,
        getChatInitiationArgs: function (n) {
          return {
            adAccountID: t,
            entrypointContext: {
              admin_text: o(
                "MAIBAEntrypointConstants",
              ).DORA_POLICY_ADMIN_TEXT.toString(),
              is_dora_policy_entrypoint: !0,
              prompt_id: u,
            },
            isConsentingToAdsAI: !n,
            userInput: { initialUserMessage: d(t) },
          };
        },
        routingExperiment: { isEnabled: n, universeName: e },
      };
    }
    function f(t, n) {
      return {
        adAccountID: t,
        getChatInitiationArgs: function (n) {
          return {
            adAccountID: t,
            entrypointContext: {
              admin_text: o(
                "MAIBAEntrypointConstants",
              ).UNSETTLED_ADMIN_TEXT.toString(),
              is_dora_entrypoint: !0,
              prompt_id: c,
            },
            isConsentingToAdsAI: !n,
            userInput: { initialUserMessage: m(t) },
          };
        },
        routingExperiment: { isEnabled: n, universeName: e },
      };
    }
    ((l.getDoraRiskContextualSupportIssueRouting = p),
      (l.getDoraPolicyContextualSupportIssueRouting = _),
      (l.getFailedPaymentContextualSupportIssueRouting = f));
  },
  98,
);
