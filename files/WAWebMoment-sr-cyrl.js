__d(
  "WAWebMoment-sr-cyrl",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        words: {
          ss: [
            "\u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            "\u0441\u0435\u043A\u0443\u043D\u0434\u0435",
            "\u0441\u0435\u043A\u0443\u043D\u0434\u0438",
          ],
          m: [
            "\u0458\u0435\u0434\u0430\u043D \u043C\u0438\u043D\u0443\u0442",
            "\u0458\u0435\u0434\u043D\u043E\u0433 \u043C\u0438\u043D\u0443\u0442\u0430",
          ],
          mm: [
            "\u043C\u0438\u043D\u0443\u0442",
            "\u043C\u0438\u043D\u0443\u0442\u0430",
            "\u043C\u0438\u043D\u0443\u0442\u0430",
          ],
          h: [
            "\u0458\u0435\u0434\u0430\u043D \u0441\u0430\u0442",
            "\u0458\u0435\u0434\u043D\u043E\u0433 \u0441\u0430\u0442\u0430",
          ],
          hh: [
            "\u0441\u0430\u0442",
            "\u0441\u0430\u0442\u0430",
            "\u0441\u0430\u0442\u0438",
          ],
          d: [
            "\u0458\u0435\u0434\u0430\u043D \u0434\u0430\u043D",
            "\u0458\u0435\u0434\u043D\u043E\u0433 \u0434\u0430\u043D\u0430",
          ],
          dd: [
            "\u0434\u0430\u043D",
            "\u0434\u0430\u043D\u0430",
            "\u0434\u0430\u043D\u0430",
          ],
          M: [
            "\u0458\u0435\u0434\u0430\u043D \u043C\u0435\u0441\u0435\u0446",
            "\u0458\u0435\u0434\u043D\u043E\u0433 \u043C\u0435\u0441\u0435\u0446\u0430",
          ],
          MM: [
            "\u043C\u0435\u0441\u0435\u0446",
            "\u043C\u0435\u0441\u0435\u0446\u0430",
            "\u043C\u0435\u0441\u0435\u0446\u0438",
          ],
          y: [
            "\u0458\u0435\u0434\u043D\u0443 \u0433\u043E\u0434\u0438\u043D\u0443",
            "\u0458\u0435\u0434\u043D\u0435 \u0433\u043E\u0434\u0438\u043D\u0435",
          ],
          yy: [
            "\u0433\u043E\u0434\u0438\u043D\u0443",
            "\u0433\u043E\u0434\u0438\u043D\u0435",
            "\u0433\u043E\u0434\u0438\u043D\u0430",
          ],
        },
        correctGrammaticalCase: function (t, n) {
          return t % 10 >= 1 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
            ? t % 10 === 1
              ? n[0]
              : n[1]
            : n[2];
        },
        translate: function (n, r, o, a) {
          var t = e.words[o],
            i;
          return o.length === 1
            ? o === "y" && r
              ? "\u0458\u0435\u0434\u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0430"
              : a || r
                ? t[0]
                : t[1]
            : ((i = e.correctGrammaticalCase(n, t)),
              o === "yy" && r && i === "\u0433\u043E\u0434\u0438\u043D\u0443"
                ? n + " \u0433\u043E\u0434\u0438\u043D\u0430"
                : n + " " + i);
        },
      },
      s = r("WAWeb-moment").defineLocale("sr-cyrl", {
        months:
          "\u0458\u0430\u043D\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440_\u043E\u043A\u0442\u043E\u0431\u0430\u0440_\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440".split(
            "_",
          ),
        monthsShort:
          "\u0458\u0430\u043D._\u0444\u0435\u0431._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433._\u0441\u0435\u043F._\u043E\u043A\u0442._\u043D\u043E\u0432._\u0434\u0435\u0446.".split(
            "_",
          ),
        monthsParseExact: !0,
        weekdays:
          "\u043D\u0435\u0434\u0435\u0459\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A_\u0443\u0442\u043E\u0440\u0430\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A_\u043F\u0435\u0442\u0430\u043A_\u0441\u0443\u0431\u043E\u0442\u0430".split(
            "_",
          ),
        weekdaysShort:
          "\u043D\u0435\u0434._\u043F\u043E\u043D._\u0443\u0442\u043E._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043F\u0435\u0442._\u0441\u0443\u0431.".split(
            "_",
          ),
        weekdaysMin:
          "\u043D\u0435_\u043F\u043E_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441\u0443".split(
            "_",
          ),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D. M. YYYY.",
          LL: "D. MMMM YYYY.",
          LLL: "D. MMMM YYYY. H:mm",
          LLLL: "dddd, D. MMMM YYYY. H:mm",
        },
        calendar: {
          sameDay: "[\u0434\u0430\u043D\u0430\u0441 \u0443] LT",
          nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[\u0443] [\u043D\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
              case 3:
                return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
              case 6:
                return "[\u0443] [\u0441\u0443\u0431\u043E\u0442\u0443] [\u0443] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[\u0443] dddd [\u0443] LT";
            }
          },
          lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
          lastWeek: function () {
            var e = [
              "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u043D\u0435\u0434\u0435\u0459\u0435] [\u0443] LT",
              "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u043A\u0430] [\u0443] LT",
              "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0443\u0442\u043E\u0440\u043A\u0430] [\u0443] LT",
              "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT",
              "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043A\u0430] [\u0443] LT",
              "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u0435\u0442\u043A\u0430] [\u0443] LT",
              "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0443\u0431\u043E\u0442\u0435] [\u0443] LT",
            ];
            return e[this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "\u0437\u0430 %s",
          past: "\u043F\u0440\u0435 %s",
          s: "\u043D\u0435\u043A\u043E\u043B\u0438\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
          ss: e.translate,
          m: e.translate,
          mm: e.translate,
          h: e.translate,
          hh: e.translate,
          d: e.translate,
          dd: e.translate,
          M: e.translate,
          MM: e.translate,
          y: e.translate,
          yy: e.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
  },
  34,
);
