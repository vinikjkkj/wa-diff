__d(
  "WAWebProductMessageListCollection",
  [
    "Promise",
    "WAWebBizProductCatalogAction",
    "WAWebProductMessageListModel",
    "WAWebStaleBaseCollection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (r = t.call.apply(t, [this].concat(a)) || this),
            (r.findQueryImpl = function (e) {
              return r.findImpl(e).then(function (e) {
                return [e];
              });
            }),
            (r.findImpl = function (t, o) {
              var a = r.get(t);
              return a == null
                ? (e || (e = n("Promise"))).resolve({ id: t })
                : r._queryProductList(a, o == null ? void 0 : o.markerId);
            }),
            babelHelpers.assertThisInitialized(r) ||
              babelHelpers.assertThisInitialized(r)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a._queryProductList = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e.catalogId,
                  r = yield o("WAWebBizProductCatalogAction").queryProductList(
                    n,
                    e.getNextProductBatchToLoad(),
                    void 0,
                    void 0,
                    t,
                  );
                return { id: e.id, _products: r };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getOrAdd = function (t, n, r, a, i) {
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
          r
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o("WAWebProductMessageListModel").ProductMessageList;
    var u = new s();
    l.ProductMessageListCollection = u;
  },
  98,
);
