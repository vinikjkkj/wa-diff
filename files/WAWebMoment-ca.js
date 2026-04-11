__d(
  "WAWebMoment-ca",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("ca", {
      months: {
        standalone:
          "gener_febrer_mar\xE7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
            "_",
          ),
        format:
          "de gener_de febrer_de mar\xE7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
            "_",
          ),
        isFormat: /D[oD]?(\s)+MMMM/,
      },
      monthsShort:
        "gen._febr._mar\xE7_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
          "_",
        ),
      weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
      weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [de] YYYY",
        ll: "D MMM YYYY",
        LLL: "D MMMM [de] YYYY [a les] H:mm",
        lll: "D MMM YYYY, H:mm",
        LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
        llll: "ddd D MMM YYYY, H:mm",
      },
      calendar: {
        sameDay: function () {
          return "[avui a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
        },
        nextDay: function () {
          return "[dem\xE0 a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
        },
        nextWeek: function () {
          return "dddd [a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
        },
        lastDay: function () {
          return "[ahir a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
        },
        lastWeek: function () {
          return (
            "[el] dddd [passat a " +
            (this.hours() !== 1 ? "les" : "la") +
            "] LT"
          );
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "d'aqu\xED %s",
        past: "fa %s",
        s: "uns segons",
        ss: "%d segons",
        m: "un minut",
        mm: "%d minuts",
        h: "una hora",
        hh: "%d hores",
        d: "un dia",
        dd: "%d dies",
        M: "un mes",
        MM: "%d mesos",
        y: "un any",
        yy: "%d anys",
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
      ordinal: function (t, n) {
        var e =
          t === 1
            ? "r"
            : t === 2
              ? "n"
              : t === 3
                ? "r"
                : t === 4
                  ? "t"
                  : "\xE8";
        return ((n === "w" || n === "W") && (e = "a"), t + e);
      },
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
