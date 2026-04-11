__d(
  "WAWebCommerceButton.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebBusinessProfileUtils",
    "WAWebDrawerManager",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebShopIcon.react",
    "WAWebStorefrontIcon.react",
    "WAWebTabOrder",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCatalogEntryPoint",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { buttonMargin: { marginInlineStart: "x150mmf0", $$css: !0 } };
    function d(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(15),
        i = e.chat,
        l = e.disabled,
        d = l === void 0 ? !1 : l,
        m = r("useWAWebUIM")(),
        p = i.contact,
        _;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["businessProfile"]), (a[0] = _))
        : (_ = a[0]);
      var f = o("useWAWebModelValues").useModelValues(p, _),
        g = f.businessProfile,
        h;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["profileOptions", "catalogStatus"]), (a[1] = h))
        : (h = a[1]);
      var y = o("useWAWebModelValues").useOptionalModelValues(g, h);
      if (o("WAWebBusinessProfileUtils").hasShop(g)) {
        if (
          o("WAWebBizGatingUtils").bannedShopsEnabled() &&
          o("WAWebBusinessProfileUtils").isShopBanned(g)
        )
          return null;
        var C;
        a[2] !== i.contact.businessProfile
          ? ((C = function (t) {
              (t == null || t.preventDefault(),
                o("WAWebBusinessProfileUtils").goToShop(
                  i.contact.businessProfile,
                ));
            }),
            (a[2] = i.contact.businessProfile),
            (a[3] = C))
          : (C = a[3]);
        var b = C,
          v;
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(/*BTDS*/ "Shop")), (a[4] = v))
          : (v = a[4]);
        var S;
        a[5] !== d || a[6] !== b
          ? ((S = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
              testid: void 0,
              icon: o("WAWebShopIcon.react").ShopIcon,
              title: v,
              onClick: b,
              disabled: d,
              marginInlineXstyle: c.buttonMargin,
            })),
            (a[5] = d),
            (a[6] = b),
            (a[7] = S))
          : (S = a[7]);
        var R = S;
        return R;
      }
      if (g != null && g.isCatalogDisabledDueToMetaLinking) return null;
      if (
        (y == null || (t = y.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG ||
        ((y == null || (n = y.profileOptions) == null
          ? void 0
          : n.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG &&
          o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled()) ||
        (y == null ? void 0 : y.catalogStatus) ===
          o("WAWebBusinessProfileCollection").CATALOG_EXISTS
      ) {
        var L;
        a[8] !== i || a[9] !== m
          ? ((L = function (t) {
              (t == null || t.preventDefault(),
                o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(
                  "ChatHeader",
                ));
              var e = o(
                  "WAWebProductCatalogContext",
                ).buildProductCatalogContext(
                  new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                  o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                  o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                    .CATALOG_ENTRY_POINT_CHAT,
                ),
                n = i.contact.id;
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                u.jsx(
                  o("WAWebProductDetailsFlowLoadable")
                    .ProductDetailsFlowLoadable,
                  { chat: i, catalogOwnerJid: n.toJid() },
                ),
                { transition: "slide-left", uim: m, newDrawerContext: e },
              );
            }),
            (a[8] = i),
            (a[9] = m),
            (a[10] = L))
          : (L = a[10]);
        var E = L,
          k;
        a[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = s._(/*BTDS*/ "Catalog")), (a[11] = k))
          : (k = a[11]);
        var I;
        a[12] !== d || a[13] !== E
          ? ((I = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
              testid: void 0,
              icon: o("WAWebStorefrontIcon.react").StorefrontIcon,
              title: k,
              onClick: E,
              disabled: d,
              marginInlineXstyle: c.buttonMargin,
            })),
            (a[12] = d),
            (a[13] = E),
            (a[14] = I))
          : (I = a[14]);
        var T = I;
        return T;
      }
      return null;
    }
    l.default = d;
  },
  226,
);
