__d(
  "WAWebMoment-tk",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "'inji",
        5: "'inji",
        8: "'inji",
        70: "'inji",
        80: "'inji",
        2: "'nji",
        7: "'nji",
        20: "'nji",
        50: "'nji",
        3: "'\xFCnji",
        4: "'\xFCnji",
        100: "'\xFCnji",
        6: "'njy",
        9: "'unjy",
        10: "'unjy",
        30: "'unjy",
        60: "'ynjy",
        90: "'ynjy",
      },
      s = r("WAWeb-moment").defineLocale("tk", {
        months:
          "\xDDanwar_Fewral_Mart_Aprel_Ma\xFD_I\xFDun_I\xFDul_Awgust_Sent\xFDabr_Okt\xFDabr_No\xFDabr_Dekabr".split(
            "_",
          ),
        monthsShort:
          "\xDDan_Few_Mar_Apr_Ma\xFD_I\xFDn_I\xFDl_Awg_Sen_Okt_No\xFD_Dek".split(
            "_",
          ),
        weekdays:
          "\xDDek\u015Fenbe_Du\u015Fenbe_Si\u015Fenbe_\xC7ar\u015Fenbe_Pen\u015Fenbe_Anna_\u015Eenbe".split(
            "_",
          ),
        weekdaysShort: "\xDDek_Du\u015F_Si\u015F_\xC7ar_Pen_Ann_\u015Een".split(
          "_",
        ),
        weekdaysMin: "\xDDk_D\u015F_S\u015F_\xC7r_Pn_An_\u015En".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bug\xFCn sagat] LT",
          nextDay: "[ertir sagat] LT",
          nextWeek: "[indiki] dddd [sagat] LT",
          lastDay: "[d\xFC\xFDn] LT",
          lastWeek: "[ge\xE7en] dddd [sagat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s so\u0148",
          past: "%s \xF6\u0148",
          s: "birn\xE4\xE7e sekunt",
          m: "bir minut",
          mm: "%d minut",
          h: "bir sagat",
          hh: "%d sagat",
          d: "bir g\xFCn",
          dd: "%d g\xFCn",
          M: "bir a\xFD",
          MM: "%d a\xFD",
          y: "bir \xFDyl",
          yy: "%d \xFDyl",
        },
        ordinal: function (n, r) {
          switch (r) {
            case "d":
            case "D":
            case "Do":
            case "DD":
              return n;
            default:
              if (n === 0) return n + "'unjy";
              var t = n % 10,
                o = (n % 100) - t,
                a = n >= 100 ? 100 : null;
              return n + (e[t] || e[o] || e[a]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
  },
  34,
);
