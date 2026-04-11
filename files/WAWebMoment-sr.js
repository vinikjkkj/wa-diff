__d(
  "WAWebMoment-sr",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        words: {
          ss: ["sekunda", "sekunde", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          d: ["jedan dan", "jednog dana"],
          dd: ["dan", "dana", "dana"],
          M: ["jedan mesec", "jednog meseca"],
          MM: ["mesec", "meseca", "meseci"],
          y: ["jednu godinu", "jedne godine"],
          yy: ["godinu", "godine", "godina"],
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
              ? "jedna godina"
              : a || r
                ? t[0]
                : t[1]
            : ((i = e.correctGrammaticalCase(n, t)),
              o === "yy" && r && i === "godinu" ? n + " godina" : n + " " + i);
        },
      },
      s = r("WAWeb-moment").defineLocale("sr", {
        months:
          "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_",
          ),
        monthsShort:
          "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays:
          "nedelja_ponedeljak_utorak_sreda_\u010Detvrtak_petak_subota".split(
            "_",
          ),
        weekdaysShort: "ned._pon._uto._sre._\u010Det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
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
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedelju] [u] LT";
              case 3:
                return "[u] [sredu] [u] LT";
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
              "[pro\u0161le] [nedelje] [u] LT",
              "[pro\u0161log] [ponedeljka] [u] LT",
              "[pro\u0161log] [utorka] [u] LT",
              "[pro\u0161le] [srede] [u] LT",
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
          past: "pre %s",
          s: "nekoliko sekundi",
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
