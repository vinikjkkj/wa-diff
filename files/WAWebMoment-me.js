__d(
  "WAWebMoment-me",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        words: {
          ss: ["sekund", "sekunda", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mjesec", "mjeseca", "mjeseci"],
          yy: ["godina", "godine", "godina"],
        },
        correctGrammaticalCase: function (t, n) {
          return t === 1 ? n[0] : t >= 2 && t <= 4 ? n[1] : n[2];
        },
        translate: function (n, r, o) {
          var t = e.words[o];
          return o.length === 1
            ? r
              ? t[0]
              : t[1]
            : n + " " + e.correctGrammaticalCase(n, t);
        },
      },
      s = r("WAWeb-moment").defineLocale("me", {
        months:
          "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_",
          ),
        monthsShort:
          "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split(
            "_",
          ),
        weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sjutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[ju\u010De u] LT",
          lastWeek: function () {
            var e = [
              "[pro\u0161le] [nedjelje] [u] LT",
              "[pro\u0161log] [ponedjeljka] [u] LT",
              "[pro\u0161log] [utorka] [u] LT",
              "[pro\u0161le] [srijede] [u] LT",
              "[pro\u0161log] [\u010Detvrtka] [u] LT",
              "[pro\u0161log] [petka] [u] LT",
              "[pro\u0161le] [subote] [u] LT",
            ];
            return e[this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: e.translate,
          m: e.translate,
          mm: e.translate,
          h: e.translate,
          hh: e.translate,
          d: "dan",
          dd: e.translate,
          M: "mjesec",
          MM: e.translate,
          y: "godinu",
          yy: e.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
  },
  34,
);
