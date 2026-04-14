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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          e,
        );
      if (
        !(
          o("WAWebMobilePlatforms").isSMB() &&
          !o(
            "WAWebBizGatingUtils",
          ).blockCatalogCreationECommerceComplianceIndia(t) &&
          !o(
            "WAWebProductCatalogMetaLinkingGatingUtils",
          ).shouldDisableCatalogDueToMetaLinkingForSelf()
        )
      )
        return null;
      var n = o(
          "WAWebProductCatalogMetaLinkingGatingUtils",
        ).shouldShowMetaLinkedDisabledCatalogTooltipForSelf(),
        a = o("WAWebBusinessProfileUtils").hasShop(t),
        i = function () {
          (o("WAWebBusinessProfileUtils").goToCommerceManager(t),
            o("WAWebShopsLog").logShopsManagementEvent(
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                .ACTION_CLICK_COMMERCE_MANAGER_IN_CATALOG_SETTING,
            ));
        },
        l = function (n) {
          if ((n == null || n.preventDefault(), a)) {
            var e =
              o("WAWebBizGatingUtils").bannedShopsEnabled() &&
              o("WAWebBusinessProfileUtils").isShopBanned(t);
            (o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Catalog disabled"),
                onOK: i,
                okText: s._(/*BTDS*/ "Commerce Manager"),
                onCancel: function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    o("WAWebShopsLog").logShopsManagementEvent(
                      o("WAWebWamEnumShopsManagementAction")
                        .SHOPS_MANAGEMENT_ACTION
                        .ACTION_CLICK_CANCEL_IN_CATALOG_SETTING,
                    ));
                },
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
        },
        c = a
          ? s._(/*BTDS*/ "Catalog (temporarily disabled)")
          : s._(/*BTDS*/ "Catalog"),
        d = "mi-catalog menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        testid: void 0,
        Icon: r("WDSIconIcGridOn.react"),
        onPress: l,
        title: c,
        disabled: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
