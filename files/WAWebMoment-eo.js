__d(
  "WAWebMoment-eo",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("eo", {
      months:
        "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016Dgusto_septembro_oktobro_novembro_decembro".split(
          "_",
        ),
      monthsShort:
        "jan_feb_mart_apr_maj_jun_jul_a\u016Dg_sept_okt_nov_dec".split("_"),
      weekdays:
        "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016Ddo_vendredo_sabato".split(
          "_",
        ),
      weekdaysShort: "dim_lun_mard_merk_\u0135a\u016D_ven_sab".split("_"),
      weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "[la] D[-an de] MMMM, YYYY",
        LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
        LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
        llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM: function (t) {
        return t.charAt(0).toLowerCase() === "p";
      },
      meridiem: function (t, n, r) {
        return t > 11 ? (r ? "p.t.m." : "P.T.M.") : r ? "a.t.m." : "A.T.M.";
      },
      calendar: {
        sameDay: "[Hodia\u016D je] LT",
        nextDay: "[Morga\u016D je] LT",
        nextWeek: "dddd[n je] LT",
        lastDay: "[Hiera\u016D je] LT",
        lastWeek: "[pasintan] dddd[n je] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "post %s",
        past: "anta\u016D %s",
        s: "kelkaj sekundoj",
        ss: "%d sekundoj",
        m: "unu minuto",
        mm: "%d minutoj",
        h: "unu horo",
        hh: "%d horoj",
        d: "unu tago",
        dd: "%d tagoj",
        M: "unu monato",
        MM: "%d monatoj",
        y: "unu jaro",
        yy: "%d jaroj",
      },
      dayOfMonthOrdinalParse: /\d{1,2}a/,
      ordinal: "%da",
      week: { dow: 1, doy: 7 },
    });
  },
  34,
);
