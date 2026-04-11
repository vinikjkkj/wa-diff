__d(
  "WAWebBizUpdateProductQuantityCartAction",
  ["WAWebBizSyncCartAction", "WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.catalogWid.toString(),
        a = o("WAWebCartCollection").CartCollection.findCart(n),
        i = a.cartItemCollection.get(e.id);
      (i == null || i.set("quantity", t),
        a.trigger("change:cartItemCollection"),
        r("WAWebBizSyncCartAction")(a));
    }
    l.default = e;
  },
  98,
);
