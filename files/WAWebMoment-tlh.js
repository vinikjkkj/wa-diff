__d(
  "WAWebMoment-tlh",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split(
      "_",
    );
    function s(e) {
      var t = e;
      return (
        (t =
          e.indexOf("jaj") !== -1
            ? t.slice(0, -3) + "leS"
            : e.indexOf("jar") !== -1
              ? t.slice(0, -3) + "waQ"
              : e.indexOf("DIS") !== -1
                ? t.slice(0, -3) + "nem"
                : t + " pIq"),
        t
      );
    }
    function u(e) {
      var t = e;
      return (
        (t =
          e.indexOf("jaj") !== -1
            ? t.slice(0, -3) + "Hu\u2019"
            : e.indexOf("jar") !== -1
              ? t.slice(0, -3) + "wen"
              : e.indexOf("DIS") !== -1
                ? t.slice(0, -3) + "ben"
                : t + " ret"),
        t
      );
    }
    function c(e, t, n, r) {
      var o = d(e);
      switch (n) {
        case "ss":
          return o + " lup";
        case "mm":
          return o + " tup";
        case "hh":
          return o + " rep";
        case "dd":
          return o + " jaj";
        case "MM":
          return o + " jar";
        case "yy":
          return o + " DIS";
      }
    }
    function d(t) {
      var n = Math.floor((t % 1e3) / 100),
        r = Math.floor((t % 100) / 10),
        o = t % 10,
        a = "";
      return (
        n > 0 && (a += e[n] + "vatlh"),
        r > 0 && (a += (a !== "" ? " " : "") + e[r] + "maH"),
        o > 0 && (a += (a !== "" ? " " : "") + e[o]),
        a === "" ? "pagh" : a
      );
    }
    var m = r("WAWeb-moment").defineLocale("tlh", {
      months:
        "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split(
          "_",
        ),
      monthsShort:
        "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysShort:
        "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysMin:
        "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm",
      },
      calendar: {
        sameDay: "[DaHjaj] LT",
        nextDay: "[wa\u2019leS] LT",
        nextWeek: "LLL",
        lastDay: "[wa\u2019Hu\u2019] LT",
        lastWeek: "LLL",
        sameElse: "L",
      },
      relativeTime: {
        future: s,
        past: u,
        s: "puS lup",
        ss: c,
        m: "wa\u2019 tup",
        mm: c,
        h: "wa\u2019 rep",
        hh: c,
        d: "wa\u2019 jaj",
        dd: c,
        M: "wa\u2019 jar",
        MM: c,
        y: "wa\u2019 DIS",
        yy: c,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  },
  34,
);
