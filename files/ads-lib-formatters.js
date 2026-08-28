__d(
  "ads-lib-formatters",
  [
    "fbt",
    "Currency",
    "NumberFormatConfig",
    "adsLibFormatNumber",
    "createIntlPercentFormatter",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "USD";
    function u(e, t, n) {
      var r = e != null ? e : "",
        o = n != null ? n : "",
        a = t === 0 || t == null ? r.length : t;
      if (r.length <= a) return r;
      var i = a - o.length;
      return (
        i && /[\uD800-\uDFFF]/.test(r[i - 1]) && (i += 1),
        r.substr(0, i) + o
      );
    }
    function c(e, t) {
      return (
        t === void 0 && (t = ""),
        function (n) {
          return n == null ? t : u(n, e, "...");
        }
      );
    }
    function d(e) {
      return function (t) {
        return r("adsLibFormatNumber")(t, e != null ? e : 0, ",", ".");
      };
    }
    function m(e) {
      return function (t) {
        return r("adsLibFormatNumber")(
          t,
          e != null ? e : 0,
          r("NumberFormatConfig").numberDelimiter,
          r("NumberFormatConfig").decimalSeparator,
          r("NumberFormatConfig").minDigitsForThousandsSeparator,
        );
      };
    }
    function p(e) {
      return function (t) {
        return r("intlNumUtils").formatNumberRaw(
          t != null ? t : "0",
          e != null ? e : 0,
          r("NumberFormatConfig").numberDelimiter,
          r("NumberFormatConfig").decimalSeparator,
          r("NumberFormatConfig").minDigitsForThousandsSeparator,
        );
      };
    }
    function _(e, t) {
      return function (n) {
        return r("intlNumUtils").formatNumberWithLimitedSigFig(n, e, t);
      };
    }
    function f(e, t) {
      return t
        ? m(e)
        : function (t) {
            return r("adsLibFormatNumber")(
              t,
              e || 0,
              "",
              r("NumberFormatConfig").decimalSeparator,
              r("NumberFormatConfig").minDigitsForThousandsSeparator,
            );
          };
    }
    function g(e, t) {
      var n = t === !1 ? 1 : 100;
      return function (t) {
        return r("adsLibFormatNumber")(t * n, e || 0, ",", ".") + "%";
      };
    }
    function h(t, n, o, a, i) {
      (t === void 0 && (t = 2),
        n === void 0 && (n = e),
        o === void 0 && (o = !1));
      var l = a(t),
        s = n + "-" + t + "-" + o.toString();
      if (!i[s]) {
        var u = r("Currency").getFormat(n) || r("Currency").getFormat(e),
          c = r("Currency").getSymbol(n) || r("Currency").getSymbol(e),
          d = r("Currency").getOffset(n) || r("Currency").getOffset(e);
        ((u = u.replace("{symbol}", c)),
          (i[s] = function (e) {
            var t = e != null ? e : 0;
            return (
              o && (t /= d),
              (t + "").match(/^\-?[\d\.,]*$/)
                ? u.replace("{amount}", l(t))
                : "N/A"
            );
          }));
      }
      return i[s];
    }
    var y = {};
    function C(e, t, n) {
      return h(e != null ? e : 0, t, n, d, y);
    }
    var b = {};
    function v(e, t, n) {
      return h(e, t, n, m, b);
    }
    function S(e, t, n, r) {
      return v(e, t, n)(r);
    }
    function R(e, t) {
      return t != null
        ? r("intlNumUtils").parseNumberRaw(
            e != null ? e + "" : "",
            t,
            r("NumberFormatConfig").numberDelimiter,
          )
        : e != null
          ? r("intlNumUtils").parseNumber(e + "")
          : null;
    }
    function L(e) {
      var t = [];
      return (
        e.countries && e.countries.length && t.push(e.countries),
        e.cities &&
          e.cities.length &&
          t.push(
            e.cities.map(function (e) {
              return e.name;
            }),
          ),
        e.zips &&
          e.zips.length &&
          t.push(
            e.zips.map(function (e) {
              return e.name;
            }),
          ),
        e.regions &&
          e.regions.length &&
          t.push(
            e.regions.map(function (e) {
              return e.name;
            }),
          ),
        t.join("; ").replace(/,/g, ", ")
      );
    }
    function E(e, t) {
      if (e || t) {
        var n = e || s._(/*BTDS*/ "All"),
          r = t || s._(/*BTDS*/ "All");
        return n + "&ndash;" + r;
      }
      return "Any";
    }
    function k(e) {
      var t = e + "";
      return t === "0"
        ? s._(/*BTDS*/ "All")
        : t === "1"
          ? s._(/*BTDS*/ "Men")
          : s._(/*BTDS*/ "Women");
    }
    ((l.geoLocation = L),
      (l.age = E),
      (l.sex = k),
      (l.createTextTruncator = c),
      (l.chopString = u),
      (l.parseNumber = R),
      (l.formatNumber = r("adsLibFormatNumber")),
      (l.createIntlNumberFormatter = m),
      (l.createIntlLongNumberFormatter = p),
      (l.createLimitedSigFigNumberFormatter = _),
      (l.createMaybeDelimitedNumberFormatter = f),
      (l.createIntlPercentFormatter = r("createIntlPercentFormatter")),
      (l.createIntlMoneyFormatter = v),
      (l.formatIntlMoney = S),
      (l.createNumberFormatter = d),
      (l.createPercentFormatter = g),
      (l.createMoneyFormatter = C));
  },
  162,
);
