__d(
  "WAWebProductCatalogGetLatestProduct",
  ["WAWebCatalogCollection", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.businessOwnerJid,
        n = e.msgT,
        r = e.productId,
        a = o("WAWebWidFactory").createWid(t);
      if (a) {
        var i = o("WAWebCatalogCollection").CatalogCollection.get(a);
        if (i) {
          var l = i.productCollection.get(r),
            s = i.msgProductCollection.get(r);
          if (s && l) {
            var u = n != null ? n : s.t;
            return l.t >= u ? (i.msgProductCollection.remove(s), l) : s;
          }
          return l || s;
        }
      }
    }
    l.default = e;
  },
  98,
);
