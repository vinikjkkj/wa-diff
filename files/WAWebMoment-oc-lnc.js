__d(
  "WAWebMoment-oc-lnc",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("oc-lnc", {
      months: {
        standalone:
          "geni\xE8r_febri\xE8r_mar\xE7_abril_mai_junh_julhet_agost_setembre_oct\xF2bre_novembre_decembre".split(
            "_",
          ),
        format:
          "de geni\xE8r_de febri\xE8r_de mar\xE7_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct\xF2bre_de novembre_de decembre".split(
            "_",
          ),
        isFormat: /D[oD]?(\s)+MMMM/,
      },
      monthsShort:
        "gen._febr._mar\xE7_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "dimenge_diluns_dimars_dim\xE8cres_dij\xF2us_divendres_dissabte".split(
          "_",
        ),
      weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
      weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [de] YYYY",
        ll: "D MMM YYYY",
        LLL: "D MMMM [de] YYYY [a] H:mm",
        lll: "D MMM YYYY, H:mm",
        LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
        llll: "ddd D MMM YYYY, H:mm",
      },
      calendar: {
        sameDay: "[u\xE8i a] LT",
        nextDay: "[deman a] LT",
        nextWeek: "dddd [a] LT",
        lastDay: "[i\xE8r a] LT",
        lastWeek: "dddd [passat a] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "d'aqu\xED %s",
        past: "fa %s",
        s: "unas segondas",
        ss: "%d segondas",
        m: "una minuta",
        mm: "%d minutas",
        h: "una ora",
        hh: "%d oras",
        d: "un jorn",
        dd: "%d jorns",
        M: "un mes",
        MM: "%d meses",
        y: "un an",
        yy: "%d ans",
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
