__d(
  "WAWebBizBroadcastCheckoutUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n,
        r = (n = e == null ? void 0 : e.quotaRemaining) != null ? n : 0,
        o = Math.min(r, t),
        a = t - o;
      return { numberOfCreditsUsed: o, numberOfPaidRecipients: a };
    }
    i.calculateCreditsAndPaidRecipients = e;
  },
  66,
);
