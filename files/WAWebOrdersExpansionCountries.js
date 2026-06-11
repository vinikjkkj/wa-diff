__d(
  "WAWebOrdersExpansionCountries",
  [
    "WAMemoizeCache",
    "WAWebABProps",
    "WAWebCompactMapString",
    "WAWebCurrencyUtils",
    "WAWebL10NCountryCodes",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAMemoizeCache").memoizeWithArgs(
      function (e) {
        return r("WAWebCompactMapString")(e.split(","), function (e) {
          return e.trim();
        });
      },
      function (e) {
        return e;
      },
    );
    function s() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "orders_expansion_receiver_countries_allowed",
      );
      return t.length ? e(t) : null;
    }
    var u = o("WAMemoizeCache").memoizeWithArgs(
      function (e, t) {
        var n = [];
        if (t.length === 0) return n;
        var r = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
          a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e),
          i = r
            ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(r.user)
            : null;
        return (
          (n = t
            .filter(function (e) {
              return e === a || (i != null && e === i);
            })
            .map(function (e) {
              return o("WAWebCurrencyUtils").currencyForCountryShortcode(e);
            })),
          Array.from(new Set(n).values())
        );
      },
      function (e, t) {
        return e;
      },
    );
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
