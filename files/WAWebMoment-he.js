__d(
  "WAWebMoment-he",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("he", {
      months:
        "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split(
          "_",
        ),
      monthsShort:
        "\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split(
          "_",
        ),
      weekdays:
        "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split(
          "_",
        ),
      weekdaysShort:
        "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split(
          "_",
        ),
      weekdaysMin: "\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split(
        "_",
      ),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [\u05D1]MMMM YYYY",
        LLL: "D [\u05D1]MMMM YYYY HH:mm",
        LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm",
      },
      calendar: {
        sameDay: "[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT",
        nextDay: "[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT",
        nextWeek: "dddd [\u05D1\u05E9\u05E2\u05D4] LT",
        lastDay: "[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT",
        lastWeek:
          "[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "\u05D1\u05E2\u05D5\u05D3 %s",
        past: "\u05DC\u05E4\u05E0\u05D9 %s",
        s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",
        ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA",
        m: "\u05D3\u05E7\u05D4",
        mm: "%d \u05D3\u05E7\u05D5\u05EA",
        h: "\u05E9\u05E2\u05D4",
        hh: function (t) {
          return t === 2
            ? "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD"
            : t + " \u05E9\u05E2\u05D5\u05EA";
        },
        d: "\u05D9\u05D5\u05DD",
        dd: function (t) {
          return t === 2
            ? "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD"
            : t + " \u05D9\u05DE\u05D9\u05DD";
        },
        M: "\u05D7\u05D5\u05D3\u05E9",
        MM: function (t) {
          return t === 2
            ? "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD"
            : t + " \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD";
        },
        y: "\u05E9\u05E0\u05D4",
        yy: function (t) {
          return t === 2
            ? "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"
            : t % 10 === 0 && t !== 10
              ? t + " \u05E9\u05E0\u05D4"
              : t + " \u05E9\u05E0\u05D9\u05DD";
        },
      },
      meridiemParse:
        /אחה\"צ|לפנה\"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function (t) {
        return /^(אחה\"צ|אחרי הצהריים|בערב)$/.test(t);
      },
      meridiem: function (t, n, r) {
        return t < 5
          ? "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
          : t < 10
            ? "\u05D1\u05D1\u05D5\u05E7\u05E8"
            : t < 12
              ? r
                ? '\u05DC\u05E4\u05E0\u05D4"\u05E6'
                : "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD"
              : t < 18
                ? r
                  ? '\u05D0\u05D7\u05D4"\u05E6'
                  : "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD"
                : "\u05D1\u05E2\u05E8\u05D1";
      },
    });
  },
  34,
);
