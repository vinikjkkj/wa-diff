__d(
  "A2UIGeoAdAccountOptions",
  ["AdsTimezone", "Currency", "CurrencyConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        currencies: o("CurrencyConfig").adsBackendCurrencyCodes.map(
          function (e) {
            return {
              label: e + " \u2014 " + r("Currency").getName(e),
              value: e,
            };
          },
        ),
        timezones: o("AdsTimezone").sortedTimezones.map(function (e) {
          return { label: e.displayName, value: e.name };
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
