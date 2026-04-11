__d(
  "WAWebCatalogChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebConfirmPopup.react",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebShopsLog",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumShopsManagementAction",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcGridOn.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(6),
        t,
        n,
        a,
        i;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = Symbol.for("react.early_return_sentinel");
        e: {
          var l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          if (
            ((t = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(l)),
            !(
              o("WAWebMobilePlatforms").isSMB() &&
              !o(
                "WAWebBizGatingUtils",
              ).blockCatalogCreationECommerceComplianceIndia(t) &&
              !o(
                "WAWebProductCatalogMetaLinkingGatingUtils",
              ).shouldDisableCatalogDueToMetaLinkingForSelf()
            ))
          ) {
            i = null;
            break e;
          }
          ((n = o(
            "WAWebProductCatalogMetaLinkingGatingUtils",
          ).shouldShowMetaLinkedDisabledCatalogTooltipForSelf()),
            (a = o("WAWebBusinessProfileUtils").hasShop(t)));
        }
        ((e[0] = t), (e[1] = n), (e[2] = a), (e[3] = i));
      } else ((t = e[0]), (n = e[1]), (a = e[2]), (i = e[3]));
      if (i !== Symbol.for("react.early_return_sentinel")) return i;
      var c = a,
        m;
      if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        var p = function () {
          (o("WAWebBusinessProfileUtils").goToCommerceManager(t),
            o("WAWebShopsLog").logShopsManagementEvent(
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                .ACTION_CLICK_COMMERCE_MANAGER_IN_CATALOG_SETTING,
            ));
        };
        ((m = function (n) {
          if ((n == null || n.preventDefault(), c)) {
            var e =
              o("WAWebBizGatingUtils").bannedShopsEnabled() &&
              o("WAWebBusinessProfileUtils").isShopBanned(t);
            (o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Catalog disabled"),
                onOK: p,
                okText: s._(/*BTDS*/ "Commerce Manager"),
                onCancel: d,
                children: e
                  ? s._(
                      /*BTDS*/ "You can't restore your catalog at this time because we have disabled your shop for not complying with our policies. Learn more in Commerce Manager.",
                    )
                  : s._(
                      /*BTDS*/ 'Your catalog is temporarily disabled because WhatsApp is a sales channel for your shop. To restore your catalog, go to Commerce Manager and set the shop\'s visibility to "hidden", or remove WhatsApp from the Business Manager account.',
                    ),
              }),
            ),
              o("WAWebShopsLog").logShopsManagementEvent(
                o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                  .ACTION_CLICK_CATALOG_SETTING,
              ));
          } else
            (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(
              "ToolsMenu",
            ),
              o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
                {
                  entryPoint: o("WAWebWamEnumCatalogEntryPoint")
                    .CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
                  isInitialStep: !0,
                },
              ),
              o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
                o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.CATALOG,
              ));
        }),
          (e[4] = m));
      } else m = e[4];
      var _ = m,
        f;
      if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        var g = c
          ? s._(/*BTDS*/ "Catalog (temporarily disabled)")
          : s._(/*BTDS*/ "Catalog");
        ((f = u.jsx(r("WDSMenuItem.react"), {
          testid: void 0,
          Icon: r("WDSIconIcGridOn.react"),
          onPress: _,
          title: g,
          disabled: n,
        })),
          (e[5] = f));
      } else f = e[5];
      return f;
    }
    function d() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebShopsLog").logShopsManagementEvent(
          o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
            .ACTION_CLICK_CANCEL_IN_CATALOG_SETTING,
        ));
    }
    l.default = c;
  },
  226,
);
