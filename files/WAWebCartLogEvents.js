__d(
  "WAWebCartLogEvents",
  [
    "WALogger",
    "WAWebBizCatalogUtils",
    "WAWebBizCatalogViewWamEvent",
    "WAWebBizGatingUtils",
    "WAWebCatalogBizWamEvent",
    "WAWebProductCatalogContext",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogViewAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["bizPlatform", "collectionStats"];
    function u(e) {
      return Object.keys(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION,
      ).find(function (t) {
        return t === e;
      });
    }
    function c(e) {
      return Object.keys(
        o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION,
      ).find(function (t) {
        return t === e;
      });
    }
    function d(t, n, r) {
      var a =
          t ===
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().toString(),
        i = r.bizPlatform,
        l = r.collectionStats,
        d = babelHelpers.objectWithoutPropertiesLoose(r, s),
        m = u(n);
      if (a && m !== void 0) {
        new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)(
          babelHelpers.extends(
            {
              catalogBizAction: o("WAWebWamEnumCatalogBizAction")
                .CATALOG_BIZ_ACTION[m],
              collectionIndex: l == null ? void 0 : l.collectionIndex,
              productIndex: l == null ? void 0 : l.productIndex,
            },
            d,
          ),
        ).commit();
        return;
      }
      var p = c(n);
      if (
        !a &&
        p !== void 0 &&
        o("WAWebBizGatingUtils").isPSForCatalogViewEnabled()
      ) {
        new (o("WAWebBizCatalogViewWamEvent").BizCatalogViewWamEvent)(
          babelHelpers.extends(
            {
              bizPlatform: i,
              catalogOwnerJid: t,
              catalogViewAction: o("WAWebWamEnumCatalogViewAction")
                .CATALOG_VIEW_ACTION[p],
            },
            l,
            d,
          ),
        ).commit();
        return;
      }
      o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "logCartAction: unsupported log action - ",
            "",
          ])),
        n,
      );
    }
    function m(e, t, n, r, a) {
      var i =
        o("WAWebBizCatalogUtils").getProductStatsInFetched(
          t.catalogWid.toString(),
          a,
          t,
        ) || void 0;
      d(
        t.catalogWid.toString(),
        e,
        babelHelpers.extends(
          {},
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(n),
          { collectionStats: i, quantity: r },
        ),
      );
    }
    function p(e, t, n, r) {
      m("ACTION_CART_ADD_PRODUCT", e, t, n, r);
    }
    function _(e, t, n, r) {
      m("ACTION_CART_EDIT_PRODUCT", e, t, n, r);
    }
    function f(e, t, n) {
      m("ACTION_CART_DELETE_PRODUCT", e, t, void 0, n);
    }
    function g(e, t) {
      d(
        e,
        "ACTION_CART_ABANDON",
        babelHelpers.extends(
          {},
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function h(e, t) {
      d(
        e,
        "ACTION_CART_ICON_CLICK",
        babelHelpers.extends(
          {},
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function y(e, t, n) {
      return function () {
        (e(), h(t, n));
      };
    }
    function C(e, t) {
      d(
        e,
        "ACTION_CART_SNACKBAR_CLICK",
        babelHelpers.extends(
          {},
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function b(e, t) {
      d(
        e,
        "ACTION_CART_LIST_IMPRESSION",
        babelHelpers.extends(
          {},
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function v(e, t, n, r) {
      m("ACTION_CREATE_CART", e, t, r, n);
    }
    ((l.logAddProductToCart = p),
      (l.logEditProduct = _),
      (l.logDeleteProduct = f),
      (l.logCartAbandon = g),
      (l.getOnCartClickWithLog = y),
      (l.logCartToastClick = C),
      (l.logCartListImpression = b),
      (l.logCreateNewCart = v));
  },
  98,
);
