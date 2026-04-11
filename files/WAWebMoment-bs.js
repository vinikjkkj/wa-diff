__d(
  "WAWebMoment-bs",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = e + " ";
      switch (n) {
        case "ss":
          return (
            e === 1
              ? (r += "sekunda")
              : e === 2 || e === 3 || e === 4
                ? (r += "sekunde")
                : (r += "sekundi"),
            r
          );
        case "m":
          return t ? "jedna minuta" : "jedne minute";
        case "mm":
          return (
            e === 1
              ? (r += "minuta")
              : e === 2 || e === 3 || e === 4
                ? (r += "minute")
                : (r += "minuta"),
            r
          );
        case "h":
          return t ? "jedan sat" : "jednog sata";
        case "hh":
          return (
            e === 1
              ? (r += "sat")
              : e === 2 || e === 3 || e === 4
                ? (r += "sata")
                : (r += "sati"),
            r
          );
        case "dd":
          return (e === 1 ? (r += "dan") : (r += "dana"), r);
        case "MM":
          return (
            e === 1
              ? (r += "mjesec")
              : e === 2 || e === 3 || e === 4
                ? (r += "mjeseca")
                : (r += "mjeseci"),
            r
          );
        case "yy":
          return (
            e === 1
              ? (r += "godina")
              : e === 2 || e === 3 || e === 4
                ? (r += "godine")
                : (r += "godina"),
            r
          );
      }
    }
    var s = r("WAWeb-moment").defineLocale("bs", {
      months:
        "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
          "_",
        ),
      monthsShort:
        "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
          "_",
        ),
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
        nextDay: "[sutra u] LT",
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
        lastDay: "[ju\u010Der u] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
              return "[pro\u0161lu] dddd [u] LT";
            case 6:
              return "[pro\u0161le] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[pro\u0161li] dddd [u] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: "dan",
        dd: e,
        M: "mjesec",
        MM: e,
        y: "godinu",
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 7 },
    });
  },
  34,
);
