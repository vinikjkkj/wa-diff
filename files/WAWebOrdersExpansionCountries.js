__d(
  "WAWebOrdersExpansionCountries",
  [
    "WAWebABProps",
    "WAWebCompactMapString",
    "WAWebCurrencyUtils",
    "WAWebL10NCountryCodes",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("lodash").memoize(function (e) {
      return r("WAWebCompactMapString")(e.split(","), function (e) {
        return e.trim();
      });
    });
    function s() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "orders_expansion_receiver_countries_allowed",
      );
      return t.length ? e(t) : null;
    }
    var u = r("lodash").memoize(function (e, t) {
      var n = [];
      if (t.length === 0) return n;
      var r = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e),
        a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
        );
      return (
        (n = t
          .filter(function (e) {
            return e === r || e === a;
          })
          .map(function (e) {
            return o("WAWebCurrencyUtils").currencyForCountryShortcode(e);
          })),
        Array.from(new Set(n).values())
      );
    });
    function c(e) {
      var t;
      return u(e, (t = d()) != null ? t : []);
    }
    function d() {
      return o("WAWebMobilePlatforms").isSMB() ? s() : null;
    }
    ((l.getConsumerOrdersExpansionAllowedCountries = s),
      (l.getOrdersExpansionAllowedCurrencies = c),
      (l.getOrdersExpansionAllowedCountries = d));
  },
  98,
);
