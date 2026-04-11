__d(
  "WAWebMoment-ur",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "\u062C\u0646\u0648\u0631\u06CC",
        "\u0641\u0631\u0648\u0631\u06CC",
        "\u0645\u0627\u0631\u0686",
        "\u0627\u067E\u0631\u06CC\u0644",
        "\u0645\u0626\u06CC",
        "\u062C\u0648\u0646",
        "\u062C\u0648\u0644\u0627\u0626\u06CC",
        "\u0627\u06AF\u0633\u062A",
        "\u0633\u062A\u0645\u0628\u0631",
        "\u0627\u06A9\u062A\u0648\u0628\u0631",
        "\u0646\u0648\u0645\u0628\u0631",
        "\u062F\u0633\u0645\u0628\u0631",
      ],
      s = [
        "\u0627\u062A\u0648\u0627\u0631",
        "\u067E\u06CC\u0631",
        "\u0645\u0646\u06AF\u0644",
        "\u0628\u062F\u06BE",
        "\u062C\u0645\u0639\u0631\u0627\u062A",
        "\u062C\u0645\u0639\u06C1",
        "\u06C1\u0641\u062A\u06C1",
      ],
      u = r("WAWeb-moment").defineLocale("ur", {
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
          sameDay: "[\u0622\u062C \u0628\u0648\u0642\u062A] LT",
          nextDay: "[\u06A9\u0644 \u0628\u0648\u0642\u062A] LT",
          nextWeek: "dddd [\u0628\u0648\u0642\u062A] LT",
          lastDay:
            "[\u06AF\u0630\u0634\u062A\u06C1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062A] LT",
          lastWeek:
            "[\u06AF\u0630\u0634\u062A\u06C1] dddd [\u0628\u0648\u0642\u062A] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s \u0628\u0639\u062F",
          past: "%s \u0642\u0628\u0644",
          s: "\u0686\u0646\u062F \u0633\u06CC\u06A9\u0646\u0688",
          ss: "%d \u0633\u06CC\u06A9\u0646\u0688",
          m: "\u0627\u06CC\u06A9 \u0645\u0646\u0679",
          mm: "%d \u0645\u0646\u0679",
          h: "\u0627\u06CC\u06A9 \u06AF\u06BE\u0646\u0679\u06C1",
          hh: "%d \u06AF\u06BE\u0646\u0679\u06D2",
          d: "\u0627\u06CC\u06A9 \u062F\u0646",
          dd: "%d \u062F\u0646",
          M: "\u0627\u06CC\u06A9 \u0645\u0627\u06C1",
          MM: "%d \u0645\u0627\u06C1",
          y: "\u0627\u06CC\u06A9 \u0633\u0627\u0644",
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
