__d(
  "WAWebProductCatalogEventUtils",
  [
    "WAWebBizCatalogViewWamEvent",
    "WAWebBizGatingUtils",
    "WAWebCatalogBizWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "bizActionConfig",
        "bizPlatform",
        "catalogBizAction",
        "catalogOwnerJid",
        "catalogViewAction",
        "isOwner",
      ],
      s = function (t) {
        var e;
        return (
          r("isStringNullOrEmpty")(t.catalogOwnerJid)
            ? t.catalogOwnerWid
              ? (e = t.catalogOwnerWid)
              : t.product && (e = t.product.catalogWid)
            : (e = o("WAWebWidFactory").createWid(t.catalogOwnerJid)),
          e instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(e)
        );
      },
      u = function (n) {
        var t = n.bizActionConfig,
          r = n.bizPlatform,
          a = n.catalogBizAction,
          i = n.catalogOwnerJid,
          l = n.catalogViewAction,
          s = n.isOwner,
          u = babelHelpers.objectWithoutPropertiesLoose(n, e);
        if (a && s) {
          new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)(
            babelHelpers.extends({ catalogBizAction: a }, u, t),
          ).commit();
          return;
        }
        if (l && o("WAWebBizGatingUtils").isPSForCatalogViewEnabled()) {
          new (o("WAWebBizCatalogViewWamEvent").BizCatalogViewWamEvent)(
            babelHelpers.extends(
              { catalogViewAction: l, bizPlatform: r, catalogOwnerJid: i },
              u,
            ),
          ).commit();
          return;
        }
      };
    ((l.isCatalogOwner = s), (l.logCatalogViewOrBizEvent = u));
  },
  98,
);
