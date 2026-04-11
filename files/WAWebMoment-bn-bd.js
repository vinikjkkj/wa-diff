__d(
  "WAWebMoment-bn-bd",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "\u09E7",
        2: "\u09E8",
        3: "\u09E9",
        4: "\u09EA",
        5: "\u09EB",
        6: "\u09EC",
        7: "\u09ED",
        8: "\u09EE",
        9: "\u09EF",
        0: "\u09E6",
      },
      s = {
        "\u09E7": "1",
        "\u09E8": "2",
        "\u09E9": "3",
        "\u09EA": "4",
        "\u09EB": "5",
        "\u09EC": "6",
        "\u09ED": "7",
        "\u09EE": "8",
        "\u09EF": "9",
        "\u09E6": "0",
      },
      u = r("WAWeb-moment").defineLocale("bn-bd", {
        months:
          "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF_\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0\u09BF\u09B2_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2\u09BE\u0987_\u0986\u0997\u09B8\u09CD\u099F_\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0_\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0_\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0_\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0".split(
            "_",
          ),
        monthsShort:
          "\u099C\u09BE\u09A8\u09C1_\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0\u09BF\u09B2_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2\u09BE\u0987_\u0986\u0997\u09B8\u09CD\u099F_\u09B8\u09C7\u09AA\u09CD\u099F_\u0985\u0995\u09CD\u099F\u09CB_\u09A8\u09AD\u09C7_\u09A1\u09BF\u09B8\u09C7".split(
            "_",
          ),
        weekdays:
          "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0_\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0_\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0_\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0_\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0_\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0".split(
            "_",
          ),
        weekdaysShort:
          "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997\u09B2_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split(
            "_",
          ),
        weekdaysMin:
          "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997\u09B2_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split(
            "_",
          ),
        longDateFormat: {
          LT: "A h:mm \u09B8\u09AE\u09DF",
          LTS: "A h:mm:ss \u09B8\u09AE\u09DF",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF",
          LLLL: "dddd, D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF",
        },
        calendar: {
          sameDay: "[\u0986\u099C] LT",
          nextDay: "[\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2] LT",
          nextWeek: "dddd, LT",
          lastDay: "[\u0997\u09A4\u0995\u09BE\u09B2] LT",
          lastWeek: "[\u0997\u09A4] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s \u09AA\u09B0\u09C7",
          past: "%s \u0986\u0997\u09C7",
          s: "\u0995\u09DF\u09C7\u0995 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
          ss: "%d \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
          m: "\u098F\u0995 \u09AE\u09BF\u09A8\u09BF\u099F",
          mm: "%d \u09AE\u09BF\u09A8\u09BF\u099F",
          h: "\u098F\u0995 \u0998\u09A8\u09CD\u099F\u09BE",
          hh: "%d \u0998\u09A8\u09CD\u099F\u09BE",
          d: "\u098F\u0995 \u09A6\u09BF\u09A8",
          dd: "%d \u09A6\u09BF\u09A8",
          M: "\u098F\u0995 \u09AE\u09BE\u09B8",
          MM: "%d \u09AE\u09BE\u09B8",
          y: "\u098F\u0995 \u09AC\u099B\u09B0",
          yy: "%d \u09AC\u099B\u09B0",
        },
        preparse: function (t) {
          return t.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return s[e];
          });
        },
        postformat: function (n) {
          return n.replace(/\d/g, function (t) {
            return e[t];
          });
        },
        meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
        meridiemHour: function (t, n) {
          if ((t === 12 && (t = 0), n === "\u09B0\u09BE\u09A4"))
            return t < 4 ? t : t + 12;
          if (n === "\u09AD\u09CB\u09B0") return t;
          if (n === "\u09B8\u0995\u09BE\u09B2") return t;
          if (n === "\u09A6\u09C1\u09AA\u09C1\u09B0")
            return t >= 3 ? t : t + 12;
          if (n === "\u09AC\u09BF\u0995\u09BE\u09B2") return t + 12;
          if (n === "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE") return t + 12;
        },
        meridiem: function (t, n, r) {
          return t < 4
            ? "\u09B0\u09BE\u09A4"
            : t < 6
              ? "\u09AD\u09CB\u09B0"
              : t < 12
                ? "\u09B8\u0995\u09BE\u09B2"
                : t < 15
                  ? "\u09A6\u09C1\u09AA\u09C1\u09B0"
                  : t < 18
                    ? "\u09AC\u09BF\u0995\u09BE\u09B2"
                    : t < 20
                      ? "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE"
                      : "\u09B0\u09BE\u09A4";
        },
        week: { dow: 0, doy: 6 },
      });
  },
  34,
);
