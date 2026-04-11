__d(
  "WAWebMoment-fr",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e =
        /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
      s =
        /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
      u =
        /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
      c = [
        /^janv/i,
        /^févr/i,
        /^mars/i,
        /^avr/i,
        /^mai/i,
        /^juin/i,
        /^juil/i,
        /^août/i,
        /^sept/i,
        /^oct/i,
        /^nov/i,
        /^déc/i,
      ],
      d = r("WAWeb-moment").defineLocale("fr", {
        months:
          "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split(
            "_",
          ),
        monthsShort:
          "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split(
            "_",
          ),
        monthsRegex: u,
        monthsShortRegex: u,
        monthsStrictRegex: e,
        monthsShortStrictRegex: s,
        monthsParse: c,
        longMonthsParse: c,
        shortMonthsParse: c,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_",
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd\u2019hui \xE0] LT",
          nextDay: "[Demain \xE0] LT",
          nextWeek: "dddd [\xE0] LT",
          lastDay: "[Hier \xE0] LT",
          lastWeek: "dddd [dernier \xE0] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          w: "une semaine",
          ww: "%d semaines",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (t, n) {
          switch (n) {
            case "D":
              return t + (t === 1 ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return t + (t === 1 ? "er" : "e");
            case "w":
            case "W":
              return t + (t === 1 ? "re" : "e");
          }
        },
        week: { dow: 1, doy: 4 },
      });
  },
  34,
);
