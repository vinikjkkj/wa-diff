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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.animation,
        a = e.businessProfile,
        i = e.catalog,
        l = e.openCatalog,
        m = n === void 0 ? !0 : n,
        _ = l === void 0 ? d : l,
        f = o("WAWebBusinessProfileUtils").hasShop(a),
        g;
      if (
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = [!1]), (t[0] = g))
          : (g = t[0]),
        c(p, g),
        f)
      )
        return null;
      var h;
      t[1] !== _
        ? ((h = function () {
            _();
          }),
          (t[1] = _),
          (t[2] = h))
        : (h = t[2]);
      var y;
      t[3] !== i
        ? ((y =
            i == null
              ? s._(/*BTDS*/ "Add catalog")
              : s._(/*BTDS*/ "View or edit catalog")),
          (t[3] = i),
          (t[4] = y))
        : (y = t[4]);
      var C;
      return (
        t[5] !== m || t[6] !== i || t[7] !== _ || t[8] !== h || t[9] !== y
          ? ((C = u.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
              catalog: i,
              onProductDetail: _,
              onProductCatalog: h,
              productsToShow: 3,
              catalogEntryLabel: y,
              showProductPlaceholders: !0,
              seeMoreOverlay: !0,
              sectionTheme: "refresh",
              animation: m,
            })),
            (t[5] = m),
            (t[6] = i),
            (t[7] = _),
            (t[8] = h),
            (t[9] = y),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    function p() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_SHOPS_PRODUCT_PREVIEW_VISIBLE,
        { shouldLogJid: !1, isShopsProductPreviewVisible: !1 },
      );
    }
    l.default = m;
  },
  226,
);
