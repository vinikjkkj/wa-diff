__d(
  "WAWebGetSMBMeteredMessagingCheckoutJob",
  [
    "WALogger",
    "WASmaxSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRPC",
    "WAWebBackendErrors",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t, n, r;
      return {
        accountBalanceAvailable: e.accountBalanceAvailable,
        costBase: e.costBase,
        costBeforeTax: e.costBeforeTax,
        costCurrency: e.costCurrency,
        costOffset: e.costOffset,
        costTax: e.costTax,
        discounts:
          (t = e.costDiscounts) == null
            ? void 0
            : t.discount.map(function (e) {
                return {
                  amount: e.amount,
                  amountFormatted: e.amountFormatted,
                  percentage: e.percentage,
                  type: e.type,
                };
              }),
        quotaRemaining: (n = e.quota) == null ? void 0 : n.remaining,
        totalAvailableCredits:
          (r = e.quota) == null ? void 0 : r.totalAvailableCredits,
      };
    }
    async function d(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "getSMBMeteredMessagingCheckout called with args: ",
            "",
          ])),
        JSON.stringify(t),
      );
      var n = await o(
        "WASmaxSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRPC",
      ).sendGetSMBMeteredMessagingCheckoutRPC(t);
      if (n.name === "GetSMBMeteredMessagingCheckoutResponseSuccess") {
        var r = c(n.value);
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "SMB metered messaging checkout request successful. Result: ",
                "",
              ])),
            JSON.stringify(r),
          ),
          r
        );
      }
      var a = n.value,
        i = a.errorGetSmbMeteredMessagingCheckoutIqErrors,
        l = i.value.code,
        d = i.value.text;
      throw (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[SMB checkout] failed: ",
              " code=",
              " text=",
              "",
            ])),
          i.name,
          l,
          d,
        ),
        new (o("WAWebBackendErrors").ServerStatusCodeError)(l, d)
      );
    }
    l.getSMBMeteredMessagingCheckout = d;
  },
  98,
);
