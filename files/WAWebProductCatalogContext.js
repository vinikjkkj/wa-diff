__d(
  "WAWebProductCatalogContext",
  ["WAWebProductCatalogSession", "WAWebWamEnumBizPlatform"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        e === void 0 &&
          (e = new (o("WAWebProductCatalogSession").ProductCatalogSession)()),
        t === void 0 && (t = o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN),
        { type: "product_catalog", session: e, entryPoint: n, bizPlatform: t }
      );
    }
    function s() {
      return e(new (o("WAWebProductCatalogSession").ProductCatalogSession)(!0));
    }
    function u(e) {
      return c(e).session.toString();
    }
    function c(e) {
      return e.type === "product_catalog" ? e : s();
    }
    function d(e) {
      return {
        catalogSessionId: e.session.toString(),
        bizPlatform: e.bizPlatform,
        catalogEntryPoint: e.entryPoint,
      };
    }
    ((l.buildProductCatalogContext = e),
      (l.getProductCatalogSessionId = u),
      (l.getProductCatalogContext = c),
      (l.toDataForCatalogViewEvents = d));
  },
  98,
);
