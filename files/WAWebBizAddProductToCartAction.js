__d(
  "WAWebBizAddProductToCartAction",
  [
    "$InternalEnum",
    "WAWebBizCartBridge",
    "WAWebBizCartConstants",
    "WAWebCartCollection",
    "WAWebProductSelectors",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsMeUser",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(774774794, "10"),
      s = n("$InternalEnum").Mirrored(["SUCCESS", "QUANTITY_LIMIT_REACHED"]);
    function u(t) {
      var n,
        r = t.currency,
        a = t.id,
        i = t.imageHash,
        l = t.name,
        u = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
        bool: { IsConsumer: !(u != null && u.equals(t.catalogWid)) },
      });
      var c = t.catalogWid.toString(),
        d = o("WAWebCartCollection").CartCollection.findCart(c),
        m = d.cartItemCollection.get(a),
        p = (m == null ? void 0 : m.quantity) || 0,
        _ = Math.min(p + 1, o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY);
      (d.cartItemCollection.add(
        {
          id: a,
          priceAmount1000: o("WAWebProductSelectors").getActivePrice(t),
          currency: r,
          name: l,
          imageHash: i,
          quantity: _,
          maxAvailable: t.maxAvailable,
          variantProperties:
            (n = t.variantInfo) == null ? void 0 : n.variant_properties,
        },
        { merge: !0 },
      ),
        d.trigger("change:cartItemCollection"));
      var f = d.itemCount,
        g =
          p + 1 > o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY
            ? s.QUANTITY_LIMIT_REACHED
            : s.SUCCESS;
      return (
        o("WAWebBizCartBridge")
          .updateCart(d, e)
          .then(function () {
            g === s.SUCCESS
              ? o("WAWebQplFlowWrapper").QPL.markerEnd(e, 2)
              : g === s.QUANTITY_LIMIT_REACHED &&
                o("WAWebQplFlowWrapper").QPL.markerDrop(e);
          })
          .catch(function () {
            o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3);
          }),
        { newCount: _, status: g, totalCartCount: f }
      );
    }
    ((l.AddToCartStatus = s), (l.addProductToCart = u));
  },
  98,
);
