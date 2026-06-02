__d(
  "WAWebBizSubmitOrderAction",
  [
    "WAWebBizOrderAction",
    "WAWebBizSyncCartAction",
    "WAWebCatalogCollection",
    "WAWebMediaOpaqueData",
    "WAWebSendOrderChatAction",
    "WAWebWidFactory",
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
    async function s(t, n, a) {
      var i = await o("WAWebBizOrderAction").createOrder(
        n.id,
        t.cartItemCollection.toArray(),
      );
      return (
        await r("WAWebSendOrderChatAction")(
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
    }
    l.default = s;
  },
  98,
);
