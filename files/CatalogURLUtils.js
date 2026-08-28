__d(
  "CatalogURLUtils",
  ["QueryString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        business: [
          "/products",
          "/commerce/catalogs",
          "/settings/product-catalogs",
        ],
        www: ["/products", "/commerce/catalogs"],
      },
      s = {
        business: ["/commerce_manager", "/commerce"],
        www: ["/commerce_manager", "/commerce"],
      },
      u = ["home", "settings"];
    function c(t) {
      var n,
        r,
        o = t.getPath(),
        a = t.getSubdomain(),
        i = (n = e[a]) != null ? n : [],
        l = i.some(function (e) {
          return o.startsWith(e);
        });
      if (l) return !0;
      var c = (r = s[a]) != null ? r : [],
        d = c.some(function (e) {
          return o.startsWith(e);
        });
      return (
        d &&
        u.some(function (e) {
          return o.includes(e);
        })
      );
    }
    function d(e) {
      var t = e.pathname,
        n = e.query,
        o = t,
        a = r("QueryString").encode(n);
      return a === "" ? o : o + "?" + a;
    }
    function m(e) {
      var t = e.match(/(?:commerce|products)\/catalogs\/(\d+)/);
      return t != null ? t[1] : null;
    }
    ((l.isCatalogRoute = c),
      (l.convertLocationShapeToPath = d),
      (l.getCatalogIDFromURL = m));
  },
  98,
);
