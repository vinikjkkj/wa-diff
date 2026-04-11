__d(
  "WAWebMoment-tet",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("tet", {
      months:
        "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xF1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
          "_",
        ),
      monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
      weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
      weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
      weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm",
      },
      calendar: {
        sameDay: "[Ohin iha] LT",
        nextDay: "[Aban iha] LT",
        nextWeek: "dddd [iha] LT",
        lastDay: "[Horiseik iha] LT",
        lastWeek: "dddd [semana kotuk] [iha] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "iha %s",
        past: "%s liuba",
        s: "segundu balun",
        ss: "segundu %d",
        m: "minutu ida",
        mm: "minutu %d",
        h: "oras ida",
        hh: "oras %d",
        d: "loron ida",
        dd: "loron %d",
        M: "fulan ida",
        MM: "fulan %d",
        y: "tinan ida",
        yy: "tinan %d",
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (t) {
        var e = t % 10,
          n =
            ~~((t % 100) / 10) === 1
              ? "th"
              : e === 1
                ? "st"
                : e === 2
                  ? "nd"
                  : e === 3
                    ? "rd"
                    : "th";
        return t + n;
      },
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
