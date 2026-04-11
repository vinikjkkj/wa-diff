__d(
  "WAWebMoment-de-ch",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        w: ["eine Woche", "einer Woche"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"],
      };
      return t ? o[n][0] : o[n][1];
    }
    var s = r("WAWeb-moment").defineLocale("de-ch", {
      months:
        "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
          "_",
        ),
      monthsShort: "Jan_Feb_M\xE4r_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez".split(
        "_",
      ),
      monthsParseExact: !0,
      weekdays:
        "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
          "_",
        ),
      weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm",
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]",
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: e,
        mm: "%d Minuten",
        h: e,
        hh: "%d Stunden",
        d: e,
        dd: e,
        w: e,
        ww: "%d Wochen",
        M: e,
        MM: e,
        y: e,
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
