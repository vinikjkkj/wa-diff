__d(
  "WAWebAccountLinkingAPI",
  [
    "WALogger",
    "WAPromiseDelays",
    "WASmaxWaffleForceDeleteStateRPC",
    "WASmaxWaffleForceSuspendStateRPC",
    "WASmaxWaffleGetCertificateRPC",
    "WASmaxWaffleRefreshAccessTokensRPC",
    "WASmaxWaffleStateExistsRPC",
    "WASmaxWaffleWFPingRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebDirectConnectionX509",
    "WAWebGraphQLServerError",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebRelayClient",
    "WAWebWaffleCertificateCache",
    "WAWebWaffleFXServiceDataQueryV2Mutation",
    "WAWebWaffleIQErrorHandler",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      E = {
        fetchValidCertificate: ["companion", "guest"],
        generateWAEntACUser: ["guest"],
        generateAccessTokens: ["guest"],
        refreshAccessToken: ["companion", "guest"],
        ping: ["companion", "guest"],
        stateExists: ["companion", "guest"],
        forceDeleteState: ["companion", "guest"],
        forceSuspendState: ["companion", "guest"],
        fetchServiceData: ["companion", "guest"],
        sendLinkingMutation: ["guest"],
      };
    function k(t) {
      var n = o("WAWebAccountLinkingGatingUtils").getWaffleMode(),
        a = E[t];
      if (!a.includes(n))
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  '[WAFFLE] API "',
                  '" not allowed in ',
                  " mode",
                ])),
              t,
              n,
            )
            .sendLogs("waffle-api-mode-not-allowed"),
          r("err")('[WAFFLE] API "' + t + '" not allowed in ' + n + " mode")
        );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("fetchValidCertificate");
          var e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
          if (e != null) {
            var t = yield D(e.encryptionPem, e.passwordPem, e.passwordKeyId);
            if (t != null) return t;
          }
          return $();
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield o("WAWebDirectConnectionX509").extractCertificates(e),
              i = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(a);
            if (i != null) {
              var l = yield i.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                }),
                u = null;
              return (
                t != null &&
                  (u = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).importPasswordPublicKey(t)),
                {
                  encryptionKey: l,
                  passwordPublicKey: u,
                  passwordKeyId: n != null ? n : null,
                }
              );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to restore cert from PEM",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
          return null;
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Math.floor(Date.now() / 1e3);
          try {
            var t = yield o(
              "WASmaxWaffleGetCertificateRPC",
            ).sendGetCertificateRPC({
              hasPasswordPem: !0,
              hasPayloadEncCertificates: !0,
              timestampElementValue: e,
            });
            if (t.name === "GetCertificateResponseSuccess") {
              var n,
                a = t.value.replyGetCertificateResponseMixin,
                i = (n = a.encryptionPem) == null ? void 0 : n.elementValue;
              if (i != null) {
                var l = String.fromCharCode.apply(null, i),
                  s = yield o("WAWebDirectConnectionX509").extractCertificates(
                    l,
                  ),
                  p = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).validateCertificateChain(s);
                if (p != null) {
                  var _,
                    f,
                    g = yield p.getPublicKey({
                      algorithm: {
                        algorithm: {
                          name: "RSA-OAEP",
                          hash: { name: "SHA-1" },
                        },
                        usages: ["encrypt"],
                      },
                    }),
                    h = null,
                    y = null,
                    C = null,
                    b = a.passwordPem;
                  if (b != null)
                    try {
                      ((C = String.fromCharCode.apply(null, b.elementValue)),
                        (h = yield o(
                          "WAWebAccountLinkingCryptoUtils",
                        ).importPasswordPublicKey(C)),
                        (y = b.keyId));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAFFLE] Failed to import password PEM",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    }
                  var v =
                    (_ = (f = a.encryptionPem) == null ? void 0 : f.ttl) != null
                      ? _
                      : null;
                  return (
                    yield o("WAWebWaffleCertificateCache").saveCertToIDB(
                      l,
                      C,
                      y,
                      v,
                    ),
                    { encryptionKey: g, passwordPublicKey: h, passwordKeyId: y }
                  );
                }
                return (
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Fetching valid certificate failed",
                      ])),
                  ),
                  null
                );
              }
              return null;
            }
            var S = t.value.errorGetCertificateErrors;
            return (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GetCertificate RPC failed: ",
                    "",
                  ])),
                S.name,
              ),
              null
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        P.apply(this, arguments)
      );
    }
    var N = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      M = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      w = null;
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e: {
            if (e === "request_nonce")
              return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
            if (e === "refresh_token") {
              var n = t.nextBackoffMs();
              if (n == null) return !1;
              return (yield o("WAPromiseDelays").delayMs(n), O());
              break e;
            }
            if (e === "refetch_certs") {
              var r = t.nextBackoffMs();
              if (r == null) return !1;
              yield o("WAPromiseDelays").delayMs(r);
              var a = yield I();
              return a != null;
            }
            if (e === "purge") {
              return (
                o(
                  "WAWebMetaAiWaffleAuthTokenCache",
                ).clearMetaAiWaffleAuthTokenBlobCache(),
                yield L.purgeWaffleData(),
                !0
              );
              break e;
            }
            if (e === "pause") {
              return (
                yield o("WAWebAccountLinkingHandler").handlePausedState(),
                !0
              );
              break e;
            }
            if (e === "server_purge") {
              var i = yield j();
              return (
                i &&
                  (o(
                    "WAWebMetaAiWaffleAuthTokenCache",
                  ).clearMetaAiWaffleAuthTokenBlobCache(),
                  yield L.purgeWaffleData()),
                i
              );
              break e;
            }
            if (e === "server_pause") {
              var l = yield Q();
              return (
                l &&
                  (yield o("WAWebAccountLinkingHandler").handlePausedState()),
                l
              );
              break e;
            }
            if (e === "retry" || e === "handled" || e === "fail") return !1;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("refreshAccessToken");
          var e = w;
          return e != null
            ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                  .REFRESH_TOKEN_DEDUPLICATED,
              }),
              e)
            : ((w = W().finally(function () {
                w = null;
              })),
              w);
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Date.now();
          o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
          });
          var t = yield L.getAccountLinkingData();
          if (t == null) return (U(e, !1), !1);
          var n = t.fbid,
            a = t.nonce,
            i = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            l = i.privateKey,
            s = i.publicKey,
            u = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(s, !0),
            c = {
              version: 1,
              timestamp: Date.now(),
              nonce: a,
              client_pub_key: u,
              client_pub_key_type: "RSA 2048",
            },
            d = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(c);
          if (n != null) {
            var m = yield o(
              "WASmaxWaffleRefreshAccessTokensRPC",
            ).sendRefreshAccessTokensRPC({
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: d.encryptedKey,
                nonceElementValue: d.nonce,
                encryptedDataElementValue: d.cipherText,
                authTagElementValue: d.tag,
              },
              timestampElementValue: Date.now(),
              fbidElementValue: n,
            });
            if (m.name === "RefreshAccessTokensResponseSuccess") {
              N.reset();
              var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                  m.value.encryptionMetadataRSAEncryptionMetadataMixin,
                ),
                g = f.data,
                h = f.key,
                y = f.nonce,
                C = f.tag;
              try {
                var b = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).decryptRSAEncryptedPayload(l, h, g, y, C);
                if ("access_token" in b)
                  return (
                    yield L.updateAccesstoken(b.access_token),
                    o(
                      "WAWebMetaAiWaffleAuthTokenCache",
                    ).refreshMetaAiWaffleAuthTokenBlob(),
                    o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                      elapsedMs: Date.now() - e,
                      hasAccessToken: !0,
                      traceAction: o(
                        "WAWebWamEnumWaffleLifecycleTraceActionType",
                      ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                        .REFRESH_TOKEN_SUCCESS,
                    }),
                    !0
                  );
                U(e, !1);
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  U(e, !1));
              }
            } else {
              var v = m.value.errorRefreshAccessTokensErrors,
                S = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError("refreshAccessToken", v.name);
              (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                elapsedMs: Date.now() - e,
                errorAction: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorActionToWam(S),
                errorCode: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorNameToWamCode(v.name),
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
              }),
                yield A(S, N),
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  v.name,
                ));
            }
          } else U(e, !1);
          return !1;
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: t,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("ping");
          var e = Date.now(),
            t = yield L.getAccountLinkingData();
          if (t != null) {
            var n = t.accesstoken,
              r = t.fbid;
            if (n != null) {
              var a = { version: 1, timestamp: Date.now(), access_token: n },
                i = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).wrapPayloadWithRSAAESEncryption(a);
              if (r != null) {
                var l = yield o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
                  rSAEncryptionMetadataMixinArgs: {
                    encryptedKeyElementValue: i.encryptedKey,
                    nonceElementValue: i.nonce,
                    encryptedDataElementValue: i.cipherText,
                    authTagElementValue: i.tag,
                  },
                  timestampElementValue: Date.now(),
                  fbidElementValue: r,
                });
                if (l.name === "WFPingResponseSuccess") {
                  M.reset();
                  var s = l.value.pingIntervalElementValue;
                  (yield L.updatePingInterval(s),
                    o("WAWebWaffleLifecycleWamLogger").logPing({
                      elapsedMs: Date.now() - e,
                      hasAccessToken: !0,
                    }));
                } else {
                  var u = l.value.errorWfPingErrors,
                    c = yield o(
                      "WAWebWaffleIQErrorHandler",
                    ).handleCommonWaffleIQError("ping", u.name);
                  (o("WAWebWaffleLifecycleWamLogger").logPing({
                    elapsedMs: Date.now() - e,
                    errorAction: o(
                      "WAWebWaffleLifecycleWamLogger",
                    ).mapIQErrorActionToWam(c),
                    errorCode: o(
                      "WAWebWaffleLifecycleWamLogger",
                    ).mapIQErrorNameToWamCode(u.name),
                    hasAccessToken: !0,
                  }),
                    yield A(c, M),
                    o("WALogger").ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Ping failed: ",
                          "",
                        ])),
                      u.name,
                    ));
                }
              } else
                (o("WAWebWaffleLifecycleWamLogger").logPing({
                  elapsedMs: Date.now() - e,
                  hasAccessToken: !0,
                }),
                  o("WALogger").ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Ping failed due to null waEntFbid",
                      ])),
                  ));
            }
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("stateExists");
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to parse state exists response",
                ])),
            );
          } else {
            var n = e.value.errorStateExistsErrors;
            (yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
              "stateExists",
              n.name,
            ),
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
          }
        })),
        z.apply(this, arguments)
      );
    }
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("forceDeleteState");
          var e = yield o(
            "WASmaxWaffleForceDeleteStateRPC",
          ).sendForceDeleteStateRPC({
            timestampElementValue: Math.floor(Date.now() / 1e3),
          });
          if (e.name === "ForceDeleteStateResponseSuccess") return !0;
          var t = e.value.errorForceDeleteStateErrors;
          return (
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] ForceDeleteState RPC failed: ",
                    "",
                  ])),
                t.name,
              )
              .sendLogs("waffle-force-delete-state-failed"),
            !1
          );
        })),
        K.apply(this, arguments)
      );
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("forceSuspendState");
          var e = yield o(
            "WASmaxWaffleForceSuspendStateRPC",
          ).sendForceSuspendStateRPC({
            timestampElementValue: Math.floor(Date.now() / 1e3),
          });
          if (e.name === "ForceSuspendStateResponseSuccess") return !0;
          var t = e.value.errorForceSuspendStateErrors;
          return (
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] ForceSuspendState RPC failed: ",
                    "",
                  ])),
                t.name,
              )
              .sendLogs("waffle-force-suspend-state-failed", {
                sampling: 0.01,
              }),
            !1
          );
        })),
        X.apply(this, arguments)
      );
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k("fetchServiceData");
          var e = yield L.getAccountLinkingData();
          if (e != null) {
            var t = e.accesstoken,
              n;
            try {
              n = yield o("WAWebRelayClient").commitMutation(
                r("WAWebWaffleFXServiceDataQueryV2Mutation"),
                {},
                { accessToken: t },
              );
            } catch (e) {
              var a =
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
                  : e;
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] fetchServiceData mutation failed: ",
                      "",
                    ])),
                  a,
                )
                .tags("waffle", "account-linking")
                .sendLogs("waffle-fetch-service-data-mutation-failed", {
                  sampling: 0.01,
                });
              return;
            }
            if (n == null) {
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield L.updateServiceData(i);
          }
        })),
        J.apply(this, arguments)
      );
    }
    ((l.assertModeAllowed = k),
      (l.fetchValidCertificate = I),
      (l.handleRecoveryAction = A),
      (l.refreshAccessToken = O),
      (l.ping = V),
      (l.stateExists = G),
      (l.forceDeleteState = j),
      (l.forceSuspendState = Q),
      (l.fetchServiceData = Y));
  },
  98,
);
