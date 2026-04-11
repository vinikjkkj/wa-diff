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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.boostMenuOptionInput,
        a = e.canManageCatalog,
        i = e.onOpenCollections,
        l = e.onOpenMerchantDetailsForm,
        c = e.onOpenSettings,
        d = e.onSendCatalog,
        m = e.ref;
      if (a) {
        var p, _;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = u.jsx(r("WDSIconIcShare.react"), {})),
            (_ = s._(/*BTDS*/ "Forward")),
            (t[0] = p),
            (t[1] = _))
          : ((p = t[0]), (_ = t[1]));
        var f;
        t[2] !== d
          ? ((f = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              testid: void 0,
              action: d,
              icon: p,
              children: _,
            })),
            (t[2] = d),
            (t[3] = f))
          : (f = t[3]);
        var g;
        t[4] !== i
          ? ((g =
              i &&
              u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                testid: void 0,
                action: i,
                icon: u.jsx(
                  o("WAWebCollectionRefreshedIcon.react")
                    .CollectionRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Collections"),
              })),
            (t[4] = i),
            (t[5] = g))
          : (g = t[5]);
        var h;
        t[6] !== l
          ? ((h =
              o(
                "WAWebBizGatingUtils",
              ).canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ) &&
              l &&
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: l,
                  icon: u.jsx(
                    o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                    {},
                  ),
                  children: s._(/*BTDS*/ "Business details"),
                },
                "merchantDetails",
              )),
            (t[6] = l),
            (t[7] = h))
          : (h = t[7]);
        var y;
        t[8] !== c
          ? ((y =
              c &&
              u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                testid: void 0,
                action: c,
                icon: u.jsx(
                  o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Settings"),
              })),
            (t[8] = c),
            (t[9] = y))
          : (y = t[9]);
        var C;
        t[10] !== n
          ? ((C =
              n != null &&
              u.jsx(r("WAWebAdCreationDropdownItem.react"), {
                adCreationUrlInput: n.adCreationUrlInput,
                ctaText: n.ctaText,
                lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CATALOG_LIST_ADVERTISE_MENU_ITEM,
              })),
            (t[10] = n),
            (t[11] = C))
          : (C = t[11]);
        var b;
        t[12] !== f || t[13] !== g || t[14] !== h || t[15] !== y || t[16] !== C
          ? ((b = u.jsxs(u.Fragment, { children: [f, g, h, y, C] })),
            (t[12] = f),
            (t[13] = g),
            (t[14] = h),
            (t[15] = y),
            (t[16] = C),
            (t[17] = b))
          : (b = t[17]);
        var v = b,
          S;
        t[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = s._(/*BTDS*/ "Menu")), (t[18] = S))
          : (S = t[18]);
        var R;
        t[19] !== v
          ? ((R = {
              menu: v,
              type: o("WAWebDropdown.react").MenuType.DropdownMenu,
              dirX: o("WAWebDropdown.react").DirX.LEFT,
              flipOnRTL: !0,
            }),
            (t[19] = v),
            (t[20] = R))
          : (R = t[20]);
        var L;
        return (
          t[21] !== m || t[22] !== R
            ? ((L = u.jsx(r("WDSMenuBarItem.react"), {
                ref: m,
                testid: void 0,
                icon: r("WDSIconIcMoreVert.react"),
                title: S,
                dropdownMenu: R,
              })),
              (t[21] = m),
              (t[22] = R),
              (t[23] = L))
            : (L = t[23]),
          L
        );
      }
      var E;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Catalog link")), (t[24] = E))
        : (E = t[24]);
      var k;
      return (
        t[25] !== d || t[26] !== m
          ? ((k = u.jsx(r("WDSMenuBarItem.react"), {
              ref: m,
              testid: void 0,
              icon: r("WDSIconIcLink.react"),
              title: E,
              onClick: d,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
            })),
            (t[25] = d),
            (t[26] = m),
            (t[27] = k))
          : (k = t[27]),
        k
      );
    }
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
