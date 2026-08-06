__d(
  "WAWebCoexV2RetryAuthorization",
  [
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebApiMessageInfoStore",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
            !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()
          )
            return null;
          var n = yield o(
            "WAWebApiCoexV2RelayReceiptStore",
          ).getUndeliveredCoexV2Lids(t);
          return n.length > 0
            ? o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE
            : o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .INELIGIBLE_ALREADY_DELIVERED;
        })),
        s.apply(this, arguments)
      );
    }
    l.getCoexV2RelayRetryEligibility = e;
  },
  98,
);
