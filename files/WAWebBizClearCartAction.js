__d(
  "WAWebBizClearCartAction",
  ["WAWebBizCartBridge", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.cartItemCollection.length > 0;
          (e.cartItemCollection.reset(),
            e.set("message", void 0),
            t ? e.trigger("change:cartItemCollection") : e.countTotals(),
            yield o("WAWebBizCartBridge").updateCart(e));
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
