__d(
  "WAWebBizAdCreationEUCountryUtils",
  ["WAWebBizAdCreationConsts", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
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
        "GG",
        "JE",
        "IM",
        "MC",
        "AD",
        "SM",
        "VA",
        "CH",
        "MQ",
        "YT",
        "GP",
        "GF",
        "RE",
        "MF",
      ]),
      s = new Set(["europe"]);
    function u(t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        u,
        c,
        d = t == null ? void 0 : t.geo_locations;
      return d == null
        ? !1
        : !!(
            ((n = d.countries) != null &&
              n.some(function (t) {
                return e.has(t);
              })) ||
            ((r = d.cities) != null &&
              r.some(function (t) {
                return t.country != null && e.has(t.country);
              })) ||
            ((o = d.regions) != null &&
              o.some(function (t) {
                return t.country != null && e.has(t.country);
              })) ||
            ((a = d.custom_locations) != null &&
              a.some(function (t) {
                return t.country != null && e.has(t.country);
              })) ||
            ((i = d.zips) != null &&
              i.some(function (t) {
                return t.country != null && e.has(t.country);
              })) ||
            ((l = d.places) != null &&
              l.some(function (t) {
                return t.country != null && e.has(t.country);
              })) ||
            ((u = d.geo_markets) != null &&
              u.some(function (t) {
                return t.country != null && e.has(t.country);
              })) ||
            ((c = d.country_groups) != null &&
              c.some(function (e) {
                return s.has(e);
              }))
          );
    }
    function c(e) {
      return r("justknobx")._("5401") && u(e)
        ? "LINK_CLICKS"
        : o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE;
    }
    ((l.hasEUCountriesInTargetSpec = u), (l.getAdObjective = c));
  },
  98,
);
