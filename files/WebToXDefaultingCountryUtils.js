__d(
  "WebToXDefaultingCountryUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "IN",
      "NG",
      "DE",
      "TR",
      "IT",
      "ZA",
      "ES",
      "AR",
      "EG",
      "ID",
      "CO",
      "BR",
      "PK",
      "RU",
    ]);
    function l(t) {
      return t == null
        ? !1
        : t.some(function (t) {
            return e.has(t);
          });
    }
    var s = new Set([
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE",
      "GB",
      "IS",
      "LI",
      "NO",
      "CH",
      "GG",
      "JE",
      "IM",
      "MC",
      "AD",
      "SM",
      "VA",
      "GI",
      "AX",
      "JP",
    ]);
    function u(e) {
      var t = e == null ? void 0 : e.business_country_code;
      return t != null && t !== "" && s.has(t);
    }
    ((i.isCampaignAudienceWithinPriorityMarkets = l),
      (i.isAdvertiserInEpdCountry = u));
  },
  66,
);
