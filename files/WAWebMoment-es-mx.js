__d(
  "WAWebMoment-es-mx",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
        "_",
      ),
      s = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      u = [
        /^ene/i,
        /^feb/i,
        /^mar/i,
        /^abr/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^ago/i,
        /^sep/i,
        /^oct/i,
        /^nov/i,
        /^dic/i,
      ],
      c =
        /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      d = r("WAWeb-moment").defineLocale("es-mx", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_",
          ),
        monthsShort: function (n, r) {
          return n ? (/-MMM-/.test(r) ? s[n.month()] : e[n.month()]) : e;
        },
        monthsRegex: c,
        monthsShortRegex: c,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: u,
        longMonthsParse: u,
        shortMonthsParse: u,
        weekdays:
          "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split(
            "_",
          ),
        weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[ma\xF1ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (this.hours() !== 1 ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un d\xEDa",
          dd: "%d d\xEDas",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un a\xF1o",
          yy: "%d a\xF1os",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%d\xBA",
        week: { dow: 0, doy: 4 },
        invalidDate: "Fecha inv\xE1lida",
      });
  },
  34,
);
