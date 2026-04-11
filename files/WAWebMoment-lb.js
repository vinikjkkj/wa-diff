__d(
  "WAWebMoment-lb",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o = {
        m: ["eng Minutt", "enger Minutt"],
        h: ["eng Stonn", "enger Stonn"],
        d: ["een Dag", "engem Dag"],
        M: ["ee Mount", "engem Mount"],
        y: ["ee Joer", "engem Joer"],
      };
      return t ? o[n][0] : o[n][1];
    }
    function s(e) {
      var t = e.substr(0, e.indexOf(" "));
      return c(t) ? "a " + e : "an " + e;
    }
    function u(e) {
      var t = e.substr(0, e.indexOf(" "));
      return c(t) ? "viru " + e : "virun " + e;
    }
    function c(e) {
      if (((e = parseInt(e, 10)), isNaN(e))) return !1;
      if (e < 0) return !0;
      if (e < 10) return 4 <= e && e <= 7;
      if (e < 100) {
        var t = e % 10,
          n = e / 10;
        return c(t === 0 ? n : t);
      } else if (e < 1e4) {
        for (; e >= 10; ) e = e / 10;
        return c(e);
      } else return ((e = e / 1e3), c(e));
    }
    var d = r("WAWeb-moment").defineLocale("lb", {
      months:
        "Januar_Februar_M\xE4erz_Abr\xEBll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
          "_",
        ),
      monthsShort:
        "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "Sonndeg_M\xE9indeg_D\xEBnschdeg_M\xEBttwoch_Donneschdeg_Freideg_Samschdeg".split(
          "_",
        ),
      weekdaysShort: "So._M\xE9._D\xEB._M\xEB._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_M\xE9_D\xEB_M\xEB_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm [Auer]",
        LTS: "H:mm:ss [Auer]",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm [Auer]",
        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
      },
      calendar: {
        sameDay: "[Haut um] LT",
        sameElse: "L",
        nextDay: "[Muer um] LT",
        nextWeek: "dddd [um] LT",
        lastDay: "[G\xEBschter um] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 2:
            case 4:
              return "[Leschten] dddd [um] LT";
            default:
              return "[Leschte] dddd [um] LT";
          }
        },
      },
      relativeTime: {
        future: s,
        past: u,
        s: "e puer Sekonnen",
        ss: "%d Sekonnen",
        m: e,
        mm: "%d Minutten",
        h: e,
        hh: "%d Stonnen",
        d: e,
        dd: "%d Deeg",
        M: e,
        MM: "%d M\xE9int",
        y: e,
        yy: "%d Joer",
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
