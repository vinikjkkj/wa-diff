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
      var t = o("useWAWebFlow").useFlow(_.CartDetails),
        n = t[0],
        r = t[1],
        a = e.chat,
        i = e.sellerJid,
        l = p(null),
        s = l[0],
        c = l[1],
        d = p(!0),
        f = d[0],
        h = d[1],
        y = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"),
        C = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid");
      if (
        (m(
          function () {
            var e = y.existsDrawer();
            e && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            var t = C.existsDrawer();
            t && o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
          },
          [y, C],
        ),
        r.step == null)
      )
        return null;
      var b = function () {
          (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("Cart"),
            h(!1),
            r.push(_.ProductCatalog));
        },
        v = function (t) {
          (o("WAWebUtilsLogQplEvents").qplStartProductView("Cart"),
            h(!1),
            c(t),
            r.push(_.ProductDetails));
        },
        S = function () {
          r.pop();
        },
        R;
      switch (r.step) {
        case _.CartDetails:
          R = u.jsx(g, {
            chat: a,
            sellerJid: i,
            onProductDetail: v,
            onProductCatalog: b,
            onBack: function () {
              return r.end();
            },
            canLogQpl: f,
          });
          break;
        case _.ProductCatalog:
          R = u.jsx(
            o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
            { chat: a, catalogOwnerJid: i },
          );
          break;
        case _.ProductDetails:
          s != null &&
            (R = u.jsx(
              o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
              { refreshCarousel: !0, chat: a, productInfo: s, onEnd: S },
            ));
          break;
      }
      return u.jsx(n, { flow: r, children: R });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = d(o("WAWebDrawerContext").DrawerContext),
        l = o("WAWebProductCatalogContext").getProductCatalogContext(i),
        s = l.entryPoint;
      return u.jsx(
        r("WAWebCartDetailDrawer.react"),
        babelHelpers.extends(
          {
            ref: n,
            closeDrawerRightOnSend:
              s ===
              o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                .CATALOG_ENTRY_POINT_PRODUCT_LIST_MESSAGE,
          },
          a,
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
