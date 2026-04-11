__d(
  "WAWebMoment-gu",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("gu", {
      months:
        "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0_\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0_\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2_\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE\u0A88_\u0A91\u0A97\u0AB8\u0ACD\u0A9F_\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0A91\u0A95\u0ACD\u0A9F\u0ACD\u0AAC\u0AB0_\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0".split(
          "_",
        ),
      monthsShort:
        "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1._\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1._\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF._\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE._\u0A91\u0A97._\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7._\u0A91\u0A95\u0ACD\u0A9F\u0ACD._\u0AA8\u0AB5\u0AC7._\u0AA1\u0ABF\u0AB8\u0AC7.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0_\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0_\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0_\u0AAC\u0AC1\u0AA7\u0ACD\u0AB5\u0ABE\u0AB0_\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0_\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0".split(
          "_",
        ),
      weekdaysShort:
        "\u0AB0\u0AB5\u0ABF_\u0AB8\u0ACB\u0AAE_\u0AAE\u0A82\u0A97\u0AB3_\u0AAC\u0AC1\u0AA7\u0ACD_\u0A97\u0AC1\u0AB0\u0AC1_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0_\u0AB6\u0AA8\u0ABF".split(
          "_",
        ),
      weekdaysMin:
        "\u0AB0_\u0AB8\u0ACB_\u0AAE\u0A82_\u0AAC\u0AC1_\u0A97\u0AC1_\u0AB6\u0AC1_\u0AB6".split(
          "_",
        ),
      longDateFormat: {
        LT: "A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
        LTS: "A h:mm:ss \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
        LLLL: "dddd, D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
      },
      calendar: {
        sameDay: "[\u0A86\u0A9C] LT",
        nextDay: "[\u0A95\u0ABE\u0AB2\u0AC7] LT",
        nextWeek: "dddd, LT",
        lastDay: "[\u0A97\u0A87\u0A95\u0ABE\u0AB2\u0AC7] LT",
        lastWeek: "[\u0AAA\u0ABE\u0A9B\u0AB2\u0ABE] dddd, LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s \u0AAE\u0ABE",
        past: "%s \u0AAA\u0AB9\u0AC7\u0AB2\u0ABE",
        s: "\u0A85\u0AAE\u0AC1\u0A95 \u0AAA\u0AB3\u0ACB",
        ss: "%d \u0AB8\u0AC7\u0A95\u0A82\u0AA1",
        m: "\u0A8F\u0A95 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
        mm: "%d \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
        h: "\u0A8F\u0A95 \u0A95\u0AB2\u0ABE\u0A95",
        hh: "%d \u0A95\u0AB2\u0ABE\u0A95",
        d: "\u0A8F\u0A95 \u0AA6\u0ABF\u0AB5\u0AB8",
        dd: "%d \u0AA6\u0ABF\u0AB5\u0AB8",
        M: "\u0A8F\u0A95 \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
        MM: "%d \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
        y: "\u0A8F\u0A95 \u0AB5\u0AB0\u0ACD\u0AB7",
        yy: "%d \u0AB5\u0AB0\u0ACD\u0AB7",
      },
      meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
      meridiemHour: function (t, n) {
        if ((t === 12 && (t = 0), n === "\u0AB0\u0ABE\u0AA4"))
          return t < 4 ? t : t + 12;
        if (n === "\u0AB8\u0AB5\u0ABE\u0AB0") return t;
        if (n === "\u0AAC\u0AAA\u0ACB\u0AB0") return t >= 10 ? t : t + 12;
        if (n === "\u0AB8\u0ABE\u0A82\u0A9C") return t + 12;
      },
      meridiem: function (t, n, r) {
        return t < 4
          ? "\u0AB0\u0ABE\u0AA4"
          : t < 10
            ? "\u0AB8\u0AB5\u0ABE\u0AB0"
            : t < 17
              ? "\u0AAC\u0AAA\u0ACB\u0AB0"
              : t < 20
                ? "\u0AB8\u0ABE\u0A82\u0A9C"
                : "\u0AB0\u0ABE\u0AA4";
      },
      week: { dow: 0, doy: 6 },
    });
  },
  34,
);
