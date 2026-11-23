__d(
  "WAWebBizDeleteProductFromCartAction",
  ["WAWebBizCartBridge", "WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebCartCollection").CartCollection.findCart(e),
        r = n.cartItemCollection;
      (r.remove(t),
        n.trigger("change:cartItemCollection"),
        await o("WAWebBizCartBridge").updateCart(n));
    }
    l.default = e;
  },
  98,
);
