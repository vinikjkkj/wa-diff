__d(
  "WAWebBizOrderCreationFlow.react",
  [
    "$InternalEnum",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebBizSendOrderAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebCatalogCollection",
    "WAWebCurrencyUtils",
    "WAWebDataSharingUpsellModel",
    "WAWebDrawerManager",
    "WAWebL10NCountryCodes",
    "WAWebModalManager",
    "WAWebMultiSelection",
    "WAWebOrderAdditionalChargesFormDrawer",
    "WAWebOrderCatalogFormDrawer",
    "WAWebOrderCollection",
    "WAWebOrderConfirmDiscardModal",
    "WAWebOrderCustomItemFormDrawer",
    "WAWebOrderDetailMath",
    "WAWebOrderDetails",
    "WAWebOrderDetailsCreationActionWamEventUtil",
    "WAWebOrderEnterPriceToastMessage",
    "WAWebOrderItemModel",
    "WAWebOrderPaymentStatus",
    "WAWebOrderRequestDrawer.react",
    "WAWebOrderSummaryDrawer",
    "WAWebOrdersExpansionCountries",
    "WAWebUimUie.react",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPaymentInfo",
    "WAWebVelocityTransitionGroup",
    "asyncToGeneratorRuntime",
    "lodash",
    "react",
    "sumBy",
    "useLazyRef",
    "useWAWebCallbackOnce",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.experimental_useEffectEvent,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState,
      _ = n("$InternalEnum").Mirrored([
        "CATALOG_PRODUCTS_FORM",
        "CUSTOM_ITEM_FORM",
        "ORDER_SUMMARY",
        "ORDER_REQUEST",
        "ADDITIONAL_CHARGES_FORM",
      ]),
      f = Array.from(_.members()),
      g = r("lodash").memoize(function () {
        return o("WAWebCurrencyUtils").currencyForCountryShortcode(
          o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
          ),
        );
      });
    function h(e, t, n) {
      return e
        ? t.length !== e.products.length ||
            t.some(function (t, r) {
              var o, a;
              return (
                t.id !== e.products[r].id ||
                t.quantity !== e.products[r].quantity ||
                ((o = (a = t.price) != null ? a : n[t.id]) != null
                  ? o
                  : null) !== e.products[r].price
              );
            })
        : t.length > 0;
    }
    function y(e) {
      if (!e) return [];
      var t = { isCustomItem: !1, isQuantitySet: !0 },
        n = e.products.map(function (e) {
          return new (r("WAWebOrderItemModel"))(babelHelpers.extends({}, t, e));
        });
      return (
        o("WAWebOrderEnterPriceToastMessage").notifyIfAnyProductMissesPrice(
          n,
          {},
        ),
        n
      );
    }
    function C() {
      var e = [];
      return (
        o(
          "WAWebBizFrontendGatingUtils",
        ).isOrderDetailsPaymentInstructionsSyncEnabled() &&
          o("WAWebUserPrefsPaymentInfo").isCPIInfoValid() &&
          e.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.CPI),
        o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled() &&
          o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() &&
          e.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX),
        e
      );
    }
    function b(e) {
      var t,
        a,
        i = e.chat,
        l = e.entryPoint,
        u = e.onBack,
        b = e.onCancel,
        v = e.onDeclineOrder,
        S = e.onSend,
        R = e.order,
        L = e.ref,
        E = r("useWAWebUnmountSignal")(),
        k =
          (l === r("WAWebBizEntryPoint").FROM_CART ||
            l === r("WAWebBizEntryPoint").ORDER_REQUEST_LIST) &&
          o("WAWebBizGatingUtils").isSellerOrderRevampEnabled(),
        I = k ? _.ORDER_REQUEST : _.ORDER_SUMMARY,
        T = p(I),
        D = T[0],
        x = T[1],
        $ = p(null),
        P = $[0],
        N = $[1],
        M = p(!1),
        w = M[0],
        A = M[1],
        F = p(function () {
          return y(R);
        }),
        O = F[0],
        B = F[1],
        W = p({}),
        q = W[0],
        U = W[1],
        V = p(null),
        H = V[0],
        G = V[1],
        z = r("useLazyRef")(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        j = z.current,
        K = o("WAWebCatalogCollection").CatalogCollection.get(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ),
        Q = function (t, n) {
          U(function (e) {
            var r;
            return babelHelpers.extends({}, e, ((r = {}), (r[n] = t), r));
          });
        },
        X = m(
          function () {
            return r("sumBy")(O, function (e) {
              var t, n;
              return (
                ((t = (n = q[e.id]) != null ? n : e.price) != null ? t : 0) *
                e.quantity
              );
            });
          },
          [O, q],
        ),
        Y = o("WAWebOrderDetailMath").calculateFlatAmounts({
          discountText: (H == null ? void 0 : H.discountText) || "",
          discountType: (H == null ? void 0 : H.discountType) || "",
          orderSubtotal: X / o("WAWebOrderDetailMath").DEFAULT_OFFSET,
          shippingText: (H == null ? void 0 : H.shippingText) || "",
          taxText: (H == null ? void 0 : H.taxText) || "",
          taxType: (H == null ? void 0 : H.taxType) || "",
        }),
        J = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        Z = o("WAWebBusinessProfileUtils").hasCatalog(
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(J),
        ),
        ee = g(),
        te = o(
          "WAWebOrdersExpansionCountries",
        ).getOrdersExpansionAllowedCurrencies(i.contact.id.user),
        ne = (t = (a = O.at(0)) == null ? void 0 : a.currency) != null ? t : ee,
        re = C(),
        oe = function () {
          var e = O.some(function (e) {
            return q[e.id];
          });
          l != null &&
            o("WAWebOrderDetailsCreationActionWamEventUtil")
              .createSendOrderDetailsWamEvent(i, l, O, Y, Z, e, re, ne)
              .commit();
          var t =
            R != null
              ? R
              : o("WAWebOrderCollection").OrderCollection.addOrder();
          ((t.products = O.map(function (e) {
            var t, n;
            return (
              (e.price = (t = q[e.id]) != null ? t : e.price),
              (e.currency = (n = e.currency) != null ? n : ee),
              e
            );
          })),
            (t.currency = ne),
            (t.subtotal = X),
            t.triggerItemCollectionUpdate(),
            o("WAWebBizSendOrderAction").sendOrderDetailsMessageAsMerchant({
              chat: i,
              discount: Y.discount,
              offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
              order: t,
              orderNote: "",
              shipping: Y.shipping,
              tax: Y.tax,
              total: Y.total,
            }),
            S == null || S(),
            o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
        },
        ae = r("useWAWebCallbackOnce")(function () {
          u
            ? u()
            : (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
              b == null || b());
        }),
        ie = function () {
          h(R, O, q)
            ? o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: ae }),
              )
            : ae();
        },
        le = function (t) {
          E.aborted ||
            (t !== !0 &&
              o(
                "WAWebOrderEnterPriceToastMessage",
              ).notifyIfAnyProductMissesPrice(O, q),
            x(I));
        },
        se = function () {
          x(_.CATALOG_PRODUCTS_FORM);
        },
        ue = function (t, n) {
          var e = Number.isInteger(t) ? t : null;
          (N(e),
            A(n === !0),
            x(
              e == null || O[e].isCustomItem
                ? _.CUSTOM_ITEM_FORM
                : _.CATALOG_PRODUCTS_FORM,
            ));
        },
        ce = function () {
          x(_.ADDITIONAL_CHARGES_FORM);
        },
        de = function (t, n) {
          var e = t.length,
            r = t.reduce(function (e, t, n) {
              return e.set(t.id, n);
            }, new Map());
          return n.toSorted(function (t, n) {
            var o, a;
            return (
              ((o = r.get(t.id)) != null ? o : e) -
              ((a = r.get(n.id)) != null ? a : e)
            );
          });
        },
        me = function (t) {
          return t.map(function (e) {
            var t;
            return new (r("WAWebOrderItemModel"))({
              id: e.id,
              isCustomItem: !1,
              isQuantitySet: !0,
              name: e.name,
              price: e.priceAmount1000,
              quantity: Number(j.getVal(e)),
              thumbnailUrl:
                (t = e.getPreviewImage()) == null ? void 0 : t.mediaUrl,
            });
          });
        },
        pe = function (t, n, r) {
          var e = K == null ? void 0 : K.productCollection.getProductModels(),
            o = new Set(
              n.map(function (e) {
                var t = e.id;
                return t;
              }),
            ),
            a = new Set(
              e == null
                ? void 0
                : e.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
            );
          return r.reduce(function (e, t) {
            var n = o.has(t.id),
              r = a.has(t.id);
            return n || r ? e : e.concat(t);
          }, t);
        },
        _e = function (t) {
          (t === void 0 && (t = !0),
            Z &&
              B(function (e) {
                var n = j.getSelected(),
                  r = me(n),
                  a = pe(r, n, e);
                return (
                  t &&
                    o(
                      "WAWebOrderEnterPriceToastMessage",
                    ).notifyIfAnyProductMissesPrice(a, q),
                  de(e, a)
                );
              }));
        },
        fe = function (t) {
          var e = t.currency,
            n = t.isQuantitySet,
            a = t.name,
            i = t.priceAmount1000,
            l = t.quantity,
            s =
              o("WAWebOrderDetails").getCustomItemIdPrefix() +
              "-" +
              r("WAWebBizOrderGetFriendlyRandomIdAction")();
          B(function (t) {
            var o = de(
              t,
              [].concat(t, [
                new (r("WAWebOrderItemModel"))({
                  currency: e,
                  id: s,
                  isCustomItem: !0,
                  isQuantitySet: n,
                  name: a,
                  price: i,
                  quantity: l != null ? l : 1,
                }),
              ]),
            );
            return o;
          });
        },
        ge = function (t) {
          return j.getSelected().find(function (e) {
            var n = e.id;
            return n === t.id;
          });
        },
        he = function (t, n) {
          j.setVal(t, n);
        },
        ye = function (t) {
          if (!O[t].isCustomItem) {
            var e = ge(O[t]);
            e && he(e, 0);
          }
          B(function (e) {
            return [].concat(e.slice(0, t), e.slice(t + 1));
          });
        },
        Ce = function (t, n) {
          n
            ? B(function (e) {
                var r = [].concat(e);
                return ((r[t].quantity = n), (r[t].isQuantitySet = !0), r);
              })
            : ye(t);
        },
        be = function (t, n) {
          var e = O[t];
          if (e.isCustomItem) Ce(t, n);
          else {
            var r = ge(O[t]);
            (r && he(r, n), _e(!1));
          }
        },
        ve = function () {
          var e = O.some(function (e) {
            return q[e.id];
          });
          (l != null &&
            o("WAWebOrderDetailsCreationActionWamEventUtil")
              .createClickAddItemWamEvent(l, Z, e)
              .commit(),
            Z && o("WAWebBizGatingUtils").orderDetailsFromCatalogEnabled()
              ? se()
              : ue());
        },
        Se = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (!(K == null || J == null))
              for (
                var t = K.productCollection.getProductModels(),
                  n,
                  r = t.length,
                  a = 0;
                (!n || !j.isSelected(n)) && a < r;
              ) {
                var i;
                (yield o("WAWebCatalogCollection").CatalogCollection.update(J),
                  (a = r),
                  (t = K.productCollection.getProductModels()),
                  (n =
                    (i = t) == null
                      ? void 0
                      : i.find(function (t) {
                          return t.id === e.id;
                        })),
                  n && he(n, e.quantity),
                  (r = t.length));
              }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Re = c(function () {
          if (R) {
            var e = K == null ? void 0 : K.productCollection.getProductModels(),
              t = function (n) {
                var t =
                  e == null
                    ? void 0
                    : e.find(function (e) {
                        return e.id === n.id;
                      });
                t ? he(t, n.quantity) : Se(n);
              };
            for (var n of R.products) t(n);
          }
        }),
        Le = function () {
          if ((_e(), le(!0), l)) {
            var e = O.some(function (e) {
              return q[e.id];
            });
            o("WAWebOrderDetailsCreationActionWamEventUtil")
              .createClickAddItemsWamEvent(l, Z, e)
              .commit();
          }
        },
        Ee = function (t) {
          switch (t) {
            case _.CATALOG_PRODUCTS_FORM:
              return s.jsx(r("WAWebOrderCatalogFormDrawer"), {
                currency: ee,
                productsSelection: j,
                orderItems: O,
                priceMap: q,
                onBack: le,
                onAddProducts: Le,
                onAddCustomItem: function () {
                  ue(null, !0);
                },
                onProductSelectionChange: he,
              });
            case _.CUSTOM_ITEM_FORM:
              return s.jsx(r("WAWebOrderCustomItemFormDrawer"), {
                currency: ne,
                eligibleCurrencies:
                  O.length === 0 && j.getSelected().length === 0 ? te : [],
                onBack: w ? se : le,
                onSaveCustomItem: function (t) {
                  (_e(), fe(t), le());
                },
                customItem: O[Number.isInteger(P) ? Number(P) : -1],
              });
            case _.ORDER_REQUEST:
              return s.jsx(
                o("WAWebOrderRequestDrawer.react").OrderRequestDrawer,
                {
                  chat: i,
                  currency: ne,
                  priceMap: q,
                  orderItems: O,
                  orderSubtotal: X,
                  additionalCharges: H,
                  flatAmounts: Y,
                  onPriceChange: Q,
                  onBack: ie,
                  onSubmit: oe,
                  onAdditionalCharges: ce,
                  onItemQuantityChange: be,
                  onAddItem: ve,
                  onDeclineOrder: v,
                  entryPoint: l,
                },
              );
            case _.ORDER_SUMMARY:
              return s.jsx(o("WAWebOrderSummaryDrawer").OrderSummaryDrawer, {
                chat: i,
                currency: ne,
                priceMap: q,
                orderItems: O,
                orderSubtotal: X,
                additionalCharges: H,
                flatAmounts: Y,
                onPriceChange: Q,
                onBack: ie,
                onSubmit: oe,
                onAddItem: ve,
                onAdditionalCharges: ce,
                onDeleteItem: ye,
                onItemQuantityChange: be,
                entryPoint: l,
                onDeclineOrder: v,
              });
            case _.ADDITIONAL_CHARGES_FORM:
              return s.jsx(r("WAWebOrderAdditionalChargesFormDrawer"), {
                currency: ne,
                additionalCharges: H,
                subtotal: X,
                onBack: le,
                onApply: function (t) {
                  (G(function (e) {
                    return babelHelpers.extends({}, e, t);
                  }),
                    le());
                },
              });
          }
        };
      if (
        (d(function () {
          return (
            Re(),
            function () {
              r("WAWebDataSharingUpsellModel").enableUpsell();
            }
          );
        }, []),
        !D)
      )
        return null;
      var ke = f.indexOf(D);
      return s.jsx(r("WAWebVelocityTransitionGroup"), {
        ref: L,
        children: s.jsx(
          o("WAWebUimUie.react").UIE,
          {
            displayName: "FlowDrawer" + ke,
            escapable: !0,
            children: s.jsx("div", { children: Ee(D) }),
          },
          ke,
        ),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
