__d(
  "WAWebMoment-is",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e % 100 === 11 ? !0 : e % 10 !== 1;
    }
    function s(t, n, r, o) {
      var a = t + " ";
      switch (r) {
        case "s":
          return n || o ? "nokkrar sek\xFAndur" : "nokkrum sek\xFAndum";
        case "ss":
          return e(t)
            ? a + (n || o ? "sek\xFAndur" : "sek\xFAndum")
            : a + "sek\xFAnda";
        case "m":
          return n ? "m\xEDn\xFAta" : "m\xEDn\xFAtu";
        case "mm":
          return e(t)
            ? a + (n || o ? "m\xEDn\xFAtur" : "m\xEDn\xFAtum")
            : n
              ? a + "m\xEDn\xFAta"
              : a + "m\xEDn\xFAtu";
        case "hh":
          return e(t)
            ? a + (n || o ? "klukkustundir" : "klukkustundum")
            : a + "klukkustund";
        case "d":
          return n ? "dagur" : o ? "dag" : "degi";
        case "dd":
          return e(t)
            ? n
              ? a + "dagar"
              : a + (o ? "daga" : "d\xF6gum")
            : n
              ? a + "dagur"
              : a + (o ? "dag" : "degi");
        case "M":
          return n ? "m\xE1nu\xF0ur" : o ? "m\xE1nu\xF0" : "m\xE1nu\xF0i";
        case "MM":
          return e(t)
            ? n
              ? a + "m\xE1nu\xF0ir"
              : a + (o ? "m\xE1nu\xF0i" : "m\xE1nu\xF0um")
            : n
              ? a + "m\xE1nu\xF0ur"
              : a + (o ? "m\xE1nu\xF0" : "m\xE1nu\xF0i");
        case "y":
          return n || o ? "\xE1r" : "\xE1ri";
        case "yy":
          return e(t)
            ? a + (n || o ? "\xE1r" : "\xE1rum")
            : a + (n || o ? "\xE1r" : "\xE1ri");
      }
    }
    var u = r("WAWeb-moment").defineLocale("is", {
      months:
        "jan\xFAar_febr\xFAar_mars_apr\xEDl_ma\xED_j\xFAn\xED_j\xFAl\xED_\xE1g\xFAst_september_okt\xF3ber_n\xF3vember_desember".split(
          "_",
        ),
      monthsShort:
        "jan_feb_mar_apr_ma\xED_j\xFAn_j\xFAl_\xE1g\xFA_sep_okt_n\xF3v_des".split(
          "_",
        ),
      weekdays:
        "sunnudagur_m\xE1nudagur_\xFEri\xF0judagur_mi\xF0vikudagur_fimmtudagur_f\xF6studagur_laugardagur".split(
          "_",
        ),
      weekdaysShort: "sun_m\xE1n_\xFEri_mi\xF0_fim_f\xF6s_lau".split("_"),
      weekdaysMin: "Su_M\xE1_\xDEr_Mi_Fi_F\xF6_La".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
      },
      calendar: {
        sameDay: "[\xED dag kl.] LT",
        nextDay: "[\xE1 morgun kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[\xED g\xE6r kl.] LT",
        lastWeek: "[s\xED\xF0asta] dddd [kl.] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "eftir %s",
        past: "fyrir %s s\xED\xF0an",
        s: s,
        ss: s,
        m: s,
        mm: s,
        h: "klukkustund",
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
