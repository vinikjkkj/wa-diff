__d(
  "WAWebBizSubmitOrderAction",
  [
    "WAWebBizCartBridge",
    "WAWebBizOrderAction",
    "WAWebCatalogCollection",
    "WAWebMediaOpaqueData",
    "WAWebSendOrderChatAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o("WAWebBizOrderAction").createOrder(
            t.id,
            e.cartItemCollection.toArray(),
          );
          return (
            yield r("WAWebSendOrderChatAction")({
              catalogType: n == null ? void 0 : n.getCatalogType(),
              chat: t,
              itemCount: e.itemCount,
              message: e.message,
              order: a,
              thumbnail: u(e),
            }),
            o("WAWebBizCartBridge").updateCart(e),
            a.id
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
    l.default = e;
  },
  98,
);
