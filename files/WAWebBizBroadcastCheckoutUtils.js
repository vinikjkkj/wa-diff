__d(
  "WAWebBizBroadcastCheckoutUtils",
  ["sumBy"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        o,
        a = r("sumBy")(
          (n =
            e == null || (o = e.discounts) == null
              ? void 0
              : o.filter(function (e) {
                  return e.type === "free_msg";
                })) != null
            ? n
            : [],
          function (e) {
            return e.amount;
          },
        ),
        i = 0,
        l = t,
        s = a > 0,
        u = (e == null ? void 0 : e.costBase) != null && e.costBase > 0,
        c = t > 0;
      if (s && u && c && (e == null ? void 0 : e.costBase) != null) {
        var d = e.costBase / t;
        ((i = Math.floor(a / d)), (l = t - i));
      }
      return {
        numberOfCreditsUsed: i,
        numberOfPaidRecipients: l,
        totalFreeMessageDiscountAmount: a,
      };
    }
    l.calculateCreditsAndPaidRecipients = e;
  },
  98,
);
