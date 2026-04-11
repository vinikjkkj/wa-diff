__d(
  "WAWebMoment-ku",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "\u0661",
        2: "\u0662",
        3: "\u0663",
        4: "\u0664",
        5: "\u0665",
        6: "\u0666",
        7: "\u0667",
        8: "\u0668",
        9: "\u0669",
        0: "\u0660",
      },
      s = {
        "\u0661": "1",
        "\u0662": "2",
        "\u0663": "3",
        "\u0664": "4",
        "\u0665": "5",
        "\u0666": "6",
        "\u0667": "7",
        "\u0668": "8",
        "\u0669": "9",
        "\u0660": "0",
      },
      u = [
        "\u06A9\u0627\u0646\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645",
        "\u0634\u0648\u0628\u0627\u062A",
        "\u0626\u0627\u0632\u0627\u0631",
        "\u0646\u06CC\u0633\u0627\u0646",
        "\u0626\u0627\u06CC\u0627\u0631",
        "\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646",
        "\u062A\u06D5\u0645\u0645\u0648\u0632",
        "\u0626\u0627\u0628",
        "\u0626\u06D5\u06CC\u0644\u0648\u0648\u0644",
        "\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u0643\u06D5\u0645",
        "\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645",
        "\u0643\u0627\u0646\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645",
      ],
      c = r("WAWeb-moment").defineLocale("ku", {
        months: u,
        monthsShort: u,
        weekdays:
          "\u06CC\u0647\u200C\u0643\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u062F\u0648\u0648\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u0633\u06CE\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u0686\u0648\u0627\u0631\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u067E\u06CE\u0646\u062C\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u0647\u0647\u200C\u06CC\u0646\u06CC_\u0634\u0647\u200C\u0645\u0645\u0647\u200C".split(
            "_",
          ),
        weekdaysShort:
          "\u06CC\u0647\u200C\u0643\u0634\u0647\u200C\u0645_\u062F\u0648\u0648\u0634\u0647\u200C\u0645_\u0633\u06CE\u0634\u0647\u200C\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200C\u0645_\u067E\u06CE\u0646\u062C\u0634\u0647\u200C\u0645_\u0647\u0647\u200C\u06CC\u0646\u06CC_\u0634\u0647\u200C\u0645\u0645\u0647\u200C".split(
            "_",
          ),
        weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u0647_\u0634".split(
          "_",
        ),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (t) {
          return /ئێواره‌/.test(t);
        },
        meridiem: function (t, n, r) {
          return t < 12
            ? "\u0628\u0647\u200C\u06CC\u0627\u0646\u06CC"
            : "\u0626\u06CE\u0648\u0627\u0631\u0647\u200C";
        },
        calendar: {
          sameDay:
            "[\u0626\u0647\u200C\u0645\u0631\u06C6 \u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT",
          nextDay:
            "[\u0628\u0647\u200C\u06CC\u0627\u0646\u06CC \u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT",
          nextWeek: "dddd [\u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT",
          lastDay:
            "[\u062F\u0648\u06CE\u0646\u06CE \u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT",
          lastWeek: "dddd [\u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "\u0644\u0647\u200C %s",
          past: "%s",
          s: "\u0686\u0647\u200C\u0646\u062F \u0686\u0631\u0643\u0647\u200C\u06CC\u0647\u200C\u0643",
          ss: "\u0686\u0631\u0643\u0647\u200C %d",
          m: "\u06CC\u0647\u200C\u0643 \u062E\u0648\u0644\u0647\u200C\u0643",
          mm: "%d \u062E\u0648\u0644\u0647\u200C\u0643",
          h: "\u06CC\u0647\u200C\u0643 \u0643\u0627\u062A\u0698\u0645\u06CE\u0631",
          hh: "%d \u0643\u0627\u062A\u0698\u0645\u06CE\u0631",
          d: "\u06CC\u0647\u200C\u0643 \u0695\u06C6\u0698",
          dd: "%d \u0695\u06C6\u0698",
          M: "\u06CC\u0647\u200C\u0643 \u0645\u0627\u0646\u06AF",
          MM: "%d \u0645\u0627\u0646\u06AF",
          y: "\u06CC\u0647\u200C\u0643 \u0633\u0627\u06B5",
          yy: "%d \u0633\u0627\u06B5",
        },
        preparse: function (t) {
          return t
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return s[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (n) {
          return n
            .replace(/\d/g, function (t) {
              return e[t];
            })
            .replace(/,/g, "\u060C");
        },
        week: { dow: 6, doy: 12 },
      });
  },
  34,
);
