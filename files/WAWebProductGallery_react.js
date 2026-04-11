__d(
  "WAWebProductGallery.react",
  [
    "fbt",
    "Promise",
    "WAWebHistorySyncComponents.react",
    "WAWebMessageGallery.react",
    "react",
    "react-compiler-runtime",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["chat", "productMsgs"],
      u,
      c,
      d = c || (c = o("react"));
    function m(t) {
      var a = o("react-compiler-runtime").c(25),
        i,
        l,
        c;
      a[0] !== t
        ? ((i = t.chat),
          (l = t.productMsgs),
          (c = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = c))
        : ((i = a[1]), (l = a[2]), (c = a[3]));
      var m;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["add", "remove", "reset", "products_loaded"]), (a[4] = m))
        : (m = a[4]);
      var p = m,
        _ = r("useWAWebUiIdle")(),
        f;
      a[5] !== i || a[6] !== l || a[7] !== _
        ? ((f = function (t) {
            return _(function () {
              l.queryProducts(i, t);
            });
          }),
          (a[5] = i),
          (a[6] = l),
          (a[7] = _),
          (a[8] = f))
        : (f = a[8]);
      var g = f,
        h,
        y;
      a[9] !== l.hasProductBefore
        ? ((h = function () {
            return l.hasProductBefore;
          }),
          (y = function () {
            return l.hasProductBefore
              ? (u || (u = n("Promise"))).resolve()
              : null;
          }),
          (a[9] = l.hasProductBefore),
          (a[10] = h),
          (a[11] = y))
        : ((h = a[10]), (y = a[11]));
      var C;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "No products")), (a[12] = C))
        : (C = a[12]);
      var b;
      a[13] !== i ||
      a[14] !== l ||
      a[15] !== g ||
      a[16] !== c ||
      a[17] !== h ||
      a[18] !== y
        ? ((b = d.jsx(
            r("WAWebMessageGallery.react"),
            babelHelpers.extends(
              {
                msgsCollection: l,
                msgsCollectionUpdateEvents: p,
                queryCollection: g,
                getHasBefore: h,
                getQueryBefore: y,
                emptyText: C,
                chat: i,
              },
              c,
            ),
          )),
          (a[13] = i),
          (a[14] = l),
          (a[15] = g),
          (a[16] = c),
          (a[17] = h),
          (a[18] = y),
          (a[19] = b))
        : (b = a[19]);
      var v;
      a[20] !== i
        ? ((v = d.jsx(
            o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder,
            { chat: i },
          )),
          (a[20] = i),
          (a[21] = v))
        : (v = a[21]);
      var S;
      return (
        a[22] !== b || a[23] !== v
          ? ((S = d.jsxs(d.Fragment, { children: [b, v] })),
            (a[22] = b),
            (a[23] = v),
            (a[24] = S))
          : (S = a[24]),
        S
      );
    }
    l.default = m;
  },
  226,
);
