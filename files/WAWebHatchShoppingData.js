__d(
  "WAWebHatchShoppingData",
  [
    "WAWebHatchJarvisMedia",
    "WAWebHatchJsonReaders",
    "WAWebHatchShoppingMoney",
    "WAWebHatchShoppingVariants",
    "WAWebHatchUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a =
          (n = o("WAWebHatchJsonReaders").readArray(e, "products")) != null
            ? n
            : [],
        i = a.flatMap(function (e, n) {
          var r,
            a,
            i,
            l,
            s = (r = p(e, "name")) != null ? r : p(e, "product_name");
          if (s == null) return [];
          var u = p(e, "sale_price"),
            c = p(e, "price"),
            d = o("WAWebHatchJsonReaders").readString(e, "provider");
          return [
            {
              index: n,
              product: {
                title: s,
                brand:
                  (a =
                    (i =
                      (l = p(e, "brand")) != null
                        ? l
                        : p(e, "retailer_name")) != null
                      ? i
                      : p(e, "merchant")) != null
                    ? a
                    : "",
                imageUrl:
                  o("WAWebHatchJsonReaders").readBool(
                    e,
                    "is_image_available",
                  ) === !1
                    ? null
                    : f(
                        o("WAWebHatchJsonReaders").readString(e, "image_url"),
                        t,
                      ),
                price: u != null ? u : c,
                productUrl: o("WAWebHatchUrl").toWebUrl(
                  o("WAWebHatchJsonReaders").readString(e, "url"),
                ),
              },
              productId: o("WAWebHatchJsonReaders").readString(e, "product_id"),
              productType:
                o("WAWebHatchJsonReaders").readField(e, "type") === void 0
                  ? "catalog"
                  : o("WAWebHatchJsonReaders").readString(e, "type"),
              provider: d,
              connector: _(e, d),
              primaryAction: o("WAWebHatchJsonReaders").readString(
                e,
                "primary_action",
              ),
              checkoutCreation:
                o("WAWebHatchJsonReaders").readBool(
                  e,
                  "is_agentic_checkout_creation_enabled",
                ) === !0,
              unavailable:
                o("WAWebHatchJsonReaders").readBool(e, "is_unavailable") === !0,
              fileMetadata: t,
            },
          ];
        });
      return {
        deliveredCount: i.length,
        label: (r = p(e, "label")) != null ? r : p(e, "title"),
        resultFormat:
          o("WAWebHatchJsonReaders").readObject(e, "collection") != null
            ? "collection"
            : "list",
        subtitle: p(e, "subtitle"),
        widgetId: p(e, "widget_id"),
        products: i,
      };
    }
    function s(e, t, n) {
      var r, a;
      n === void 0 && (n = t.productId);
      var i = o("WAWebHatchJsonReaders").readObject(e, "product"),
        l = o("WAWebHatchJsonReaders").readString(i, "id");
      if (!o("WAWebHatchShoppingVariants").isShoppingId(l) || l !== n)
        return null;
      var s = l === t.productId ? t.product : null,
        u = (r = s == null ? void 0 : s.imageUrl) != null ? r : null,
        c = g(i, t.fileMetadata),
        _ = o("WAWebHatchShoppingMoney").decodeMoney(
          o("WAWebHatchJsonReaders").readObject(i, "current_price"),
        ),
        f = o("WAWebHatchShoppingMoney").decodeMoney(
          o("WAWebHatchJsonReaders").readObject(i, "original_price"),
        ),
        y = o("WAWebHatchShoppingMoney").getShoppingPrice(_, f),
        C =
          (a = o("WAWebHatchJsonReaders").readArray(i, "variant_groups")) !=
          null
            ? a
            : [],
        b = C.map(o("WAWebHatchShoppingVariants").decodeGroup).filter(Boolean),
        v = [
          ["variant_stock_status", "variant_pricing", "variant_images"].every(
            function (e) {
              var t = o("WAWebHatchJsonReaders")
                .readObjects(i, e)
                .map(function (e) {
                  return o("WAWebHatchJsonReaders").readString(e, "product_id");
                });
              return new Set(t).size === t.length;
            },
          ),
          o("WAWebHatchJsonReaders").readField(i, "variant_groups") ===
            void 0 ||
            o("WAWebHatchJsonReaders").readArray(i, "variant_groups") != null,
          b.length === C.length,
          new Set(
            b.map(function (e) {
              return e.dimension;
            }),
          ).size === b.length,
        ].every(Boolean);
      return {
        id: l,
        product: d(i, s, c, y),
        description: p(i, "description"),
        assurances: o("WAWebHatchJsonReaders")
          .readObjects(i, "arts")
          .map(function (e) {
            return p(e, "text");
          })
          .filter(Boolean),
        url: o("WAWebHatchUrl").toWebUrl(
          o("WAWebHatchJsonReaders").readString(i, "url"),
        ),
        currentPrice: _,
        originalPrice: f,
        images: c.length > 0 ? c : [u].filter(Boolean),
        groups: b,
        variantsValid: v,
        available: o("WAWebHatchJsonReaders").readBool(i, "available"),
        stockStatus: o("WAWebHatchJsonReaders").readString(i, "stock_status"),
        checkoutCreation: m(e),
        variantStock: new Map(
          o("WAWebHatchJsonReaders")
            .readObjects(i, "variant_stock_status")
            .flatMap(function (e) {
              var t = o("WAWebHatchJsonReaders").readString(e, "product_id"),
                n = o("WAWebHatchJsonReaders").readString(e, "stock_status");
              return t != null && n != null ? [[t, n]] : [];
            }),
        ),
        variantPrices: new Map(
          o("WAWebHatchJsonReaders")
            .readObjects(i, "variant_pricing")
            .flatMap(function (e) {
              var t = o("WAWebHatchJsonReaders").readString(e, "product_id"),
                n = {
                  current: o("WAWebHatchShoppingMoney").decodeMoney(
                    o("WAWebHatchJsonReaders").readObject(e, "current_price"),
                  ),
                  original: o("WAWebHatchShoppingMoney").decodeMoney(
                    o("WAWebHatchJsonReaders").readObject(e, "original_price"),
                  ),
                };
              return t != null ? [[t, n]] : [];
            }),
        ),
        variantImages: new Map(
          o("WAWebHatchJsonReaders")
            .readObjects(i, "variant_images")
            .flatMap(function (e) {
              var n = o("WAWebHatchJsonReaders").readString(e, "product_id");
              return n != null ? [[n, g(e, t.fileMetadata)]] : [];
            }),
        ),
        actions: o("WAWebHatchJsonReaders")
          .readObjects(i, "actions")
          .map(function (e) {
            return o("WAWebHatchJsonReaders").readString(e, "type");
          })
          .filter(Boolean),
        related: h(e, t),
        seed: t,
      };
    }
    function u(e) {
      return new Map(
        e.groups.flatMap(function (t) {
          var n = t.options.filter(function (t) {
            return t.productIds.includes(e.id);
          });
          return n.length === 1 ? [[t.dimension, n[0].value]] : [];
        }),
      );
    }
    function c(e, t) {
      return (t == null ? void 0 : t.id) === e.id ? e.url : null;
    }
    function d(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d =
          t != null
            ? t
            : {
                title: "",
                brand: "",
                imageUrl: null,
                price: null,
                productUrl: null,
              };
      return {
        title: (a = p(e, "name")) != null ? a : d.title,
        brand:
          (i = (l = p(e, "merchant_name")) != null ? l : p(e, "brand")) != null
            ? i
            : d.brand,
        imageUrl: (s = n[0]) != null ? s : d.imageUrl,
        price: (u = r == null ? void 0 : r.current) != null ? u : null,
        productUrl:
          (c = o("WAWebHatchUrl").toWebUrl(
            o("WAWebHatchJsonReaders").readString(e, "url"),
          )) != null
            ? c
            : d.productUrl,
      };
    }
    function m(e) {
      return o("WAWebHatchJsonReaders").readField(e, "eligibility") === void 0
        ? null
        : o("WAWebHatchJsonReaders").readBool(
            o("WAWebHatchJsonReaders").readObject(e, "eligibility"),
            "is_agentic_checkout_creation_enabled",
          ) === !0;
    }
    function p(e, t) {
      var n,
        r =
          (n = o("WAWebHatchJsonReaders").readString(e, t)) == null
            ? void 0
            : n.trim();
      return r === "" ? null : r != null ? r : null;
    }
    function _(e, t) {
      var n = o("WAWebHatchJsonReaders").readObject(e, "connector"),
        r = o("WAWebHatchJsonReaders").readString(n, "id");
      if (!o("WAWebHatchShoppingVariants").isShoppingId(r, 160) || r !== t)
        return null;
      var a = o("WAWebHatchJsonReaders").readObject(n, "capabilities");
      return {
        id: r,
        productDetails:
          o("WAWebHatchJsonReaders").readBool(a, "product_details") === !0,
        addToCartVariants:
          o("WAWebHatchJsonReaders").readBool(a, "add_to_cart_variants") === !0,
      };
    }
    function f(e, t) {
      return o("WAWebHatchJarvisMedia").getHatchJarvisImageSource(e, t) != null
        ? e
        : null;
    }
    function g(e, t) {
      return o("WAWebHatchJsonReaders")
        .readObjects(e, "images")
        .map(function (e) {
          return f(o("WAWebHatchJsonReaders").readString(e, "url"), t);
        })
        .filter(Boolean);
    }
    function h(t, n) {
      var r,
        a = n.connector,
        i = o("WAWebHatchJsonReaders").readObject(t, "connector"),
        l =
          a != null &&
          o("WAWebHatchJsonReaders").readString(i, "id") === a.id &&
          o("WAWebHatchJsonReaders").readBool(i, "connected") === !0,
        s = l ? (a == null ? void 0 : a.id) : null,
        u = l ? "browser" : n.productType;
      if (![s != null, u === "catalog"].some(Boolean)) return [];
      var c =
          a != null && l
            ? {
                id: a.id,
                capabilities: {
                  product_details: a.productDetails,
                  add_to_cart_variants: a.addToCartVariants,
                },
              }
            : null,
        d = (
          (r = o("WAWebHatchJsonReaders").readArray(t, "related_products")) !=
          null
            ? r
            : []
        ).map(function (e) {
          return {
            type: u,
            provider: s,
            connector: c,
            product_id: o("WAWebHatchJsonReaders").readString(e, "id"),
            name: o("WAWebHatchJsonReaders").readString(e, "name"),
            brand: o("WAWebHatchJsonReaders").readString(e, "brand"),
            price:
              o("WAWebHatchJsonReaders").readField(e, "current_price") ===
              void 0
                ? o("WAWebHatchJsonReaders").readString(e, "price")
                : o("WAWebHatchShoppingMoney").formatMoney(
                    o("WAWebHatchShoppingMoney").decodeMoney(
                      o("WAWebHatchJsonReaders").readObject(e, "current_price"),
                    ),
                  ),
            image_url: o("WAWebHatchJsonReaders").readString(e, "image_url"),
            url: o("WAWebHatchJsonReaders").readString(e, "url"),
            is_unavailable: o("WAWebHatchJsonReaders").readBool(
              e,
              "is_unavailable",
            ),
            is_agentic_checkout_creation_enabled: o(
              "WAWebHatchJsonReaders",
            ).readBool(e, "is_agentic_checkout_creation_enabled"),
          };
        });
      return e({ products: d }, n.fileMetadata).products.filter(function (e) {
        return o("WAWebHatchShoppingVariants").isShoppingId(e.productId);
      });
    }
    ((l.decodeShoppingResults = e),
      (l.decodeShoppingDetails = s),
      (l.getShoppingSelections = u),
      (l.getShoppingPrice = o("WAWebHatchShoppingMoney").getShoppingPrice),
      (l.isShoppingId = o("WAWebHatchShoppingVariants").isShoppingId),
      (l.resolveShoppingVariant = o(
        "WAWebHatchShoppingVariants",
      ).resolveShoppingVariant),
      (l.getShoppingVariantUrl = c));
  },
  98,
);
