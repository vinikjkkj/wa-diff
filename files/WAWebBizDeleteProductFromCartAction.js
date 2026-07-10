__d(
  "WAWebBizDeleteProductFromCartAction",
  ["WAWebBizCartBridge", "WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebCartCollection").CartCollection.findCart(e),
        r = n.cartItemCollection;
      return (
        r.remove(t),
        n.trigger("change:cartItemCollection"),
        o("WAWebBizCartBridge").updateCart(n),
        n.itemCount
      );
    }
    l.default = e;
  },
  98,
);
