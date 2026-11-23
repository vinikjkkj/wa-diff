__d(
  "WAWebCoexV2RetryAuthorization",
  [
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebApiMessageInfoStore",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (
        !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()
      )
        return null;
      var n = await o(
        "WAWebApiCoexV2RelayReceiptStore",
      ).getUndeliveredCoexV2Lids(t);
      return n.length > 0
        ? o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE
        : o("WAWebApiMessageInfoStore").RetryEligibilityResult
            .INELIGIBLE_ALREADY_DELIVERED;
    }
    l.getCoexV2RelayRetryEligibility = e;
  },
  98,
);
