__d(
  "WAWebBizDeleteProductFromCartAction",
  ["WAWebBizSyncCartAction", "WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebCartCollection").CartCollection.findCart(e),
        a = n.cartItemCollection;
      return (
        a.remove(t),
        n.trigger("change:cartItemCollection"),
        r("WAWebBizSyncCartAction")(n),
        n.itemCount
      );
    }
    l.default = e;
  },
  98,
);
