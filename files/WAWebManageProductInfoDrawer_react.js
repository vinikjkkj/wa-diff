__d(
  "WAWebManageProductInfoDrawer.react",
  [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdvertisePill.react",
    "WAWebBizGatingUtils",
    "WAWebBizProductCatalogAction",
    "WAWebButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFlex.react",
    "WAWebLinkedCatalogHelper",
    "WAWebManageProductStatusBanner.react",
    "WAWebManageProfileLockup.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductDetailsInfo.react",
    "WAWebProductCatalogProductTile.react",
    "WAWebProductCollection",
    "WAWebText.react",
    "WAWebTextStatusCollection",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumLwiEntryPoint",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebServerGatedAdEntryPoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useState,
      g = { surface: "smb-catalog-product" },
      h = {
        productWrapper: { width: "x1l2rt3b", $$css: !0 },
        businessInfoTitle: { color: "x14ug900", $$css: !0 },
      };
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.catalog,
        l = a.collectionId,
        c = a.onCancel,
        m = a.onEditProduct,
        y = a.onShareProduct,
        b = p(o("WAWebDrawerContext").DrawerContext),
        v = o("useWAWebModelValues").useModelValues(a.product, [
          "id",
          "catalogWid",
          "name",
          "priceAmount1000",
          "description",
          "productImageCollection",
          "reviewStatus",
          "isSanctioned",
          "url",
          "canAppeal",
          "imageCdnUrl",
          "retailerId",
          "currency",
          "isHidden",
          "isSanctioned",
          "variantInfo",
        ]),
        S = f(!0),
        R = S[0],
        L = S[1],
        E =
          v.isHidden ||
          (v.isSanctioned === !0 &&
            o("WAWebBizGatingUtils").isCountryOfOriginEnabled());
      _(function () {
        (o("WAWebUtilsLogQplEvents").qplAnnotateProductView(
          o("WAWebUserPrefsMeUser").isMePnUser(v.catalogWid),
        ),
          i
            .pullProduct(v.id.toString(), !0)
            .then(function () {
              (a.handleProductChange(v.id.toString()),
                o("WAWebUtilsLogQplEvents").qplEndProductView(2));
            })
            .catch(C)
            .finally(function () {
              L(!1);
            }),
          o("WAWebProductCatalogLogEvents").logProductDetailView({
            product: v,
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(b),
            collectionId: l,
          }));
      }, []);
      var k = function () {
          (o("WAWebProductCatalogLogEvents").logEditProductClick(
            v,
            o("WAWebProductCatalogContext").getProductCatalogContext(b),
          ),
            m(v));
        },
        I = function (t) {
          y(v);
        },
        T = function () {
          (c(),
            o("WAWebBizProductCatalogAction").sendProductToChat(v, i),
            o("WAWebProductCatalogLogEvents").logProductMessageBusinessClick(
              v,
              o("WAWebProductCatalogContext").getProductCatalogContext(b),
            ));
        },
        D = d.jsx(o("WAWebText.react").WAWebTextMuted, {
          xstyle: [
            h.businessInfoTitle,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz20,
          ],
          children: s._(/*BTDS*/ "Business info"),
        }),
        x =
          v.reviewStatus !==
            o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED || E,
        $ = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo(),
        P = o("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint(
          "whatsapp_smb_web_catalog_product",
          $,
        ),
        N = P[0],
        M = P[1],
        w;
      if (
        !N &&
        v.reviewStatus ===
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED &&
        $ != null &&
        ($ !== "not-linked" ||
          o("WAWebBizGatingUtils").nativeAdsDogfoodEnabled()) &&
        o("WAWebBizGatingUtils").adCreationEntryPointCatalogProductEnabled()
      ) {
        var A = {
          activeAccountInfo: $,
          sourceAdCreation: "whatsapp_smb_web_catalog_product",
          productId: v.id.toString(),
        };
        w = d.jsx(r("WAWebAdvertisePill.react"), {
          ctaText: M == null ? void 0 : M.content,
          adCreationUrlInput: A,
          lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
            .SMB_PRODUCT_DETAILS_ADVERTISE_BUTTON,
          disabled: E,
        });
      }
      var F;
      o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog() ||
        (F = d.jsx(o("WAWebButton.react").Button, {
          type: "strong",
          onClick: k,
          testid: void 0,
          children: s._(/*BTDS*/ "Edit"),
        }));
      var O = d.jsxs(o("WAWebFlex.react").FlexRow, {
          gap: 32,
          children: [
            F,
            w,
            d.jsx(o("WAWebButton.react").Button, {
              type: "strong-primary",
              onClick: I,
              disabled: x,
              testid: void 0,
              children: s._(/*BTDS*/ "Share"),
            }),
          ],
        }),
        B = d.jsxs("div", {
          className: "x78zum5 x6s0dn4",
          children: [
            d.jsx("div", {
              className: "x6ikm8r x10wlt62 x1c3i2sq xk50ysn xlyipyv",
              children: v.name,
            }),
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.startAuto,
                  o("WAWebUISpacing").uiPadding.all0,
                  o("WAWebUISpacing").uiPadding.end10,
                ),
                { children: O },
              ),
            ),
          ],
        }),
        W = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        q = o("WAWebTextStatusCollection").TextStatusCollection.get(W),
        U =
          q && W
            ? d.jsx(r("WAWebDrawerSection.react"), {
                title: D,
                theme: "no-padding",
                children: d.jsx(r("WAWebManageProfileLockup.react"), {
                  status: q,
                  user: W,
                }),
              })
            : null,
        V = R
          ? d.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})
          : d.jsxs(d.Fragment, {
              children: [
                d.jsx(r("WAWebProductCatalogProductTile.react"), {
                  product: v,
                  isAvailable: !0,
                  fetching: !1,
                }),
                d.jsx(r("WAWebManageProductStatusBanner.react"), {
                  product: v,
                }),
                d.jsx(r("WAWebProductCatalogProductDetailsInfo.react"), {
                  product: v,
                  collectionId: l,
                  onSendChat: T,
                  isAvailable: !0,
                  onProductChange: a.handleProductChange,
                }),
              ],
            });
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: n,
          theme: "catalog",
          tsNavigationData: g,
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: B,
              titleStr: v.name,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: c,
              headingLevel: "2",
              focusBackOrCancel: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                d.jsx(r("WAWebDrawerSection.react"), {
                  theme: "center-column-fixed-width",
                  children: V,
                }),
                d.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    u.props([
                      h.productWrapper,
                      o("WAWebUISpacing").uiMargin.horizAuto,
                    ]),
                    { children: U },
                  ),
                ),
              ],
            }),
          ],
        },
        "catalog-link-drawer",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      o("WAWebUtilsLogQplEvents").qplEndProductView(3);
    }
    l.default = y;
  },
  226,
);
