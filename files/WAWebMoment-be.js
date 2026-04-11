__d(
  "WAWebMoment-be",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.split("_");
      return t % 10 === 1 && t % 100 !== 11
        ? n[0]
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
          ? n[1]
          : n[2];
    }
    function s(t, n, r) {
      var o = {
        ss: n
          ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434"
          : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
        mm: n
          ? "\u0445\u0432\u0456\u043B\u0456\u043D\u0430_\u0445\u0432\u0456\u043B\u0456\u043D\u044B_\u0445\u0432\u0456\u043B\u0456\u043D"
          : "\u0445\u0432\u0456\u043B\u0456\u043D\u0443_\u0445\u0432\u0456\u043B\u0456\u043D\u044B_\u0445\u0432\u0456\u043B\u0456\u043D",
        hh: n
          ? "\u0433\u0430\u0434\u0437\u0456\u043D\u0430_\u0433\u0430\u0434\u0437\u0456\u043D\u044B_\u0433\u0430\u0434\u0437\u0456\u043D"
          : "\u0433\u0430\u0434\u0437\u0456\u043D\u0443_\u0433\u0430\u0434\u0437\u0456\u043D\u044B_\u0433\u0430\u0434\u0437\u0456\u043D",
        dd: "\u0434\u0437\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u0437\u0451\u043D",
        MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u044B_\u043C\u0435\u0441\u044F\u0446\u0430\u045E",
        yy: "\u0433\u043E\u0434_\u0433\u0430\u0434\u044B_\u0433\u0430\u0434\u043E\u045E",
      };
      return r === "m"
        ? n
          ? "\u0445\u0432\u0456\u043B\u0456\u043D\u0430"
          : "\u0445\u0432\u0456\u043B\u0456\u043D\u0443"
        : r === "h"
          ? n
            ? "\u0433\u0430\u0434\u0437\u0456\u043D\u0430"
            : "\u0433\u0430\u0434\u0437\u0456\u043D\u0443"
          : t + " " + e(o[r], +t);
    }
    var u = r("WAWeb-moment").defineLocale("be", {
      months: {
        format:
          "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F_\u043B\u044E\u0442\u0430\u0433\u0430_\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430_\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430_\u0442\u0440\u0430\u045E\u043D\u044F_\u0447\u044D\u0440\u0432\u0435\u043D\u044F_\u043B\u0456\u043F\u0435\u043D\u044F_\u0436\u043D\u0456\u045E\u043D\u044F_\u0432\u0435\u0440\u0430\u0441\u043D\u044F_\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430_\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430_\u0441\u043D\u0435\u0436\u043D\u044F".split(
            "_",
          ),
        standalone:
          "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C_\u043B\u044E\u0442\u044B_\u0441\u0430\u043A\u0430\u0432\u0456\u043A_\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u044D\u0440\u0432\u0435\u043D\u044C_\u043B\u0456\u043F\u0435\u043D\u044C_\u0436\u043D\u0456\u0432\u0435\u043D\u044C_\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C_\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A_\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434_\u0441\u043D\u0435\u0436\u0430\u043D\u044C".split(
            "_",
          ),
      },
      monthsShort:
        "\u0441\u0442\u0443\u0434_\u043B\u044E\u0442_\u0441\u0430\u043A_\u043A\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044D\u0440\u0432_\u043B\u0456\u043F_\u0436\u043D\u0456\u0432_\u0432\u0435\u0440_\u043A\u0430\u0441\u0442_\u043B\u0456\u0441\u0442_\u0441\u043D\u0435\u0436".split(
          "_",
        ),
      weekdays: {
        format:
          "\u043D\u044F\u0434\u0437\u0435\u043B\u044E_\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A_\u0430\u045E\u0442\u043E\u0440\u0430\u043A_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043F\u044F\u0442\u043D\u0456\u0446\u0443_\u0441\u0443\u0431\u043E\u0442\u0443".split(
            "_",
          ),
        standalone:
          "\u043D\u044F\u0434\u0437\u0435\u043B\u044F_\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A_\u0430\u045E\u0442\u043E\u0440\u0430\u043A_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043F\u044F\u0442\u043D\u0456\u0446\u0430_\u0441\u0443\u0431\u043E\u0442\u0430".split(
            "_",
          ),
        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
      },
      weekdaysShort:
        "\u043D\u0434_\u043F\u043D_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043F\u0442_\u0441\u0431".split(
          "_",
        ),
      weekdaysMin:
        "\u043D\u0434_\u043F\u043D_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043F\u0442_\u0441\u0431".split(
          "_",
        ),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY \u0433.",
        LLL: "D MMMM YYYY \u0433., HH:mm",
        LLLL: "dddd, D MMMM YYYY \u0433., HH:mm",
      },
      calendar: {
        sameDay: "[\u0421\u0451\u043D\u043D\u044F \u045E] LT",
        nextDay: "[\u0417\u0430\u045E\u0442\u0440\u0430 \u045E] LT",
        lastDay: "[\u0423\u0447\u043E\u0440\u0430 \u045E] LT",
        nextWeek: function () {
          return "[\u0423] dddd [\u045E] LT";
        },
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return "[\u0423 \u043C\u0456\u043D\u0443\u043B\u0443\u044E] dddd [\u045E] LT";
            case 1:
            case 2:
            case 4:
              return "[\u0423 \u043C\u0456\u043D\u0443\u043B\u044B] dddd [\u045E] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "\u043F\u0440\u0430\u0437 %s",
        past: "%s \u0442\u0430\u043C\u0443",
        s: "\u043D\u0435\u043A\u0430\u043B\u044C\u043A\u0456 \u0441\u0435\u043A\u0443\u043D\u0434",
        m: s,
        mm: s,
        h: s,
        hh: s,
        d: "\u0434\u0437\u0435\u043D\u044C",
        dd: s,
        M: "\u043C\u0435\u0441\u044F\u0446",
        MM: s,
        y: "\u0433\u043E\u0434",
        yy: s,
      },
      meridiemParse: /ночы|раніцы|дня|вечара/,
      isPM: function (t) {
        return /^(дня|вечара)$/.test(t);
      },
      meridiem: function (t, n, r) {
        return t < 4
          ? "\u043D\u043E\u0447\u044B"
          : t < 12
            ? "\u0440\u0430\u043D\u0456\u0446\u044B"
            : t < 17
              ? "\u0434\u043D\u044F"
              : "\u0432\u0435\u0447\u0430\u0440\u0430";
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
      ordinal: function (t, n) {
        switch (n) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return (t % 10 === 2 || t % 10 === 3) &&
              t % 100 !== 12 &&
              t % 100 !== 13
              ? t + "-\u0456"
              : t + "-\u044B";
          case "D":
            return t + "-\u0433\u0430";
          default:
            return t;
        }
      },
      week: { dow: 1, doy: 7 },
    });
  },
  34,
);
