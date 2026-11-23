__d(
  "MAIBARiskRecoveryPrompt",
  [
    "FBLogger",
    "MAIBARiskRecoveryPromptQuery.graphql",
    "RelayHooks",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "aymt_risk_recovered_restart_campaign",
      u = "gp2_ads_unsettled_account_entrypoint",
      c = e !== void 0 ? e : (e = n("MAIBARiskRecoveryPromptQuery.graphql"));
    function d(e, t, n) {
      if (n == null || n.legacy_account_id !== e) return null;
      if (n.risk_recovery_prompt_status === "ACTIVE")
        return {
          hideUserMessage: !1,
          prediagnosedRoutineType: null,
          promptId: s,
          promptText: t,
        };
      var r = n.failed_payment_prompt_text;
      return n.risk_recovery_prompt_status === "UNSETTLED" &&
        r != null &&
        r.trim() !== ""
        ? {
            hideUserMessage: !0,
            prediagnosedRoutineType: "FAILED_PAYMENT",
            promptId: u,
            promptText: r,
          }
        : null;
    }
    var m = 0;
    async function p(e, t, n, a) {
      m++;
      try {
        var i = await o("RelayHooks")
          .fetchQuery(
            e,
            c,
            { adAccountID: t, generation: a + ":" + m },
            { fetchPolicy: "network-only" },
          )
          .toPromise();
        return d(
          t,
          n,
          i == null ? void 0 : i.maiba_risk_recovery_prompt_account,
        );
      } catch (e) {
        return (
          r("FBLogger")("maiba_deeplink")
            .catching(r("getErrorSafe")(e))
            .warn("Risk recovery prompt status was unavailable (%s)", a),
          null
        );
      }
    }
    var _ = null;
    function f(e) {
      _ = e;
    }
    function g(e) {
      var t = _;
      return t == null || t.userMessageOTID !== e ? null : ((_ = null), t);
    }
    ((l.RISK_RECOVERY_PROMPT_ID = s),
      (l.resolveRiskRecoveryPrompt = d),
      (l.fetchRiskRecoveryPrompt = p),
      (l.holdRiskRecoveryConsentIntent = f),
      (l.takeRiskRecoveryConsentIntent = g));
  },
  98,
);
