__d(
  "WAWebCountriesUtils",
  ["WAWebL10NCountryCodes", "WAWebLidMigrationUtils", "WAWebLocaleModules"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze({
        META_RECOGNIZED: "META_RECOGNIZED",
        WHATSAPP_REGISTRATION: "WHATSAPP_REGISTRATION",
      }),
      u =
        ((e = {}),
        (e[s.META_RECOGNIZED] = [
          "AC",
          "CP",
          "DG",
          "EA",
          "EU",
          "EZ",
          "IC",
          "QO",
          "TA",
          "UN",
          "XA",
          "XB",
        ]),
        (e[s.WHATSAPP_REGISTRATION] = [
          "AQ",
          "BV",
          "CP",
          "DG",
          "EA",
          "EH",
          "EU",
          "EZ",
          "GS",
          "HM",
          "IC",
          "PN",
          "QO",
          "TA",
          "TF",
          "UM",
          "UN",
          "XA",
          "XB",
          "ZZ",
        ]),
        e);
    function c(e, t, n) {
      if (
        !(e == null || e === "") &&
        n != null &&
        !(t && u[t].includes(e.toUpperCase()))
      )
        return n[e.toUpperCase()];
    }
    async function d(e, t) {
      var n = await o("WAWebLocaleModules").getCountryData();
      return c(e, t, n);
    }
    function m(e) {
      if (e.countriesMap == null) return [];
      var t = Object.entries(e.countriesMap)
        .filter(function (t) {
          var n = t[0];
          return !n.includes("@") && !u[e.filter].includes(n);
        })
        .sort(function (e, t) {
          var n = e[1],
            r = t[1];
          return String(n).localeCompare(String(r));
        });
      return (
        e.prependWith != null &&
          t.unshift([e.prependWith[0], e.prependWith[1].toJSON()]),
        t.map(function (e) {
          var t = e[0],
            n = e[1];
          return [t, n];
        })
      );
    }
    async function p(e) {
      var t = await o("WAWebLocaleModules").getCountryData();
      return m(babelHelpers.extends({}, e, { countriesMap: t }));
    }
    async function _(e) {
      var t,
        n = (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user,
        r = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n);
      if (r !== "") return d(r);
    }
    ((l.COUNTRY_FILTER_TYPE = s),
      (l.getCountryNameWithMap = c),
      (l.getCountryNameFromCountryCode = d),
      (l.getCountriesWithMap = m),
      (l.getCountries = p),
      (l.getCountryNameFromWid = _));
  },
  98,
);
