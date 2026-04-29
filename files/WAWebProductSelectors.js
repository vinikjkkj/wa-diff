__d(
  "WAWebProductSelectors",
  ["isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.salePriceAmount1000 != null &&
        (e.salePriceStartDate == null || e.salePriceStartDate <= Date.now()) &&
        (e.salePriceEndDate == null || e.salePriceEndDate > Date.now())
      );
    }
    function s(t) {
      return e(t) ? t.salePriceAmount1000 : t.priceAmount1000;
    }
    function u(t) {
      var n, r;
      return e(t)
        ? Math.max(
            0,
            ((n = t.priceAmount1000) != null ? n : 0) -
              ((r = t.salePriceAmount1000) != null ? r : 0),
          )
        : 0;
    }
    function c(e) {
      var t = e.currency,
        n = e.priceAmount1000,
        o = s(e);
      return r("isStringNullOrEmpty")(t) || n == null || o == null;
    }
    ((l.isSalePriceActive = e),
      (l.getActivePrice = s),
      (l.getSavings = u),
      (l.isEmptyPrice = c));
  },
  98,
);
