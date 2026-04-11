__d(
  "WAWebMoment-gl",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("gl", {
      months:
        "xaneiro_febreiro_marzo_abril_maio_xu\xF1o_xullo_agosto_setembro_outubro_novembro_decembro".split(
          "_",
        ),
      monthsShort:
        "xan._feb._mar._abr._mai._xu\xF1._xul._ago._set._out._nov._dec.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays: "domingo_luns_martes_m\xE9rcores_xoves_venres_s\xE1bado".split(
        "_",
      ),
      weekdaysShort: "dom._lun._mar._m\xE9r._xov._ven._s\xE1b.".split("_"),
      weekdaysMin: "do_lu_ma_m\xE9_xo_ve_s\xE1".split("_"),
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
          return "[hoxe " + (this.hours() !== 1 ? "\xE1s" : "\xE1") + "] LT";
        },
        nextDay: function () {
          return (
            "[ma\xF1\xE1 " + (this.hours() !== 1 ? "\xE1s" : "\xE1") + "] LT"
          );
        },
        nextWeek: function () {
          return "dddd [" + (this.hours() !== 1 ? "\xE1s" : "a") + "] LT";
        },
        lastDay: function () {
          return "[onte " + (this.hours() !== 1 ? "\xE1" : "a") + "] LT";
        },
        lastWeek: function () {
          return (
            "[o] dddd [pasado " + (this.hours() !== 1 ? "\xE1s" : "a") + "] LT"
          );
        },
        sameElse: "L",
      },
      relativeTime: {
        future: function (t) {
          return t.indexOf("un") === 0 ? "n" + t : "en " + t;
        },
        past: "hai %s",
        s: "uns segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "unha hora",
        hh: "%d horas",
        d: "un d\xEDa",
        dd: "%d d\xEDas",
        M: "un mes",
        MM: "%d meses",
        y: "un ano",
        yy: "%d anos",
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%d\xBA",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
