__d(
  "WAWebMoment-fi",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e =
        "nolla yksi kaksi kolme nelj\xE4 viisi kuusi seitsem\xE4n kahdeksan yhdeks\xE4n".split(
          " ",
        ),
      s = [
        "nolla",
        "yhden",
        "kahden",
        "kolmen",
        "nelj\xE4n",
        "viiden",
        "kuuden",
        e[7],
        e[8],
        e[9],
      ];
    function u(e, t, n, r) {
      var o = "";
      switch (n) {
        case "s":
          return r ? "muutaman sekunnin" : "muutama sekunti";
        case "ss":
          o = r ? "sekunnin" : "sekuntia";
          break;
        case "m":
          return r ? "minuutin" : "minuutti";
        case "mm":
          o = r ? "minuutin" : "minuuttia";
          break;
        case "h":
          return r ? "tunnin" : "tunti";
        case "hh":
          o = r ? "tunnin" : "tuntia";
          break;
        case "d":
          return r ? "p\xE4iv\xE4n" : "p\xE4iv\xE4";
        case "dd":
          o = r ? "p\xE4iv\xE4n" : "p\xE4iv\xE4\xE4";
          break;
        case "M":
          return r ? "kuukauden" : "kuukausi";
        case "MM":
          o = r ? "kuukauden" : "kuukautta";
          break;
        case "y":
          return r ? "vuoden" : "vuosi";
        case "yy":
          o = r ? "vuoden" : "vuotta";
          break;
      }
      return ((o = c(e, r) + " " + o), o);
    }
    function c(t, n) {
      return t < 10 ? (n ? s[t] : e[t]) : t;
    }
    var d = r("WAWeb-moment").defineLocale("fi", {
      months:
        "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xE4kuu_hein\xE4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
          "_",
        ),
      monthsShort:
        "tammi_helmi_maalis_huhti_touko_kes\xE4_hein\xE4_elo_syys_loka_marras_joulu".split(
          "_",
        ),
      weekdays:
        "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
          "_",
        ),
      weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
      weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[ta] YYYY",
        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
        l: "D.M.YYYY",
        ll: "Do MMM YYYY",
        lll: "Do MMM YYYY, [klo] HH.mm",
        llll: "ddd, Do MMM YYYY, [klo] HH.mm",
      },
      calendar: {
        sameDay: "[t\xE4n\xE4\xE4n] [klo] LT",
        nextDay: "[huomenna] [klo] LT",
        nextWeek: "dddd [klo] LT",
        lastDay: "[eilen] [klo] LT",
        lastWeek: "[viime] dddd[na] [klo] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s p\xE4\xE4st\xE4",
        past: "%s sitten",
        s: u,
        ss: u,
        m: u,
        mm: u,
        h: u,
        hh: u,
        d: u,
        dd: u,
        M: u,
        MM: u,
        y: u,
        yy: u,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
