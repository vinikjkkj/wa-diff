__d(
  "WAWebBizBroadcastCheckoutUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n,
        r = (n = e == null ? void 0 : e.totalAvailableCredits) != null ? n : 0,
        o = Math.min(r, t),
        a = t - o;
      return { numberOfCreditsUsed: o, numberOfPaidRecipients: a };
    }
    function l(e, t) {
      var n = e;
      return t.map(function (e) {
        var t = Math.max(0, Math.min(n, e));
        return ((n -= t), t > 0 ? t : null);
      });
    }
    ((i.calculateCreditsAndPaidRecipients = e),
      (i.allocateFreeCreditsAcrossAudiences = l));
  },
  66,
);
