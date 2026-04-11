__d(
  "Currency",
  ["CurrencyConfig"],
  function (t, n, r, o, a, i, l) {
    var e = { iso: "", format: "", symbol: "", offset: 1, name: "" };
    function s(t) {
      return t != null && r("CurrencyConfig").allCurrenciesByCode[t]
        ? r("CurrencyConfig").allCurrenciesByCode[t]
        : e;
    }
    function u(e) {
      return s(e).format;
    }
    function c(e) {
      return s(e).iso;
    }
    function d(e) {
      return s(e).name;
    }
    function m(e) {
      return s(e).offset;
    }
    function p(e) {
      return s(e).symbol;
    }
    i.exports = {
      getFormat: u,
      getISO: c,
      getName: d,
      getOffset: m,
      getSymbol: p,
    };
  },
  34,
);
