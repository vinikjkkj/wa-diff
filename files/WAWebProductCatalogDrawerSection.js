__d(
  "WAWebProductCatalogDrawerSection",
  [
    "fbt",
    "WAWebBusinessProfileUtils",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebProductCatalogCatalogDrawerSection.react",
    "WAWebShopsLog",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumShopsManagementAction",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
        product: e,
        entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
          .CATALOG_ENTRY_POINT_PROFILE,
        isInitialStep: !1,
      });
    }
    function m(e) {
      var t = e.animation,
        n = t === void 0 ? !0 : t,
        a = e.businessProfile,
        i = e.catalog,
        l = e.openCatalog,
        m = l === void 0 ? d : l,
        p = o("WAWebBusinessProfileUtils").hasShop(a),
        _ = !1;
      return (
        c(
          function () {
            o("WAWebShopsLog").logShopsManagementEvent(
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                .ACTION_SHOPS_PRODUCT_PREVIEW_VISIBLE,
              { shouldLogJid: !1, isShopsProductPreviewVisible: _ },
            );
          },
          [_],
        ),
        p
          ? null
          : u.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
              catalog: i,
              onProductDetail: m,
              onProductCatalog: function () {
                m();
              },
              productsToShow: 3,
              catalogEntryLabel:
                i == null
                  ? s._(/*BTDS*/ "Add catalog")
                  : s._(/*BTDS*/ "View or edit catalog"),
              showProductPlaceholders: !0,
              seeMoreOverlay: !0,
              sectionTheme: "refresh",
              animation: n,
            })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
