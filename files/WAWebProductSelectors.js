__d(
  "WAWebProductSelectors",
  ["isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return (
          t.salePriceAmount1000 != null &&
          (t.salePriceStartDate == null ||
            t.salePriceStartDate <= Date.now()) &&
          (t.salePriceEndDate == null || t.salePriceEndDate > Date.now())
        );
      },
      s = function (n) {
        return e(n) ? n.salePriceAmount1000 : n.priceAmount1000;
      },
      u = function (n) {
        var t, r;
        return e(n)
          ? Math.max(
              0,
              ((t = n.priceAmount1000) != null ? t : 0) -
                ((r = n.salePriceAmount1000) != null ? r : 0),
            )
          : 0;
      },
      c = function (t) {
        var e = t.currency,
          n = t.priceAmount1000,
          o = s(t);
        return r("isStringNullOrEmpty")(e) || n == null || o == null;
      };
    ((l.isSalePriceActive = e),
      (l.getActivePrice = s),
      (l.getSavings = u),
      (l.isEmptyPrice = c));
  },
  98,
);
