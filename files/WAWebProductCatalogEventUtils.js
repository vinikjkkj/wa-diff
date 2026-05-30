__d(
  "WAWebProductCatalogEventUtils",
  [
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogViewWamEvent",
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
    ];
    function s(e) {
      var t;
      return (
        r("isStringNullOrEmpty")(e.catalogOwnerJid)
          ? e.catalogOwnerWid
            ? (t = e.catalogOwnerWid)
            : e.product && (t = e.product.catalogWid)
          : (t = o("WAWebWidFactory").createWid(e.catalogOwnerJid)),
        t instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(t)
      );
    }
    function u(t) {
      var n = t.bizActionConfig,
        r = t.bizPlatform,
        a = t.catalogBizAction,
        i = t.catalogOwnerJid,
        l = t.catalogViewAction,
        s = t.isOwner,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (a && s) {
        new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)(
          babelHelpers.extends({ catalogBizAction: a }, u, n),
        ).commit();
        return;
      }
      if (l && o("WAWebBizCatalogGatingUtils").isPSForCatalogViewEnabled()) {
        new (o("WAWebBizCatalogViewWamEvent").BizCatalogViewWamEvent)(
          babelHelpers.extends(
            { catalogViewAction: l, bizPlatform: r, catalogOwnerJid: i },
            u,
          ),
        ).commit();
        return;
      }
    }
    ((l.isCatalogOwner = s), (l.logCatalogViewOrBizEvent = u));
  },
  98,
);
