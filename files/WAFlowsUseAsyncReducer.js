__d(
  "WAFlowsUseAsyncReducer",
  [
    "invariant",
    "ReactRouterDOM",
    "WAFlowsActionHandlerTypes",
    "WAFlowsCache",
    "WAFlowsCartUtils.react",
    "WAFlowsDecodeFlowActionData",
    "WAFlowsEntryPointControllerContext.react",
    "WAFlowsEnvContext.react",
    "WAFlowsError",
    "WAFlowsInitEnvironmentTypes",
    "WAFlowsScreenUtils",
    "WAFlowsShoppingCartStateUtils",
    "WAFlowsShoppingJSBridges",
    "WAFlowsShoppingStateUtils",
    "WAFlowsStateErrorHandling",
    "WAFlowsStateProvider.react",
    "WAFlowsTypes",
    "WAFlowsWELJActionCreators",
    "getErrorSafe",
    "react",
    "useAsyncEffect",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useRef,
      _ = u.useState,
      f = {
        external: {},
        internal: {
          isDraft: !1,
          status: o("WAFlowsStateProvider.react").flowJSONLoadState
            .INITIALIZING,
          isOverlayVisible: !1,
          isNavBarContextMenuVisible: !1,
          isDatePickerPanelVisible: !1,
          screenHistory: [],
          navBarConfig: {},
          screenInternalData: {},
        },
      };
    function g(e, t, n, r, a, i, l) {
      var s = l === !0,
        u = o("WAFlowsStateErrorHandling").showSnackBarError(n) && !s;
      (o("WAFlowsStateErrorHandling").propagateErrorTo3pDataChannel(r, n, a, i),
        o("WAFlowsStateErrorHandling").logErrorToServer(n, a, !u, r),
        a.onError(n),
        o("WAFlowsStateErrorHandling").showErrorOnUI(e, t, n, r, u, a));
    }
    function h(e, t, n, r, a, i, l, s) {
      var u =
          (t == null ? void 0 : t.internal.flowActionPayload) !==
            (s == null ? void 0 : s.environment.flow_action_payload) ||
          (t == null ? void 0 : t.internal.flowAction) !==
            (s == null ? void 0 : s.environment.flow_action),
        c = s == null ? void 0 : s.environment.surface_request;
      t === null ||
      Object.keys(t).length === 0 ||
      (c !== void 0 &&
        String(c).toLowerCase() ===
          String(
            o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType
              .FAB_SHOPPING,
          )) ||
      o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(t) ||
      u
        ? S(e, n, r, a, i, l)
        : C(t, n, r, l, i.platform);
    }
    async function y(e, t, n, r, a, i, l, s) {
      var u,
        c = s.flowInitData,
        d = c[0],
        m = d == null ? void 0 : d.environment.surface_request;
      o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(
        t,
      ) ||
        (await o("WAFlowsShoppingJSBridges").storeShoppingFlowContext(
          s.invoke,
        ));
      var p = o(
        "WAFlowsShoppingStateUtils",
      ).isShoppingIntegratedShoppingMessageFlow(t)
        ? null
        : await o("WAFlowsShoppingJSBridges").getShoppingCartStateFromNative(
            s.invoke,
            i.isJestTesting,
          );
      if (
        t === null ||
        Object.keys(t).length === 0 ||
        (m !== void 0 &&
          String(m).toLowerCase() ===
            String(
              o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType
                .FAB_SHOPPING,
            )) ||
        o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(
          t,
        ) ||
        o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(
          t,
        )
      ) {
        var _;
        e.current =
          (_ = o(
            "WAFlowsShoppingCartStateUtils",
          ).getUpdatedStateWithShoppingCart(e.current, p, r, l, a, i)) != null
            ? _
            : e.current;
      }
      h(
        e.current,
        (u = o("WAFlowsShoppingCartStateUtils").getUpdatedStateWithShoppingCart(
          t,
          p,
          r,
          l,
          a,
          i,
        )) != null
          ? u
          : t,
        n,
        r,
        a,
        i,
        l,
        d,
      );
    }
    function C(e, t, n, r, a) {
      var i,
        l,
        s = e.internal.screenHistory,
        u = (i = s[s.length - 2]) != null ? i : "",
        c = (l = s[s.length - 1]) != null ? l : "";
      (s.slice(0, s.length - 1).forEach(function (e, n) {
        return o("WAFlowsScreenUtils").pushScreenToHistory(e, s[n - 1], t);
      }),
        n({
          name: o("WAFlowsActionHandlerTypes").WELJActionType
            .WELJ_RESTORE_STATE,
          payload: e,
        }));
      var d = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
        u,
        c,
        e.external[c].data,
      );
      n(r.navigateActionHandler(d, t, !0, !0, !0, a));
    }
    function b(e, t, n, r, a, i) {
      var l,
        s,
        u = e == null ? void 0 : e.data,
        c = u == null ? void 0 : u.source;
      c != null &&
        t(
          o("WAFlowsWELJActionCreators").createShoppingUpdateSourceAction(
            String(c),
          ),
        );
      var d = u == null ? void 0 : u.linkout_urls;
      if (d) {
        var m = new Map(
          Object.entries(d != null ? d : {}).map(function (e) {
            var t = e[0],
              n = e[1];
            return [t, String(n)];
          }),
        );
        t(
          o(
            "WAFlowsWELJActionCreators",
          ).createShoppingOffsiteCheckoutUpdateLinkoutUrlsAction(m),
        );
      }
      var p = u == null || (l = u.features) == null ? void 0 : l.coupons,
        _ = u == null || (s = u.features) == null ? void 0 : s.shipping,
        f = u == null ? void 0 : u.cart;
      c === o("WAFlowsShoppingStateUtils").SOURCE_INTEGRATED_SHOPPING &&
        (t(
          o(
            "WAFlowsWELJActionCreators",
          ).createShoppingIntegratedShoppingUpdateStateAction(!!p, !!_),
        ),
        o("WAFlowsCartUtils.react").syncIntegratedShoppingCartWithStateCart(
          i.getScreenIdByLayoutType(
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART,
          ),
          t,
          n,
          r,
          a,
          i,
          f,
          null,
          !1,
          !1,
        ));
      var g =
          c === o("WAFlowsShoppingStateUtils").SOURCE_OFFSITE_CHECKOUT &&
          d !== null &&
          (d == null ? void 0 : d.base_checkout_url) != null,
        h = c === o("WAFlowsShoppingStateUtils").SOURCE_INTEGRATED_SHOPPING;
      (g || h) &&
        !r.isJestTesting &&
        t(
          o("WAFlowsWELJActionCreators").createShoppingMMUpdateItemDetailData(
            i.getShoppingItemDetailScreenId(),
            u,
          ),
        );
    }
    function v(e, t, n, a, i, l, u) {
      var c,
        d,
        m,
        p,
        _ = r("WAFlowsDecodeFlowActionData")(e);
      (i.getIsShoppingFlow() &&
        t !== void 0 &&
        String(t).toLowerCase() ===
          String(
            o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType
              .FAB_SHOPPING,
          ) &&
        (_ = babelHelpers.extends({}, _, {
          screen: i.getShoppingCartScreenId(),
        })),
        ((c = _) == null ? void 0 : c.screen) != null || s(0, 80735));
      var f = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
        "",
        (d = _) == null ? void 0 : d.screen,
        (m = (p = _) == null ? void 0 : p.data) != null ? m : {},
        !0,
      );
      if (
        (i.getIsShoppingFlow() && b(_, a, n, l, u, i),
        i.getIsShoppingFlow() && !l.isJestTesting)
      ) {
        var g,
          h,
          y = o("WAFlowsWELJActionCreators").createExternalDataExchangeAction(
            (g = _) == null ? void 0 : g.screen,
            i.getScreenExternalData((h = _) == null ? void 0 : h.screen),
          );
        a(u.externalDataExchangeActionHandler(y, n, null, !0, void 0, l, f));
      } else
        a(u.navigateActionHandler(f, n, void 0, void 0, void 0, l.platform));
    }
    function S(e, t, n, a, i, l) {
      e.internal.status !==
        o("WAFlowsStateProvider.react").flowJSONLoadState.READY &&
        l
          .getFlowInitData()
          .then(function (e) {
            var r;
            if (
              (e != null || s(0, 72522),
              e.environment.is_flow_interactive === !0)
            ) {
              var u = e.environment,
                c = u.flow_action,
                d = c === void 0 ? "data_exchange" : c,
                m = u.flow_action_payload,
                p = u.surface_request;
              if (
                d ===
                o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE
              ) {
                var _ = "";
                a.getIsShoppingFlow() &&
                  p !== void 0 &&
                  String(p).toLowerCase() ===
                    String(
                      o("WAFlowsInitEnvironmentTypes")
                        .WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING,
                    ) &&
                  (_ = a.getShoppingCartScreenId());
                var f = [_, {}, !0],
                  g = o(
                    "WAFlowsWELJActionCreators",
                  ).createDataExchangeAction.apply(void 0, f);
                if (a.getIsShoppingFlow()) {
                  var h = o(
                    "WAFlowsWELJActionCreators",
                  ).createExternalDataExchangeAction(
                    "",
                    a.getScreenExternalData(""),
                  );
                  n(
                    l.externalDataExchangeActionHandler(h, t, g, !1, void 0, i),
                  );
                } else n(l.dataExchangeActionHandler(g, t, !0, i));
              } else
                d === o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE &&
                  v(m, p, t, n, a, i, l);
            }
            if (
              ((r = e.environment) == null ? void 0 : r.is_flow_interactive) ===
                !1 &&
              a.getIsShoppingFlow()
            ) {
              var y = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction("", []);
              n(l.externalDataExchangeActionHandler(y, t, null, !0, void 0, i));
            }
          })
          .catch(function (t) {
            return g(n, e, r("getErrorSafe")(t), a, l);
          });
    }
    function R(e) {
      return (
        e instanceof o("WAFlowsError").WAFlowsDataChannelError &&
        e.getWAFlowErrorCode() ===
          o("WAFlowsError").WAFlowsErrorCodes.NO_INTERNET_CONNECTION
      );
    }
    function L(e, t, n, r, o, a) {
      try {
        var i = e(t, n, r, o);
        i instanceof Promise && i.catch(a);
      } catch (e) {
        a(e);
      }
    }
    function E(e, t, n, r) {
      if (
        +r.getVersion() >= 120 &&
        e === !1 &&
        t != null &&
        t.environment.flow_token
      ) {
        var a,
          i = t.logging.qplLogging,
          l =
            t == null || (a = t.environment) == null
              ? void 0
              : a.surface_request;
        if ((i != null || s(0, 76723), n.internal.screenError === void 0))
          o("WAFlowsCache").updateStateCache(r, n, i.qpl_message_id, l);
        else {
          var u,
            c = n.internal.screenError.error;
          if (c && R(c)) return;
          o("WAFlowsCache").clearStateCache(
            (u = r.getFlowId()) != null ? u : "",
            i.qpl_message_id,
            l,
          );
        }
      }
    }
    async function k(e, t, n, r, a, i, l, u, c) {
      try {
        var d, m;
        await o("WAFlowsCache").clearExpiredCachedStates();
        var p =
            u == null || (d = u.logging.qplLogging) == null
              ? void 0
              : d.qpl_message_id,
          _ = u == null ? void 0 : u.environment.surface_request;
        p != null || s(0, 76749);
        var f = await o("WAFlowsCache").getStateFromCache(
          (m = t.current.getFlowId()) != null ? m : "",
          p,
          _,
        );
        c.getIsShoppingFlow() &&
        o("WAFlowsShoppingJSBridges").isNativeCartIntegrationEnabled(c)
          ? await y(e, f, n, r, t.current, a, i, l)
          : h(e.current, f, n, r, t.current, a, i, u);
      } catch (e) {}
    }
    function I(e, t, n, a) {
      var i,
        l = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController(),
        u = l.flowInitData,
        h = u[0],
        y = h == null ? void 0 : h.environment.is_flow_interactive,
        C = _(function () {
          return a ? a(n) : n != null ? n : babelHelpers.extends({}, f);
        }),
        b = C[0],
        v = C[1],
        R = d(o("WAFlowsStateProvider.react").FlowMetaContext);
      R != null || s(0, 72745);
      var I = p(b),
        T = p(R),
        D = o("ReactRouterDOM").useHistory(),
        x = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        $ = x.env,
        P = l.actionOverrides,
        N = function () {
          return I.current;
        },
        M = function () {
          return T.current;
        },
        w = function (t) {
          return [t.name].includes(
            o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_IS_SCROLLING,
          );
        },
        A = c(
          function n(a) {
            if (typeof a == "function") {
              var i = I.current.internal,
                s = i.screenHistory,
                u = i.status,
                c = s.length > 0,
                d =
                  u ===
                    o("WAFlowsStateProvider.react").flowJSONLoadState
                      .INITIALIZING || !c;
              L(a, n, N, M, l, function (e) {
                return g(
                  n,
                  I.current,
                  r("getErrorSafe")(e),
                  T.current,
                  P,
                  h,
                  d,
                );
              });
            } else
              ((I.current = e(I.current, a)),
                w(a) || E(t, h, I.current, T.current),
                v(I.current));
          },
          [P, h, e, t],
        );
      m(
        function () {
          T.current = R;
        },
        [b, R],
      );
      var F = (h == null ? void 0 : h.environment) || {},
        O = F.flow_action,
        B = F.flow_action_payload;
      return (
        m(
          function () {
            ((I.current = babelHelpers.extends({}, I.current, {
              internal: babelHelpers.extends({}, I.current.internal, {
                flowActionPayload: B,
                flowAction: O,
              }),
            })),
              v(I.current));
          },
          [B, O],
        ),
        r("useAsyncEffect")(
          async function () {
            var e;
            ((h != null &&
              (e = h.logging.qplLogging) != null &&
              e.qpl_message_id) ||
              $.hostPlatform === "web_tooling") &&
              (+T.current.getVersion() < 120 || t
                ? S(I.current, D, A, T.current, $, P)
                : await k(I, T, D, A, $, P, l, h, R));
          },
          [
            t,
            h == null || (i = h.logging.qplLogging) == null
              ? void 0
              : i.qpl_message_id,
            T.current.getFlowId(),
            y,
          ],
        ),
        [b, A]
      );
    }
    l.default = I;
  },
  98,
);
