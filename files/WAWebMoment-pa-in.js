__d(
  "WAWebMoment-pa-in",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "\u0A67",
        2: "\u0A68",
        3: "\u0A69",
        4: "\u0A6A",
        5: "\u0A6B",
        6: "\u0A6C",
        7: "\u0A6D",
        8: "\u0A6E",
        9: "\u0A6F",
        0: "\u0A66",
      },
      s = {
        "\u0A67": "1",
        "\u0A68": "2",
        "\u0A69": "3",
        "\u0A6A": "4",
        "\u0A6B": "5",
        "\u0A6C": "6",
        "\u0A6D": "7",
        "\u0A6E": "8",
        "\u0A6F": "9",
        "\u0A66": "0",
      },
      u = r("WAWeb-moment").defineLocale("pa-in", {
        months:
          "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split(
            "_",
          ),
        monthsShort:
          "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split(
            "_",
          ),
        weekdays:
          "\u0A10\u0A24\u0A35\u0A3E\u0A30_\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30_\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30_\u0A2C\u0A41\u0A27\u0A35\u0A3E\u0A30_\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A28\u0A40\u0A1A\u0A30\u0A35\u0A3E\u0A30".split(
            "_",
          ),
        weekdaysShort:
          "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split(
            "_",
          ),
        weekdaysMin:
          "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split(
            "_",
          ),
        longDateFormat: {
          LT: "A h:mm \u0A35\u0A1C\u0A47",
          LTS: "A h:mm:ss \u0A35\u0A1C\u0A47",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47",
          LLLL: "dddd, D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47",
        },
        calendar: {
          sameDay: "[\u0A05\u0A1C] LT",
          nextDay: "[\u0A15\u0A32] LT",
          nextWeek: "[\u0A05\u0A17\u0A32\u0A3E] dddd, LT",
          lastDay: "[\u0A15\u0A32] LT",
          lastWeek: "[\u0A2A\u0A3F\u0A1B\u0A32\u0A47] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s \u0A35\u0A3F\u0A71\u0A1A",
          past: "%s \u0A2A\u0A3F\u0A1B\u0A32\u0A47",
          s: "\u0A15\u0A41\u0A1D \u0A38\u0A15\u0A3F\u0A70\u0A1F",
          ss: "%d \u0A38\u0A15\u0A3F\u0A70\u0A1F",
          m: "\u0A07\u0A15 \u0A2E\u0A3F\u0A70\u0A1F",
          mm: "%d \u0A2E\u0A3F\u0A70\u0A1F",
          h: "\u0A07\u0A71\u0A15 \u0A18\u0A70\u0A1F\u0A3E",
          hh: "%d \u0A18\u0A70\u0A1F\u0A47",
          d: "\u0A07\u0A71\u0A15 \u0A26\u0A3F\u0A28",
          dd: "%d \u0A26\u0A3F\u0A28",
          M: "\u0A07\u0A71\u0A15 \u0A2E\u0A39\u0A40\u0A28\u0A3E",
          MM: "%d \u0A2E\u0A39\u0A40\u0A28\u0A47",
          y: "\u0A07\u0A71\u0A15 \u0A38\u0A3E\u0A32",
          yy: "%d \u0A38\u0A3E\u0A32",
        },
        preparse: function (t) {
          return t.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return s[e];
          });
        },
        postformat: function (n) {
          return n.replace(/\d/g, function (t) {
            return e[t];
          });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (t, n) {
          if ((t === 12 && (t = 0), n === "\u0A30\u0A3E\u0A24"))
            return t < 4 ? t : t + 12;
          if (n === "\u0A38\u0A35\u0A47\u0A30") return t;
          if (n === "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30")
            return t >= 10 ? t : t + 12;
          if (n === "\u0A38\u0A3C\u0A3E\u0A2E") return t + 12;
        },
        meridiem: function (t, n, r) {
          return t < 4
            ? "\u0A30\u0A3E\u0A24"
            : t < 10
              ? "\u0A38\u0A35\u0A47\u0A30"
              : t < 17
                ? "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30"
                : t < 20
                  ? "\u0A38\u0A3C\u0A3E\u0A2E"
                  : "\u0A30\u0A3E\u0A24";
        },
        week: { dow: 0, doy: 6 },
      });
  },
  34,
);
