__d(
  "WAWebMoment-sk",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e =
        "janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split(
          "_",
        ),
      s = "jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_");
    function u(e) {
      return e > 1 && e < 5;
    }
    function c(e, t, n, r) {
      var o = e + " ";
      switch (n) {
        case "s":
          return t || r ? "p\xE1r sek\xFAnd" : "p\xE1r sekundami";
        case "ss":
          return t || r
            ? o + (u(e) ? "sekundy" : "sek\xFAnd")
            : o + "sekundami";
        case "m":
          return t ? "min\xFAta" : r ? "min\xFAtu" : "min\xFAtou";
        case "mm":
          return t || r
            ? o + (u(e) ? "min\xFAty" : "min\xFAt")
            : o + "min\xFAtami";
        case "h":
          return t ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return t || r ? o + (u(e) ? "hodiny" : "hod\xEDn") : o + "hodinami";
        case "d":
          return t || r ? "de\u0148" : "d\u0148om";
        case "dd":
          return t || r ? o + (u(e) ? "dni" : "dn\xED") : o + "d\u0148ami";
        case "M":
          return t || r ? "mesiac" : "mesiacom";
        case "MM":
          return t || r ? o + (u(e) ? "mesiace" : "mesiacov") : o + "mesiacmi";
        case "y":
          return t || r ? "rok" : "rokom";
        case "yy":
          return t || r ? o + (u(e) ? "roky" : "rokov") : o + "rokmi";
      }
    }
    var d = r("WAWeb-moment").defineLocale("sk", {
      months: e,
      monthsShort: s,
      weekdays:
        "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split(
          "_",
        ),
      weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v nede\u013Eu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo \u0161tvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT";
          }
        },
        lastDay: "[v\u010Dera o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minul\xFA nede\u013Eu o] LT";
            case 1:
            case 2:
              return "[minul\xFD] dddd [o] LT";
            case 3:
              return "[minul\xFA stredu o] LT";
            case 4:
            case 5:
              return "[minul\xFD] dddd [o] LT";
            case 6:
              return "[minul\xFA sobotu o] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: c,
        ss: c,
        m: c,
        mm: c,
        h: c,
        hh: c,
        d: c,
        dd: c,
        M: c,
        MM: c,
        y: c,
        yy: c,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
