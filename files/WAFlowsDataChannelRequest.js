__d(
  "WAFlowsDataChannelRequest",
  [
    "fbt",
    "CurrentUser",
    "FBLogger",
    "WAFlowsError",
    "WAFlowsFetchPublicKey",
    "WAFlowsJSONSchemaValidatorSelector",
    "WAFlowsNativeQPLLogger",
    "WAFlowsNativeWAMLogger",
    "WAFlowsPreviewEncryptionHelper",
    "WAFlowsPromiseQueue",
    "WAFlowsShoppingCustomActionCallbacks",
    "WAFlowsUtils",
    "WAFlowsVersionUtils",
    "WAFlowsWebNativeBridgeClientABPropsContext.react",
    "WebDriverConfig",
    "err",
    "getErrorSafe",
    "isStringNotNullAndNotWhitespaceOnly",
    "justknobx",
    "promiseWithTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("WAFlowsJSONSchemaValidatorSelector")(),
      u = 1,
      c = "WA|471011608249857|4b543e9203c0b420cb5617b71ff0b80a",
      d = function (t) {
        var e = /flows.(.*?).whatsapp/gm,
          n = /business.(.*?).facebook/gm,
          r = /web.(.*?).whatsapp/gm,
          o = new URL(window.location.href).hostname,
          a =
            t === "web_tooling"
              ? n.exec(o)
              : t === "wa_web"
                ? r.exec(o)
                : e.exec(o);
        return a != null
          ? "https://graph." + a[1] + ".whatsapp.com/graphql/extensions"
          : m;
      },
      m = "https://graph.whatsapp.com/graphql/extensions",
      p = function (t) {
        return r("WebDriverConfig").isJestE2ETestRun ? d(t) : m;
      };
    async function _(e) {
      var t = 1e3,
        n = o(
          "WAFlowsWebNativeBridgeClientABPropsContext.react",
        ).clientABPropsHandler(e.invoke),
        a = n.getABProps,
        i = n.getABPropsFromCache,
        l = i(),
        s = !1;
      if (e.platform === "web_tooling") s = r("CurrentUser").isEmployee();
      else {
        var u, c;
        if (l == null && r("justknobx")._("630"))
          try {
            l = await r("promiseWithTimeout")(a(), {
              rejectOnTimeout: !0,
              timeout: t,
            });
          } catch (t) {
            var d;
            if (
              ((l = i()),
              ((d = l) == null ||
              (d = d.is_meta_employee_or_internal_tester) == null
                ? void 0
                : d.boolValue) == null)
            ) {
              var m;
              r("FBLogger")("wa_flows").warn(
                "ABProps wait failed on %s; using non-employee fallback",
                (m = e.platform) != null ? m : "unknown",
              );
            }
          }
        s =
          (u =
            (c = l) == null ||
            (c = c.is_meta_employee_or_internal_tester) == null
              ? void 0
              : c.boolValue) != null
            ? u
            : !1;
      }
      return s;
    }
    var f = {
        type: "object",
        properties: {
          screen: { type: "string" },
          data: {
            type: "object",
            properties: {
              extension_message_response: {
                type: "object",
                properties: { params: { type: "object" } },
              },
              error_message: { type: "string" },
            },
          },
        },
        required: ["screen"],
      },
      g = {
        INVALID_FLOW_TOKEN: 427,
        INVALID_ENCRYPTION: 421,
        TIMEOUT: 504,
        SUCCESS: 200,
      };
    function h(e) {
      switch (e) {
        case g.SUCCESS:
          return null;
        case g.TIMEOUT:
          return o("WAFlowsError").WAFlowsCodedError
            .BUSINESS_ENPOINT_TIMEOUT_ERROR;
        case g.INVALID_ENCRYPTION:
          return o("WAFlowsError").WAFlowsCodedError
            .INVALID_ENCRYPTION_ERROR_421;
        default:
          return o("WAFlowsError").WAFlowsCodedError
            .BUSINESS_ENDPOINT_RESPONSE_ERROR;
      }
    }
    function y(e) {
      switch (e.code) {
        case o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421:
          var t =
            o("WAFlowsError").WAFlowsCodedError.INVALID_ENCRYPTION_ERROR_421;
          return ((t.description = e.description), (t.message = e.message), t);
        case o("WAFlowsError").WAFlowsErrorCodes.BUSINESS_ENPOINT_TIMEOUT_ERROR:
          var n =
            o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENPOINT_TIMEOUT_ERROR;
          return ((n.description = e.description), (n.message = e.message), n);
        case o("WAFlowsError").WAFlowsErrorCodes
          .DATA_EXCHANGE_GRAPHQL_ENDPOINT_INTERNAL_SERVER_ERROR:
        default:
          var r =
            o("WAFlowsError").WAFlowsCodedError
              .BUSINESS_ENDPOINT_RESPONSE_ERROR;
          return ((r.description = e.description), (r.message = e.message), r);
      }
    }
    function C(e, t, n) {
      var r,
        a,
        i,
        l = o(
          "WAFlowsWebNativeBridgeClientABPropsContext.react",
        ).clientABPropsHandler(n),
        s = l.getABPropsFromCache,
        u =
          (r =
            (a = s()) == null ||
            (a = a.extensions_graphql_cta_disable.stringValue) == null
              ? void 0
              : a.split(",")) != null
            ? r
            : [],
        c = (i = e == null ? void 0 : e.code) != null ? i : t,
        d = c != null && u.includes(c.toString());
      if (!d) return null;
      var m =
        o("WAFlowsError").WAFlowsCodedError.GRAPHQPL_CTA_DISABLED_CODED_ERROR;
      return (
        e && ((m.description = e.description), (m.message = e.message)),
        m
      );
    }
    function b(e, t, n) {
      var r,
        o = e != null ? y(e) : null,
        a = t != null ? h(t) : null,
        i = C(e, a == null ? void 0 : a.code, n);
      return (r = i != null ? i : o) != null ? r : a;
    }
    function v(e) {
      var t,
        n = e.body,
        a = e.invoke,
        i = e.json,
        l = e.logWAMFlowError,
        u = e.qplInitPhoenixFlowDrop,
        c = e.qplScreenNavigationDrop,
        d = e.queue,
        m = e.statusCode,
        p = (t = i.errors) == null ? void 0 : t[0],
        _ = b(p, m, a),
        f = o("WAFlowsError").getErrorFromDataChannelResponse(
          i,
          _ == null ? void 0 : _.code,
        );
      throw (
        r("isStringNotNullAndNotWhitespaceOnly")(f) && l(f),
        (p == null ? void 0 : p.code) ===
          o("WAFlowsError").WAFlowsErrorCodes
            .EXTENSIONS_FEATURES_DISABLED_ERROR && (d.add(c()), d.add(u())),
        (_ == null ? void 0 : _.code) ===
        o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421
          ? new (o(
              "WAFlowsError",
            ).WAFlowsDataChannelResponseBusinessDecryptionError)({
              statusCode: m != null ? m : g.INVALID_ENCRYPTION,
              body: n,
            })
          : new (o("WAFlowsError").WAFlowsDataChannelResponseError)(
              s._(/*BTDS*/ ""),
              _ != null
                ? _
                : o("WAFlowsError").WAFlowsCodedError
                    .BUSINESS_ENDPOINT_RESPONSE_ERROR,
              m != null ? { statusCode: m, body: n } : null,
            )
      );
    }
    function S(e) {
      var t = e.actionHandler,
        n = e.body,
        r = e.error,
        a = e.isInvalidFlowToken,
        i = e.qplScreenNavigationAnnotate,
        l = e.statusCode;
      throw (
        a &&
          i({
            stringAnnotations: {
              bypassed_error_types: JSON.stringify([
                o("WAFlowsError").WAFlowsLoggerErrorTypes
                  .BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN,
              ]),
            },
          }),
        n != null && t.onInteractivePreviewEventResponse(n),
        new (o("WAFlowsError").WAFlowsDataChannelResponseDecryptionError)(
          r,
          l != null ? { statusCode: l, body: n } : null,
        )
      );
    }
    async function R(e, t, n, a, i, l) {
      var s,
        u,
        d = e.data,
        m = e.extensionId,
        f = e.publicKey;
      l === void 0 && (l = !1);
      var h = r("WAFlowsNativeQPLLogger")(n),
        y = h.getWAFlowsQPLNavigationPoints,
        C = h.qplInitPhoenixFlowDrop,
        b = h.qplScreenNavigationAnnotate,
        R = h.qplScreenNavigationDrop,
        E = h.qplScreenNavigationPoint,
        k = y(t),
        I = k.DecryptionEnd,
        T = k.DecryptionStart,
        D = k.EncryptionEnd,
        x = k.EncryptionStart,
        $ = k.ForwardNetworkEnd,
        P = k.ForwardNetworkStart,
        N = r("WAFlowsPromiseQueue")();
      N.add(E(x));
      var M = babelHelpers.extends({}, d, { flow_token_signature: i }),
        w = d.version === "4.0" && i != null ? M : d,
        A = await o("WAFlowsPreviewEncryptionHelper").encryptData(
          f,
          (s = JSON.stringify(w)) != null ? s : "",
        );
      N.add(E(D));
      var F = A.encryptedAesKey,
        O = A.encryptedData,
        B = A.exportedAesKey,
        W = A.iv,
        q = "28825704700443556",
        U = await _(n),
        V = p((u = n.platform) != null ? u : "ios");
      (U && (V += "?_emp=1"), N.add(E(P)));
      var H = await window.fetch(V, {
        method: "POST",
        headers: { "Content-Type": "application/json", "User-Agent": "" },
        body: JSON.stringify({
          access_token: c,
          doc_id: q,
          variables: {
            encrypted_flow_data: O,
            encrypted_aes_key: F,
            initial_vector: W,
            flow_or_version_id: m,
            www_proxy_signature: a,
          },
        }),
      });
      N.add(E($));
      var G = r("WAFlowsNativeWAMLogger")(n),
        z = G.logWAMFlowError;
      if (!H.ok)
        throw (
          z(
            o("WAFlowsError").WAFlowsLoggerErrorTypes
              .DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR,
          ),
          o("WAFlowsError").WAFlowsCodedError
            .DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR
        );
      var j = await H.json(),
        K = j.data.xwa_flows_make_flow_endpoint_request,
        Q = K == null ? void 0 : K.status_code,
        X = K == null ? void 0 : K.body,
        Y = Q === g.INVALID_FLOW_TOKEN,
        J = j.errors != null || (Q !== g.SUCCESS && !Y);
      if (
        (J &&
          v({
            json: j,
            statusCode: Q,
            body: X,
            invoke: n.invoke,
            logWAMFlowError: z,
            qplScreenNavigationDrop: R,
            qplInitPhoenixFlowDrop: C,
            queue: N,
          }),
        N.add(E(T)),
        K == null)
      )
        throw o("WAFlowsError").WAFlowsCodedError
          .BUSINESS_ENDPOINT_RESPONSE_ERROR;
      if (Y && (X != null ? X : "").length === 0)
        throw new (o(
          "WAFlowsError",
        ).WAFlowsDataChannelResponseInvalidTokenError)({
          statusCode: Q != null ? Q : g.INVALID_FLOW_TOKEN,
          body: X,
        });
      var Z = "";
      try {
        Z = await o("WAFlowsPreviewEncryptionHelper").decryptData(
          B,
          X != null ? X : "",
          W,
          String(o("WAFlowsVersionUtils").convertVersion(d.version)),
        );
      } catch (e) {
        S({
          actionHandler: n,
          body: X,
          error: e,
          isInvalidFlowToken: Y,
          qplScreenNavigationAnnotate: b,
          statusCode: Q,
        });
      }
      return (
        N.add(E(I)),
        n.onInteractivePreviewEventResponse(Z),
        L(Z, Q, X, Y, l)
      );
    }
    function L(e, t, n, a, i) {
      var l = {};
      try {
        l = JSON.parse(e);
      } catch (r) {
        throw new (o(
          "WAFlowsError",
        ).WAFlowsDataChannelResponseInvalidResponseFormatError)(
          { statusCode: t != null ? t : 200, body: n },
          e,
        );
      }
      if (a)
        throw new (o(
          "WAFlowsError",
        ).WAFlowsDataChannelResponseInvalidTokenError)(
          { statusCode: t != null ? t : g.INVALID_FLOW_TOKEN, body: n },
          String(l.error_msg),
          e,
        );
      try {
        return (
          i &&
            o(
              "WAFlowsShoppingCustomActionCallbacks",
            ).FLOWJIntegratedShoppingClickActionType.isValid(
              l.data.sub_action,
            ) &&
            (l = babelHelpers.extends({}, l, { screen: "CART" })),
          E(l)
        );
      } catch (a) {
        throw new (o(
          "WAFlowsError",
        ).WAFlowsDataChannelResponseInvalidResponseFormatError)(
          { statusCode: t != null ? t : 200, body: n },
          e,
          r("getErrorSafe")(a).message,
        );
      }
    }
    function E(t) {
      var n = e.validate(f, t);
      if (!n) throw r("err")(e.errorsText(e.errors, { dataVar: "'response'" }));
      return t;
    }
    function k(e, t, n, a, i) {
      var l;
      (i === void 0 && (i = !1), o("WAFlowsUtils").checkIfOnlineOrThrowError());
      var s = (l = e.maxRetries) != null ? l : u,
        c = 0,
        d = r("WAFlowsNativeQPLLogger")(t),
        m = d.qplScreenNavigationAnnotate,
        p = async function (r) {
          if (c > s)
            throw o("WAFlowsError").WAFlowsCodedError
              .BUSINESS_ENDPOINT_RESPONSE_ERROR;
          try {
            return (
              m({ intAnnotations: { forward_network_request_count: c + 1 } }),
              await R(r, c, t, n, a, i)
            );
          } catch (n) {
            var e = o("WAFlowsError").getWAFlowCodedError(n);
            if (e !== null && t.platform !== "web_tooling")
              switch (e) {
                case o("WAFlowsError").WAFlowsErrorCodes
                  .INVALID_ENCRYPTION_ERROR_421:
                  return _(r, n);
              }
            throw n;
          }
        },
        _ = async function (t, n) {
          if (((c += 1), c > s)) throw n;
          await new Promise(function (e) {
            return window.setTimeout(function () {
              return e();
            }, c * 500);
          });
          var e = await r("WAFlowsFetchPublicKey")({ force_refresh: !0 }),
            a = e != null ? e : {},
            i = a.public_key;
          return (
            (t.publicKey = i != null ? i : t.publicKey),
            m({
              stringAnnotations: {
                bypassed_error_types: JSON.stringify([
                  o("WAFlowsError").WAFlowsLoggerErrorTypes
                    .BUSINESS_ENDPOINT_RESPONSE_421,
                ]),
                bypassed_error_messages: JSON.stringify([n.message]),
              },
            }),
            p(t)
          );
        };
      return p(e);
    }
    l.default = k;
  },
  226,
);
