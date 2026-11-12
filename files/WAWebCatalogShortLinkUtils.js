__d(
  "WAWebCatalogShortLinkUtils",
  ["WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return "https://wa.me/p/" + t + "/" + e;
    }
    function s(e) {
      return "https://wa.me/c/" + e;
    }
    function u(e) {
      var t,
        n = (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? null : s(n);
    }
    function c(t, n) {
      var r,
        a = (r = o("WAWebLidMigrationUtils").toPn(t)) == null ? void 0 : r.user;
      return a == null ? null : e(a, n);
    }
    ((l.createProductLink = e),
      (l.createCatalogLink = s),
      (l.createCatalogLinkForOwner = u),
      (l.createProductLinkForOwner = c));
  },
  98,
);
