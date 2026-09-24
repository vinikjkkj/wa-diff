__d(
  "WAWebBizUpdateProductQuantityCartAction",
  ["WAWebBizCartBridge", "WAWebCartCollection", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.catalogWid.toString(),
            r = o("WAWebCartCollection").CartCollection.findCart(n),
            a = r.cartItemCollection.get(e.id);
          (a == null || a.set("quantity", t),
            r.trigger("change:cartItemCollection"),
            yield o("WAWebBizCartBridge").updateCart(r));
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
