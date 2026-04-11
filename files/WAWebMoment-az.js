__d(
  "WAWebMoment-az",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-\xFCnc\xFC",
        4: "-\xFCnc\xFC",
        100: "-\xFCnc\xFC",
        6: "-nc\u0131",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-\u0131nc\u0131",
        90: "-\u0131nc\u0131",
      },
      s = r("WAWeb-moment").defineLocale("az", {
        months:
          "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
            "_",
          ),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
          "_",
        ),
        weekdays:
          "Bazar_Bazar ert\u0259si_\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131_\xC7\u0259r\u015F\u0259nb\u0259_C\xFCm\u0259 ax\u015Fam\u0131_C\xFCm\u0259_\u015E\u0259nb\u0259".split(
            "_",
          ),
        weekdaysShort:
          "Baz_BzE_\xC7Ax_\xC7\u0259r_CAx_C\xFCm_\u015E\u0259n".split("_"),
        weekdaysMin: "Bz_BE_\xC7A_\xC7\u0259_CA_C\xFC_\u015E\u0259".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bug\xFCn saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
          lastDay: "[d\xFCn\u0259n] LT",
          lastWeek: "[ke\xE7\u0259n h\u0259ft\u0259] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s \u0259vv\u0259l",
          s: "bir ne\xE7\u0259 saniy\u0259",
          ss: "%d saniy\u0259",
          m: "bir d\u0259qiq\u0259",
          mm: "%d d\u0259qiq\u0259",
          h: "bir saat",
          hh: "%d saat",
          d: "bir g\xFCn",
          dd: "%d g\xFCn",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il",
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (t) {
          return /^(gündüz|axşam)$/.test(t);
        },
        meridiem: function (t, n, r) {
          return t < 4
            ? "gec\u0259"
            : t < 12
              ? "s\u0259h\u0259r"
              : t < 17
                ? "g\xFCnd\xFCz"
                : "ax\u015Fam";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (n) {
          if (n === 0) return n + "-\u0131nc\u0131";
          var t = n % 10,
            r = (n % 100) - t,
            o = n >= 100 ? 100 : null;
          return n + (e[t] || e[r] || e[o]);
        },
        week: { dow: 1, doy: 7 },
      });
  },
  34,
);
