__d(
  "WAWebMoment-cs",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        format:
          "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split(
            "_",
          ),
        standalone:
          "ledna_\xFAnora_b\u0159ezna_dubna_kv\u011Btna_\u010Dervna_\u010Dervence_srpna_z\xE1\u0159\xED_\u0159\xEDjna_listopadu_prosince".split(
            "_",
          ),
      },
      s =
        "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split(
          "_",
        ),
      u = [
        /^led/i,
        /^úno/i,
        /^bře/i,
        /^dub/i,
        /^kvě/i,
        /^(čvn|červen$|června)/i,
        /^(čvc|červenec|července)/i,
        /^srp/i,
        /^zář/i,
        /^říj/i,
        /^lis/i,
        /^pro/i,
      ],
      c =
        /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
    function d(e) {
      return e > 1 && e < 5 && ~~(e / 10) !== 1;
    }
    function m(e, t, n, r) {
      var o = e + " ";
      switch (n) {
        case "s":
          return t || r ? "p\xE1r sekund" : "p\xE1r sekundami";
        case "ss":
          return t || r ? o + (d(e) ? "sekundy" : "sekund") : o + "sekundami";
        case "m":
          return t ? "minuta" : r ? "minutu" : "minutou";
        case "mm":
          return t || r ? o + (d(e) ? "minuty" : "minut") : o + "minutami";
        case "h":
          return t ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return t || r ? o + (d(e) ? "hodiny" : "hodin") : o + "hodinami";
        case "d":
          return t || r ? "den" : "dnem";
        case "dd":
          return t || r ? o + (d(e) ? "dny" : "dn\xED") : o + "dny";
        case "M":
          return t || r ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";
        case "MM":
          return t || r
            ? o + (d(e) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F")
            : o + "m\u011Bs\xEDci";
        case "y":
          return t || r ? "rok" : "rokem";
        case "yy":
          return t || r ? o + (d(e) ? "roky" : "let") : o + "lety";
      }
    }
    var p = r("WAWeb-moment").defineLocale("cs", {
      months: e,
      monthsShort: s,
      monthsRegex: c,
      monthsShortRegex: c,
      monthsStrictRegex:
        /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex:
        /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
      monthsParse: u,
      longMonthsParse: u,
      shortMonthsParse: u,
      weekdays:
        "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split(
          "_",
        ),
      weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
      weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY",
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[z\xEDtra v] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v ned\u011Bli v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve st\u0159edu v] LT";
            case 4:
              return "[ve \u010Dtvrtek v] LT";
            case 5:
              return "[v p\xE1tek v] LT";
            case 6:
              return "[v sobotu v] LT";
          }
        },
        lastDay: "[v\u010Dera v] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulou ned\u011Bli v] LT";
            case 1:
            case 2:
              return "[minul\xE9] dddd [v] LT";
            case 3:
              return "[minulou st\u0159edu v] LT";
            case 4:
            case 5:
              return "[minul\xFD] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "za %s",
        past: "p\u0159ed %s",
        s: m,
        ss: m,
        m: m,
        mm: m,
        h: m,
        hh: m,
        d: m,
        dd: m,
        M: m,
        MM: m,
        y: m,
        yy: m,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
