__d(
  "WAWebMoment-sq",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("sq", {
      months:
        "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xEBntor_Dhjetor".split(
          "_",
        ),
      monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xEBn_Dhj".split(
        "_",
      ),
      weekdays:
        "E Diel_E H\xEBn\xEB_E Mart\xEB_E M\xEBrkur\xEB_E Enjte_E Premte_E Shtun\xEB".split(
          "_",
        ),
      weekdaysShort: "Die_H\xEBn_Mar_M\xEBr_Enj_Pre_Sht".split("_"),
      weekdaysMin: "D_H_Ma_M\xEB_E_P_Sh".split("_"),
      weekdaysParseExact: !0,
      meridiemParse: /PD|MD/,
      isPM: function (t) {
        return t.charAt(0) === "M";
      },
      meridiem: function (t, n, r) {
        return t < 12 ? "PD" : "MD";
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm",
      },
      calendar: {
        sameDay: "[Sot n\xEB] LT",
        nextDay: "[Nes\xEBr n\xEB] LT",
        nextWeek: "dddd [n\xEB] LT",
        lastDay: "[Dje n\xEB] LT",
        lastWeek: "dddd [e kaluar n\xEB] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "n\xEB %s",
        past: "%s m\xEB par\xEB",
        s: "disa sekonda",
        ss: "%d sekonda",
        m: "nj\xEB minut\xEB",
        mm: "%d minuta",
        h: "nj\xEB or\xEB",
        hh: "%d or\xEB",
        d: "nj\xEB dit\xEB",
        dd: "%d dit\xEB",
        M: "nj\xEB muaj",
        MM: "%d muaj",
        y: "nj\xEB vit",
        yy: "%d vite",
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
