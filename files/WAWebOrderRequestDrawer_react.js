__d(
  "WAWebOrderRequestDrawer.react",
  [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebCTWADataSharingModel",
    "WAWebCellFrame.react",
    "WAWebCommonQuantityControls.react",
    "WAWebConfirmPopup.react",
    "WAWebCurrencyUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebOrderAddItem",
    "WAWebOrderCatalogProductPrice",
    "WAWebOrderDetailSectionContainer.react",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderIcons",
    "WAWebOrderItemGetters",
    "WAWebOrderRequestDrawerOverflowMenu.react",
    "WAWebOrderSummaryDrawer",
    "WAWebOrderTotalPrice",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WAWebWdsIllOrderRequestIcon.react",
    "react",
    "stylex",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useState,
      f = {
        errorLabel: { textAlign: "x2b8uid", $$css: !0 },
        itemSummaryContainer: {
          columnGap: "x1trrmfo",
          rowGap: "x129bwdz",
          $$css: !0,
        },
        orderItemsContainer: {
          flexShrink: "xs83m0k",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.currency,
        a = t.details,
        i = t.items,
        l = t.onItemQuantityChange,
        s = t.onPriceChange,
        u = t.priceMap,
        d = _({}),
        p = d[0],
        g = d[1],
        h = m(
          function (e) {
            return (u == null ? void 0 : u[e.id]) != null || e.price
              ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled
              : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
          },
          [u],
        ),
        y = m(function (e, t) {
          g(function (n) {
            var r;
            return babelHelpers.extends({}, n, ((r = {}), (r[t.id] = e), r));
          });
        }, []),
        C = function (t) {
          var e, a;
          return c.jsx("div", {
            className: "x6s0dn4 x78zum5",
            children: c.jsx(
              o("WAWebOrderCatalogProductPrice").CatalogProductPrice,
              {
                price: (e = u == null ? void 0 : u[t.id]) != null ? e : t.price,
                priceStage: (a = p[t.id]) != null ? a : h(t),
                currency: n,
                orderItem: t,
                onPriceChange: function (n) {
                  return s == null ? void 0 : s(n, t.id);
                },
                onPriceStageChange: function (n) {
                  y(n, t);
                },
                onEnter: r("WAWebNoop"),
              },
            ),
          });
        };
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: f.orderItemsContainer,
        children: i.map(function (t, n) {
          var a,
            i = [];
          (a = t.properties) == null ||
            a.forEach(function (e) {
              var t = e[0],
                n = e[1];
              i.push(
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    c.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                      children: [t, ":\xA0"],
                    }),
                    c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      children: n,
                    }),
                  ],
                }),
              );
            });
          var s = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              i.length > 0 &&
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: o("WAWebUISpacing").uiMargin.vert5,
                  children: i,
                }),
              c.jsx(r("WAWebCommonQuantityControls.react"), {
                quantity: t.quantity,
                onAddOneClick: function () {
                  return l == null ? void 0 : l(n, t.quantity + 1);
                },
                onRemoveOneClick: function () {
                  return l == null ? void 0 : l(n, t.quantity - 1);
                },
              }),
            ],
          });
          return c.jsx(
            r("WAWebCellFrame.react"),
            {
              testid: void 0,
              className: (e || (e = r("stylex")))(
                n > 0 && o("WAWebUISpacing").uiMargin.top15,
              ),
              disabled: !0,
              image: c.jsx(o("WAWebOrderIcons").OrderItemIcon, {
                mediaData: t.thumbnailUrl
                  ? o("WAWebOrderItemGetters").getMediaData(t)
                  : null,
                useCustomIcon: t.isCustomItem,
              }),
              primary: c.jsx("span", {
                className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                title: t.name,
                children: t.name,
              }),
              secondary: s,
              theme: "add-order-item",
              detail: C(t),
            },
            n,
          );
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.currency,
        n = e.itemCount,
        r = e.subtotal,
        a = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
          s._plural(n, "count"),
        ]),
        i = s._(/*BTDS*/ "{total-currency-amount} (estimated total)", [
          s._param(
            "total-currency-amount",
            o("WAWebCurrencyUtils").formatAmount1000(t, r),
          ),
        ]);
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: [
          f.itemSummaryContainer,
          o("WAWebUISpacing").uiPadding.horiz16,
          o("WAWebUISpacing").uiPadding.bottom4,
        ],
        children: [
          c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            color: "primary",
            size: "16",
            weight: "semibold",
            children: a,
          }),
          c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            color: "secondary",
            size: "14",
            children: i,
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = function () {
      return (
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
      );
    };
    function C(e) {
      var t = e.onExit,
        n = s._(/*BTDS*/ "Get started"),
        r = s._(/*BTDS*/ "You received an order request"),
        a = s._(
          /*BTDS*/ "You can edit the price and quantity before you accept the order.",
        ),
        i = function () {
          (o("WAWebModalManager").ModalManager.close(), t());
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "order-request" },
        okText: n,
        onOverlayClick: i,
        onOK: i,
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          gap: 8,
          children: [
            c.jsx(
              o("WAWebWdsIllOrderRequestIcon.react").WdsIllOrderRequestIcon,
              { height: 120 },
            ),
            c.jsx(o("WAWebText.react").WAWebTextLarge, { children: r }),
            c.jsx(o("WAWebText.react").WAWebTextSmall, { children: a }),
          ],
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = { surface: "smb-sent-cart-details" };
    function v(e) {
      var t = e.additionalCharges,
        n = e.chat,
        a = e.currency,
        i = e.entryPoint,
        l = e.flatAmounts,
        u = e.onAddItem,
        d = e.onAdditionalCharges,
        m = e.onBack,
        v = e.onDeclineOrder,
        S = e.onItemQuantityChange,
        R = e.onPriceChange,
        L = e.onSubmit,
        E = e.orderItems,
        k = e.orderSubtotal,
        I = e.priceMap,
        T = _(y),
        D = T[0],
        x = T[1],
        $ = _(!1),
        P = $[0],
        N = $[1],
        M = r("useWAWebNux")(o("WAWebNux").NUX.ORDER_REQUEST_EDUCATION),
        w = M[0],
        A = M[1],
        F = M[2];
      p(function () {
        var e = function () {
          var e =
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
          x(e);
        };
        return (
          o(
            "WAWebCTWADataSharingModel",
          ).CTWADataSharingModel.subscribeForUpdates(e),
          function () {
            o(
              "WAWebCTWADataSharingModel",
            ).CTWADataSharingModel.unsubscribeFromUpdates(e);
          }
        );
      }, []);
      var O = E.every(function (e) {
          var t;
          return Number.isInteger((t = e.price) != null ? t : I[e.id]);
        }),
        B = E.length !== 0,
        W = o("WAWebOrderSummaryDrawer").getErrorLabel(O, l.total, a, n);
      p(
        function () {
          w &&
            o("WAWebModalManager").ModalManager.open(c.jsx(C, { onExit: F }));
        },
        [w, F],
      );
      var q = JSON.stringify({ order_eligible_to_send: B && W == null });
      return (
        p(
          function () {
            if (!P) {
              N(!0);
              var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
              new (o(
                "WAWebOrderDetailsActionsSmbWamEvent",
              ).OrderDetailsActionsSmbWamEvent)({
                actionCategory: String(
                  r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
                ),
                extraAttributes: q,
                hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
                  o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.get(e),
                ),
                orderDetailEntryPoint: String(i),
                orderDetailsCreationAction: o(
                  "WAWebWamEnumOrderDetailsCreationAction",
                ).ORDER_DETAILS_CREATION_ACTION.VIEW_CREATE_ORDER,
              }).commit();
            }
          },
          [P, i, q],
        ),
        c.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: b,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Order request"),
              onBack: m,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              menu:
                v != null
                  ? c.jsx(r("WAWebOrderRequestDrawerOverflowMenu.react"), {
                      onDecline: v,
                    })
                  : null,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                c.jsxs(r("WAWebDrawerSection.react"), {
                  xstyle: [
                    f.orderItemsContainer,
                    o("WAWebUISpacing").uiPadding.top20,
                    o("WAWebUISpacing").uiMargin.bottom0,
                  ],
                  theme: "refresh-padding-title",
                  children: [
                    !B &&
                      c.jsx(r("WAWebOrderAddItem"), {
                        title: s._(/*BTDS*/ "Add items"),
                        onClick: function () {
                          return u == null ? void 0 : u();
                        },
                      }),
                    B &&
                      c.jsxs(r("WAWebOrderDetailSectionContainer.react"), {
                        children: [
                          c.jsx(h, {
                            currency: a,
                            itemCount: E.length,
                            subtotal: k,
                          }),
                          c.jsx(g, {
                            currency: a,
                            priceMap: I,
                            items: E,
                            onPriceChange: R,
                            onItemQuantityChange: S,
                          }),
                          c.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
                            tax: l.tax,
                            discount: l.discount,
                            shipping: l.shipping,
                            currency: a,
                            subtotal: k,
                            additionalCharges: t,
                            canDisplayAdditionalCharges: B,
                            canChangeAdditionalCharges: B,
                            onAdditionalCharges: d,
                          }),
                        ],
                      }),
                    o("WAWebOrderSummaryDrawer").getDataSharing(
                      n,
                      E.length,
                      D,
                      function () {
                        return x(!D);
                      },
                    ),
                  ],
                }),
                c.jsxs(r("WAWebDrawerSection.react"), {
                  xstyle: o("WAWebUISpacing").uiPadding.bottom20,
                  children: [
                    W != null &&
                      c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                        color: "danger",
                        size: "16",
                        xstyle: f.errorLabel,
                        children: W,
                      }),
                    c.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
                      title: s._(/*BTDS*/ "Accept order"),
                      onClick: function () {
                        return o(
                          "WAWebOrderSummaryDrawer",
                        ).maybeShowDialogOnSubmit({
                          amount: l.total / 1e3,
                          chat: n,
                          currency: a,
                          onSubmit: L,
                          smbOptOut: D,
                        });
                      },
                      disabled: !B || W != null,
                      testid: void 0,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.OrderRequestEducationModal = C),
      (l.OrderRequestDrawer = v));
  },
  226,
);
