__d(
  "WAWebBizPullCartUpdateAction",
  ["Promise", "WAWebBizCartBridge", "WAWebCartCollection", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r) {
      if (t.cartItemCollection.length === 0)
        return (e || (e = n("Promise"))).resolve({ products: [], price: {} });
      var a = t.cartItemCollection.map(function (e) {
        return e.id;
      });
      return o("WAWebBizCartBridge").refreshCart(
        o("WAWebWidFactory").createWid(t.id),
        a,
        o("WAWebCartCollection").CartCollection.imageWidth,
        o("WAWebCartCollection").CartCollection.imageHeight,
        r,
      );
    }
    l.default = s;
  },
  98,
);
