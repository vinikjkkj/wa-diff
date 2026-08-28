__d(
  "adsCreateTablePagingSelectors",
  [
    "AdsPETablePageProvider",
    "AdsPETablePageSize",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
          e === "creative_page_id"
            ? o("AdsPETablePageSize").PAGE_SIZE_CREATIVE
            : o("AdsPETablePageSize").PAGE_SIZE,
        a = r("adsCreateStoreSelector")(
          [],
          function () {
            return n;
          },
          { name: i.id + ".getPageSizeSelector" },
        ),
        l = r("adsCreateSelector")(
          [r("AdsPETablePageProvider").toFluxSelector()],
          function (n) {
            return n[e];
          },
          { name: i.id + ".getCurrentPageSelector" },
        ),
        s = t,
        u = r("adsCreateSelector")(
          [s],
          function (t) {
            var e = t;
            return Math.ceil(e / n);
          },
          { name: i.id + ".getPageCountSelector" },
        ),
        c = r("adsCreateSelector")(
          [l],
          function (t) {
            return t * n;
          },
          { name: i.id + ".getRowStartSelector" },
        ),
        d = r("adsCreateSelector")(
          [s, l],
          function (t, r) {
            return Math.min(t, r * n + n) - 1;
          },
          { name: i.id + ".getRowEndSelector" },
        );
      return {
        getPageSizeSelector: a,
        getRowTotalSelector: s,
        getCurrentPageSelector: l,
        getPageCountSelector: u,
        getRowStartSelector: c,
        getRowEndSelector: d,
      };
    }
    l.default = e;
  },
  98,
);
