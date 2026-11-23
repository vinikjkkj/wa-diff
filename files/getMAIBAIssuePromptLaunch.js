__d(
  "getMAIBAIssuePromptLaunch",
  [
    "MAIBAAdRejectChatInitiationArgs",
    "MAIBADoraRiskPromptUtils",
    "MAIBAEntrypointConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["prediagnosed_routine_type"],
      s = "gp2_ads_daily_spend_limit_entrypoint",
      u = "maiba_issue_prompt";
    function c(e, t) {
      var n =
        t === "BUSINESS_SUPPORT_HOME"
          ? "bsh_ad_reject_entrypoint"
          : t === "BUSINESS_HELP_CENTER"
            ? "bhc_ad_reject_entrypoint"
            : t === "META_BUSINESS_SUITE_HOME"
              ? "mbs_home_ad_reject_entrypoint"
              : null;
      return n == null
        ? null
        : o("MAIBAAdRejectChatInitiationArgs").getAdRejectChatInitiationArgs(
            e,
            [],
            u,
            n,
          );
    }
    function d(t, n, r, a) {
      var i;
      if (n == null) return null;
      if (t === "HIT_DAILY_SPEND_LIMIT") {
        var l = a != null ? a : {},
          u = l.prediagnosed_routine_type,
          d = babelHelpers.objectWithoutPropertiesLoose(l, e);
        return {
          entrypointContext: babelHelpers.extends({}, d, {
            admin_text: o("MAIBAEntrypointConstants").DSL_ADMIN_TEXT.toString(),
            prompt_id: s,
          }),
          initialUserMessage:
            o("MAIBAEntrypointConstants").DSL_INPUT_TEXT.toString() +
            " (Ad Account ID: " +
            n +
            ")",
        };
      }
      var m =
          t === "RISK_PAYMENT_DIRECT_DISABLE"
            ? o("MAIBADoraRiskPromptUtils").getDoraRiskChatInitiationArgs(
                n,
                o(
                  "MAIBADoraRiskPromptUtils",
                ).getDefaultDoraRiskInitialUserMessage(n),
              )
            : t === "UNSETTLED_AD_ACCOUNT"
              ? o(
                  "MAIBADoraRiskPromptUtils",
                ).getUnsettledAccountChatInitiationArgs(n)
              : t === "ADS_REJECT"
                ? c(n, r)
                : null,
        p = m == null ? void 0 : m.entrypointContext,
        _ =
          m == null || (i = m.userInput) == null
            ? void 0
            : i.initialUserMessage;
      return p == null || _ == null
        ? null
        : { entrypointContext: p, initialUserMessage: _ };
    }
    l.default = d;
  },
  98,
);
