__d(
  "WAWebMoment-jv",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-moment").defineLocale("jv", {
      months:
        "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
          "_",
        ),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
      weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
      weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
      },
      meridiemParse: /enjing|siyang|sonten|ndalu/,
      meridiemHour: function (t, n) {
        if ((t === 12 && (t = 0), n === "enjing")) return t;
        if (n === "siyang") return t >= 11 ? t : t + 12;
        if (n === "sonten" || n === "ndalu") return t + 12;
      },
      meridiem: function (t, n, r) {
        return t < 11
          ? "enjing"
          : t < 15
            ? "siyang"
            : t < 19
              ? "sonten"
              : "ndalu";
      },
      calendar: {
        sameDay: "[Dinten puniko pukul] LT",
        nextDay: "[Mbenjang pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kala wingi pukul] LT",
        lastWeek: "dddd [kepengker pukul] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "wonten ing %s",
        past: "%s ingkang kepengker",
        s: "sawetawis detik",
        ss: "%d detik",
        m: "setunggal menit",
        mm: "%d menit",
        h: "setunggal jam",
        hh: "%d jam",
        d: "sedinten",
        dd: "%d dinten",
        M: "sewulan",
        MM: "%d wulan",
        y: "setaun",
        yy: "%d taun",
      },
      week: { dow: 1, doy: 7 },
    });
  },
  34,
);
