__d(
  "WAWebUprCurrencyIconLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSIconIcPayments.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebUprCurrencyIcon.react",
          )
            .__setRef("WAWebUprCurrencyIconLoadable")
            .load();
          return e;
        }),
        "WAWebUprCurrencyIcon",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(r("WDSIconIcPayments.react"), {});
        },
      });
    l.WAWebUprCurrencyIconLoadable = c;
  },
  98,
);
