__d(
  "WAWebMoment-gom-latn",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o = {
        s: ["thoddea sekondamni", "thodde sekond"],
        ss: [e + " sekondamni", e + " sekond"],
        m: ["eka mintan", "ek minut"],
        mm: [e + " mintamni", e + " mintam"],
        h: ["eka voran", "ek vor"],
        hh: [e + " voramni", e + " voram"],
        d: ["eka disan", "ek dis"],
        dd: [e + " disamni", e + " dis"],
        M: ["eka mhoinean", "ek mhoino"],
        MM: [e + " mhoineamni", e + " mhoine"],
        y: ["eka vorsan", "ek voros"],
        yy: [e + " vorsamni", e + " vorsam"],
      };
      return r ? o[n][0] : o[n][1];
    }
    var s = r("WAWeb-moment").defineLocale("gom-latn", {
      months: {
        standalone:
          "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
            "_",
          ),
        format:
          "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
            "_",
          ),
        isFormat: /MMMM(\s)+D[oD]?/,
      },
      monthsShort:
        "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split(
        "_",
      ),
      weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
      weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "A h:mm [vazta]",
        LTS: "A h:mm:ss [vazta]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [vazta]",
        LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
        llll: "ddd, D MMM YYYY, A h:mm [vazta]",
      },
      calendar: {
        sameDay: "[Aiz] LT",
        nextDay: "[Faleam] LT",
        nextWeek: "[Fuddlo] dddd[,] LT",
        lastDay: "[Kal] LT",
        lastWeek: "[Fattlo] dddd[,] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s",
        past: "%s adim",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: e,
        M: e,
        MM: e,
        y: e,
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er)/,
      ordinal: function (t, n) {
        switch (n) {
          case "D":
            return t + "er";
          default:
          case "M":
          case "Q":
          case "DDD":
          case "d":
          case "w":
          case "W":
            return t;
        }
      },
      week: { dow: 0, doy: 3 },
      meridiemParse: /rati|sokallim|donparam|sanje/,
      meridiemHour: function (t, n) {
        if ((t === 12 && (t = 0), n === "rati")) return t < 4 ? t : t + 12;
        if (n === "sokallim") return t;
        if (n === "donparam") return t > 12 ? t : t + 12;
        if (n === "sanje") return t + 12;
      },
      meridiem: function (t, n, r) {
        return t < 4
          ? "rati"
          : t < 12
            ? "sokallim"
            : t < 16
              ? "donparam"
              : t < 20
                ? "sanje"
                : "rati";
      },
    });
  },
  34,
);
