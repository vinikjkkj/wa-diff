__d(
  "WAWebMoment-ug-cn",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("ug-cn", {
      months:
        "\u064A\u0627\u0646\u06CB\u0627\u0631_\u0641\u06D0\u06CB\u0631\u0627\u0644_\u0645\u0627\u0631\u062A_\u0626\u0627\u067E\u0631\u06D0\u0644_\u0645\u0627\u064A_\u0626\u0649\u064A\u06C7\u0646_\u0626\u0649\u064A\u06C7\u0644_\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A_\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631_\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631_\u0646\u0648\u064A\u0627\u0628\u0649\u0631_\u062F\u06D0\u0643\u0627\u0628\u0649\u0631".split(
          "_",
        ),
      monthsShort:
        "\u064A\u0627\u0646\u06CB\u0627\u0631_\u0641\u06D0\u06CB\u0631\u0627\u0644_\u0645\u0627\u0631\u062A_\u0626\u0627\u067E\u0631\u06D0\u0644_\u0645\u0627\u064A_\u0626\u0649\u064A\u06C7\u0646_\u0626\u0649\u064A\u06C7\u0644_\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A_\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631_\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631_\u0646\u0648\u064A\u0627\u0628\u0649\u0631_\u062F\u06D0\u0643\u0627\u0628\u0649\u0631".split(
          "_",
        ),
      weekdays:
        "\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5_\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5_\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5_\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5_\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5_\u062C\u06C8\u0645\u06D5_\u0634\u06D5\u0646\u0628\u06D5".split(
          "_",
        ),
      weekdaysShort:
        "\u064A\u06D5_\u062F\u06C8_\u0633\u06D5_\u0686\u0627_\u067E\u06D5_\u062C\u06C8_\u0634\u06D5".split(
          "_",
        ),
      weekdaysMin:
        "\u064A\u06D5_\u062F\u06C8_\u0633\u06D5_\u0686\u0627_\u067E\u06D5_\u062C\u06C8_\u0634\u06D5".split(
          "_",
        ),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649",
        LLL: "YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649\u060C HH:mm",
        LLLL: "dddd\u060C YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649\u060C HH:mm",
      },
      meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
      meridiemHour: function (t, n) {
        return (
          t === 12 && (t = 0),
          n === "\u064A\u06D0\u0631\u0649\u0645 \u0643\u06D0\u0686\u06D5" ||
          n === "\u0633\u06D5\u06BE\u06D5\u0631" ||
          n ===
            "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646"
            ? t
            : n ===
                  "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u06D0\u064A\u0649\u0646" ||
                n === "\u0643\u06D5\u0686"
              ? t + 12
              : t >= 11
                ? t
                : t + 12
        );
      },
      meridiem: function (t, n, r) {
        var e = t * 100 + n;
        return e < 600
          ? "\u064A\u06D0\u0631\u0649\u0645 \u0643\u06D0\u0686\u06D5"
          : e < 900
            ? "\u0633\u06D5\u06BE\u06D5\u0631"
            : e < 1130
              ? "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646"
              : e < 1230
                ? "\u0686\u06C8\u0634"
                : e < 1800
                  ? "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u06D0\u064A\u0649\u0646"
                  : "\u0643\u06D5\u0686";
      },
      calendar: {
        sameDay:
          "[\u0628\u06C8\u06AF\u06C8\u0646 \u0633\u0627\u0626\u06D5\u062A] LT",
        nextDay: "[\u0626\u06D5\u062A\u06D5 \u0633\u0627\u0626\u06D5\u062A] LT",
        nextWeek:
          "[\u0643\u06D0\u0644\u06D5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06D5\u062A] LT",
        lastDay: "[\u062A\u06C6\u0646\u06C8\u06AF\u06C8\u0646] LT",
        lastWeek:
          "[\u0626\u0627\u0644\u062F\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06D5\u062A] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s \u0643\u06D0\u064A\u0649\u0646",
        past: "%s \u0628\u06C7\u0631\u06C7\u0646",
        s: "\u0646\u06D5\u0686\u0686\u06D5 \u0633\u06D0\u0643\u0648\u0646\u062A",
        ss: "%d \u0633\u06D0\u0643\u0648\u0646\u062A",
        m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06C7\u062A",
        mm: "%d \u0645\u0649\u0646\u06C7\u062A",
        h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06D5\u062A",
        hh: "%d \u0633\u0627\u0626\u06D5\u062A",
        d: "\u0628\u0649\u0631 \u0643\u06C8\u0646",
        dd: "%d \u0643\u06C8\u0646",
        M: "\u0628\u0649\u0631 \u0626\u0627\u064A",
        MM: "%d \u0626\u0627\u064A",
        y: "\u0628\u0649\u0631 \u064A\u0649\u0644",
        yy: "%d \u064A\u0649\u0644",
      },
      dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
      ordinal: function (t, n) {
        switch (n) {
          case "d":
          case "D":
          case "DDD":
            return t + "-\u0643\u06C8\u0646\u0649";
          case "w":
          case "W":
            return t + "-\u06BE\u06D5\u067E\u062A\u06D5";
          default:
            return t;
        }
      },
      preparse: function (t) {
        return t.replace(/،/g, ",");
      },
      postformat: function (t) {
        return t.replace(/,/g, "\u060C");
      },
      week: { dow: 1, doy: 7 },
    });
  },
  34,
);
