__d(
  "WAWebBizEditProductFlow",
  [
    "fbt",
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebManageEditProductDrawer.react",
    "WAWebManageProductInfoDrawer.react",
    "WAWebProductCatalogProductLinkDrawer.react",
    "WAWebProductDetailsInfoVariants.react",
    "WAWebUtilsLogQplEvents",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState,
      _ = n("$InternalEnum").Mirrored([
        "EditNewProduct",
        "EditProduct",
        "ProductInfo",
        "ProductLink",
      ]);
    function f(e) {
      var t = o("react-compiler-runtime").c(52),
        n = e.catalog,
        a = e.newProduct,
        i = e.onCreate,
        l = e.onDelete,
        c = p(e.product),
        d = c[0],
        f = c[1],
        y;
      t[0] !== n
        ? ((y = function (t) {
            var e = n.productCollection.get(t);
            e != null
              ? f(e)
              : n
                  .getCollection()
                  .findProduct({ catalogWid: n.id, productId: t.toString() })
                  .then(function () {
                    var e = n.productCollection.get(t);
                    e && f(e);
                  })
                  .catch(h);
          }),
          (t[0] = n),
          (t[1] = y))
        : (y = t[1]);
      var C = y,
        b = o("useWAWebFlow").useFlow(a ? _.EditNewProduct : _.ProductInfo),
        v = b[0],
        S = b[1],
        R;
      t[2] !== l || t[3] !== d.id
        ? ((R = function (t) {
            (d.id === t.id &&
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              l == null || l());
          }),
          (t[2] = l),
          (t[3] = d.id),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E,
        k;
      (t[5] !== n.productCollection || t[6] !== L
        ? ((E = function () {
            return (
              n.productCollection.on("remove", L),
              function () {
                return void n.productCollection.off("remove", L);
              }
            );
          }),
          (k = [L, n.productCollection]),
          (t[5] = n.productCollection),
          (t[6] = L),
          (t[7] = E),
          (t[8] = k))
        : ((E = t[7]), (k = t[8])),
        m(E, k));
      var I;
      t[9] !== S
        ? ((I = function () {
            (o("WAWebUtilsLogQplEvents").qplStartProductView("EditProduct"),
              S.push(_.ProductInfo));
          }),
          (t[9] = S),
          (t[10] = I))
        : (I = t[10]);
      var T = I,
        D;
      t[11] !== S
        ? ((D = function () {
            S.push(_.ProductLink);
          }),
          (t[11] = S),
          (t[12] = D))
        : (D = t[12]);
      var x = D,
        $;
      t[13] !== S
        ? (($ = function () {
            S.push(_.EditProduct);
          }),
          (t[13] = S),
          (t[14] = $))
        : ($ = t[14]);
      var P = $;
      if (S.step == null) return null;
      var N = null;
      e: switch (S.step) {
        case _.EditNewProduct: {
          var M;
          t[15] !== T || t[16] !== i
            ? ((M = function (t) {
                return i ? i(t) : T();
              }),
              (t[15] = T),
              (t[16] = i),
              (t[17] = M))
            : (M = t[17]);
          var w;
          t[18] !== S
            ? ((w = function () {
                return S.pop();
              }),
              (t[18] = S),
              (t[19] = w))
            : (w = t[19]);
          var A;
          (t[20] !== n || t[21] !== d || t[22] !== M || t[23] !== w
            ? ((A = u.jsx(r("WAWebManageEditProductDrawer.react"), {
                catalog: n,
                product: d,
                newProduct: !0,
                onEditSuccess: M,
                onCancel: w,
              })),
              (t[20] = n),
              (t[21] = d),
              (t[22] = M),
              (t[23] = w),
              (t[24] = A))
            : (A = t[24]),
            (N = A));
          break e;
        }
        case _.EditProduct: {
          var F;
          t[25] !== S
            ? ((F = function () {
                return S.pop();
              }),
              (t[25] = S),
              (t[26] = F))
            : (F = t[26]);
          var O;
          (t[27] !== n ||
          t[28] !== L ||
          t[29] !== T ||
          t[30] !== d ||
          t[31] !== F
            ? ((O = u.jsx(r("WAWebManageEditProductDrawer.react"), {
                catalog: n,
                product: d,
                onEditSuccess: T,
                onDelete: L,
                onBack: F,
              })),
              (t[27] = n),
              (t[28] = L),
              (t[29] = T),
              (t[30] = d),
              (t[31] = F),
              (t[32] = O))
            : (O = t[32]),
            (N = O));
          break e;
        }
        case _.ProductInfo: {
          var B;
          t[33] !== S
            ? ((B = function () {
                return S.end();
              }),
              (t[33] = S),
              (t[34] = B))
            : (B = t[34]);
          var W;
          (t[35] !== n ||
          t[36] !== C ||
          t[37] !== P ||
          t[38] !== x ||
          t[39] !== d ||
          t[40] !== B
            ? ((W = u.jsx(r("WAWebManageProductInfoDrawer.react"), {
                catalog: n,
                product: d,
                onEditProduct: P,
                onShareProduct: x,
                handleProductChange: C,
                onCancel: B,
              })),
              (t[35] = n),
              (t[36] = C),
              (t[37] = P),
              (t[38] = x),
              (t[39] = d),
              (t[40] = B),
              (t[41] = W))
            : (W = t[41]),
            (N = W));
          break e;
        }
        case _.ProductLink: {
          var q;
          t[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = u.jsx("div", {
                children: s._(
                  /*BTDS*/ "Anyone with WhatsApp can follow this link to browse catalog",
                ),
              })),
              (t[42] = q))
            : (q = t[42]);
          var U;
          t[43] !== S
            ? ((U = function () {
                return S.pop();
              }),
              (t[43] = S),
              (t[44] = U))
            : (U = t[44]);
          var V;
          (t[45] !== d || t[46] !== U
            ? ((V = u.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
                product: d,
                prompt: q,
                centerDrawer: !0,
                sendProductMsg: !0,
                onSend: g,
                onBack: U,
              })),
              (t[45] = d),
              (t[46] = U),
              (t[47] = V))
            : (V = t[47]),
            (N = V));
        }
      }
      var H;
      return (
        t[48] !== v || t[49] !== N || t[50] !== S
          ? ((H = u.jsx(v, { flow: S, children: N })),
            (t[48] = v),
            (t[49] = N),
            (t[50] = S),
            (t[51] = H))
          : (H = t[51]),
        H
      );
    }
    function g() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
    }
    function h(e) {
      o("WAWebProductDetailsInfoVariants.react").showProductChangeErrorToast();
    }
    l.default = f;
  },
  226,
);
