__d(
  "WAFlowsWELJStateReducer",
  [
    "invariant",
    "WAFlowsActionHandlerTypes",
    "WAFlowsNativeExperienceUtils",
    "WAFlowsNativeMediaUploadTypes",
    "WAFlowsShoppingCartStateUtils",
    "WAFlowsShoppingExternalDataChannelUtils",
    "WAFlowsShoppingStateUtils",
    "WAFlowsStateProvider.react",
    "immer",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r = t[t.length - 2],
        o = t[t.length - 1];
      r === n
        ? e.internal.screenHistory.pop()
        : o !== n && e.internal.screenHistory.push(n);
    }
    function u(e) {
      for (var t in e) typeof e[t] == "number" && (e[t] = e[t].toString());
    }
    function c(e, t) {
      switch (t.name) {
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_OFFSITE_CHECKOUT_UPDATE_DISCLOSURE:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedOffsiteCheckoutState(e, {
              disclosureState: t.payload.disclosureState,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_OFFSITE_CHECKOUT_SHOW_DISCLOSURE:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedOffsiteCheckoutState(e, {
              showDisclosure: t.payload.showDisclosure,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_CATEGORY_LIST_BACK:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedShoppingState(e, {
              categoryListPath: t.CategoryIdsPath,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_SHOPPING_LAST_PAGE_CALL:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedShoppingState(e, {
              shoppingLastPageCall: t.payload.pagingAfter,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_SHOPPING_CART_QUANTITY:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedShoppingState(e, {
              shoppingCartQuantity: t.payload.quantity,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_UPDATE_SOURCE:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedShoppingState(e, { source: t.payload.source });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_OFFSITE_CHECKOUT_UPDATE_LINKOUT_URLS:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedOffsiteCheckoutState(e, {
              linkoutUrls: t.payload.linkoutUrls,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_INTEGRATED_SHOPPING_UPDATE_STATE:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedIntegratedShoppingState(e, {
              couponEnabled: t.payload.couponEnabled,
              shippingEnabled: t.payload.shippingEnabled,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_UPDATE_CART_COUPON:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingCartStateUtils",
            ).getUpdatedShoppingCartCoupon(e, t.payload.coupon);
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_UPDATE_CART_AMOUNT:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingCartStateUtils",
            ).getUpdatedShoppingCartAmount(e, t.payload.amount);
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_UPDATE_CART_ITEM:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingCartStateUtils",
            ).getUpdatedShoppingCartItems(e, t.payload.cartItems);
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_MM_UPDATE_ITEM_DETAIL_DATA:
          return o("immer").produce(e, function (e) {
            var n;
            e.external[t.payload.screenId].data =
              (n = t.payload.data) != null ? n : {};
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_CATEGORY_UPDATE:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedShoppingState(e, {
              categoryId: t.payload.categoryId,
              categoryName: t.payload.categoryName,
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .FLOWJ_SHOPPING_CATALOG_ITEM_UPDATE:
          return o("immer").produce(e, function (e) {
            e.internal.shopping = o(
              "WAFlowsShoppingStateUtils",
            ).getUpdatedShoppingState(e, {
              catalogItemId: t.payload.catalogItemId,
              catalogItemName: t.payload.catalogItemName,
              catalogItemRetailerId: t.payload.selectedRetailerId,
            });
          });
        default:
          return null;
      }
    }
    function d(e, t) {
      switch (t.name) {
        case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOW_OVERLAY:
          return o("immer").produce(e, function (e) {
            e.internal.isOverlayVisible = t.payload.isOverlayVisible;
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.SHOW_ERROR_OVERLAY:
          return o("immer").produce(e, function (e) {
            ((e.internal.isOverlayVisible = !0),
              (e.internal.isErrorOverlayVisible = !0),
              (e.internal.errorOverlayError = t.payload.error));
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.HIDE_ERROR_OVERLAY:
          return o("immer").produce(e, function (e) {
            ((e.internal.isOverlayVisible = !1),
              (e.internal.isErrorOverlayVisible = !1),
              (e.internal.errorOverlayError = void 0));
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_SHOW_NAVBAR_CONTEXT_MENU:
          return o("immer").produce(e, function (e) {
            e.internal.isNavBarContextMenuVisible =
              t.payload.isNavBarContextMenuVisible;
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_IS_SCROLLING:
          return o("immer").produce(e, function (e) {
            e.internal.scrollConfig = t.payload;
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_SHOW_DATE_PICKER_PANEL:
          return o("immer").produce(e, function (e) {
            e.internal.isDatePickerPanelVisible =
              t.payload.isDatePickerPanelVisible;
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .TOGGLE_CALENDAR_PICKER:
          return o("immer").produce(e, function (e) {
            e.internal.isCalendarPickerDialogVisible =
              t.payload.isCalendarPickerDialogVisible;
          });
        default:
          return null;
      }
    }
    function m(e, t) {
      var n = t.payload,
        r = n === void 0 ? {} : n;
      switch (t.name) {
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_UPDATE_EXTERNAL_DATA:
          return o("immer").produce(e, function (n) {
            Array.from(t.payload).map(function (r) {
              var a = r[0],
                i = r[1];
              n.external[a].external_data = babelHelpers.extends(
                {},
                n.external[a].external_data,
                o(
                  "WAFlowsShoppingExternalDataChannelUtils",
                ).storeMetaCatalogFormattedExternalData(
                  t.apiType,
                  i[1],
                  i[0],
                  e,
                  a,
                ),
              );
            });
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_UPDATE_3P_OR_NAVIGATE_DATA:
          return o("immer").produce(e, function (e) {
            Object.assign(e.external[t.screen].data, r);
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_UPDATE_FORM_DATA:
          return o("immer").produce(e, function (e) {
            e.external[t.payload.screen].form = babelHelpers.extends(
              {},
              e.external[t.payload.screen].form,
              t.payload.values,
            );
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.UPDATE_DATA:
          return o("immer").produce(e, function (e) {
            var n,
              r = (n = t.meta) == null ? void 0 : n.currentScreen;
            (r != null || s(0, 72258),
              Object.assign(e.external[r].data, t.payload));
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_RESTORE_STATE:
          return (
            f(t.payload),
            o("immer").produce(e, function (e) {
              return babelHelpers.extends({}, e, t.payload);
            })
          );
        default:
          return null;
      }
    }
    function p(t, n) {
      var r = n.payload,
        a = r === void 0 ? {} : r;
      return o("immer").produce(t, function (r) {
        var i, l, u, c;
        n.next.name != null || s(0, 72258);
        var d = n.next.name,
          m =
            (i = (l = n.meta) == null ? void 0 : l.currentScreen) != null
              ? i
              : "";
        (r.external[n.next.name] != null &&
          Object.assign(r.external[n.next.name].data, a),
          (r.internal.status = o(
            "WAFlowsStateProvider.react",
          ).flowJSONLoadState.READY),
          (r.internal.screenError = void 0),
          (r.internal.navBarConfig = {
            title: void 0,
            backButtonAction: void 0,
          }),
          ((u = n.meta) == null ? void 0 : u.transitionReason) != null ||
            s(0, 73191),
          (r.internal.displayedScreenReason = {
            action: n.meta.transitionReason,
            sourceScreen: m,
          }),
          ((c = n.meta) == null ? void 0 : c.updateStateHistory) === !0 &&
            e(r, t.internal.screenHistory, d));
      });
    }
    var _ = function (t, n) {
      var e = c(t, n);
      if (e !== null) return e;
      var r = d(t, n);
      if (r !== null) return r;
      var a = m(t, n);
      if (a !== null) return a;
      switch (n.name) {
        case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING:
          return o("immer").produce(t, function (e) {
            ((e.internal.status = n.payload.isLoading
              ? o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING
              : o("WAFlowsStateProvider.react").flowJSONLoadState.READY),
              (e.internal.screenError = void 0));
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_NAV_BAR_CONFIG:
          return o("immer").produce(t, function (e) {
            e.internal.navBarConfig = babelHelpers.extends({}, n.payload);
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_UPDATE_FORM_TRANSPILER_PROPS:
          return o("immer").produce(t, function (e) {
            ((e.internal.screenInternalData[
              n.payload.screen
            ].formErrorMessages = babelHelpers.extends(
              {},
              n.payload.errorMessages,
            )),
              u(n.payload.initValues),
              (e.internal.screenInternalData[n.payload.screen].formInitData =
                babelHelpers.extends({}, n.payload.initValues)));
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType
          .WELJ_SHOW_SCREEN_ERROR:
          return o("immer").produce(t, function (e) {
            ((e.internal.status = o(
              "WAFlowsStateProvider.react",
            ).flowJSONLoadState.READY),
              (e.internal.screenError = {
                message: n.payload.message,
                retryDataExchangeAction: n.payload.retryDataExchangeAction,
                error: n.payload.error,
              }));
          });
        case o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE:
          return p(t, n);
        default:
          return t;
      }
    };
    function f(e) {
      Object.keys(e.external).forEach(function (t) {
        var n = e.external[t].form;
        Object.keys(n).forEach(function (e) {
          var t = n[e];
          if (o("WAFlowsNativeExperienceUtils").isMediaPickerFormValue(t)) {
            var r = t.__wa_flows_uploaded_media__,
              a = r.filter(function (e) {
                return (
                  e.upload_state ===
                  o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.SUCCESS
                );
              });
            ((t.__wa_flows_uploaded_media__ = a), (n[e] = t));
          }
        });
      });
    }
    var g = _;
    l.default = g;
  },
  98,
);
