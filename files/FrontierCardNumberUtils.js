__d(
  "FrontierCardNumberUtils",
  [
    "FrontierPMAmericanExpressCard",
    "FrontierPMDefaultCard",
    "FrontierPMDiscoverCard",
    "FrontierPMJCBCard",
    "FrontierPMMastercardCard",
    "FrontierPMVisaCard",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      {
        code: 69,
        cscDigits: 3,
        digits: 16,
        name: "elo",
        pattern: /^40117[8-9]/,
        supported: !0,
        type: "elo",
      },
      {
        code: 77,
        cscDigits: 3,
        digits: 16,
        name: "mc",
        pattern: /^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,
        supported: !0,
        type: "mastercard",
      },
      {
        code: 86,
        cscDigits: 3,
        digits: 16,
        name: "visa",
        pattern: /^4/,
        supported: !0,
        type: "visa",
      },
      {
        code: 65,
        cscDigits: 4,
        digits: 15,
        name: "amex",
        pattern: /^3[47]/,
        supported: !0,
        type: "american_express",
      },
      {
        code: 74,
        cscDigits: 3,
        digits: 16,
        name: "jcb",
        pattern: /^35(2[8-9]|[3-8])/,
        supported: !0,
        type: "jcb",
      },
      {
        code: 80,
        cscDigits: 3,
        digits: 16,
        name: "cup",
        pattern: /^62/,
        supported: !0,
        type: "cup",
      },
      {
        code: 68,
        cscDigits: 3,
        digits: 16,
        name: "disc",
        pattern: /^(6011|65|64[4-9])/,
        supported: !0,
        type: "discover",
      },
      {
        code: 82,
        cscDigits: 3,
        digits: 16,
        name: "rupay",
        pattern: /^(508[5-9]|60[6-8]|8[12])/,
        supported: !0,
        type: "rupay",
      },
      {
        code: 64,
        cscDigits: 3,
        digits: 14,
        name: "diners",
        pattern: /^30[0-5]/,
        supported: !1,
        type: "diners_club",
      },
      {
        code: 85,
        cscDigits: null,
        digits: 16,
        name: "unknown",
        pattern: null,
        supported: !1,
        type: "unknown",
      },
    ];
    function s(e) {
      return e
        .replace(/[iIl]/g, "1")
        .replace(/[Oo]/g, "0")
        .replace(/[^\d]/gi, "");
    }
    function u(e) {
      for (
        var t = parseInt(e, 10),
          n = [
            [401178, 401179],
            [431274, 431274],
            [438935, 438935],
            [457393, 457393],
            [457631, 457632],
            [504175, 504175],
            [506717, 506718],
            [506720, 506721],
            [506723, 506733],
            [506739, 506739],
            [506741, 506748],
            [506753, 506753],
            [506774, 506775],
            [506777, 506778],
            [509e3, 509002],
            [509004, 509012],
            [509014, 509014],
            [509020, 509030],
            [509035, 509053],
            [509064, 509064],
            [509066, 509072],
            [509074, 509083],
            [509085, 509092],
            [509095, 509103],
            [509105, 509105],
            [509107, 509807],
            [636297, 636297],
            [636368, 636368],
            [650485, 650513],
            [650516, 650516],
            [650518, 650538],
            [650552, 650598],
            [650720, 650727],
            [650901, 650922],
            [650928, 650928],
            [650939, 650939],
            [650946, 650978],
            [651652, 651704],
            [655e3, 655019],
            [655021, 655058],
          ],
          r = 0;
        r < n.length;
        r++
      )
        if (t >= n[r][0] && t <= n[r][1]) return !0;
      return !1;
    }
    function c(t) {
      var n = s(t).substr(0, 6);
      if (u(n)) return d("elo");
      var r = n.substr(0, 2);
      if (r === "65") {
        var o = Number(n);
        return o >= 652150 && o <= 653143 ? d("rupay") : d("discover");
      }
      for (var a = 0; a < e.length; a++)
        if (e[a].pattern && t.match(e[a].pattern)) return e[a];
      return e[e.length - 1];
    }
    function d(t) {
      var n =
        e.find(function (e) {
          return t === e.type;
        }) || e[e.length - 1];
      return n;
    }
    function m(e) {
      for (
        var t = s(e), n = t.split("").reverse(), r = "", o = 0;
        o < n.length;
        o++
      ) {
        var a = parseInt(n[o], 10);
        (o % 2 !== 0 && (a *= 2), (r += a));
      }
      for (var i = 0, l = 0; l < r.length; l++) i += parseInt(r.charAt(l), 10);
      return i !== 0 && i % 10 === 0;
    }
    function p(e, t) {
      t === void 0 && (t = !1);
      var n = s(e),
        r = c(n);
      return r.digits !== n.length || !r.supported ? !1 : t === !0 ? !0 : m(n);
    }
    function _(e) {
      var t = [0, 4, 8, 12, 16];
      switch (c(e).name) {
        case "amex":
          t = [0, 4, 10, 15];
          break;
        case "diners":
          t = [0, 4, 10, 14];
          break;
        case "visa":
        case "mc":
        case "disc":
        default:
          break;
      }
      return t;
    }
    function f(e) {
      switch (e) {
        case "visa":
          return r("FrontierPMVisaCard");
        case "mc":
          return r("FrontierPMMastercardCard");
        case "amex":
          return r("FrontierPMAmericanExpressCard");
        case "disc":
          return r("FrontierPMDiscoverCard");
        case "jcb":
          return r("FrontierPMJCBCard");
        default:
          return r("FrontierPMDefaultCard");
      }
    }
    ((l.getCardType = c),
      (l.isValidCCNumber = p),
      (l.getCreditCardGrouping = _),
      (l.getAssetForCardType = f));
  },
  98,
);
