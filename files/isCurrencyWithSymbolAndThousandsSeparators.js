__d(
  "isCurrencyWithSymbolAndThousandsSeparators",
  ["CurrencyConfig", "distinctArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      t === void 0 && (t = ",");
      var n = c().find(function (t) {
        return e.startsWith(t);
      });
      if (n == null || n === "") return !1;
      var r = e.slice(n.length);
      return r != null && d(r, t);
    }
    var u = null;
    function c() {
      return (
        (u =
          u ||
          (e || (e = r("distinctArray")))(
            Object.values(r("CurrencyConfig").allCurrenciesByCode)
              .map(function (e) {
                return e != null && typeof e == "object"
                  ? String(e.symbol)
                  : null;
              })
              .filter(Boolean),
          )),
        u
      );
    }
    function d(e, t) {
      return new RegExp("^\\d{1,3}(" + t + "\\d{3})*(.d+)?$").test(e);
    }
    l.default = s;
  },
  98,
);
