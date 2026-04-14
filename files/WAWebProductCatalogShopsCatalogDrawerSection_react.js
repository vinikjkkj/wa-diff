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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.animation,
        n = t === void 0 ? !0 : t,
        a = e.businessProfile,
        i = e.catalog,
        l = e.hideIncompleteRows,
        u = e.isEditMode,
        c = e.productsToShow,
        d = e.subtitle;
      r("vulture")("EMI0CRcyFIukL0q3FsuY9nfvCFk=");
      var m = s.jsx(r("WAWebBizShopsManagePopup.react"), {
        onViewShopClick: function () {
          o("WAWebShopsLog").logShopsManagementEvent(
            o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
              .ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE,
          );
        },
        onCommerceManagerClick: function () {
          o("WAWebShopsLog").logShopsManagementEvent(
            o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
              .ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE,
          );
        },
        onCancelClick: function () {
          o("WAWebShopsLog").logShopsManagementEvent(
            o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
              .ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE,
          );
        },
      });
      function p() {
        u
          ? (o("WAWebModalManager").ModalManager.open(m),
            o("WAWebShopsLog").logShopsManagementEvent(
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                .ACTION_CLICK_MANAGE_SHOPS,
            ))
          : o("WAWebBusinessProfileUtils").goToShop(a);
      }
      function _(e) {
        if (u)
          (o("WAWebModalManager").ModalManager.open(m),
            o("WAWebShopsLog").logShopsManagementEvent(
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                .ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE,
              { shouldLogJid: !1 },
            ));
        else {
          var t = new URL(
            r("WANullthrows")(e.url),
            "https://" + o("WAWebPipConst").HOSTNAME.FACEBOOK,
          );
          o("WAWebExternalLink.react").openExternalLink(String(t));
        }
      }
      return s.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
        onProductDetail: _,
        onProductCatalog: p,
        catalog: i,
        subtitle: d,
        hideIncompleteRows: l,
        productsToShow: c,
        showShopsLogo: !0,
        animation: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
