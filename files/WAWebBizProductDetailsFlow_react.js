__d(
  "WAWebBizProductDetailsFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WATimeUtils",
    "WAWebBizEntryPoint",
    "WAWebBizGatingUtils",
    "WAWebBizLinkedCatalogErrorPopup.react",
    "WAWebBizShowCartAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebCartOrderDetailDrawer.react",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDBUpdateMessageTable",
    "WAWebDrawerContext",
    "WAWebFbtCommon",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebOrderCollection",
    "WAWebOrderCreationFlowLoadable",
    "WAWebOrderDetailDrawerContainer.react",
    "WAWebOrderDetailProductListDrawer.react",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderStatusUpdateDrawer.react",
    "WAWebOrdersExpansionUtils",
    "WAWebProductCatalogCatalogLinkDrawer.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductDetailsDrawer.react",
    "WAWebProductCatalogProductDetailsWithDeepLink.react",
    "WAWebProductCatalogProductLinkDrawer.react",
    "WAWebProductCatalogProductListDrawer.react",
    "WAWebProductCatalogProductMessageListDrawer.react",
    "WAWebProductCatalogProductMoreInformationDrawer.react",
    "WAWebProductCollectionCatalogViewDrawer.react",
    "WAWebProductCollectionCollectionContentDrawer.react",
    "WAWebProtobufsE2E.pb",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUim",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useState,
      f = function (t) {
        if (
          o("WAWebBizGatingUtils").isSellerOrderRevampEnabled() &&
          t != null
        ) {
          var e = {
            status: o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
              .ACCEPTED,
          };
          o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, e);
          var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
          n && n.set(e);
        }
      },
      g = n("$InternalEnum").Mirrored([
        "Cart",
        "CartOrderDetail",
        "CatalogCollection",
        "CatalogLink",
        "CatalogView",
        "OrderCreation",
        "OrderDetail",
        "OrderDetailProductList",
        "OrderStatusUpdate",
        "ProductDetails",
        "ProductDetailsFlow",
        "ProductDetailsWithDeepLink",
        "ProductLink",
        "ProductList",
        "ProductMessageList",
        "ProductMoreInformation",
      ]);
    function h(t) {
      var a,
        i,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = u.catalogOwnerJid,
        y = u.chat,
        C = u.collection,
        b = u.collectionId,
        v = u.entryPoint,
        S = u.interactiveMessage,
        R = u.isAllItems,
        L = u.onEnd,
        E = u.onlyShowPaymentDetails,
        k = u.orderId,
        I = u.orderInfo,
        T = u.orderMessage,
        D = u.product,
        x = u.productInfo,
        $ = u.productListId,
        P = u.refreshCarousel,
        N = u.sellerJid,
        M = u.token,
        w = u.userIsCartOwner,
        A = o("useWAWebFlow").useFlow(void 0, { onEnd: L }),
        F = A[0],
        O = A[1],
        B = _(),
        W = B[0],
        q = B[1],
        U = _(),
        V = U[0],
        H = U[1],
        G = _(),
        z = G[0],
        j = G[1],
        K = _(),
        Q = K[0],
        X = K[1],
        Y = _(),
        J = Y[0],
        Z = Y[1],
        ee = _(),
        te = ee[0],
        ne = ee[1],
        re = _(),
        oe = re[0],
        ae = re[1],
        ie = _(),
        le = ie[0],
        se = ie[1],
        ue = _(),
        ce = ue[0],
        de = ue[1],
        me = _(),
        pe = me[0],
        _e = me[1],
        fe = _(),
        ge = fe[0],
        he = fe[1],
        ye = _(),
        Ce = ye[0],
        be = ye[1],
        ve = _(),
        Se = ve[0],
        Re = ve[1],
        Le = _(),
        Ee = Le[0],
        ke = Le[1],
        Ie = _(0),
        Te = Ie[0],
        De = Ie[1],
        xe = m(o("WAWebDrawerContext").DrawerContext),
        $e = function (t) {
          var e = o("WAWebContactCollection").ContactCollection.gadd(t);
          (Re(e), q(t), O.push(g.CatalogCollection));
        },
        Pe = function (t, n) {
          var e = o("WAWebContactCollection").ContactCollection.gadd(n);
          (Re(e), q(n), Z(t), O.push(g.ProductMessageList));
        },
        Ne = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebContactCollection").ContactCollection.gadd(e),
              n = yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(e);
            (Re(t),
              q(e),
              H(n),
              o("WAWebBusinessProfileUtils").hasCatalog(n)
                ? O.push(g.CatalogView)
                : O.push(g.ProductList));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Me = function (t, n) {
          var e = t.id.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser());
          o(
            "WAWebBizLinkedCatalogErrorPopup.react",
          ).showConnectedCatalogDisabledPopup(n, e, function () {
            O.end();
          });
        },
        we = function (t, n) {
          (j(t), ae(n), O.push(g.ProductDetails));
        },
        Ae = function (t) {
          (X(t), O.push(g.ProductDetailsWithDeepLink));
        },
        Fe = function (t, n) {
          n === void 0 && (n = null);
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          new (o(
            "WAWebOrderDetailsActionsSmbWamEvent",
          ).OrderDetailsActionsSmbWamEvent)({
            actionCategory: String(
              r("WAWebOrderDetailsActionCategory").RECEIVED_CART,
            ),
            hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
              o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                e,
              ),
            ),
            orderDetailEntryPoint: String(
              v != null ? v : r("WAWebBizEntryPoint").FROM_CART,
            ),
            orderDetailsCreationAction: o(
              "WAWebWamEnumOrderDetailsCreationAction",
            ).ORDER_DETAILS_CREATION_ACTION
              .CLICK_CREATE_ORDER_DETAILS_FROM_CART,
          }).commit();
          var a = function () {
            (de(t),
              _e(function () {
                return n;
              }),
              O.push(g.OrderCreation));
          };
          r(
            "WAWebSmbDataSharingOptInModalDialog",
          ).maybeShowOrderDataSharingDialog(
            y,
            a,
            o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CART,
          );
        },
        Oe = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              action: { actionText: r("WAWebFbtCommon")("OK"), dismiss: !0 },
              msg: s._(/*BTDS*/ "Something went wrong. Please try again."),
              id: o("WAWebToast.react").genId(),
            }),
          );
        },
        Be = function (t) {
          (he(t), O.push(g.CartOrderDetail));
        },
        We = function () {
          O.push(g.OrderDetail);
        },
        qe = function () {
          if (k != null && M != null && N != null && w != null) {
            var e = !0;
            Be(e);
          }
          o("WAWebModalManager").ModalManager.close();
        },
        Ue = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "biz-product-details",
              },
              onCancel: o("WAWebModalManager").closeModalManager,
              cancelText: s._(/*BTDS*/ "Do not decline"),
              onOK: qe,
              okText: s._(/*BTDS*/ "Decline"),
              title: s._(/*BTDS*/ "Decline this order?"),
              children: s._(
                /*BTDS*/ "You can include a note with the cancellation message.",
              ),
            }),
          );
        };
      (p(function () {
        o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
          {
            activityType: "isCommerceViewed",
            chatId: y.id,
            ts: o("WATimeUtils").unixTime(),
          },
        ]);
      }, []),
        p(
          function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.find(e);
                  H(t);
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
            if (d != null) {
              if (V == null) {
                e(o("WAWebWidFactory").createWid(d));
                return;
              }
              if (
                (V == null ? void 0 : V.isCatalogDisabledDueToMetaLinking) ===
                !0
              ) {
                Me(V, !1);
                return;
              }
              C != null || R === !0
                ? $e(o("WAWebWidFactory").createWid(d))
                : $ != null
                  ? Pe($, o("WAWebWidFactory").createWid(d))
                  : Ne(o("WAWebWidFactory").createWid(d));
            } else if (D) {
              if (V == null) {
                e(D.catalogWid);
                return;
              }
              if (
                (V == null ? void 0 : V.isCatalogDisabledDueToMetaLinking) ===
                !0
              ) {
                Me(V, !0);
                return;
              }
              we(D, b);
            } else if (x) {
              if (V == null) {
                e(o("WAWebWidFactory").createWid(x.businessOwnerJid));
                return;
              }
              if (V != null && V.isCatalogDisabledDueToMetaLinking) {
                Me(V, !0);
                return;
              }
              Ae(x);
            } else if (k != null) {
              if (M != null && N != null && w != null) {
                var t = r("WAWebWid").equals.apply(
                  r("WAWebWid"),
                  o("WAWebLidMigrationUtils").toCommonAddressingMode(
                    o("WAWebWidFactory").createUserWidOrThrow(N),
                    o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                  ),
                );
                if (
                  t &&
                  o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()
                )
                  o("WAWebOrderCollection")
                    .OrderCollection.findOrder(k, N, M)
                    .then(function (e) {
                      Fe(r("WANullthrows")(e), Ue);
                    })
                    .catch(function () {
                      Oe();
                    });
                else {
                  var a = !1;
                  Be(a);
                }
              }
            } else if (I != null && N != null) We();
            else throw r("err")("ProductDetailsFlow:no-product");
          },
          [V],
        ));
      var Ve = function (t) {
          (se(t), O.push(g.ProductDetailsFlow));
        },
        He = function (t) {
          (ne(t), O.push(g.OrderDetailProductList));
        },
        Ge = function () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          (new (o(
            "WAWebOrderDetailsActionsSmbWamEvent",
          ).OrderDetailsActionsSmbWamEvent)({
            actionCategory: String(
              r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
            ),
            hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
              o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                e,
              ),
            ),
            orderDetailEntryPoint: String(v),
            orderDetailsCreationAction: o(
              "WAWebWamEnumOrderDetailsCreationAction",
            ).ORDER_DETAILS_CREATION_ACTION.CLICK_UPDATE_ORDER_STATUS,
          }).commit(),
            I != null && N != null && O.push(g.OrderStatusUpdate));
        },
        ze = function (t, n) {
          we(t, n);
        },
        je = function (t) {
          (j(t), O.push(g.ProductMoreInformation));
        },
        Ke = function (t) {
          Ae(t);
        },
        Qe = function (t, n) {
          (o("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
            catalogContext: n,
            catalogOwnerWid: t,
          }),
            Ne(t));
        },
        Xe = function (t) {
          (j(t), O.push(g.ProductLink));
        },
        Ye = function (t, n) {
          (be(t), Re(n), O.push(g.CatalogLink));
        },
        Je = function (t) {
          var e = o("WAWebProductCatalogContext").getProductCatalogContext(xe),
            n = r("WAWebBizShowCartAction")(t, y, e);
          n && (ke(t), O.push(g.Cart));
        },
        Ze = function () {
          O.pop();
        },
        et = function () {
          O.end(o("WAWebUim").DismissReason.LIFECYCLE);
        };
      if (O.step == null) return null;
      var tt;
      switch (O.step) {
        case g.Cart: {
          var nt = o("WAWebProductCatalogContext").getProductCatalogContext(xe),
            rt = r("WAWebBizShowCartAction")(r("WANullthrows")(Ee), y, nt);
          tt = r("WANullthrows")(rt);
          break;
        }
        case g.CartOrderDetail:
          tt = c.jsx(r("WAWebCartOrderDetailDrawer.react"), {
            orderId: r("WANullthrows")(k),
            token: r("WANullthrows")(M),
            sellerJid: r("WANullthrows")(N),
            userIsCartOwner: r("WANullthrows")(w),
            onProductDetail: Ke,
            onOrderCreate: Fe,
            onOrderCancel: Ue,
            ownerHasReviewed: !!ge,
            orderMessage: T,
            chat: y,
          });
          break;
        case g.CatalogCollection:
          tt = c.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
            contact: r("WANullthrows")(Se),
            onProductDetail: ze,
            catalogId: r("WANullthrows")(W),
            onBack: Ze,
            onCatalogLinkClick: Ye,
            onCartClick: Je,
            scrollOffset: Te,
            setScrollOffset: De,
            collection: C,
          });
          break;
        case g.CatalogLink:
          tt = c.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
            catalog: r("WANullthrows")(Ce),
            contact: r("WANullthrows")(Se),
            onBack: Ze,
          });
          break;
        case g.CatalogView:
          tt = c.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
            contact: r("WANullthrows")(Se),
            onProductDetail: ze,
            catalogId: r("WANullthrows")(W),
            onBack: Ze,
            businessProfile: V,
            scrollOffset: Te,
            setScrollOffset: De,
            onCatalogLinkClick: Ye,
            onCartClick: Je,
            onCollectionSeeAll: Ve,
          });
          break;
        case g.OrderCreation:
          tt = c.jsx(r("WAWebOrderCreationFlowLoadable"), {
            entryPoint: v != null ? v : r("WAWebBizEntryPoint").FROM_CART,
            onBack: Ze,
            order: ce != null ? ce : void 0,
            chat: y,
            onDeclineOrder: pe,
            onSend: function () {
              return f(T);
            },
          });
          break;
        case g.OrderDetail:
          tt = c.jsx(r("WAWebOrderDetailDrawerContainer.react"), {
            entryPoint: v,
            onlyShowPaymentDetails: E,
            onBack: Ze,
            orderInfo: r("WANullthrows")(I),
            sellerWid: o("WAWebWidFactory").createWid(r("WANullthrows")(N)),
            chat: y,
            onProductSummaryClick: He,
            onOrderStatusUpdateClick: Ge,
            interactiveMessage: S,
          });
          break;
        case g.OrderDetailProductList:
          tt = c.jsx(r("WAWebOrderDetailProductListDrawer.react"), {
            onBack: Ze,
            productItems: r("WANullthrows")(te),
          });
          break;
        case g.OrderStatusUpdate:
          tt = c.jsx(r("WAWebOrderStatusUpdateDrawer.react"), {
            entryPoint: v,
            chat: y,
            onBack: Ze,
            orderInfo: r("WANullthrows")(I),
            sellerJid: r("WANullthrows")(N),
          });
          break;
        case g.ProductDetails:
          tt = c.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
            chat: y,
            product: r("WANullthrows")(z),
            onEnd: et,
            onBack: Ze,
            onProductDetail: ze,
            onProductCatalog: Qe,
            onProductLinkClick: Xe,
            onProductMoreInformation: je,
            refreshCarousel: P,
            onCartClick: Je,
            collectionId: oe != null ? oe : void 0,
          });
          break;
        case g.ProductDetailsFlow:
          tt = c.jsx(h, {
            chat: y,
            catalogOwnerJid:
              (a =
                (i =
                  d != null
                    ? d
                    : D == null
                      ? void 0
                      : D.catalogWid.toString()) != null
                  ? i
                  : x == null
                    ? void 0
                    : x.businessOwnerJid) != null
                ? a
                : N,
            collection: le != null ? le : void 0,
            isAllItems: !le,
            interactiveMessage: u.interactiveMessage,
          });
          break;
        case g.ProductDetailsWithDeepLink:
          tt = c.jsx(r("WAWebProductCatalogProductDetailsWithDeepLink.react"), {
            chat: y,
            productInfo: r("WANullthrows")(Q),
            onEnd: et,
            onBack: Ze,
            onProductDetail: ze,
            onProductCatalog: Qe,
            onProductLinkClick: Xe,
            onProductMoreInformation: je,
            onCartClick: Je,
          });
          break;
        case g.ProductLink:
          tt = c.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
            product: r("WANullthrows")(z),
            onBack: Ze,
          });
          break;
        case g.ProductList:
          tt = c.jsx(r("WAWebProductCatalogProductListDrawer.react"), {
            contact: r("WANullthrows")(Se),
            onProductDetail: ze,
            catalogId: r("WANullthrows")(W),
            onBack: Ze,
            businessProfile: V,
            setScrollOffset: De,
            onCatalogLinkClick: Ye,
            onCartClick: Je,
          });
          break;
        case g.ProductMessageList:
          tt = c.jsx(r("WAWebProductCatalogProductMessageListDrawer.react"), {
            contact: r("WANullthrows")(Se),
            productListId: r("WANullthrows")(J),
            onProductDetail: ze,
            onCartClick: Je,
            onBack: Ze,
            onEnd: et,
            setScrollOffset: De,
            catalogWid: r("WANullthrows")(W),
          });
          break;
        case g.ProductMoreInformation:
          tt = c.jsx(
            r("WAWebProductCatalogProductMoreInformationDrawer.react"),
            { product: r("WANullthrows")(z), onBack: Ze },
          );
          break;
      }
      return c.jsx(F, {
        ref: l,
        flow: O,
        displayName: "ProductDetailsFlow",
        children: tt,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
