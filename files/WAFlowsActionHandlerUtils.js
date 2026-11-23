__d(
  "WAFlowsActionHandlerUtils",
  [
    "invariant",
    "WAFlowsActionHandlerTypes",
    "WAFlowsComponentWrapper.react",
    "WAFlowsDataChannelRequest",
    "WAFlowsError",
    "WAFlowsJSONSchemaValidatorSelector",
    "WAFlowsLocalization",
    "WAFlowsPublicKey",
    "WAFlowsStateParser",
    "WAFlowsVersionUtils",
    "WAFlowsWELJValidationUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["action", "screen"],
      u = ["required"],
      c,
      d = 1;
    function m(e, t, n, r, a, i) {
      if (!o("WAFlowsWELJValidationUtils").allowInvalidTransition(e, n, i)) {
        var l = o("WAFlowsWELJValidationUtils").validateFlowsScreenRoutingModel(
          t,
          e,
          n,
        );
        if (l.length > 0)
          throw new (o("WAFlowsError").WAFlowsRoutingModelValidationError)(
            l,
            r,
            t,
          );
      }
      var s = !1;
      if (t !== "") {
        var u;
        s = (u = n.getScreenMeta(t).isNavListScreen) != null ? u : !1;
      }
      var c = n.getScreenDataModel(e),
        d = o("WAFlowsWELJValidationUtils").validateFlowsScreenData(
          a != null ? a : {},
          c,
          s,
        );
      if (d.length !== 0)
        throw new (o("WAFlowsError").WAFlowsDataModelValidationError)(d, r, t);
    }
    function p(e) {
      return function (t) {
        e.payload.action !== "INIT" &&
          t({
            name: o("WAFlowsActionHandlerTypes").WELJActionType
              .WELJ_FLOW_LOADING,
            payload: { isLoading: !0 },
          });
      };
    }
    async function _(t, n, a, i, l) {
      var u,
        c,
        m,
        p,
        _,
        f,
        g = n.payload,
        h = g.action,
        y = g.screen,
        C = babelHelpers.objectWithoutPropertiesLoose(g, e);
      y != null || s(0, 72445);
      var b = await i();
      b != null || s(0, 72523);
      var v = b.environment,
        S = v.flow_id,
        R = v.flow_token,
        L =
          (u =
            (c = b.environment.public_key) != null
              ? c
              : (m = await r("WAFlowsPublicKey")(
                    { force_refresh: !1 },
                    l.invoke,
                  )) == null
                ? void 0
                : m.public_key) != null
            ? u
            : (p = await r("WAFlowsPublicKey")(
                  { force_refresh: !0 },
                  l.invoke,
                )) == null
              ? void 0
              : p.public_key;
      L != null || s(0, 73970);
      var E = t.getDataAPIVersion();
      E != null || s(0, 73003);
      var k = (_ = b.environment) == null ? void 0 : _.www_proxy_secret,
        I = (f = b.environment) == null ? void 0 : f.flow_token_signature,
        T =
          y === ""
            ? {}
            : o("WAFlowsStateParser").parseActionPayload(
                a,
                y,
                C != null ? C : {},
                t,
              );
      !Array.isArray(T) || s(0, 72448);
      var D = r("justknobx")._("2512");
      D &&
        (T = o("WAFlowsStateParser").transformNativeComponentsValue(
          o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE,
          T,
          t,
          y,
        ));
      var x = {
        data: T,
        flow_token: R,
        screen: y,
        action: h,
        version: +E < 300 ? E : o("WAFlowsVersionUtils").intToString(+E),
      };
      l.onInteractivePreviewEventRequest({
        action: h,
        data: T,
        flowToken: R,
        version: x.version,
      });
      var $ = r("WAFlowsDataChannelRequest")(
        { data: x, extensionId: S, publicKey: L, maxRetries: d },
        l,
        k,
        I,
        t.getIsShoppingFlow(),
      );
      return $;
    }
    var f = new Set([
        (c = o("WAFlowsError")).WAFlowsErrorCodes
          .GRAPHQPL_CTA_DISABLED_CODED_ERROR,
        c.WAFlowsErrorCodes.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN,
        c.WAFlowsErrorCodes.DECRYPTION_FAILED_ERROR,
        c.WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421,
      ]),
      g = new Set([
        c.WAFlowsErrorCodes.GRAPHQPL_CTA_DISABLED_CODED_ERROR,
        c.WAFlowsErrorCodes.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN,
      ]);
    function h(e) {
      var t = o("WAFlowsError").getWAFlowCodedError(e);
      return t != null && g.has(t);
    }
    function y(e) {
      var t = o("WAFlowsError").getWAFlowCodedError(e);
      return (
        (t != null && f.has(t)) ||
        (e instanceof o("WAFlowsError").WAFlowsDataChannelResponseError &&
          e.isNonRetryable === !0)
      );
    }
    function C(e, t, n, r) {
      throw (
        r == null || r.onInteractivePreviewEventError(e),
        e instanceof o("WAFlowsError").WAFlowsDataChannelResponseError ||
        !(e instanceof o("WAFlowsError").WAFlowsError)
          ? new (o("WAFlowsError").WAFlowsDataChannelError)(
              o("WAFlowsLocalization").getFallbackDataChannelErrorMessage(),
              window.navigator.onLine
                ? e
                : o("WAFlowsError").WAFlowsCodedError.NO_INTERNET_CONNECTION,
              t,
              y(e) ? void 0 : n,
            )
          : e
      );
    }
    function b(e, t, n, a, i, l) {
      i === void 0 && (i = !1);
      var s = r("WAFlowsJSONSchemaValidatorSelector")(),
        c = a.getScreenDataModel(e),
        d = c.required,
        m = babelHelpers.objectWithoutPropertiesLoose(c, u),
        p = !1;
      if (l != null) {
        var _ = a.getScreenMeta(l);
        p = _.isNavListScreen;
      }
      var f = p === !0 ? { required: Object.keys(m) } : {},
        g = s.validate(
          babelHelpers.extends(
            {
              type: "object",
              additionalProperties: i,
              properties: babelHelpers.extends({}, m),
            },
            f,
          ),
          n,
        );
      if (!g) {
        var h = o("WAFlowsComponentWrapper.react").filterFJVValidationErrors(
          t,
          "",
          s.errors,
          !1,
          void 0,
          void 0,
          void 0,
          p,
        );
        throw new (o("WAFlowsError").WAFlowsComponentHardValidationError)(
          h.map(function (e) {
            return e.error;
          }).join(`
`),
        );
      }
    }
    ((l.validateRoutingModel = m),
      (l.dispatchFlowLoading = p),
      (l.executeDataExchange = _),
      (l.shouldDisableNativeMessageCTA = h),
      (l.delegateErrorToHandler = C),
      (l.validateSchemaOrThrowError = b));
  },
  98,
);
