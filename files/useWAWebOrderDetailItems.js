__d(
  "useWAWebOrderDetailItems",
  [
    "Promise",
    "WAWebCatalogCollection",
    "WAWebOrderDetailMath",
    "WAWebOrderItemModel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebCatalog",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(t, a) {
      var i = r("useWAWebCatalog")(a),
        l = m([]),
        s = l[0],
        u = l[1],
        p = m(!0),
        _ = p[0],
        f = p[1],
        g = r("useWAWebUnmountSignal")(),
        h = c(
          function () {
            return i == null
              ? new Map()
              : i.productCollection.getProductModels().reduce(function (e, t) {
                  var n;
                  return e.set(
                    t.id.toString(),
                    (n = t.getPreviewImage()) == null ? void 0 : n.mediaUrl,
                  );
                }, new Map());
          },
          [i],
        ),
        y = c(
          function (r) {
            if (i == null) return (e || (e = n("Promise"))).resolve([]);
            var a = t.items.reduce(function (e, t) {
              if (t.isCustomItem || r.get(t.id) != null) return e;
              var n = o("WAWebCatalogCollection").CatalogCollection.findProduct(
                { catalogWid: i.id, productId: t.id },
              );
              return (e.push(n), e);
            }, []);
            return (e || (e = n("Promise"))).all(a);
          },
          [i, t.items],
        ),
        C = c(
          function (e, n) {
            var a;
            return new (r("WAWebOrderItemModel"))(
              babelHelpers.extends({}, e, {
                currency: t.currency,
                price:
                  ((a = e.amount) != null ? a : 0) *
                  o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                thumbnailUrl: n.get(e.id),
              }),
            );
          },
          [t.currency],
        ),
        b = c(
          function (e) {
            return t.items.map(function (t) {
              return C(t, e);
            });
          },
          [t.items, C],
        );
      return (
        d(
          function () {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = h();
              if ((f(!0), yield y(e), !g.aborted)) {
                f(!1);
                var t = h();
                u(b(t));
              }
            })();
          },
          [i, g, y, h, b],
        ),
        { isLoading: _, orderItems: s }
      );
    }
    l.default = p;
  },
  98,
);
