__d(
  "WAWebMoment-hu",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e =
      "vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(
        " ",
      );
    function s(e, t, n, r) {
      var o = e;
      switch (n) {
        case "s":
          return r || t
            ? "n\xE9h\xE1ny m\xE1sodperc"
            : "n\xE9h\xE1ny m\xE1sodperce";
        case "ss":
          return o + (r || t) ? " m\xE1sodperc" : " m\xE1sodperce";
        case "m":
          return "egy" + (r || t ? " perc" : " perce");
        case "mm":
          return o + (r || t ? " perc" : " perce");
        case "h":
          return "egy" + (r || t ? " \xF3ra" : " \xF3r\xE1ja");
        case "hh":
          return o + (r || t ? " \xF3ra" : " \xF3r\xE1ja");
        case "d":
          return "egy" + (r || t ? " nap" : " napja");
        case "dd":
          return o + (r || t ? " nap" : " napja");
        case "M":
          return "egy" + (r || t ? " h\xF3nap" : " h\xF3napja");
        case "MM":
          return o + (r || t ? " h\xF3nap" : " h\xF3napja");
        case "y":
          return "egy" + (r || t ? " \xE9v" : " \xE9ve");
        case "yy":
          return o + (r || t ? " \xE9v" : " \xE9ve");
      }
      return "";
    }
    function u(t) {
      return (t ? "" : "[m\xFAlt] ") + "[" + e[this.day()] + "] LT[-kor]";
    }
    var c = r("WAWeb-moment").defineLocale("hu", {
      months:
        "janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split(
          "_",
        ),
      monthsShort:
        "jan._feb._m\xE1rc._\xE1pr._m\xE1j._j\xFAn._j\xFAl._aug._szept._okt._nov._dec.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split(
          "_",
        ),
      weekdaysShort: "vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm",
      },
      meridiemParse: /de|du/i,
      isPM: function (t) {
        return t.charAt(1).toLowerCase() === "u";
      },
      meridiem: function (t, n, r) {
        return t < 12 ? (r === !0 ? "de" : "DE") : r === !0 ? "du" : "DU";
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function () {
          return u.call(this, !0);
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function () {
          return u.call(this, !1);
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "%s m\xFAlva",
        past: "%s",
        s: s,
        ss: s,
        m: s,
        mm: s,
        h: s,
        hh: s,
        d: s,
        dd: s,
        M: s,
        MM: s,
        y: s,
        yy: s,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
