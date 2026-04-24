__d(
  "WAWebGetSMBMeteredMessagingCheckoutJob",
  [
    "WALogger",
    "WASmaxSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRPC",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getSMBMeteredMessagingCheckout called with args: ",
                "",
              ])),
            JSON.stringify(t),
          );
          var n = yield o(
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
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[SMB checkout] failed err=",
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
        })),
        m.apply(this, arguments)
      );
    }
    l.getSMBMeteredMessagingCheckout = d;
  },
  98,
);
