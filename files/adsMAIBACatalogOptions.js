__d(
  "adsMAIBACatalogOptions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l(e) {
      return e != null && e !== "" ? e : null;
    }
    function s(e, t) {
      var n,
        r = l(t);
      return r == null
        ? null
        : (n = e.find(function (e) {
              return e.id === r;
            })) != null
          ? n
          : null;
    }
    function u(e, t, n) {
      var r,
        o,
        a,
        i = l(t);
      return i == null
        ? null
        : (r =
              (o = l((a = s(e, i)) == null ? void 0 : a.name)) != null
                ? o
                : l(n)) != null
          ? r
          : i;
    }
    function c(t, n) {
      var r, o;
      return (r = (o = s(t, n)) == null ? void 0 : o.product_sets) != null
        ? r
        : e;
    }
    function d(e, t, n, r) {
      var o,
        a,
        i = l(n);
      if (i == null) return null;
      var s = c(e, t).find(function (e) {
        return e.id === i;
      });
      return (o = (a = l(s == null ? void 0 : s.name)) != null ? a : l(r)) !=
        null
        ? o
        : i;
    }
    function m(e, t) {
      var n;
      return l((n = s(e, t)) == null ? void 0 : n.all_products_product_set_id);
    }
    ((i.findCatalogOption = s),
      (i.resolveCatalogLabel = u),
      (i.getProductSetOptions = c),
      (i.resolveProductSetLabel = d),
      (i.getAllProductsProductSetID = m));
  },
  66,
);
