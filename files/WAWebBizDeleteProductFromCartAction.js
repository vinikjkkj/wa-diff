__d(
  "WAWebBizDeleteProductFromCartAction",
  ["WAWebBizCartBridge", "WAWebCartCollection", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebCartCollection").CartCollection.findCart(e),
            r = n.cartItemCollection;
          (r.remove(t),
            n.trigger("change:cartItemCollection"),
            yield o("WAWebBizCartBridge").updateCart(n));
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
