__d(
  "useWAWebOrderDetailItems",
  [
    "Promise",
    "WAWebCatalogCollection",
    "WAWebOrderDetailMath",
    "WAWebOrderItemModel",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
      var i = o("react-compiler-runtime").c(25),
        l = r("useWAWebCatalog")(a),
        s;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = []), (i[0] = s))
        : (s = i[0]);
      var u = m(s),
        c = u[0],
        p = u[1],
        f = m(!0),
        g = f[0],
        h = f[1],
        y = r("useWAWebUnmountSignal")(),
        C;
      i[1] !== l
        ? ((C = function () {
            return l == null
              ? new Map()
              : l.productCollection.getProductModels().reduce(_, new Map());
          }),
          (i[1] = l),
          (i[2] = C))
        : (C = i[2]);
      var b = C,
        v;
      i[3] !== l || i[4] !== t.items
        ? ((v = function (a) {
            if (l == null) return (e || (e = n("Promise"))).resolve([]);
            var r = t.items.reduce(function (e, t) {
              if (t.isCustomItem || a.get(t.id) != null) return e;
              var n = o("WAWebCatalogCollection").CatalogCollection.findProduct(
                { catalogWid: l.id, productId: t.id },
              );
              return (e.push(n), e);
            }, []);
            return (e || (e = n("Promise"))).all(r);
          }),
          (i[3] = l),
          (i[4] = t.items),
          (i[5] = v))
        : (v = i[5]);
      var S = v,
        R;
      i[6] !== t.currency
        ? ((R = function (n, a) {
            var e;
            return new (r("WAWebOrderItemModel"))(
              babelHelpers.extends({}, n, {
                currency: t.currency,
                price:
                  ((e = n.amount) != null ? e : 0) *
                  o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                thumbnailUrl: a.get(n.id),
              }),
            );
          }),
          (i[6] = t.currency),
          (i[7] = R))
        : (R = i[7]);
      var L = R,
        E;
      i[8] !== L || i[9] !== t.items
        ? ((E = function (n) {
            return t.items.map(function (e) {
              return L(e, n);
            });
          }),
          (i[8] = L),
          (i[9] = t.items),
          (i[10] = E))
        : (E = i[10]);
      var k = E,
        I;
      i[11] !== S || i[12] !== b || i[13] !== k || i[14] !== y.aborted
        ? ((I = function () {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = b();
              if ((h(!0), yield S(e), !y.aborted)) {
                h(!1);
                var t = b();
                p(k(t));
              }
            })();
          }),
          (i[11] = S),
          (i[12] = b),
          (i[13] = k),
          (i[14] = y.aborted),
          (i[15] = I))
        : (I = i[15]);
      var T;
      (i[16] !== l || i[17] !== S || i[18] !== b || i[19] !== k || i[20] !== y
        ? ((T = [l, y, S, b, k]),
          (i[16] = l),
          (i[17] = S),
          (i[18] = b),
          (i[19] = k),
          (i[20] = y),
          (i[21] = T))
        : (T = i[21]),
        d(I, T));
      var D;
      return (
        i[22] !== g || i[23] !== c
          ? ((D = { isLoading: g, orderItems: c }),
            (i[22] = g),
            (i[23] = c),
            (i[24] = D))
          : (D = i[24]),
        D
      );
    }
    function _(e, t) {
      var n;
      return e.set(
        t.id.toString(),
        (n = t.getPreviewImage()) == null ? void 0 : n.mediaUrl,
      );
    }
    l.default = p;
  },
  98,
);
