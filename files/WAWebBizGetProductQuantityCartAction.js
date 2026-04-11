__d(
  "WAWebBizGetProductQuantityCartAction",
  ["WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = t.toString(),
        a = o("WAWebCartCollection").CartCollection.findCart(r),
        i = a.cartItemCollection.get(e);
      return (n = i == null ? void 0 : i.quantity) != null ? n : 0;
    }
    l.default = e;
  },
  98,
);
