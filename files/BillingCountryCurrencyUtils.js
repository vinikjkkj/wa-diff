__d(
  "BillingCountryCurrencyUtils",
  [
    "AdsTimezone",
    "BillingWhatsAppBusinessAccountSelfServeEnabledCountries",
    "BillingWhatsappBusinessAccountEnabledCurrencies",
    "CountryNamesConfig",
    "ISOCountryCode",
    "OFACSanctionedCountries",
    "PECurrencyConfig",
    "castToEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("castToEnum")(e, r("ISOCountryCode"), null);
      return n != null ? n : t;
    }
    var s = function (t, n) {
        return "(GMT " + t + ") " + n.toString();
      },
      u = function (t) {
        return (
          (parseInt(t.slice(1, 3), 10) * 60 + parseInt(t.slice(4, 6), 10)) *
          (t[0] === "-" ? -1 : 1)
        );
      },
      c = Object.keys(r("CountryNamesConfig").codeToName)
        .map(function (e) {
          return { label: r("CountryNamesConfig").codeToName[e], value: e };
        })
        .filter(function (e) {
          return !Object.prototype.hasOwnProperty.call(
            r("OFACSanctionedCountries"),
            e.value,
          );
        })
        .sort(function (e, t) {
          return e.label.toString().localeCompare(t.label.toString());
        }),
      d = Object.keys(r("CountryNamesConfig").codeToName)
        .map(function (e) {
          return { label: r("CountryNamesConfig").codeToName[e], value: e };
        })
        .filter(function (e) {
          return !Object.prototype.hasOwnProperty.call(
            r("OFACSanctionedCountries"),
            e.value,
          );
        })
        .sort(function (e, t) {
          return e.label.toString().localeCompare(t.label.toString());
        }),
      m = function (t) {
        return Object.keys(t)
          .map(function (e) {
            return { label: t[e].screen_name || "", value: e };
          })
          .filter(function (e) {
            return e.label !== "";
          })
          .sort(function (e, t) {
            return e.label.toString().localeCompare(t.label.toString());
          });
      },
      p = m(r("PECurrencyConfig").currency_map_for_ads),
      _ = o("AdsTimezone").sortedTimezones.map(function (e) {
        return { label: e.displayName, value: e.name };
      }),
      f = function (t) {
        return t != null ? t : "0";
      },
      g = function (t) {
        return t != null && r("CountryNamesConfig").codeToName[t] != null
          ? r("CountryNamesConfig").codeToName[t]
          : "";
      },
      h = function (t, n) {
        return t != null ? t : n;
      },
      y = function (t) {
        return t != null &&
          r("PECurrencyConfig").currency_map_for_ads_backend[t] != null &&
          r("PECurrencyConfig").currency_map_for_ads_backend[t].screen_name !=
            null
          ? r("PECurrencyConfig").currency_map_for_ads_backend[t].screen_name
          : "";
      },
      C = function (t) {
        return y(t).toString();
      },
      b = function (t) {
        var e;
        return (e = o("AdsTimezone").sortedTimezones.find(function (e) {
          return e.name === t;
        })) == null
          ? void 0
          : e.displayName;
      },
      v = p.filter(function (e) {
        return (
          r(
            "BillingWhatsappBusinessAccountEnabledCurrencies",
          ).currencies.indexOf(e.value) !== -1
        );
      }),
      S = c.filter(function (e) {
        return (
          r(
            "BillingWhatsAppBusinessAccountSelfServeEnabledCountries",
          ).countries.indexOf(e.value) !== -1
        );
      }),
      R = S.map(function (e) {
        var t = e.label,
          n = e.value;
        return { label: t, value: n.toString() };
      }).sort(function (e, t) {
        return e.label.toString().localeCompare(t.label.toString());
      });
    ((l.getISOCountryCodeOrDefaultToUS = e),
      (l.formatTimezone = s),
      (l.parseOffset = u),
      (l.countries = c),
      (l.countriesAsString = d),
      (l.getCurrenciesByCurrencyMap = m),
      (l.currencies = p),
      (l.timezones = _),
      (l.getAmount = f),
      (l.getCountryName = g),
      (l.getCurrency = h),
      (l.getCurrencyName = y),
      (l.getLocalizedCurrencyName = C),
      (l.getTimezoneName = b),
      (l.whatsappCurrencies = v),
      (l.whatsappCountries = S),
      (l.whatsappCountriesAsString = R));
  },
  98,
);
