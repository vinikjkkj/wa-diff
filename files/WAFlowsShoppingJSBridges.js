__d(
  "WAFlowsShoppingJSBridges",
  ["WAFlowsBridgeEvents", "WAFlowsCartMockData"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if ((t === void 0 && (t = !1), t))
        return Promise.resolve(o("WAFlowsCartMockData").nativeCartMockData);
      try {
        return await e({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsGetCart,
          payload: null,
          fallBackDataForWeb: null,
          hasCallback: !0,
        });
      } catch (e) {
        return;
      }
    }
    async function s(t, n) {
      n === void 0 && (n = !1);
      var r = await e(t, n);
      if (Array.isArray(r == null ? void 0 : r.cart))
        return {
          items: r.cart
            .filter(function (e) {
              return e.quantity > 0;
            })
            .map(function (e) {
              return { catalogItemId: e.id, quantity: e.quantity };
            }),
        };
    }
    async function u(e, t) {
      if ((t === void 0 && (t = !1), !t))
        try {
          return await e({
            eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMarketingDisclosureState,
            payload: null,
            fallBackDataForWeb: null,
            hasCallback: !0,
          });
        } catch (e) {
          return;
        }
    }
    async function c(e, t, n) {
      if ((n === void 0 && (n = !1), !n))
        try {
          await e({
            eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMarketingDisclosureUserAction,
            payload: t,
            hasCallback: !1,
          });
        } catch (e) {
          var r = new Error(
            "Failed to send marketing message user disclosure action to native.",
          );
          throw (r.stack, r);
        }
    }
    async function d(e, t) {
      try {
        var n;
        return (n = await e({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsSetCartItem,
          payload: t,
          fallBackDataForWeb: { success: !0 },
          hasCallback: !0,
        })) != null
          ? n
          : { success: !1 };
      } catch (e) {
        return { success: !1 };
      }
    }
    function m(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = {
          id: t.catalogItemId,
          title: t.name,
          quantity: t.quantity,
          price_1000: t.price != null ? t.price * 1e3 : 0,
          sale_price_1000: t.salePrice != null ? t.salePrice * 1e3 : void 0,
          currency_code: t.currency,
          max_available: (n = t.maxAvailable) != null ? n : 0,
          image_id:
            (r = (o = t.media) == null ? void 0 : o.id) != null ? r : "",
          scaled_image_url:
            (a = (i = t.media) == null ? void 0 : i.url) != null ? a : "",
        };
      return d(e, l);
    }
    async function p(e) {
      try {
        await e({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsClearCart,
          payload: null,
          hasCallback: !1,
        });
      } catch (e) {}
    }
    async function _(e) {
      try {
        (await e({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsClearCart,
          payload: null,
          hasCallback: !1,
        }),
          await e({
            eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsClose,
            payload: null,
            hasCallback: !1,
          }));
      } catch (e) {}
    }
    async function f(e) {
      try {
        await e({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsStoreShoppingFlowContext,
          payload: null,
          hasCallback: !1,
        });
      } catch (e) {
        var t = new Error("Failed to send shopping flow context to native.");
        throw (t.stack, t);
      }
    }
    function g(e) {
      return !e.isDraft();
    }
    async function h(e, t, n) {
      if ((n === void 0 && (n = !1), !n))
        try {
          await e({
            eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsNativeCheckout,
            payload: t,
            hasCallback: !1,
          });
        } catch (e) {
          var r = new Error(
            "Failed to open native integrated checkout experience.",
          );
          throw (r.stack, r);
        }
    }
    ((l.getRawNativeCart = e),
      (l.getShoppingCartStateFromNative = s),
      (l.getShoppingFlowsMarketingDisclosureState = u),
      (l.sendShoppingFlowsMarketingDisclosureUserAction = c),
      (l.setRawNativeShoppingCartItem = d),
      (l.setNativeShoppingCartItem = m),
      (l.clearNativeShoppingCart = p),
      (l.clearNativeCartAndCloseFlow = _),
      (l.storeShoppingFlowContext = f),
      (l.isNativeCartIntegrationEnabled = g),
      (l.openNativeIntegratedShopping = h));
  },
  98,
);
