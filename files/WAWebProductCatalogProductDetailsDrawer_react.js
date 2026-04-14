__d(
  "WAWebProductCatalogProductDetailsDrawer.react",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizProductCatalogAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebCartCollection",
    "WAWebCatalogCollection",
    "WAWebCatalogLoadError.react",
    "WAWebCatalogLoadErrorLoadable",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDirectConnectionGatingUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebProductCatalogCatalogDrawerSection.react",
    "WAWebProductCatalogCheckCartEnabled",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogDetailDrawerMenu.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductDetailsInfo.react",
    "WAWebProductCatalogProductPostcodeChangeBanner",
    "WAWebProductCatalogProductTile.react",
    "WAWebProductCatalogReportProductFlow",
    "WAWebProductCollection",
    "WAWebProductDetailsInfoVariants.react",
    "WAWebProductTypes.flow",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = ["ref"],
      g,
      h,
      y,
      C = y || (y = o("react")),
      b = y,
      v = b.useContext,
      S = b.useEffect,
      R = b.useMemo,
      L = b.useState,
      E = { surface: "catalog-item" },
      k = {
        availabilityBanner: {
          display: "x78zum5",
          lineHeight: "x1fc57z9",
          backgroundColor: "x16w0wmm",
          $$css: !0,
        },
        text: { fontWeight: "xk50ysn", $$css: !0 },
        loadingText: { color: "xxr6tci", $$css: !0 },
        loadingContainer: {
          position: "x10l6tqk",
          zIndex: "x12xzxwr",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          background: "xsm26vf",
          boxShadow: "x1499u3w",
          opacity: "x1hc1fzr",
          transitionProperty: "xfagghw",
          transitionDuration: "xofcydl",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        shiftUp: {
          position: "x10l6tqk",
          zIndex: "xuvdrym",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          background: "xsm26vf",
          boxShadow: "x1499u3w",
          transitionProperty: "xfagghw",
          transitionDuration: "x1wsgiic",
          transitionTimingFunction: "x9lcvmn",
          transform: "x1mbp4g0",
          $$css: !0,
        },
        body: { flex: "x1okw0bk", $$css: !0 },
      };
    function I(e) {
      var t = e.isAvailable,
        n = e.productCatalogFetchState,
        a = e.productFetchState,
        i = e.productSanctioned,
        l;
      a === "ERROR" || a === "TOKEN_RECOVERY_REQUIRED"
        ? (l = C.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            xstyle: [k.text, o("WAWebUISpacing").uiMargin.horiz10],
            color: "critical",
            children: s._(/*BTDS*/ "Something went wrong"),
          }))
        : t
          ? (l = [
              C.jsx(
                o("WAWebSpinner.react").Spinner,
                { size: 14, color: "highlight" },
                "DetailDrawer-loadingBar-spinner",
              ),
              C.jsx(
                o("WAWebText.react").WAWebTextSmall,
                {
                  as: "span",
                  xstyle: [
                    k.text,
                    o("WAWebUISpacing").uiMargin.horiz10,
                    k.loadingText,
                  ],
                  children: s._(/*BTDS*/ "Waiting for network"),
                },
                "DetailDrawer-loadingBar-msg",
              ),
            ])
          : i === !0 && o("WAWebBizGatingUtils").isCountryOfOriginEnabled()
            ? (l = C.jsx(o("WAWebText.react").WAWebTextSmall, {
                as: "span",
                xstyle: [k.text, o("WAWebUISpacing").uiMargin.horiz10],
                color: "critical",
                children: s._(
                  /*BTDS*/ "This item has been removed and is no longer available for purchase.",
                ),
              }))
            : (l = C.jsx(o("WAWebText.react").WAWebTextSmall, {
                as: "span",
                xstyle: [k.text, o("WAWebUISpacing").uiMargin.horiz10],
                color: "critical",
                children: s._(
                  /*BTDS*/ "This product or service has been removed",
                ),
              }));
      var u = a === "PENDING" || n === "PENDING",
        c = u || !t;
      return C.jsx(
        "div",
        babelHelpers.extends(
          {},
          (h || (h = r("stylex"))).props(
            c && k.loadingContainer,
            !c && k.shiftUp,
            c && o("WAWebUISpacing").uiPadding.all8,
          ),
          { children: l },
        ),
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.handleBack,
        n = e.menu;
      return C.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
        title: s._(/*BTDS*/ "Details"),
        onBack: t,
        type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        menu: n,
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(t) {
      "use no forget";
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, f),
        y = l.chat,
        b = l.collectionId,
        D = l.hideCatalogSection,
        x = l.hideDescription,
        $ = l.hideHeader,
        P = l.hideMessageBusinessButton,
        N = l.onBack,
        M = l.onCartClick,
        w = l.onProductCatalog,
        A = l.onProductDetail,
        F = l.onProductLinkClick,
        O = l.onProductMoreInformation,
        B = l.refreshCarousel,
        W = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        q = r("useWAWebUnmountSignal")(),
        U = v(o("WAWebDrawerContext").DrawerContext),
        V = L(l.product),
        H = V[0],
        G = V[1],
        z = o("useWAWebModelValues").useModelValues(H, [
          "id",
          "catalogWid",
          "productImageCollection",
          "fetchedFromServer",
          "name",
          "availability",
          "reviewStatus",
          "isSanctioned",
          "variantInfo",
        ]),
        j = L(null),
        K = j[0],
        Q = j[1],
        X = L(!1),
        Y = X[0],
        J = X[1],
        Z = L(null),
        ee = Z[0],
        te = Z[1],
        ne = L("NONE"),
        re = ne[0],
        oe = ne[1],
        ae = L("NONE"),
        ie = ae[0],
        le = ae[1],
        se = R(
          function () {
            return o("WAWebCartCollection").CartCollection.findCart(
              z.catalogWid.toString(),
            );
          },
          [z.catalogWid],
        );
      o("useWAWebListener").useListener(se, "change:cartItemCollection", W);
      var ue = function () {
          return N();
        },
        ce = function () {
          var t = z.catalogWid;
          o("WAWebCatalogCollection")
            .CatalogCollection.findCarouselCatalog(t)
            .then(function (e) {
              if (!q.aborted) {
                var t = Array.isArray(e) ? e[0] : e;
                (te(t || null), le(t ? "SUCCESS" : "NONE"));
              }
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (t) {
                  t.status === "not_found" || t.status === 404
                    ? (te(null), le("NOT_FOUND"))
                    : (te(null),
                      le("ERROR"),
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to fetch product catalog from server",
                          ])),
                      ));
                },
              ),
            );
        },
        de = function (t) {
          var e,
            n =
              (e = o("WAWebCatalogCollection").CatalogCollection.get(
                z.catalogWid,
              )) == null
                ? void 0
                : e.productCollection.get(t);
          n != null
            ? G(n)
            : o("WAWebCatalogCollection")
                .CatalogCollection.findProduct({
                  catalogWid: z.catalogWid,
                  productId: t.toString(),
                })
                .then(function (e) {
                  var n = e[0],
                    r = n == null ? void 0 : n.productCollection.get(t);
                  r && G(r);
                })
                .catch(function (e) {
                  o(
                    "WAWebProductDetailsInfoVariants.react",
                  ).showProductChangeErrorToast();
                });
        },
        me = function () {
          o("WAWebModalManager").ModalManager.open(
            C.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "product-catalog-details",
              },
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(
                /*BTDS*/ "This product or service has been removed",
              ),
            }),
          );
        },
        pe = function () {
          var e = z.catalogWid,
            t = z.id.toString();
          return o("WAWebCatalogCollection").CatalogCollection.findProduct({
            catalogWid: e,
            productId: t,
            productMsgMediaData:
              o("WAWebStateUtils").unproxy(z).productMsgMediaData,
            canLogQpl: !0,
          });
        },
        _e = function () {
          var e = z.catalogWid,
            t = pe(),
            a = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.find(e),
            i = !0;
          return (g || (g = n("Promise")))
            .all([a, t])
            .then(function (e) {
              var t = e[0];
              if (q.aborted) throw new (o("WAAbortError").AbortError)();
              return (
                (i = !1),
                o("WAWebUtilsLogQplEvents").qplEndProductView(2),
                Q(t),
                oe("SUCCESS"),
                t
              );
            })
            .then(function (e) {
              le(function (t) {
                if (t === "PENDING") {
                  if (!o("WAWebBusinessProfileUtils").hasCatalog(e))
                    return "NONE";
                  ce();
                }
                return t;
              });
            })
            .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").E404,
                function () {
                  (ue(),
                    me(),
                    oe("NOT_FOUND"),
                    (i = !1),
                    o("WAWebUtilsLogQplEvents").qplDropProductView());
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").CatalogUnknownError,
                function (e) {
                  (oe("ERROR"),
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to fetch product from server",
                        ])),
                    ));
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (e) {
                  (oe("ERROR"),
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to fetch product from server",
                        ])),
                    ));
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").AdAccountRecoveryRequiredError,
                function (e) {
                  (oe("TOKEN_RECOVERY_REQUIRED"),
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to fetch product: token recovery error",
                        ])),
                    ));
                },
              ),
            )
            .finally(function () {
              i && o("WAWebUtilsLogQplEvents").qplEndProductView(3);
            });
        };
      S(function () {
        if (
          (y &&
            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
              {
                activityType: "pdpViews",
                ts: o("WATimeUtils").unixTime(),
                chatId: y.id,
              },
            ]),
          B === !0)
        ) {
          var e = o("WAWebCatalogCollection").CatalogCollection.get(
            z.catalogWid,
          );
          e != null && e.productCollection && e.fetchedFromServer
            ? le("SUCCESS")
            : le("PENDING");
        }
        o("WAWebUtilsLogQplEvents").qplAnnotateProductView(
          o("WAWebUserPrefsMeUser").isMePnUser(z.catalogWid),
        );
        var t = z.catalogWid,
          n = z.id.toString();
        if (!t || !n) {
          o("WAWebUtilsLogQplEvents").qplDropProductView();
          return;
        }
        return (
          _e().catch(function () {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[product catalog] failed to fetch data",
                  ])),
              )
              .sendLogs("product-catalog-failed-to-fetch-data");
          }),
          r("WAWebProductCatalogCheckCartEnabled")(t)
            .then(function (e) {
              (J(e),
                o("WAWebProductCatalogLogEvents").logProductDetailView({
                  product: o("WAWebStateUtils").unproxy(z),
                  catalogContext: o(
                    "WAWebProductCatalogContext",
                  ).getProductCatalogContext(U),
                  cartToggle: e,
                  collectionId: b,
                }));
            })
            .catch(function () {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[product catalog] failed to check cart enabled",
                    ])),
                )
                .sendLogs("product-catalog-failed-to-check-cart-enabled");
            }),
          function () {
            var e = z.catalogWid,
              t = z.id.toString();
            if (!(!e || !t)) {
              var n = o("WAWebCatalogCollection").CatalogCollection.get(e),
                r = n && n.msgProductCollection.get(t);
              r != null &&
                r.fetchedFromServer &&
                n &&
                n.msgProductCollection.remove(r);
            }
          }
        );
      }, []);
      var fe = function () {
          (o("WAWebUtilsLogQplEvents").qplStartCartView("Product"),
            M == null || M(z.catalogWid.toString()));
        },
        ge = function () {
          o("WAWebModalManager").ModalManager.open(
            C.jsx(r("WAWebProductCatalogReportProductFlow"), {
              product: z,
              sessionId: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogSessionId(U),
            }),
          );
        },
        he = function () {
          (o("WAWebProductCatalogLogEvents").logProductShareLinkClick({
            product: z,
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(U),
          }),
            F(z));
        },
        ye = function (t, n) {
          (n === void 0 && (n = !0),
            y &&
              o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                {
                  activityType: t,
                  ts: o("WATimeUtils").unixTime(),
                  chatId: y.id,
                  boolValue: n,
                },
              ]));
        },
        Ce = function () {
          var e = o("WAWebCatalogCollection").CatalogCollection.get(
            z.catalogWid,
          );
          (o("WAWebBizProductCatalogAction").sendProductToChat(
            z,
            e,
            o("WAWebProductCatalogContext").getProductCatalogContext(U),
          ),
            ye("isCtaOnPdpClicked"),
            o("WAWebProductCatalogLogEvents").logProductMessageBusinessClick(
              z,
              o("WAWebProductCatalogContext").getProductCatalogContext(U),
            ));
        },
        be = function () {
          ye("isCartAddClicked");
        },
        ve = function () {
          var e = z,
            t = e.catalogWid,
            n = o("WAWebCatalogCollection").CatalogCollection.get(t);
          if (n) {
            var r = n.productCollection.get(e.id);
            o("WAWebCmd").Cmd.attachProduct({
              product: r
                ? o("WAWebStateUtils").unproxy(r)
                : o("WAWebStateUtils").unproxy(e),
            });
          }
        },
        Se = function () {
          O(z);
        },
        Re = function () {
          w &&
            w(
              z.catalogWid,
              o("WAWebProductCatalogContext").getProductCatalogContext(U),
            );
        },
        Le = function (t) {
          if ((o("WAWebUtilsLogQplEvents").qplStartProductView("Product"), A))
            return A(t);
        },
        Ee = function () {
          var e = z.reviewStatus;
          return (
            e === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED
          );
        },
        ke = function () {
          return (
            re !== "ERROR" &&
            re !== "NOT_FOUND" &&
            !Ee() &&
            z.isSanctioned !== !0
          );
        },
        Ie = ke(),
        Te = o("WAWebBusinessProfileUtils").hasCatalog(K) && !D,
        De = function () {
          pe()
            .then(function () {
              var e = o("WAWebCatalogCollection").CatalogCollection.get(
                z.catalogWid,
              );
              e && (e.stale = !0);
            })
            .catch(function () {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[product catalog] fetch failed after postcode change",
                    ])),
                )
                .sendLogs(
                  "product-catalog-failed-to-fetch-product-after-postcode-change",
                );
            });
        },
        xe = function () {
          return o(
            "WAWebProductTypes.flow",
          ).PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(z.availability)
            ? C.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (h || (h = r("stylex"))).props([
                    k.availabilityBanner,
                    o("WAWebUISpacing").uiPadding.vert18,
                    o("WAWebUISpacing").uiPadding.horiz30,
                    o("WAWebUISpacing").uiMargin.bottom0,
                  ]),
                  {
                    children: [
                      z.availability ===
                      o("WAWebProductTypes.flow").ProductAvailability
                        .OUT_OF_STOCK
                        ? s._(/*BTDS*/ "This item is out of stock.")
                        : null,
                      z.availability ===
                        o("WAWebProductTypes.flow").ProductAvailability
                          .AVAILABLE_FOR_ANOTHER_POSTCODE &&
                      o(
                        "WAWebDirectConnectionGatingUtils",
                      ).enablePostcodeInCatalog()
                        ? C.jsx(
                            r("WAWebProductCatalogProductPostcodeChangeBanner"),
                            {
                              catalogWid: z.catalogWid,
                              postcodeChangeSuccess: De,
                            },
                          )
                        : null,
                    ],
                  },
                ),
              )
            : null;
        },
        $e;
      return (
        ke() &&
          ($e = o(
            "WAWebProductCatalogDetailDrawerMenu.react",
          ).getDetailDrawerMenu({
            onSendProduct: ve,
            onReportProduct: ge,
            onProductLinkClick: he,
            onProductMoreInformation: Se,
            onCartClick: Y ? fe : void 0,
            cartCount: se.itemCount,
            catalogId: z.catalogWid.toString(),
            contactId: y == null ? void 0 : y.contact.id,
          })),
        C.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: i,
            onDrop: ue,
            theme: "striped",
            tsNavigationData: E,
            children: [
              !$ && C.jsx(T, { handleBack: ue, menu: $e }),
              C.jsx(r("WAWebDrawerBody.react"), {
                children: C.jsxs(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    (h || (h = r("stylex"))).props([
                      k.body,
                      o("WAWebUISpacing").uiPadding.bottom32,
                    ]),
                    {
                      children: [
                        C.jsx(I, {
                          productFetchState: re,
                          productCatalogFetchState: ie,
                          isAvailable: Ie,
                          productSanctioned: !!z.isSanctioned,
                        }),
                        C.jsx(r("WAWebProductCatalogProductTile.react"), {
                          product: z,
                          isAvailable: Ie,
                          fetching: re === "PENDING",
                        }),
                        xe(),
                        re === "TOKEN_RECOVERY_REQUIRED" &&
                          C.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (h || (h = r("stylex"))).props(
                                o("WAWebUISpacing").uiMargin.top36,
                              ),
                              {
                                children: C.jsx(
                                  o("WAWebCatalogLoadError.react")
                                    .CatalogLoadError,
                                  {
                                    ctaDisplayType: o(
                                      "WAWebCatalogLoadErrorLoadable",
                                    ).CTADisplayType.LINK,
                                    shouldShowHeader: !1,
                                  },
                                ),
                              },
                            ),
                          ),
                        C.jsx(
                          r("WAWebProductCatalogProductDetailsInfo.react"),
                          {
                            product: z,
                            collectionId: b,
                            onSendChat: Ce,
                            onAddToCart: be,
                            isAvailable: Ie,
                            hideRetailerID:
                              (a = l.chat) == null
                                ? void 0
                                : a.contact.isEnterprise,
                            onProductChange: de,
                            hideMessageBusinessButton: P,
                            hideDescription: x,
                          },
                        ),
                        Te && ee
                          ? C.jsx(
                              r(
                                "WAWebProductCatalogCatalogDrawerSection.react",
                              ),
                              {
                                catalog: ee,
                                onProductCatalog: Re,
                                onProductDetail: Le,
                                filterProductId: z.id.toString(),
                                title: s._(/*BTDS*/ "More"),
                                animation: !1,
                              },
                            )
                          : null,
                      ],
                    },
                  ),
                ),
              }),
            ],
          },
          "product-details-drawer",
        )
      );
    }
    ((D.displayName = D.name + " [from " + i.id + "]"), (l.default = D));
  },
  226,
);
