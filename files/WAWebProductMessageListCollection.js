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
        (n.getOrAdd = function (t) {
          var e = t.catalogOwnerJid,
            n = t.id,
            r = t.productList,
            a = t.requiresDirectConnection,
            i = t.title,
            l = this.get(n);
          if (l != null) return l;
          if (e == null) return null;
          var s = o("WAWebWidFactory").createWid(e);
          return (
            (l = this.add({
              id: n,
              catalogId: s,
              _productList: r,
              title: i,
              requiresDirectConnection: a,
            })[0]),
            l != null ? l : null
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
