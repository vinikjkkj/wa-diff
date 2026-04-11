__d(
  "WAWebMoment-br",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = { mm: "munutenn", MM: "miz", dd: "devezh" };
      return e + " " + c(r[n], e);
    }
    function s(e) {
      switch (u(e)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return e + " bloaz";
        default:
          return e + " vloaz";
      }
    }
    function u(e) {
      return e > 9 ? u(e % 10) : e;
    }
    function c(e, t) {
      return t === 2 ? d(e) : e;
    }
    function d(e) {
      var t = { m: "v", b: "v", d: "z" };
      return t[e.charAt(0)] === void 0 ? e : t[e.charAt(0)] + e.substring(1);
    }
    var m = [
        /^gen/i,
        /^c[ʼ\']hwe/i,
        /^meu/i,
        /^ebr/i,
        /^mae/i,
        /^(mez|eve)/i,
        /^gou/i,
        /^eos/i,
        /^gwe/i,
        /^her/i,
        /^du/i,
        /^ker/i,
      ],
      p =
        /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      _ =
        /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
      f = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      g = [
        /^sul/i,
        /^lun/i,
        /^meurzh/i,
        /^merc[ʼ\']her/i,
        /^yaou/i,
        /^gwener/i,
        /^sadorn/i,
      ],
      h = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
      y = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i],
      C = r("WAWeb-moment").defineLocale("br", {
        months:
          "Genver_C\u02BChwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            "_",
          ),
        monthsShort:
          "Gen_C\u02BChwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc\u02BCher_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParse: y,
        fullWeekdaysParse: g,
        shortWeekdaysParse: h,
        minWeekdaysParse: y,
        monthsRegex: p,
        monthsShortRegex: p,
        monthsStrictRegex: _,
        monthsShortStrictRegex: f,
        monthsParse: m,
        longMonthsParse: m,
        shortMonthsParse: m,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY HH:mm",
          LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warc\u02BChoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Dec\u02BCh da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s \u02BCzo",
          s: "un nebeud segondenno\xF9",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: e,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: e,
          M: "ur miz",
          MM: e,
          y: "ur bloaz",
          yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (t) {
          var e = t === 1 ? "a\xF1" : "vet";
          return t + e;
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /a.m.|g.m./,
        isPM: function (t) {
          return t === "g.m.";
        },
        meridiem: function (t, n, r) {
          return t < 12 ? "a.m." : "g.m.";
        },
      });
  },
  34,
);
