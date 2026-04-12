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
      var t = e.catalog,
        n = e.newProduct,
        a = e.onCreate,
        i = e.onDelete,
        l = p(e.product),
        c = l[0],
        f = l[1],
        g = function (n) {
          var e = t.productCollection.get(n);
          e != null
            ? f(e)
            : t
                .getCollection()
                .findProduct({ catalogWid: t.id, productId: n.toString() })
                .then(function () {
                  var e = t.productCollection.get(n);
                  e && f(e);
                })
                .catch(function (e) {
                  o(
                    "WAWebProductDetailsInfoVariants.react",
                  ).showProductChangeErrorToast();
                });
        },
        h = o("useWAWebFlow").useFlow(n ? _.EditNewProduct : _.ProductInfo),
        y = h[0],
        C = h[1],
        b = d(
          function (e) {
            (c.id === e.id &&
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              i == null || i());
          },
          [i, c.id],
        );
      m(
        function () {
          return (
            t.productCollection.on("remove", b),
            function () {
              return void t.productCollection.off("remove", b);
            }
          );
        },
        [b, t.productCollection],
      );
      var v = function () {
          (o("WAWebUtilsLogQplEvents").qplStartProductView("EditProduct"),
            C.push(_.ProductInfo));
        },
        S = function () {
          C.push(_.ProductLink);
        },
        R = function () {
          C.push(_.EditProduct);
        };
      if (C.step == null) return null;
      var L = null;
      switch (C.step) {
        case _.EditNewProduct:
          L = u.jsx(r("WAWebManageEditProductDrawer.react"), {
            catalog: t,
            product: c,
            newProduct: !0,
            onEditSuccess: function (t) {
              return a ? a(t) : v();
            },
            onCancel: function () {
              return C.pop();
            },
          });
          break;
        case _.EditProduct:
          L = u.jsx(r("WAWebManageEditProductDrawer.react"), {
            catalog: t,
            product: c,
            onEditSuccess: v,
            onDelete: b,
            onBack: function () {
              return C.pop();
            },
          });
          break;
        case _.ProductInfo:
          L = u.jsx(r("WAWebManageProductInfoDrawer.react"), {
            catalog: t,
            product: c,
            onEditProduct: R,
            onShareProduct: S,
            handleProductChange: g,
            onCancel: function () {
              return C.end();
            },
          });
          break;
        case _.ProductLink:
          L = u.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
            product: c,
            prompt: u.jsx("div", {
              children: s._(
                /*BTDS*/ "Anyone with WhatsApp can follow this link to browse catalog",
              ),
            }),
            centerDrawer: !0,
            sendProductMsg: !0,
            onSend: function () {
              return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
            },
            onBack: function () {
              return C.pop();
            },
          });
          break;
      }
      return u.jsx(y, { flow: C, children: L });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
