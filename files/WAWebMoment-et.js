__d(
  "WAWebMoment-et",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o = {
        s: ["m\xF5ne sekundi", "m\xF5ni sekund", "paar sekundit"],
        ss: [e + "sekundi", e + "sekundit"],
        m: ["\xFChe minuti", "\xFCks minut"],
        mm: [e + " minuti", e + " minutit"],
        h: ["\xFChe tunni", "tund aega", "\xFCks tund"],
        hh: [e + " tunni", e + " tundi"],
        d: ["\xFChe p\xE4eva", "\xFCks p\xE4ev"],
        M: ["kuu aja", "kuu aega", "\xFCks kuu"],
        MM: [e + " kuu", e + " kuud"],
        y: ["\xFChe aasta", "aasta", "\xFCks aasta"],
        yy: [e + " aasta", e + " aastat"],
      };
      return t ? (o[n][2] ? o[n][2] : o[n][1]) : r ? o[n][0] : o[n][1];
    }
    var s = r("WAWeb-moment").defineLocale("et", {
      months:
        "jaanuar_veebruar_m\xE4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
          "_",
        ),
      monthsShort:
        "jaan_veebr_m\xE4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
          "_",
        ),
      weekdays:
        "p\xFChap\xE4ev_esmasp\xE4ev_teisip\xE4ev_kolmap\xE4ev_neljap\xE4ev_reede_laup\xE4ev".split(
          "_",
        ),
      weekdaysShort: "P_E_T_K_N_R_L".split("_"),
      weekdaysMin: "P_E_T_K_N_R_L".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm",
      },
      calendar: {
        sameDay: "[T\xE4na,] LT",
        nextDay: "[Homme,] LT",
        nextWeek: "[J\xE4rgmine] dddd LT",
        lastDay: "[Eile,] LT",
        lastWeek: "[Eelmine] dddd LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s p\xE4rast",
        past: "%s tagasi",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: "%d p\xE4eva",
        M: e,
        MM: e,
        y: e,
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
