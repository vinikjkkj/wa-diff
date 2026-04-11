__d(
  "WAWebBizAddProductToCartAction",
  [
    "$InternalEnum",
    "WAWebBizCartConstants",
    "WAWebBizSyncCartAction",
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
        a = t.currency,
        i = t.id,
        l = t.imageHash,
        u = t.name,
        c = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
        bool: { IsConsumer: !(c != null && c.equals(t.catalogWid)) },
      });
      var d = t.catalogWid.toString(),
        m = o("WAWebCartCollection").CartCollection.findCart(d),
        p = m.cartItemCollection.get(i),
        _ = (p == null ? void 0 : p.quantity) || 0,
        f = Math.min(_ + 1, o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY);
      (m.cartItemCollection.add(
        {
          id: i,
          priceAmount1000: o("WAWebProductSelectors").getActivePrice(t),
          currency: a,
          name: u,
          imageHash: l,
          quantity: f,
          maxAvailable: t.maxAvailable,
          variantProperties:
            (n = t.variantInfo) == null ? void 0 : n.variant_properties,
        },
        { merge: !0 },
      ),
        m.trigger("change:cartItemCollection"));
      var g = m.itemCount,
        h =
          _ + 1 > o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY
            ? s.QUANTITY_LIMIT_REACHED
            : s.SUCCESS;
      return (
        r("WAWebBizSyncCartAction")(m, e)
          .then(function () {
            h === s.SUCCESS
              ? o("WAWebQplFlowWrapper").QPL.markerEnd(e, 2)
              : h === s.QUANTITY_LIMIT_REACHED &&
                o("WAWebQplFlowWrapper").QPL.markerDrop(e);
          })
          .catch(function () {
            o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3);
          }),
        { newCount: f, status: h, totalCartCount: g }
      );
    }
    ((l.AddToCartStatus = s), (l.addProductToCart = u));
  },
  98,
);
