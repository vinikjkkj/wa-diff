__d(
  "MAIBACommerceManagerPageContext",
  ["AdsAIContextPathUtils", "CatalogURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "maiba:commerce_manager_page",
      s = /^\/commerce\/catalogs\/(\d+)(?:\/([^/]*))?/,
      u = /^\/commerce\/(\d+)(?:\/|$)/,
      c = new Set(["", "home", "overview", "settings"]),
      d = /^\/commerce\/(?:catalogs\/)?\d+\/sets(?:\/|$)/,
      m = /^\/commerce\/(?:catalogs\/)?\d+\/sets\/(\d+)(?:\/|$)/,
      p = /^\d+$/,
      _ = null;
    function f(e) {
      return e != null && p.test(e) && e !== "0" ? e : null;
    }
    function g(e) {
      return (
        (_ = e),
        function () {
          _ === e && (_ = null);
        }
      );
    }
    function h(e) {
      var t,
        n = e.match(s);
      if (n != null) {
        var r,
          a = f(n[1]);
        return a == null
          ? null
          : { id: a, isCatalogID: !c.has((r = n[2]) != null ? r : "") };
      }
      var i = f((t = e.match(u)) == null ? void 0 : t[1]);
      return i == null
        ? null
        : {
            id: i,
            isCatalogID: o("CatalogURLUtils").getCatalogIDFromURL(e) === i,
          };
    }
    function y(e) {
      var t = _;
      return t == null
        ? null
        : [t.catalog_id, t.cms_id, t.offer_catalog_id].includes(e.id)
          ? t
          : null;
    }
    function C(e, t) {
      var n, r, o;
      return d.test(e)
        ? (n =
            (r = f((o = e.match(m)) == null ? void 0 : o[1])) != null
              ? r
              : f(t.get("set_id"))) != null
          ? n
          : f(t.get("productSetID"))
        : null;
    }
    function b() {
      var e,
        t,
        n,
        r = o("AdsAIContextPathUtils").getURLParams(),
        a = r.pathname,
        i = r.searchParams,
        l = h(a);
      if (l == null) return null;
      var s = y(l),
        u =
          (e = f(s == null ? void 0 : s.catalog_id)) != null
            ? e
            : l.isCatalogID
              ? l.id
              : null;
      return u == null
        ? null
        : {
            business_id:
              (t =
                (n = f(s == null ? void 0 : s.business_id)) != null
                  ? n
                  : f(i.get("business_id"))) != null
                ? t
                : f(i.get("global_scope_id")),
            catalog_id: u,
            product_set_id: C(a, i),
          };
    }
    ((l.COMMERCE_MANAGER_PAGE_METADATA_KEY = e),
      (l.registerMAIBACommerceManagerResolvedRoute = g),
      (l.getMAIBACommerceManagerPageContext = b));
  },
  98,
);
