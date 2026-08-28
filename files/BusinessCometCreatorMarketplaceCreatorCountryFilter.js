__d(
  "BusinessCometCreatorMarketplaceCreatorCountryFilter",
  [
    "fbt",
    "BusinessCometCreatorMarketplaceCountryFilter",
    "CountryNames",
    "ISOCountryCode",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "US",
        "CA",
        "MX",
        "GB",
        "DE",
        "FR",
        "ES",
        "IN",
        "TR",
        "ID",
        "KR",
        "BR",
        "JP",
        "AU",
        "AR",
        "NL",
        "IL",
        "NZ",
      ],
      u = {
        choices: Array.from(Object.entries(r("ISOCountryCode")))
          .filter(function (e) {
            var t = e[0];
            return !o(
              "BusinessCometCreatorMarketplaceCountryFilter",
            ).BLOCKED_COUNTRIES.includes(t);
          })
          .map(function (t) {
            var n = t[0];
            return {
              display_name: s._(/*BTDS*/ "{Country name}", [
                s._param("Country name", r("CountryNames")[n]),
              ]),
              graphql_value: String(n),
              is_popular: e.includes(n),
            };
          }),
        display_name: s._(/*BTDS*/ "Countries"),
        graphql_value: "co",
        is_typeahead: !0,
      };
    ((l.CountriesOpenForCreatorOnboarding = e),
      (l.BusinessCometCreatorMarketplaceCreatorCountryFilter = u));
  },
  226,
);
