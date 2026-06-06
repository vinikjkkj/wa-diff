__d(
  "WAWebBizSubmitOrderAction",
  [
    "WAWebBizOrderAction",
    "WAWebBizSyncCartAction",
    "WAWebCatalogCollection",
    "WAWebMediaOpaqueData",
    "WAWebSendOrderChatAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.cartItemCollection.at(0);
      if (a == null) return "";
      var i = o("WAWebCatalogCollection").CatalogCollection.get(
          o("WAWebWidFactory").createWid(e.id),
        ),
        l = i == null ? void 0 : i.productCollection.get(a.id),
        s =
          l == null || (t = l.getProductImageCollectionHead()) == null
            ? void 0
            : t.mediaData;
      return s == null
        ? ""
        : s.preview instanceof r("WAWebMediaOpaqueData") &&
            (n = s.preview.getBase64()) != null
          ? n
          : "";
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = yield o("WAWebBizOrderAction").createOrder(
            n.id,
            t.cartItemCollection.toArray(),
          );
          return (
            yield r("WAWebSendOrderChatAction")(
              n,
              i,
              t.itemCount,
              e(t),
              t.message,
              a == null ? void 0 : a.getCatalogType(),
            ),
            r("WAWebBizSyncCartAction")(t),
            i.id
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
