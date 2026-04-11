__d(
  "WAWebMoment-sl",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o = e + " ";
      switch (n) {
        case "s":
          return t || r ? "nekaj sekund" : "nekaj sekundami";
        case "ss":
          return (
            e === 1
              ? (o += t ? "sekundo" : "sekundi")
              : e === 2
                ? (o += t || r ? "sekundi" : "sekundah")
                : e < 5
                  ? (o += t || r ? "sekunde" : "sekundah")
                  : (o += "sekund"),
            o
          );
        case "m":
          return t ? "ena minuta" : "eno minuto";
        case "mm":
          return (
            e === 1
              ? (o += t ? "minuta" : "minuto")
              : e === 2
                ? (o += t || r ? "minuti" : "minutama")
                : e < 5
                  ? (o += t || r ? "minute" : "minutami")
                  : (o += t || r ? "minut" : "minutami"),
            o
          );
        case "h":
          return t ? "ena ura" : "eno uro";
        case "hh":
          return (
            e === 1
              ? (o += t ? "ura" : "uro")
              : e === 2
                ? (o += t || r ? "uri" : "urama")
                : e < 5
                  ? (o += t || r ? "ure" : "urami")
                  : (o += t || r ? "ur" : "urami"),
            o
          );
        case "d":
          return t || r ? "en dan" : "enim dnem";
        case "dd":
          return (
            e === 1
              ? (o += t || r ? "dan" : "dnem")
              : e === 2
                ? (o += t || r ? "dni" : "dnevoma")
                : (o += t || r ? "dni" : "dnevi"),
            o
          );
        case "M":
          return t || r ? "en mesec" : "enim mesecem";
        case "MM":
          return (
            e === 1
              ? (o += t || r ? "mesec" : "mesecem")
              : e === 2
                ? (o += t || r ? "meseca" : "mesecema")
                : e < 5
                  ? (o += t || r ? "mesece" : "meseci")
                  : (o += t || r ? "mesecev" : "meseci"),
            o
          );
        case "y":
          return t || r ? "eno leto" : "enim letom";
        case "yy":
          return (
            e === 1
              ? (o += t || r ? "leto" : "letom")
              : e === 2
                ? (o += t || r ? "leti" : "letoma")
                : e < 5
                  ? (o += t || r ? "leta" : "leti")
                  : (o += t || r ? "let" : "leti"),
            o
          );
      }
    }
    var s = r("WAWeb-moment").defineLocale("sl", {
      months:
        "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
          "_",
        ),
      monthsShort:
        "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),
      weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
      weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD. MM. YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm",
      },
      calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v] [nedeljo] [ob] LT";
            case 3:
              return "[v] [sredo] [ob] LT";
            case 6:
              return "[v] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[v] dddd [ob] LT";
          }
        },
        lastDay: "[v\u010Deraj ob] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[prej\u0161njo] [nedeljo] [ob] LT";
            case 3:
              return "[prej\u0161njo] [sredo] [ob] LT";
            case 6:
              return "[prej\u0161njo] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prej\u0161nji] dddd [ob] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "\u010Dez %s",
        past: "pred %s",
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
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 7 },
    });
  },
  34,
);
