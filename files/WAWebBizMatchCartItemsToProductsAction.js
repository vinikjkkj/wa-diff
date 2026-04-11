__d(
  "WAWebBizMatchCartItemsToProductsAction",
  [
    "fbt",
    "WATypeUtils",
    "WAWebBizClearCartAction",
    "WAWebBizProductCatalogBridge",
    "WAWebBizSyncCartAction",
    "WAWebCatalogCollection",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebProductModel",
    "WAWebProductSelectors",
    "WAWebWidFactory",
    "react",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return (
        e.priceAmount1000 === o("WAWebProductSelectors").getActivePrice(t) &&
        e.currency === t.currency &&
        e.name === t.name &&
        e.imageHash === t.imageHash &&
        e.maxAvailable === t.maxAvailable
      );
    }
    function d(e, t) {
      var n,
        r = o("WAWebProductSelectors").getActivePrice(g(t));
      return (
        y(e.priceAmount1000, r) &&
        ((!o("WATypeUtils").isString(e.currency) &&
          !o("WATypeUtils").isString(t.currency)) ||
          e.currency === t.currency) &&
        e.name === t.name &&
        e.imageHash ===
          ((n = t.media) == null || (n = n.image) == null ? void 0 : n.id)
      );
    }
    function m(e, t) {
      var n = c(e, t);
      if (!n) {
        var r;
        e.set(
          {
            priceAmount1000: o("WAWebProductSelectors").getActivePrice(t),
            currency: t.currency,
            name: t.name,
            imageHash: t.imageHash,
            maxAvailable: t.maxAvailable,
            variantProperties:
              (r = t.variantInfo) == null ? void 0 : r.variant_properties,
          },
          { silent: !0 },
        );
      }
      return n;
    }
    function p(e, t) {
      var n = t ? d(e, t) : !0;
      if (!n && t) {
        var r,
          a = g(t);
        e.set(
          {
            priceAmount1000: o("WAWebProductSelectors").getActivePrice(a),
            currency: a.currency,
            name: a.name,
            imageHash: a.imageHash,
            maxAvailable: a.maxAvailable,
            variantProperties:
              (r = a.variantInfo) == null ? void 0 : r.variant_properties,
          },
          { silent: !0 },
        );
      }
      return n;
    }
    function _(e, t) {
      if (e && e.status === "deleted") {
        t.productCollection.remove(e.id);
        return;
      }
      return e;
    }
    function f() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(
            /*BTDS*/ "One or more items in your cart have been updated",
          ),
        }),
      );
    }
    function g(e) {
      var t, n, r, a, i, l, s;
      return {
        id: e.id,
        name: (t = e.name) != null ? t : "",
        imageCdnUrl:
          (n = e.media) == null || (n = n.image) == null
            ? void 0
            : n.request_image_url,
        imageHash:
          (r = e.media) == null || (r = r.image) == null ? void 0 : r.id,
        currency: e.currency,
        priceAmount1000: h(e.price),
        salePriceAmount1000: h((a = e.sale_price) == null ? void 0 : a.price),
        salePriceStartDate: o("WAWebBizProductCatalogBridge").parseDateValue(
          (i = e.sale_price) == null ? void 0 : i.start_date,
        ),
        salePriceEndDate: o("WAWebBizProductCatalogBridge").parseDateValue(
          (l = e.sale_price) == null ? void 0 : l.end_date,
        ),
        maxAvailable: e.max_available,
        variantInfo: {
          availability: void 0,
          listing_details: void 0,
          types: [],
          variant_properties: (s = e.variantProperties) != null ? s : [],
        },
      };
    }
    function h(e) {
      return typeof e == "string" ? (e.length > 0 ? parseInt(e, 10) : null) : e;
    }
    function y(e, t) {
      var n = h(e),
        r = h(t);
      return o("WATypeUtils").isNumber(n) && o("WATypeUtils").isNumber(r)
        ? n === r
        : !o("WATypeUtils").isNumber(n) && !o("WATypeUtils").isNumber(r);
    }
    function C(e, t) {
      return new (o("WAWebProductModel").Product)(
        babelHelpers.extends({}, g(e), {
          catalogWid: o("WAWebWidFactory").createWid(t),
          productMsgMediaData: null,
          imageCount: 1,
          fetchedFromServer: !0,
          t: Date.now() / 1e3,
          old: !1,
        }),
      );
    }
    function b(e, t) {
      var n = o("WAWebCatalogCollection").CatalogCollection.get(
          o("WAWebWidFactory").createWid(e.id),
        ),
        a = [],
        i = [],
        l = !0;
      return (
        n
          ? e.cartItemCollection.forEach(function (r) {
              var o = n.productCollection.get(r.id),
                s =
                  t &&
                  t.products.find(function (e) {
                    return e.id === r.id;
                  });
              if (((s = _(s, n)), !t && o)) {
                var u = m(r, o);
                ((l = l && u), a.push({ product: o, cartItem: r }));
              } else if (s) {
                var c = p(r, s);
                ((l = l && c), a.push({ product: C(s, e.id), cartItem: r }));
              } else ((l = !1), i.push(r.id));
            })
          : t
            ? e.cartItemCollection.forEach(function (n) {
                var r = t.products.find(function (e) {
                  return e.id === n.id;
                });
                if (r && r.status !== "deleted") {
                  var o = p(n, r);
                  ((l = l && o), a.push({ product: C(r, e.id), cartItem: n }));
                } else ((l = !1), i.push(n.id));
              })
            : r("WAWebBizClearCartAction")(e),
        l ||
          (i.length && e.cartItemCollection.remove(i),
          e.trigger("change:cartItemCollection"),
          f()),
        r("WAWebBizSyncCartAction")(e),
        a
      );
    }
    function v(e) {
      return r("sumBy")(e, function (e) {
        return (
          e.cartItem.quantity * o("WAWebProductSelectors").getSavings(e.product)
        );
      });
    }
    ((l.parsePrice = h),
      (l.isPriceMatch = y),
      (l.createProductFromRefreshCartItem = C),
      (l.matchCartItemsToProducts = b),
      (l.getSavingsFromCartItemsAndProducts = v));
  },
  226,
);
