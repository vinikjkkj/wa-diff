__d(
  "WAFlowsActionHandler",
  [
    "invariant",
    "WAFlowsActionHandlerTypes",
    "WAFlowsActionHandlerUtils",
    "WAFlowsBridgeEvents",
    "WAFlowsConfigurationContext.react",
    "WAFlowsEntryPointUtils",
    "WAFlowsError",
    "WAFlowsResponseHandler",
    "WAFlowsScreenUtils",
    "WAFlowsShoppingCartStateUtils",
    "WAFlowsShoppingExternalDataChannelUtils",
    "WAFlowsSnackbarUtils",
    "WAFlowsStateParser",
    "WAFlowsWELJActionCreators",
    "WAFlowsWELJValidationUtils",
    "getErrorSafe",
    "justknobx",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["markButtonAsTapped"],
      u = ["error_message", "extension_message_response"],
      c = ["error_message", "extension_message_response"],
      d = ["error_message", "extension_message_response"],
      m = (function () {
        function t(e, t, n) {
          (t === void 0 &&
            (t = o(
              "WAFlowsConfigurationContext.react",
            ).WA_FLOWS_DEAFULT_CONFIGURATION),
            n === void 0 && (n = null),
            (this.invoke = e),
            (this.getFlowInitData = (function () {
              return function () {
                return e({
                  eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetFlowData,
                  payload: null,
                  hasCallback: !0,
                }).then(function (e) {
                  return o("WAFlowsEntryPointUtils").parseJSBridgeInitData(e);
                });
              };
            })()),
            (this.configuration = t),
            (this.platform = n),
            (this.eventPayload = null));
        }
        var n = t.prototype;
        return (
          (n.getTerminateFlowPayload = function (t, n, a, i, l, u, c) {
            var e = this;
            return async function (d, m, p) {
              var _,
                f = m(),
                g = await l();
              g != null || s(0, 72523);
              var h = g.environment,
                y = h.creation_source,
                C = h.flow_token;
              d(o("WAFlowsWELJActionCreators").createTerminateAction());
              var b = p(),
                v = b.getIsShoppingFlow(),
                S = o("WAFlowsStateParser").parseActionPayload(
                  f.external,
                  t,
                  n,
                  b,
                ),
                R = r("justknobx")._("2512");
              (R &&
                i &&
                (S = o("WAFlowsStateParser").transformNativeComponentsValue(
                  o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE,
                  S,
                  b,
                  t,
                )),
                u == null || u(t),
                !Array.isArray(S) || s(0, 73762));
              var L = r("unsafeCast")(babelHelpers.extends({}, S));
              (i && (L.flow_token = C),
                y === "ADS_MANAGER_CTWA" && (L.flow_id = b.getFlowId()));
              var E =
                (c == null ||
                (_ = c.flows_termination_message_v2_sending_enabled) == null
                  ? void 0
                  : _.boolValue) === !0 &&
                !v &&
                +b.getVersion() >= 501;
              return (
                E &&
                  (L.response_message = JSON.stringify(
                    o("WAFlowsResponseHandler").buildResponseMessage(
                      b,
                      f,
                      a,
                      e.configuration.responseMessageVersion,
                    ),
                  )),
                v &&
                  (L.cart = o(
                    "WAFlowsShoppingCartStateUtils",
                  ).getFlowResponseShoppingCart(f, b)),
                {
                  extension_message_response: {
                    params: L,
                    markButtonAsTapped: !0,
                  },
                }
              );
            };
          }),
          (n.terminateFlowInvoke = function (t, n) {
            return async function (e) {
              await n({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAFlowsComplete,
                hasCallback: !1,
                payload: t,
              });
            };
          }),
          (n.terminateCloseFlow = async function (t, n, r, a, i, l) {
            if (r != null && (r == null ? void 0 : r.params) != null) {
              var e,
                u = a.getFlowId();
              (typeof u == "string" || s(0, 76655),
                t(
                  this.terminateFlowActionHandler(
                    n,
                    (e = r.params) != null ? e : {},
                    i,
                    void 0,
                    o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE,
                  ),
                ));
              return;
            }
            await l({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAFlowsClose,
              payload: null,
              hasCallback: !1,
            });
          }),
          (n.terminateFlowActionHandler = function (n, r, a, i, l) {
            var t = this;
            return (
              i === void 0 && (i = !1),
              async function (s, u, c) {
                s({
                  name: o("WAFlowsActionHandlerTypes").WELJActionType
                    .WELJ_FLOW_LOADING,
                  payload: { isLoading: !0 },
                });
                var d = await t.getTerminateFlowPayload(
                    n,
                    r,
                    a,
                    i,
                    t.getFlowInitData,
                  )(s, u, c),
                  m = d.extension_message_response,
                  p = m.markButtonAsTapped,
                  _ = babelHelpers.objectWithoutPropertiesLoose(m, e);
                (l === "complete" &&
                  t.onInteractivePreviewEventRequest({
                    data: _.params,
                    action: l,
                  }),
                  t.onInteractivePreviewEventCompletion(),
                  await t.terminateFlowInvoke(d, t.invoke)());
              }
            );
          }),
          (n.errorActionHandler = function (t) {
            return function (e) {
              throw t;
            };
          }),
          (n.onInteractivePreviewEventRequest = function (t) {}),
          (n.onInteractivePreviewEventResponse = function (t) {}),
          (n.onInteractivePreviewEventError = function (t) {}),
          (n.onInteractivePreviewEventCompletion = function () {}),
          (n.onError = function (t) {}),
          (n.getNavigationScreensAndMeta = function (t) {
            return function (e) {
              var n = e();
              t.meta != null || s(0, 72442);
              var r = t.meta.currentScreen,
                o = t.next.name;
              return { meta: n, currentScreen: r, nextScreen: o };
            };
          }),
          (n.updateScreenHistory = function (t, n, r, a, i, l, s, u, c) {
            t !== n &&
              a === !0 &&
              (i
                ? o("WAFlowsScreenUtils").popScreenFromHistory(r)
                : o("WAFlowsScreenUtils").pushScreenToHistory(t, n, r, c));
          }),
          (n.navigateToNextScreen = function (t, n, r, a, i) {
            var e = this;
            return function (l, u) {
              var c,
                d,
                m = u(),
                p = t === "" ? n : t,
                _ = o("WAFlowsStateParser").parseActionPayload(
                  m.external,
                  p,
                  (c = r.payload) != null ? c : {},
                  a,
                );
              if (
                (!Array.isArray(_) || s(0, 72449),
                a.isDataChannelLess() &&
                  e.invoke({
                    eventName: o("WAFlowsBridgeEvents")
                      .WAFlowsWebBridgeEventNames
                      .WAFlowsDataExchangeDuringNavigation,
                    payload: { data: _, screen: r.next.name },
                    hasCallback: !1,
                  }),
                !i)
              ) {
                var f;
                (a != null || s(0, 72588),
                  o("WAFlowsActionHandlerUtils").validateRoutingModel(
                    n,
                    t,
                    a,
                    r.name,
                    _,
                    e.configuration,
                  ));
                var g =
                  (f = a.getScreenMeta(p).isNavListScreen) != null ? f : !1;
                !Array.isArray(_) &&
                  g &&
                  o("WAFlowsActionHandlerUtils").validateSchemaOrThrowError(
                    r.next.name,
                    r.name,
                    _,
                    a,
                    !0,
                    p,
                  );
              }
              var h = m.internal.screenHistory,
                y = h[h.length - 2] === n;
              l(babelHelpers.extends({}, r, { payload: _ }));
              var C =
                ((d = {}),
                (d[
                  o(
                    "WAFlowsStateParser",
                  ).WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.ERROR_MESSAGES
                ] = {}),
                (d[
                  o(
                    "WAFlowsStateParser",
                  ).WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.INIT_VALUES
                ] = {}),
                d);
              for (var b of [
                o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS
                  .ERROR_MESSAGES,
                o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS
                  .INIT_VALUES,
              ]) {
                var v,
                  S,
                  R,
                  L,
                  E,
                  k,
                  I,
                  T =
                    (v =
                      (S = a.getScreenMeta(n)) == null ||
                      (S = S.form) == null ||
                      (S = S.formProps) == null
                        ? void 0
                        : S[b]) != null
                      ? v
                      : {},
                  D = o("WAFlowsStateParser").getDynamicFieldsFromObject(T, n),
                  x = u(),
                  $ = babelHelpers.extends(
                    {},
                    x.external,
                    ((R = {}),
                    (R[n] = babelHelpers.extends({ data: _ }, x.external[n])),
                    R),
                  ),
                  P =
                    o("WAFlowsStateParser")
                      .WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS_FLOW_JSON_MAPPING[
                      b
                    ],
                  N =
                    (L = o("WAFlowsStateParser").parseAndMapWELJProperties(
                      ((E = {}), (E[P] = T), E),
                      n,
                      $,
                    )[P]) != null
                      ? L
                      : {};
                (typeof N == "object" || s(0, 77595),
                  (N =
                    (k = Object.fromEntries(
                      Object.entries(N).filter(function (e) {
                        var t = e[0],
                          n = e[1];
                        return n != null;
                      }),
                    )) != null
                      ? k
                      : {}));
                var M = o(
                    "WAFlowsStateParser",
                  ).getDynamicFieldsValuesFromSource($, D),
                  w =
                    b ===
                      o("WAFlowsStateParser")
                        .WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.ERROR_MESSAGES &&
                    y &&
                    ((I = r.meta) == null ? void 0 : I.transitionReason) !==
                      "data_exchange";
                C[b] =
                  !w &&
                  ((D.length === 0 &&
                    Object.keys(x.external[n].form).length === 0) ||
                    Object.keys(M).length > 0)
                    ? N
                    : {};
              }
              return (
                l({
                  name: o("WAFlowsActionHandlerTypes").WELJActionType
                    .WELJ_UPDATE_FORM_TRANSPILER_PROPS,
                  payload: babelHelpers.extends({ screen: n }, C),
                }),
                { nextScreenState: _, isBack: y }
              );
            };
          }),
          (n.navigateActionHandler = function (t, n, r, o, a, i) {
            var e = this;
            return (
              r === void 0 && (r = !1),
              o === void 0 && (o = !0),
              a === void 0 && (a = !1),
              function (l, s, u) {
                var c,
                  d = e.getNavigationScreensAndMeta(t)(u),
                  m = d.currentScreen,
                  p = d.meta,
                  _ = d.nextScreen,
                  f = e.navigateToNextScreen(m, _, t, p, r)(l, s),
                  g = f.isBack,
                  h = f.nextScreenState,
                  y = (c = t.meta) == null ? void 0 : c.transitionReason,
                  C = t.next.name,
                  b = g ? "BACK" : y;
                (y === "navigate" &&
                  e.onInteractivePreviewEventRequest({
                    data: h,
                    screen: C,
                    action: b != null ? b : "",
                  }),
                  e.onInteractivePreviewEventCompletion(),
                  e.updateScreenHistory(_, m, n, o, g, a, p, l, i));
              }
            );
          }),
          (n.categoryListBackActionHandler = function (t, n) {
            return function (e, r) {
              var a,
                i = r(),
                l =
                  ((a = i.internal) == null || (a = a.shopping) == null
                    ? void 0
                    : a.categoryListPath) || [];
              if (t && l.length > 0) {
                var s = [].concat(l).slice(0, -1);
                e(
                  o("WAFlowsWELJActionCreators").createCategoryListBackAction(
                    s,
                  ),
                );
              }
              if (!t) {
                var u = [].concat(l, [n != null ? n : ""]);
                e(
                  o("WAFlowsWELJActionCreators").createCategoryListBackAction(
                    u,
                  ),
                );
              }
            };
          }),
          (n.handleDataExchange = async function (t, n, r, a) {
            var e = await o("WAFlowsActionHandlerUtils").executeDataExchange(
              t,
              n,
              r,
              this.getFlowInitData,
              this,
            );
            return (
              await a({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAFlowsDataExchangeDuringNavigation,
                payload: e,
                hasCallback: !1,
              }),
              e
            );
          }),
          (n.navigateToScreen = function (t, n, r, a, i, l, s, u, c, d) {
            var e = this;
            return async function (m) {
              if (i === "SUCCESS") {
                await e.terminateCloseFlow(m, l, n, a, c, d);
                return;
              }
              o("WAFlowsActionHandlerUtils").validateRoutingModel(
                i,
                l,
                a,
                t,
                s,
                e.configuration,
              );
              var p = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
                l,
                i,
                s,
                u,
                t === "BACK"
                  ? o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE
                  : t,
              );
              (m(e.navigateActionHandler(p, r, !0)),
                m({
                  name: o("WAFlowsActionHandlerTypes").WELJActionType
                    .WELJ_FLOW_LOADING,
                  payload: { isLoading: !1 },
                }));
            };
          }),
          (n.dataExchangeActionHandler = function (t, n, a, i, l, s) {
            var e = this;
            return (
              l === void 0 && (l = !0),
              async function (l, s, c, d) {
                var m = c();
                o("WAFlowsActionHandlerUtils").dispatchFlowLoading(t)(l);
                try {
                  var p = t.payload,
                    _ = p.action,
                    f = p.screen,
                    g = s().external,
                    h = await e.handleDataExchange(m, t, g, e.invoke),
                    y = h.data,
                    C = h.screen;
                  if (typeof y != "object")
                    throw new (o(
                      "WAFlowsError",
                    ).WAFlowsInvalidDataChannelResponseError)(
                      o(
                        "WAFlowsWELJValidationUtils",
                      ).WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage(),
                    );
                  var b = y != null ? y : {},
                    v = b.error_message,
                    S = b.extension_message_response,
                    R = babelHelpers.objectWithoutPropertiesLoose(b, u);
                  (await e.navigateToScreen(
                    _,
                    S,
                    n,
                    m,
                    C,
                    f,
                    R,
                    a,
                    i,
                    e.invoke,
                  )(l),
                    v != null &&
                      v !== "" &&
                      typeof v == "string" &&
                      o("WAFlowsSnackbarUtils").showSnackbar(
                        { text: v },
                        e.invoke,
                      ));
                } catch (e) {
                  var L = t.payload.screen,
                    E = r("getErrorSafe")(e),
                    k = o(
                      "WAFlowsActionHandlerUtils",
                    ).shouldDisableNativeMessageCTA(E);
                  o("WAFlowsActionHandlerUtils").delegateErrorToHandler(
                    E,
                    L,
                    t,
                  );
                }
              }
            );
          }),
          (n.executeOnlyExternalDataExchangeRequest = function (
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
          ) {
            var e = this;
            return async function (r) {
              var c = t.screen,
                d = !1,
                m = n.getScreenExternalData(t.screen)[0];
              if (m !== void 0) {
                var p = await o(
                  "WAFlowsShoppingExternalDataChannelUtils",
                ).executeMetaCatalogRequest(
                  m,
                  a,
                  i,
                  t.screen,
                  e,
                  u,
                  n,
                  void 0,
                  s,
                );
                return (
                  l.set(t.screen, [m.name.toString(), p]),
                  r(
                    o(
                      "WAFlowsWELJActionCreators",
                    ).createWELJUpdateExternalDataAction(l, m.type),
                  ),
                  { nextScreen: c, updateBrowserHistory: d }
                );
              }
            };
          }),
          (n.executeParallelExternalRequests = function (
            t,
            n,
            a,
            i,
            l,
            s,
            u,
            d,
            m,
            p,
            _,
            f,
          ) {
            var e = this;
            return async function (g) {
              var h = s,
                y = "";
              try {
                var C = "",
                  b = await Promise.all([
                    o("WAFlowsActionHandlerUtils").executeDataExchange(
                      t,
                      n,
                      a,
                      e.getFlowInitData,
                      e,
                    ),
                    Promise.all(
                      l == null
                        ? void 0
                        : l.map(function (n) {
                            var r = t.getScreenExternalData(n)[0];
                            if (r !== void 0)
                              return (
                                (C = r.type.toString()),
                                o("WAFlowsShoppingExternalDataChannelUtils")
                                  .executeMetaCatalogRequest(
                                    r,
                                    i,
                                    d,
                                    n,
                                    e,
                                    f,
                                    t,
                                  )
                                  .then(function (e) {
                                    return m.set(n, [r.name.toString(), e]);
                                  })
                              );
                          }),
                    ),
                  ]),
                  v = b[0],
                  S = b[1];
                (g(
                  o(
                    "WAFlowsWELJActionCreators",
                  ).createWELJUpdateExternalDataAction(m, C),
                ),
                  _({
                    eventName: o("WAFlowsBridgeEvents")
                      .WAFlowsWebBridgeEventNames
                      .WAFlowsDataExchangeDuringNavigation,
                    payload: v,
                    hasCallback: !1,
                  }));
                var R = v.data,
                  L = v.screen;
                if (((h = L), typeof R != "object"))
                  throw new (o(
                    "WAFlowsError",
                  ).WAFlowsInvalidDataChannelResponseError)(
                    o(
                      "WAFlowsWELJValidationUtils",
                    ).WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage(),
                  );
                var E = R != null ? R : {},
                  k = E.error_message,
                  I = E.extension_message_response,
                  T = babelHelpers.objectWithoutPropertiesLoose(E, c);
                if (((y = k != null ? k : ""), h === "SUCCESS"))
                  return (
                    await e.terminateCloseFlow(g, u, I, t, p, _),
                    { nextScreen: h, errorMessageStr: y }
                  );
                (o("WAFlowsActionHandlerUtils").validateRoutingModel(
                  h,
                  u,
                  t,
                  "data_exchange",
                  T,
                  e.configuration,
                ),
                  g(
                    o(
                      "WAFlowsWELJActionCreators",
                    ).createWELJUpdate3POrNavigateDataAction(
                      L,
                      R != null ? R : {},
                    ),
                  ),
                  (h = L));
              } catch (t) {
                e.logAndThrowError(r("getErrorSafe")(t));
              }
              return { nextScreen: h, errorMessageStr: y };
            };
          }),
          (n.executeSequentialExternalRequests = function (
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            m,
          ) {
            var e = this,
              p = i,
              _ = "";
            return async function (f, g) {
              n.payload.action !== "INIT" &&
                f({
                  name: o("WAFlowsActionHandlerTypes").WELJActionType
                    .WELJ_FLOW_LOADING,
                  payload: { isLoading: !0 },
                });
              var h = await o("WAFlowsActionHandlerUtils").executeDataExchange(
                t,
                n,
                r,
                e.getFlowInitData,
                e,
              );
              e.invoke({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAFlowsDataExchangeDuringNavigation,
                payload: h,
                hasCallback: !1,
              });
              var y = h.data,
                C = h.screen;
              if (((p = C), typeof y != "object"))
                throw new (o(
                  "WAFlowsError",
                ).WAFlowsInvalidDataChannelResponseError)(
                  o(
                    "WAFlowsWELJValidationUtils",
                  ).WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage(),
                );
              var b = y != null ? y : {},
                v = b.error_message,
                S = b.extension_message_response,
                R = babelHelpers.objectWithoutPropertiesLoose(b, d);
              if (((_ = v != null ? v : ""), p === "SUCCESS"))
                return (
                  await e.terminateCloseFlow(f, l, S, t, c, e.invoke),
                  { nextScreen: p, errorMessageStr: _ }
                );
              (o("WAFlowsActionHandlerUtils").validateRoutingModel(
                i,
                l,
                t,
                "data_exchange",
                R,
                e.configuration,
              ),
                f(
                  o(
                    "WAFlowsWELJActionCreators",
                  ).createWELJUpdate3POrNavigateDataAction(
                    C,
                    y != null ? y : {},
                  ),
                ));
              var L = t.getScreenExternalData(C)[0];
              if (L !== void 0) {
                var E = await o(
                  "WAFlowsShoppingExternalDataChannelUtils",
                ).executeMetaCatalogRequest(L, a, s, i, e, m, t);
                (u.set(C, [L.name.toString(), E]),
                  f(
                    o(
                      "WAFlowsWELJActionCreators",
                    ).createWELJUpdateExternalDataAction(u, L.type),
                  ));
              }
              return { nextScreen: p, errorMessageStr: _ };
            };
          }),
          (n.logAndThrowError = function (t) {
            throw t;
          }),
          (n.externalDataExchangeActionHandler = function (
            t,
            n,
            a,
            i,
            l,
            s,
            u,
            c,
          ) {
            var e = this;
            return (
              i === void 0 && (i = !1),
              c === void 0 && (c = !1),
              async function (d, m, p) {
                var _,
                  f,
                  g,
                  h = m().external,
                  y = p(),
                  C = (_ = y.getBizJid()) != null ? _ : "",
                  b = y.getRoutingModel()[t.screen],
                  v =
                    (f =
                      b == null
                        ? void 0
                        : b.find(function (e) {
                            var t;
                            return (t = y.getScreenExternalData(e)[0]) == null
                              ? void 0
                              : t.isBindingValue;
                          })) != null
                      ? f
                      : !1,
                  S = new Map(),
                  R = t.screen,
                  L = "",
                  E = !0,
                  k = "";
                if (i)
                  try {
                    if (u) {
                      var I;
                      d(
                        o(
                          "WAFlowsWELJActionCreators",
                        ).createWELJUpdate3POrNavigateDataAction(
                          t.screen,
                          (I = u == null ? void 0 : u.payload) != null ? I : {},
                        ),
                      );
                    }
                    var T = await e.executeOnlyExternalDataExchangeRequest(
                      t,
                      y,
                      h,
                      m(),
                      C,
                      S,
                      l,
                      c,
                    )(d);
                    T != null &&
                      ((L = T.nextScreen), (E = T.updateBrowserHistory));
                  } catch (t) {
                    e.logAndThrowError(r("getErrorSafe")(t));
                  }
                else if (
                  !v &&
                  a &&
                  (a == null || (g = a.payload) == null ? void 0 : g.action) !==
                    "INIT"
                ) {
                  var D = await e.executeParallelExternalRequests(
                    y,
                    a,
                    h,
                    m(),
                    b,
                    L,
                    R,
                    C,
                    S,
                    s,
                    e.invoke,
                    c,
                  )(d);
                  ((L = D.nextScreen), (k = D.errorMessageStr));
                } else if (a)
                  try {
                    var x = await e.executeSequentialExternalRequests(
                      y,
                      a,
                      h,
                      m(),
                      L,
                      R,
                      C,
                      S,
                      s,
                      c,
                    )(d, m);
                    ((L = x.nextScreen), (k = x.errorMessageStr));
                  } catch (t) {
                    e.logAndThrowError(r("getErrorSafe")(t));
                  }
                if (u) d(e.navigateActionHandler(u, n));
                else {
                  var $ = o(
                    "WAFlowsWELJActionCreators",
                  ).createWELJNavigateAction(
                    R,
                    L,
                    {},
                    E,
                    o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE,
                  );
                  d(e.navigateActionHandler($, n, !1));
                }
                (d({
                  name: o("WAFlowsActionHandlerTypes").WELJActionType
                    .WELJ_FLOW_LOADING,
                  payload: { isLoading: !1 },
                }),
                  k !== "" &&
                    typeof k == "string" &&
                    o("WAFlowsSnackbarUtils").showSnackbar(
                      { text: k },
                      e.invoke,
                    ));
              }
            );
          }),
          (n.catalogCartItemsUpdateActionHandler = function (t, n) {
            var e = this;
            return async function (r, o, a) {
              var i,
                l = o().external,
                s = a(),
                u = (i = s.getBizJid()) != null ? i : "",
                c = new Map();
              await e.executeOnlyExternalDataExchangeRequest(
                t,
                s,
                l,
                o(),
                u,
                c,
                n,
                !1,
              )(r);
            };
          }),
          (n.updateDataActionHandler = function (t, n) {
            return function (e, r, a) {
              var i,
                l = a(),
                s = r(),
                u = o("WAFlowsStateParser").parseActionPayload(
                  s.external,
                  t,
                  (i = n.payload) != null ? i : {},
                  l,
                );
              Array.isArray(u) ||
                (o("WAFlowsActionHandlerUtils").validateSchemaOrThrowError(
                  t,
                  n.name,
                  u,
                  l,
                ),
                e(
                  o("WAFlowsWELJActionCreators").createWELJUpdateDataAction(
                    t,
                    u,
                  ),
                ));
            };
          }),
          (n.copyTextActionHandler = function (t) {
            var e = this;
            return function (n, r, o) {
              var a = o().getFlowId();
              e.copyTextActionInvoke(t, a, e.invoke)();
            };
          }),
          (n.copyTextActionInvoke = function (t, n, r) {
            return async function (e) {
              await r({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAFlowsCopyText,
                payload: {
                  flow_id: n,
                  text: t.textToCopy,
                  notification_title: t.notificationTitle,
                },
                hasCallback: !0,
              });
            };
          }),
          (n.downloadResponseActionHandler = function (t) {
            var e = this;
            return function (n, r, o) {
              e.downloadResponseActionInvoke(t, e.invoke)();
            };
          }),
          (n.downloadResponseActionInvoke = function (t, n) {
            return async function (e) {
              await n({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAFlowsDownloadResponse,
                payload: { flow_id: t.flowId },
                hasCallback: !1,
              });
            };
          }),
          t
        );
      })();
    l.WAFlowsActionHandler = m;
  },
  98,
);
