__d(
  "WAWebUprCurrencyIcon",
  [
    "WDSIconIcAttachMoney.react",
    "WDSIconIcPayments.react",
    "WDSIconWdsIcCurrencyEgyptianPoundCircle.react",
    "WDSIconWdsIcCurrencyHongKongDollarCircle.react",
    "WDSIconWdsIcCurrencyIndonesianrupiahCircle.react",
    "WDSIconWdsIcCurrencyLiraCircle.react",
    "WDSIconWdsIcCurrencyNewTaiwanDollarCircle.react",
    "WDSIconWdsIcCurrencyUaeDirhamCircle.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r(
        e === "AED"
          ? "WDSIconWdsIcCurrencyUaeDirhamCircle.react"
          : e === "EGP"
            ? "WDSIconWdsIcCurrencyEgyptianPoundCircle.react"
            : e === "HKD"
              ? "WDSIconWdsIcCurrencyHongKongDollarCircle.react"
              : e === "IDR"
                ? "WDSIconWdsIcCurrencyIndonesianrupiahCircle.react"
                : e === "MXN"
                  ? "WDSIconIcAttachMoney.react"
                  : e === "TRY"
                    ? "WDSIconWdsIcCurrencyLiraCircle.react"
                    : e === "TWD"
                      ? "WDSIconWdsIcCurrencyNewTaiwanDollarCircle.react"
                      : "WDSIconIcPayments.react",
      );
    }
    l.getUprCurrencyIcon = e;
  },
  98,
);
