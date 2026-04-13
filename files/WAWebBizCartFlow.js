__d(
  "WAWebBizCartFlow",
  [
    "$InternalEnum",
    "WAWebCartDetailDrawer.react",
    "WAWebDrawerContext",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebProductCatalogContext",
    "WAWebProductDetailsFlowLoadable",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useState,
      _ = n("$InternalEnum").Mirrored([
        "CartDetails",
        "ProductCatalog",
        "ProductDetails",
      ]);
    function f(e) {
      var t = o("react-compiler-runtime").c(30),
        n = o("useWAWebFlow").useFlow(_.CartDetails),
        r = n[0],
        a = n[1],
        i = e.chat,
        l = e.sellerJid,
        s = p(null),
        c = s[0],
        d = s[1],
        f = p(!0),
        h = f[0],
        y = f[1],
        C = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"),
        b = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        v,
        S;
      if (
        (t[0] !== C || t[1] !== b
          ? ((v = function () {
              var e = C.existsDrawer();
              e && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
              var t = b.existsDrawer();
              t && o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
            }),
            (S = [C, b]),
            (t[0] = C),
            (t[1] = b),
            (t[2] = v),
            (t[3] = S))
          : ((v = t[2]), (S = t[3])),
        m(v, S),
        a.step == null)
      )
        return null;
      var R;
      t[4] !== a
        ? ((R = function () {
            (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("Cart"),
              y(!1),
              a.push(_.ProductCatalog));
          }),
          (t[4] = a),
          (t[5] = R))
        : (R = t[5]);
      var L = R,
        E;
      t[6] !== a
        ? ((E = function (t) {
            (o("WAWebUtilsLogQplEvents").qplStartProductView("Cart"),
              y(!1),
              d(t),
              a.push(_.ProductDetails));
          }),
          (t[6] = a),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I;
      t[8] !== a
        ? ((I = function () {
            a.pop();
          }),
          (t[8] = a),
          (t[9] = I))
        : (I = t[9]);
      var T = I,
        D;
      e: switch (a.step) {
        case _.CartDetails: {
          var x;
          t[10] !== a
            ? ((x = function () {
                return a.end();
              }),
              (t[10] = a),
              (t[11] = x))
            : (x = t[11]);
          var $;
          (t[12] !== h ||
          t[13] !== i ||
          t[14] !== L ||
          t[15] !== k ||
          t[16] !== l ||
          t[17] !== x
            ? (($ = u.jsx(g, {
                chat: i,
                sellerJid: l,
                onProductDetail: k,
                onProductCatalog: L,
                onBack: x,
                canLogQpl: h,
              })),
              (t[12] = h),
              (t[13] = i),
              (t[14] = L),
              (t[15] = k),
              (t[16] = l),
              (t[17] = x),
              (t[18] = $))
            : ($ = t[18]),
            (D = $));
          break e;
        }
        case _.ProductCatalog: {
          var P;
          (t[19] !== i || t[20] !== l
            ? ((P = u.jsx(
                o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
                { chat: i, catalogOwnerJid: l },
              )),
              (t[19] = i),
              (t[20] = l),
              (t[21] = P))
            : (P = t[21]),
            (D = P));
          break e;
        }
        case _.ProductDetails:
          if (c != null) {
            var N;
            (t[22] !== i || t[23] !== T || t[24] !== c
              ? ((N = u.jsx(
                  o("WAWebProductDetailsFlowLoadable")
                    .ProductDetailsFlowLoadable,
                  { refreshCarousel: !0, chat: i, productInfo: c, onEnd: T },
                )),
                (t[22] = i),
                (t[23] = T),
                (t[24] = c),
                (t[25] = N))
              : (N = t[25]),
              (D = N));
          }
      }
      var M;
      return (
        t[26] !== r || t[27] !== D || t[28] !== a
          ? ((M = u.jsx(r, { flow: a, children: D })),
            (t[26] = r),
            (t[27] = D),
            (t[28] = a),
            (t[29] = M))
          : (M = t[29]),
        M
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(9),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = d(o("WAWebDrawerContext").DrawerContext),
        s;
      n[3] !== l
        ? ((s = o("WAWebProductCatalogContext").getProductCatalogContext(l)),
          (n[3] = l),
          (n[4] = s))
        : (s = n[4]);
      var c = s,
        m = c.entryPoint,
        p =
          m ===
          o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
            .CATALOG_ENTRY_POINT_PRODUCT_LIST_MESSAGE,
        _;
      return (
        n[5] !== a || n[6] !== i || n[7] !== p
          ? ((_ = u.jsx(
              r("WAWebCartDetailDrawer.react"),
              babelHelpers.extends({ ref: i, closeDrawerRightOnSend: p }, a),
            )),
            (n[5] = a),
            (n[6] = i),
            (n[7] = p),
            (n[8] = _))
          : (_ = n[8]),
        _
      );
    }
    l.default = f;
  },
  98,
);
