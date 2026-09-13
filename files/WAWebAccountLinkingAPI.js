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
    "WAWebAccountLinkingAPIGetCertsQuery.graphql",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebGraphQLServerError",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebRelayClient",
    "WAWebWaffleCertificateCache",
    "WAWebWaffleEncryptionMetadataArgs",
    "WAWebWaffleFXServiceDataQueryV2Mutation",
    "WAWebWaffleIQErrorHandler",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebX509Utils",
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
      L,
      E,
      k,
      I,
      T,
      D,
      x = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      $ = {
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
    function P(e) {
      var t = o("WAWebAccountLinkingGatingUtils").getWaffleMode(),
        n = $[e];
      if (!n.includes(t))
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  '[WAFFLE] API "',
                  '" not allowed in ',
                  " mode",
                ])),
              e,
              t,
            )
            .sendLogs("waffle-api-mode-not-allowed"),
          r("err")('[WAFFLE] API "' + e + '" not allowed in ' + t + " mode")
        );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("fetchValidCertificate");
          var e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
          if (e != null) {
            var t = yield w(e.encryptionPem, e.passwordPem, e.passwordKeyId);
            if (t != null) return t;
          }
          return F();
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield o("WAWebX509Utils").extractCertificates(e),
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
                s = null;
              return (
                t != null &&
                  (s = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).importPasswordPublicKey(t)),
                {
                  encryptionKey: l,
                  passwordPublicKey: s,
                  passwordKeyId: n != null ? n : null,
                  payloadEncryptionKeyV2: null,
                  payloadKeyId: null,
                  source: "cache",
                }
              );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to restore cert from PEM",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
          return null;
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          )
            return U();
          var e = yield W();
          return e != null
            ? e
            : (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GraphQL certificate fetch failed, falling back to IQ",
                    ])),
                )
                .sendLogs("waffle-graphql-cert-fetch-fallback", {
                  sampling: 0.1,
                }),
              U());
        })),
        O.apply(this, arguments)
      );
    }
    var B =
      e !== void 0 ? e : (e = n("WAWebAccountLinkingAPIGetCertsQuery.graphql"));
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t,
              n,
              a,
              i = yield o("WAWebRelayClient").fetchQuery(
                B,
                {},
                { environmentType: "whatsapp_web" },
              ),
              l =
                i == null || (e = i.waffle_get_certs) == null
                  ? void 0
                  : e.payload_encryption,
              s = l == null ? void 0 : l.cert_chain_pem;
            if (s == null || s.length === 0)
              return (
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GetCerts response missing payload encryption chain",
                    ])),
                ),
                null
              );
            var u = s.join("\n"),
              c = yield o("WAWebX509Utils").extractCertificates(u),
              f = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(c);
            if (f == null)
              return (
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GetCerts payload certificate validation failed",
                    ])),
                ),
                null
              );
            var g = (t = l == null ? void 0 : l.key_id) != null ? t : null,
              h = yield f.getPublicKey({
                algorithm: {
                  algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                  usages: ["encrypt"],
                },
              }),
              y =
                g == null
                  ? null
                  : yield f.getPublicKey({
                      algorithm: {
                        algorithm: {
                          name: "RSA-OAEP",
                          hash: { name: "SHA-256" },
                        },
                        usages: ["encrypt"],
                      },
                    }),
              C = null,
              b = null,
              v = null,
              S =
                i == null || (n = i.waffle_get_certs) == null
                  ? void 0
                  : n.password_encryption,
              R = S == null ? void 0 : S.cert_chain_pem;
            if (R != null && R.length > 0)
              try {
                var L,
                  E = yield o("WAWebX509Utils").extractCertificates(R[0]),
                  k = E[0];
                if (k == null)
                  throw r("err")(
                    "[WAFFLE] Password certificate chain is unparseable",
                  );
                var I = yield k.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                });
                ((v = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(
                  I,
                )),
                  (C = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).importPasswordPublicKey(v, "SHA-256")),
                  (b = (L = S == null ? void 0 : S.key_id) != null ? L : null));
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to import password certificate from GetCerts",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                  (v = null),
                  (C = null),
                  (b = null));
              }
            return (
              yield o("WAWebWaffleCertificateCache").saveCertToIDB({
                encryptionPem: u,
                passwordKeyId: b,
                passwordPem: v,
                ttlSeconds:
                  (a = l == null ? void 0 : l.ttl_seconds) != null ? a : null,
              }),
              {
                encryptionKey: h,
                passwordKeyId: b,
                passwordPublicKey: C,
                payloadEncryptionKeyV2: y,
                payloadKeyId: g,
                source: "graphql",
              }
            );
          } catch (e) {
            var T =
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
                : e;
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GetCerts query failed: ",
                      "",
                    ])),
                  T,
                )
                .tags("waffle", "account-linking"),
              null
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  s = yield o("WAWebX509Utils").extractCertificates(l),
                  u = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).validateCertificateChain(s);
                if (u != null) {
                  var c,
                    d,
                    m = yield u.getPublicKey({
                      algorithm: {
                        algorithm: {
                          name: "RSA-OAEP",
                          hash: { name: "SHA-1" },
                        },
                        usages: ["encrypt"],
                      },
                    }),
                    p = null,
                    _ = null,
                    C = null,
                    b = a.passwordPem;
                  if (b != null)
                    try {
                      ((C = String.fromCharCode.apply(null, b.elementValue)),
                        (p = yield o(
                          "WAWebAccountLinkingCryptoUtils",
                        ).importPasswordPublicKey(C)),
                        (_ = b.keyId));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAFFLE] Failed to import password PEM",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    }
                  var v =
                    (c = (d = a.encryptionPem) == null ? void 0 : d.ttl) != null
                      ? c
                      : null;
                  return (
                    yield o("WAWebWaffleCertificateCache").saveCertToIDB({
                      encryptionPem: l,
                      passwordKeyId: _,
                      passwordPem: C,
                      ttlSeconds: v,
                    }),
                    {
                      encryptionKey: m,
                      passwordPublicKey: p,
                      passwordKeyId: _,
                      payloadEncryptionKeyV2: null,
                      payloadKeyId: null,
                      source: "iq",
                    }
                  );
                }
                return (
                  o("WALogger").ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        V.apply(this, arguments)
      );
    }
    var H = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      G = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      z = null;
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e: {
            if (e === "request_nonce")
              return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
            if (e === "refresh_token") {
              var n = t.nextBackoffMs();
              if (n == null) return !1;
              return (yield o("WAPromiseDelays").delayMs(n), Q());
              break e;
            }
            if (e === "refetch_certs") {
              var r = t.nextBackoffMs();
              if (r == null) return !1;
              yield o("WAPromiseDelays").delayMs(r);
              var a = yield N();
              return a != null;
            }
            if (e === "purge") {
              return (
                o(
                  "WAWebMetaAiWaffleAuthTokenCache",
                ).clearMetaAiWaffleAuthTokenBlobCache(),
                yield x.purgeWaffleData(),
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
              var i = yield oe();
              return (
                i &&
                  (o(
                    "WAWebMetaAiWaffleAuthTokenCache",
                  ).clearMetaAiWaffleAuthTokenBlobCache(),
                  yield x.purgeWaffleData()),
                i
              );
              break e;
            }
            if (e === "server_pause") {
              var l = yield ie();
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
        K.apply(this, arguments)
      );
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("refreshAccessToken");
          var e = z;
          return e != null
            ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                  .REFRESH_TOKEN_DEDUPLICATED,
              }),
              e)
            : ((z = Y().finally(function () {
                z = null;
              })),
              z);
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
          var e = Date.now();
          o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
          });
          var t = yield x.getAccountLinkingData();
          if (t == null) return (Z(e), !1);
          var n = t.fbid,
            a = t.nonce,
            i = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            l = i.privateKey,
            s = i.publicKey,
            u = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(s),
            c = {
              version: 1,
              timestamp: Date.now(),
              nonce: a,
              client_pub_key: u,
              client_pub_key_type: "RSA 2048",
            },
            d = yield o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(c);
          if (n != null) {
            var m = yield o(
              "WASmaxWaffleRefreshAccessTokensRPC",
            ).sendRefreshAccessTokensRPC({
              rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
                o(
                  "WAWebWaffleEncryptionMetadataArgs",
                ).waffleEncryptionMetadataArgs(d),
              timestampElementValue: Date.now(),
              fbidElementValue: n,
            });
            if (m.name === "RefreshAccessTokensResponseSuccess") {
              H.reset();
              var p = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                  m.value.encryptionMetadataRSAEncryptionMetadataMixin,
                ),
                _ = p.data,
                f = p.key,
                g = p.nonce,
                h = p.tag;
              try {
                var y = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).decryptRSAEncryptedPayload(l, f, _, g, h);
                if ("access_token" in y)
                  return (
                    yield x.updateAccesstoken(y.access_token),
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
                Z(e);
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  Z(e));
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
                yield j(S, H),
                o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  v.name,
                ));
            }
          } else Z(e);
          return !1;
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: !1,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("ping");
          var e = Date.now(),
            t = yield x.getAccountLinkingData();
          if (t != null) {
            var n = t.accesstoken,
              r = t.fbid;
            if (n != null) {
              var a = { version: 1, timestamp: Date.now(), access_token: n },
                i = yield o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(
                  a,
                );
              if (r != null) {
                var l = yield o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
                  rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
                    o(
                      "WAWebWaffleEncryptionMetadataArgs",
                    ).waffleEncryptionMetadataArgs(i),
                  timestampElementValue: Date.now(),
                  fbidElementValue: r,
                });
                if (l.name === "WFPingResponseSuccess") {
                  G.reset();
                  var s = l.value.pingIntervalElementValue;
                  (yield x.updatePingInterval(s),
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
                    yield j(c, G),
                    o("WALogger").ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Ping failed due to null waEntFbid",
                      ])),
                  ));
            }
          }
        })),
        te.apply(this, arguments)
      );
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("stateExists");
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("forceDeleteState");
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] ForceDeleteState RPC failed: ",
                    "",
                  ])),
                t.name,
              )
              .sendLogs("waffle-force-delete-state-failed"),
            !1
          );
        })),
        ae.apply(this, arguments)
      );
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("forceSuspendState");
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
        le.apply(this, arguments)
      );
    }
    function se() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("fetchServiceData");
          var e = yield x.getAccountLinkingData();
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
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield x.updateServiceData(i);
          }
        })),
        ue.apply(this, arguments)
      );
    }
    ((l.assertModeAllowed = P),
      (l.fetchValidCertificate = N),
      (l.handleRecoveryAction = j),
      (l.refreshAccessToken = Q),
      (l.ping = ee),
      (l.stateExists = ne),
      (l.fetchServiceData = se));
  },
  98,
);
