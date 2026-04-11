__d(
  "WAWebMoment-sd",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "\u062C\u0646\u0648\u0631\u064A",
        "\u0641\u064A\u0628\u0631\u0648\u0631\u064A",
        "\u0645\u0627\u0631\u0686",
        "\u0627\u067E\u0631\u064A\u0644",
        "\u0645\u0626\u064A",
        "\u062C\u0648\u0646",
        "\u062C\u0648\u0644\u0627\u0621\u0650",
        "\u0622\u06AF\u0633\u067D",
        "\u0633\u064A\u067E\u067D\u0645\u0628\u0631",
        "\u0622\u06AA\u067D\u0648\u0628\u0631",
        "\u0646\u0648\u0645\u0628\u0631",
        "\u068A\u0633\u0645\u0628\u0631",
      ],
      s = [
        "\u0622\u0686\u0631",
        "\u0633\u0648\u0645\u0631",
        "\u0627\u06B1\u0627\u0631\u0648",
        "\u0627\u0631\u0628\u0639",
        "\u062E\u0645\u064A\u0633",
        "\u062C\u0645\u0639",
        "\u0687\u0646\u0687\u0631",
      ],
      u = r("WAWeb-moment").defineLocale("sd", {
        months: e,
        monthsShort: e,
        weekdays: s,
        weekdaysShort: s,
        weekdaysMin: s,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd\u060C D MMMM YYYY HH:mm",
        },
        meridiemParse: /صبح|شام/,
        isPM: function (t) {
          return t === "\u0634\u0627\u0645";
        },
        meridiem: function (t, n, r) {
          return t < 12 ? "\u0635\u0628\u062D" : "\u0634\u0627\u0645";
        },
        calendar: {
          sameDay: "[\u0627\u0684] LT",
          nextDay: "[\u0633\u0680\u0627\u06BB\u064A] LT",
          nextWeek:
            "dddd [\u0627\u06B3\u064A\u0646 \u0647\u0641\u062A\u064A \u062A\u064A] LT",
          lastDay: "[\u06AA\u0627\u0644\u0647\u0647] LT",
          lastWeek:
            "[\u06AF\u0632\u0631\u064A\u0644 \u0647\u0641\u062A\u064A] dddd [\u062A\u064A] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s \u067E\u0648\u0621",
          past: "%s \u0627\u06B3",
          s: "\u0686\u0646\u062F \u0633\u064A\u06AA\u0646\u068A",
          ss: "%d \u0633\u064A\u06AA\u0646\u068A",
          m: "\u0647\u06AA \u0645\u0646\u067D",
          mm: "%d \u0645\u0646\u067D",
          h: "\u0647\u06AA \u06AA\u0644\u0627\u06AA",
          hh: "%d \u06AA\u0644\u0627\u06AA",
          d: "\u0647\u06AA \u068F\u064A\u0646\u0647\u0646",
          dd: "%d \u068F\u064A\u0646\u0647\u0646",
          M: "\u0647\u06AA \u0645\u0647\u064A\u0646\u0648",
          MM: "%d \u0645\u0647\u064A\u0646\u0627",
          y: "\u0647\u06AA \u0633\u0627\u0644",
          yy: "%d \u0633\u0627\u0644",
        },
        preparse: function (t) {
          return t.replace(/،/g, ",");
        },
        postformat: function (t) {
          return t.replace(/,/g, "\u060C");
        },
        week: { dow: 1, doy: 4 },
      });
  },
  34,
);
