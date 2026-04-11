__d(
  "WAWebMoment-sv",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("sv", {
      months:
        "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
          "_",
        ),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays:
        "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"),
      weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"),
      weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd D MMM YYYY HH:mm",
      },
      calendar: {
        sameDay: "[Idag] LT",
        nextDay: "[Imorgon] LT",
        lastDay: "[Ig\xE5r] LT",
        nextWeek: "[P\xE5] dddd LT",
        lastWeek: "[I] dddd[s] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "om %s",
        past: "f\xF6r %s sedan",
        s: "n\xE5gra sekunder",
        ss: "%d sekunder",
        m: "en minut",
        mm: "%d minuter",
        h: "en timme",
        hh: "%d timmar",
        d: "en dag",
        dd: "%d dagar",
        M: "en m\xE5nad",
        MM: "%d m\xE5nader",
        y: "ett \xE5r",
        yy: "%d \xE5r",
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
      ordinal: function (t) {
        var e = t % 10,
          n =
            ~~((t % 100) / 10) === 1 ? ":e" : e === 1 || e === 2 ? ":a" : ":e";
        return t + n;
      },
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
