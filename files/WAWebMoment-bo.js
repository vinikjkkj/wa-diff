__d(
  "WAWebMoment-bo",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "\u0F21",
        2: "\u0F22",
        3: "\u0F23",
        4: "\u0F24",
        5: "\u0F25",
        6: "\u0F26",
        7: "\u0F27",
        8: "\u0F28",
        9: "\u0F29",
        0: "\u0F20",
      },
      s = {
        "\u0F21": "1",
        "\u0F22": "2",
        "\u0F23": "3",
        "\u0F24": "4",
        "\u0F25": "5",
        "\u0F26": "6",
        "\u0F27": "7",
        "\u0F28": "8",
        "\u0F29": "9",
        "\u0F20": "0",
      },
      u = r("WAWeb-moment").defineLocale("bo", {
        months:
          "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F54\u0F7C_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F63\u0F94\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54".split(
            "_",
          ),
        monthsShort:
          "\u0F5F\u0FB3\u0F0B1_\u0F5F\u0FB3\u0F0B2_\u0F5F\u0FB3\u0F0B3_\u0F5F\u0FB3\u0F0B4_\u0F5F\u0FB3\u0F0B5_\u0F5F\u0FB3\u0F0B6_\u0F5F\u0FB3\u0F0B7_\u0F5F\u0FB3\u0F0B8_\u0F5F\u0FB3\u0F0B9_\u0F5F\u0FB3\u0F0B10_\u0F5F\u0FB3\u0F0B11_\u0F5F\u0FB3\u0F0B12".split(
            "_",
          ),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: !0,
        weekdays:
          "\u0F42\u0F5F\u0F60\u0F0B\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F42\u0F5F\u0F60\u0F0B\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split(
            "_",
          ),
        weekdaysShort:
          "\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split(
            "_",
          ),
        weekdaysMin:
          "\u0F49\u0F72_\u0F5F\u0FB3_\u0F58\u0F72\u0F42_\u0F63\u0FB7\u0F42_\u0F55\u0F74\u0F62_\u0F66\u0F44\u0F66_\u0F66\u0FA4\u0F7A\u0F53".split(
            "_",
          ),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[\u0F51\u0F72\u0F0B\u0F62\u0F72\u0F44] LT",
          nextDay: "[\u0F66\u0F44\u0F0B\u0F49\u0F72\u0F53] LT",
          nextWeek:
            "[\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F55\u0FB2\u0F42\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F58], LT",
          lastDay: "[\u0F41\u0F0B\u0F66\u0F44] LT",
          lastWeek:
            "[\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F55\u0FB2\u0F42\u0F0B\u0F58\u0F50\u0F60\u0F0B\u0F58] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s \u0F63\u0F0B",
          past: "%s \u0F66\u0F94\u0F53\u0F0B\u0F63",
          s: "\u0F63\u0F58\u0F0B\u0F66\u0F44",
          ss: "%d \u0F66\u0F90\u0F62\u0F0B\u0F46\u0F0D",
          m: "\u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B\u0F42\u0F45\u0F72\u0F42",
          mm: "%d \u0F66\u0F90\u0F62\u0F0B\u0F58",
          h: "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F42\u0F45\u0F72\u0F42",
          hh: "%d \u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51",
          d: "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F45\u0F72\u0F42",
          dd: "%d \u0F49\u0F72\u0F53\u0F0B",
          M: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F45\u0F72\u0F42",
          MM: "%d \u0F5F\u0FB3\u0F0B\u0F56",
          y: "\u0F63\u0F7C\u0F0B\u0F42\u0F45\u0F72\u0F42",
          yy: "%d \u0F63\u0F7C",
        },
        preparse: function (t) {
          return t.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return s[e];
          });
        },
        postformat: function (n) {
          return n.replace(/\d/g, function (t) {
            return e[t];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (t, n) {
          return (
            t === 12 && (t = 0),
            (n === "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C" && t >= 4) ||
            (n === "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F74\u0F44" && t < 5) ||
            n === "\u0F51\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F42"
              ? t + 12
              : t
          );
        },
        meridiem: function (t, n, r) {
          return t < 4
            ? "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C"
            : t < 10
              ? "\u0F5E\u0F7C\u0F42\u0F66\u0F0B\u0F40\u0F66"
              : t < 17
                ? "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F74\u0F44"
                : t < 20
                  ? "\u0F51\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F42"
                  : "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C";
        },
        week: { dow: 0, doy: 6 },
      });
  },
  34,
);
