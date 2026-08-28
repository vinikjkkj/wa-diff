__d(
  "BusinessCometCreatorMarketplaceCountryFilter",
  ["fbt", "CountryNames", "ISOCountryCode"],
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
        "CN",
      ],
      u = ["CU", "IR", "KP", "SY", "RU"],
      c = {
        choices: Array.from(Object.entries(r("ISOCountryCode")))
          .filter(function (e) {
            var t = e[0];
            return !u.includes(t);
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
    ((l.CountriesOpenForCreatorOnboardingIncludingCN = e),
      (l.BLOCKED_COUNTRIES = u),
      (l.BusinessCometCreatorMarketplaceCountryFilter = c));
  },
  226,
);
