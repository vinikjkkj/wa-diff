__d(
  "WAWebProductMessageListCollection",
  [
    "WAWebBizProductCatalogAction",
    "WAWebProductMessageListModel",
    "WAWebStaleBaseCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.findQueryImpl = function (e) {
            return t.findImpl(e).then(function (e) {
              return [e];
            });
          }),
          (t.findImpl = function (e, n) {
            var r = t.get(e);
            return r == null
              ? Promise.resolve({ id: e })
              : t._queryProductList(r, n == null ? void 0 : n.markerId);
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n._queryProductList = async function (t, n) {
          var e = t.catalogId,
            r = await o("WAWebBizProductCatalogAction").queryProductList(
              e,
              t.getNextProductBatchToLoad(),
              void 0,
              void 0,
              n,
            );
          return { id: t.id, _products: r };
        }),
        (n.getOrAdd = function (t, n, r, a, i) {
          var e = this.get(t);
          if (e != null) return e;
          if (a == null) return null;
          var l = o("WAWebWidFactory").createWid(a);
          return (
            (e = this.add({
              id: t,
              catalogId: l,
              _productList: n,
              title: i,
              requiresDirectConnection: r,
            })[0]),
            e != null ? e : null
          );
        }),
        t
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o("WAWebProductMessageListModel").ProductMessageList;
    var s = new e();
    l.ProductMessageListCollection = s;
  },
  98,
);
