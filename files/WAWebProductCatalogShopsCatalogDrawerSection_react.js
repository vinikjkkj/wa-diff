__d(
  "WAWebProductCatalogShopsCatalogDrawerSection.react",
  [
    "WANullthrows",
    "WAWebBizShopsManagePopup.react",
    "WAWebBusinessProfileUtils",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebPipConst",
    "WAWebProductCatalogCatalogDrawerSection.react",
    "WAWebShopsLog",
    "WAWebWamEnumShopsManagementAction",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.animation,
        a = e.businessProfile,
        i = e.catalog,
        l = e.hideIncompleteRows,
        u = e.isEditMode,
        p = e.productsToShow,
        _ = e.subtitle,
        f = n === void 0 ? !0 : n;
      r("vulture")("EMI0CRcyFIukL0q3FsuY9nfvCFk=");
      var g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s.jsx(r("WAWebBizShopsManagePopup.react"), {
            onViewShopClick: m,
            onCommerceManagerClick: d,
            onCancelClick: c,
          })),
          (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] !== a || t[2] !== u
        ? ((y = function () {
            u
              ? (o("WAWebModalManager").ModalManager.open(h),
                o("WAWebShopsLog").logShopsManagementEvent(
                  o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                    .ACTION_CLICK_MANAGE_SHOPS,
                ))
              : o("WAWebBusinessProfileUtils").goToShop(a);
          }),
          (t[1] = a),
          (t[2] = u),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== u
        ? ((b = function (t) {
            if (u)
              (o("WAWebModalManager").ModalManager.open(h),
                o("WAWebShopsLog").logShopsManagementEvent(
                  o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                    .ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE,
                  { shouldLogJid: !1 },
                ));
            else {
              var e = new URL(
                r("WANullthrows")(t.url),
                "https://" + o("WAWebPipConst").HOSTNAME.FACEBOOK,
              );
              o("WAWebExternalLink.react").openExternalLink(String(e));
            }
          }),
          (t[4] = u),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      return (
        t[6] !== f ||
        t[7] !== i ||
        t[8] !== C ||
        t[9] !== v ||
        t[10] !== l ||
        t[11] !== p ||
        t[12] !== _
          ? ((S = s.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
              onProductDetail: v,
              onProductCatalog: C,
              catalog: i,
              subtitle: _,
              hideIncompleteRows: l,
              productsToShow: p,
              showShopsLogo: !0,
              animation: f,
            })),
            (t[6] = f),
            (t[7] = i),
            (t[8] = C),
            (t[9] = v),
            (t[10] = l),
            (t[11] = p),
            (t[12] = _),
            (t[13] = S))
          : (S = t[13]),
        S
      );
    }
    function c() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE,
      );
    }
    function d() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE,
      );
    }
    function m() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE,
      );
    }
    l.default = u;
  },
  98,
);
