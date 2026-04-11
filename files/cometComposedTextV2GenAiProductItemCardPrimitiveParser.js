__d(
  "cometComposedTextV2GenAiProductItemCardPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r, a, i, l, s;
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders").buildProductItemCardNode({
            additionalImageUrls:
              (t =
                (n = e.additional_images) == null
                  ? void 0
                  : n.map(function (e) {
                      var t;
                      return (t = e.url) != null ? t : "";
                    })) != null
                ? t
                : [],
            brand: (r = e.brand) != null ? r : null,
            imageUrl:
              (a = (i = e.image) == null ? void 0 : i.url) != null ? a : null,
            nodeType: "productItemCard",
            price: (l = e.price) != null ? l : null,
            productUrl: e.product_url,
            salePrice: (s = e.sale_price) != null ? s : null,
            title: e.title,
          }),
        );
    }
    l.default = e;
  },
  98,
);
