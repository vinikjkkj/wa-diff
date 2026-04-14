__d(
  "WAWebProductCatalogCatalogDrawerMenu.react",
  [
    "fbt",
    "WATypeUtils",
    "WAWebAdCreationDropdownItem.react",
    "WAWebBizGatingUtils",
    "WAWebCollectionRefreshedIcon.react",
    "WAWebCommonCartIconMenuBarItem.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebSettingsRefreshedIcon.react",
    "WAWebTabOrder",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWidFactory",
    "WDSIconIcLink.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcShare.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.boostMenuOptionInput,
        n = e.canManageCatalog,
        a = e.onOpenCollections,
        i = e.onOpenMerchantDetailsForm,
        l = e.onOpenSettings,
        c = e.onSendCatalog,
        d = e.ref;
      if (n) {
        var m = u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              testid: void 0,
              action: c,
              icon: u.jsx(r("WDSIconIcShare.react"), {}),
              children: s._(/*BTDS*/ "Forward"),
            }),
            a &&
              u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                testid: void 0,
                action: a,
                icon: u.jsx(
                  o("WAWebCollectionRefreshedIcon.react")
                    .CollectionRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Collections"),
              }),
            o(
              "WAWebBizGatingUtils",
            ).canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            ) &&
              i &&
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: i,
                  icon: u.jsx(
                    o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                    {},
                  ),
                  children: s._(/*BTDS*/ "Business details"),
                },
                "merchantDetails",
              ),
            l &&
              u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                testid: void 0,
                action: l,
                icon: u.jsx(
                  o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Settings"),
              }),
            t != null &&
              u.jsx(r("WAWebAdCreationDropdownItem.react"), {
                adCreationUrlInput: t.adCreationUrlInput,
                ctaText: t.ctaText,
                lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CATALOG_LIST_ADVERTISE_MENU_ITEM,
              }),
          ],
        });
        return u.jsx(r("WDSMenuBarItem.react"), {
          ref: d,
          testid: void 0,
          icon: r("WDSIconIcMoreVert.react"),
          title: s._(/*BTDS*/ "Menu"),
          dropdownMenu: {
            menu: m,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            dirX: o("WAWebDropdown.react").DirX.LEFT,
            flipOnRTL: !0,
          },
        });
      }
      return u.jsx(r("WDSMenuBarItem.react"), {
        ref: d,
        testid: void 0,
        icon: r("WDSIconIcLink.react"),
        title: s._(/*BTDS*/ "Catalog link"),
        onClick: c,
        tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.boostMenuOptionInput,
        n = e.canManageCatalog,
        a = e.cartCount,
        i = e.catalogId,
        l = e.onCartClick,
        s = e.onOpenCollections,
        d = e.onOpenMerchantDetailsForm,
        m = e.onOpenSettings,
        p = e.onSendCatalog,
        _;
      if (i != null) {
        var f,
          g = o("WAWebWidFactory").createWid(i),
          h =
            ((f = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()) ==
            null
              ? void 0
              : f.equals(g)) === !0;
        _ =
          !h && l
            ? u.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
                cartCountText:
                  o("WATypeUtils").isNumber(a) && a > 0 ? a.toString() : void 0,
                onClick: l,
                catalogOwnerJid: i,
              })
            : null;
      }
      var y = u.jsx(c, {
        canManageCatalog: n,
        onSendCatalog: p,
        onOpenCollections: s,
        onOpenMerchantDetailsForm: d,
        onOpenSettings: m,
        boostMenuOptionInput: t,
      });
      return [_, y];
    }
    l.getCatalogDrawerMenu = d;
  },
  226,
);
