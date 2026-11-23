__d(
  "WAWebUprCurrencyIconLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSIconIcPayments.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebUprCurrencyIcon.react",
        )
          .__setRef("WAWebUprCurrencyIconLoadable")
          .load();
        return e;
      }, "WAWebUprCurrencyIcon"),
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
