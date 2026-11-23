__d(
  "WAWebBizUpdateProductQuantityCartAction",
  ["WAWebBizCartBridge", "WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = e.catalogWid.toString(),
        r = o("WAWebCartCollection").CartCollection.findCart(n),
        a = r.cartItemCollection.get(e.id);
      (a == null || a.set("quantity", t),
        r.trigger("change:cartItemCollection"),
        await o("WAWebBizCartBridge").updateCart(r));
    }
    l.default = e;
  },
  98,
);
