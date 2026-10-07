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
    "WAWebSubscriptionAgeGating",
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
      x,
      $ = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      P = {
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
    function N(e) {
      var t = o("WAWebAccountLinkingGatingUtils").getWaffleMode(),
        n = P[e];
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
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("fetchValidCertificate");
          var e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
          if (e != null) {
            if (!F(e)) {
              var t = yield O(e);
              if (t != null) return t;
            }
          }
          return W();
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return e.payloadKeyId == null && !e.passwordIsOaep ? 1 : 2;
    }
    function F(e) {
      var t = A(e),
        n = o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          ? 2
          : 1;
      return t !== n;
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.passwordIsOaep,
            n = e.passwordKeyId,
            a = e.passwordPem,
            i = e.payloadKeyId;
          try {
            var l = yield o("WAWebX509Utils").extractCertificates(
                e.encryptionPem,
              ),
              s = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(l);
            if (s != null) {
              var c = yield s.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                }),
                d =
                  i == null
                    ? null
                    : yield s.getPublicKey({
                        algorithm: {
                          algorithm: {
                            name: "RSA-OAEP",
                            hash: { name: "SHA-256" },
                          },
                          usages: ["encrypt"],
                        },
                      }),
                m = null;
              return (
                a != null &&
                  (m = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).importPasswordPublicKey(a, t ? "SHA-256" : "SHA-1")),
                {
                  encryptionKey: c,
                  passwordKeyIsOaepSha256: t,
                  passwordKeyId: n != null ? n : null,
                  passwordPublicKey: m,
                  payloadEncryptionKeyV2: d,
                  payloadKeyId: i,
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
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          )
            return Q();
          var e = yield V();
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
              Q());
        })),
        q.apply(this, arguments)
      );
    }
    var U =
      e !== void 0 ? e : (e = n("WAWebAccountLinkingAPIGetCertsQuery.graphql"));
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t,
              n,
              a,
              i = yield o("WAWebRelayClient").fetchQuery(
                U,
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
            var u = (t = l == null ? void 0 : l.key_id) != null ? t : null;
            if (u == null)
              return (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GetCerts payload certificate has no key_id",
                      ])),
                  )
                  .sendLogs("waffle-getcerts-missing-payload-key-id", {
                    sampling: 0.1,
                  }),
                null
              );
            var c = s.join("\n"),
              g = yield o("WAWebX509Utils").extractCertificates(c),
              h = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(g);
            if (h == null)
              return (
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GetCerts payload certificate validation failed",
                    ])),
                ),
                null
              );
            var y = yield h.getPublicKey({
                algorithm: {
                  algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                  usages: ["encrypt"],
                },
              }),
              C = yield h.getPublicKey({
                algorithm: {
                  algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
                  usages: ["encrypt"],
                },
              }),
              b = null,
              v = null,
              S = null,
              R =
                i == null || (n = i.waffle_get_certs) == null
                  ? void 0
                  : n.password_encryption,
              L = R == null ? void 0 : R.cert_chain_pem;
            if (L != null && L.length > 0)
              try {
                var E,
                  k = yield o("WAWebX509Utils").extractCertificates(
                    L.join("\n"),
                  ),
                  I = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).validateCertificateChain(k);
                if (I == null)
                  throw r("err")(
                    "[WAFFLE] Password certificate chain validation failed",
                  );
                var T = yield I.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                });
                ((S = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(
                  T,
                )),
                  (b = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).importPasswordPublicKey(S, "SHA-256")),
                  (v = (E = R == null ? void 0 : R.key_id) != null ? E : null));
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to import password certificate from GetCerts",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                  (S = null),
                  (b = null),
                  (v = null));
              }
            var D = b != null;
            return (
              yield o("WAWebWaffleCertificateCache").saveCertToIDB({
                encryptionPem: c,
                passwordIsOaep: D,
                passwordKeyId: v,
                passwordPem: S,
                passwordTtlSeconds: R == null ? void 0 : R.ttl_seconds,
                payloadKeyId: u,
                ttlSeconds:
                  (a = l == null ? void 0 : l.ttl_seconds) != null ? a : null,
              }),
              {
                encryptionKey: y,
                passwordKeyId: v,
                passwordKeyIsOaepSha256: D,
                passwordPublicKey: b,
                payloadEncryptionKeyV2: C,
                payloadKeyId: u,
                source: "graphql",
              }
            );
          } catch (e) {
            var x =
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
                : e;
            return (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GetCerts query failed: ",
                      "",
                    ])),
                  x,
                )
                .tags("waffle", "account-linking"),
              null
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    var G = "whatsapp_web",
      z = {
        passwordChainLength: null,
        passwordKeyId: null,
        passwordTtlSeconds: null,
        payloadChainLength: null,
        payloadKeyId: null,
        payloadTtlSeconds: null,
      };
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t,
              n,
              a,
              i,
              l,
              s,
              u,
              c,
              d,
              m = yield o("WAWebRelayClient").fetchQuery(
                U,
                {},
                { environmentType: G },
              ),
              p =
                m == null || (e = m.waffle_get_certs) == null
                  ? void 0
                  : e.payload_encryption,
              _ =
                m == null || (t = m.waffle_get_certs) == null
                  ? void 0
                  : t.password_encryption;
            return {
              environmentType: G,
              error: null,
              rawError: null,
              ok: (p == null ? void 0 : p.key_id) != null,
              passwordChainLength:
                (n =
                  _ == null || (a = _.cert_chain_pem) == null
                    ? void 0
                    : a.length) != null
                  ? n
                  : null,
              passwordKeyId:
                (i = _ == null ? void 0 : _.key_id) != null ? i : null,
              passwordTtlSeconds:
                (l = _ == null ? void 0 : _.ttl_seconds) != null ? l : null,
              payloadChainLength:
                (s =
                  p == null || (u = p.cert_chain_pem) == null
                    ? void 0
                    : u.length) != null
                  ? s
                  : null,
              payloadKeyId:
                (c = p == null ? void 0 : p.key_id) != null ? c : null,
              payloadTtlSeconds:
                (d = p == null ? void 0 : p.ttl_seconds) != null ? d : null,
            };
          } catch (e) {
            var f, g;
            return babelHelpers.extends({}, z, {
              environmentType: G,
              error:
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
                  : r("getErrorSafe")(e).toString(),
              ok: !1,
              rawError:
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? JSON.stringify(
                      (f = (g = e.source) == null ? void 0 : g.errors) != null
                        ? f
                        : [],
                    )
                  : null,
            });
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
                    f = null,
                    b = a.passwordPem;
                  if (b != null)
                    try {
                      ((f = String.fromCharCode.apply(null, b.elementValue)),
                        (p = yield o(
                          "WAWebAccountLinkingCryptoUtils",
                        ).importPasswordPublicKey(f)),
                        (_ = b.keyId));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
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
                      passwordIsOaep: !1,
                      passwordKeyId: _,
                      passwordPem: f,
                      passwordTtlSeconds: b == null ? void 0 : b.ttl,
                      payloadKeyId: null,
                      ttlSeconds: v,
                    }),
                    {
                      encryptionKey: m,
                      passwordKeyId: _,
                      passwordKeyIsOaepSha256: !1,
                      passwordPublicKey: p,
                      payloadEncryptionKeyV2: null,
                      payloadKeyId: null,
                      source: "iq",
                    }
                  );
                }
                return (
                  o("WALogger").ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        X.apply(this, arguments)
      );
    }
    var Y = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      J = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      Z = null;
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e: {
            if (e === "request_nonce")
              return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
            if (e === "refresh_token") {
              var n = t.nextBackoffMs();
              if (n == null) return !1;
              return (yield o("WAPromiseDelays").delayMs(n), ne());
              break e;
            }
            if (e === "refetch_certs") {
              var r = t.nextBackoffMs();
              if (r == null) return !1;
              yield o("WAPromiseDelays").delayMs(r);
              var a = yield M();
              return a != null;
            }
            if (e === "purge") {
              return (
                o(
                  "WAWebMetaAiWaffleAuthTokenCache",
                ).clearMetaAiWaffleAuthTokenBlobCache(),
                yield $.purgeWaffleData(),
                yield o(
                  "WAWebSubscriptionAgeGating",
                ).invalidateSubscriptionAgeVerdict(),
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
              var i = yield de();
              return (
                i &&
                  (o(
                    "WAWebMetaAiWaffleAuthTokenCache",
                  ).clearMetaAiWaffleAuthTokenBlobCache(),
                  yield $.purgeWaffleData(),
                  yield o(
                    "WAWebSubscriptionAgeGating",
                  ).invalidateSubscriptionAgeVerdict()),
                i
              );
              break e;
            }
            if (e === "server_pause") {
              var l = yield pe();
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
        te.apply(this, arguments)
      );
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("refreshAccessToken");
          var e = Z;
          return e != null
            ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                  .REFRESH_TOKEN_DEDUPLICATED,
              }),
              e)
            : ((Z = oe().finally(function () {
                Z = null;
              })),
              Z);
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
          var e = Date.now();
          o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
          });
          var t = yield $.getAccountLinkingData();
          if (t == null) return (ie(e), !1);
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
              Y.reset();
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
                    yield $.updateAccesstoken(y.access_token),
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
                ie(e);
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  ie(e));
              }
            } else {
              var C = m.value.errorRefreshAccessTokensErrors,
                S = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError("refreshAccessToken", C.name);
              (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                elapsedMs: Date.now() - e,
                errorAction: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorActionToWam(S),
                errorCode: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorNameToWamCode(C.name),
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
              }),
                yield ee(S, Y),
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  C.name,
                ));
            }
          } else ie(e);
          return !1;
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: !1,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    function le() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("ping");
          var e = Date.now(),
            t = yield $.getAccountLinkingData();
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
                  J.reset();
                  var s = l.value.pingIntervalElementValue;
                  (yield $.updatePingInterval(s),
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
                    yield ee(c, J),
                    o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Ping failed due to null waEntFbid",
                      ])),
                  ));
            }
          }
        })),
        se.apply(this, arguments)
      );
    }
    function ue() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("stateExists");
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
          }
        })),
        ce.apply(this, arguments)
      );
    }
    function de() {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("forceDeleteState");
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] ForceDeleteState RPC failed: ",
                    "",
                  ])),
                t.name,
              )
              .sendLogs("waffle-force-delete-state-failed"),
            !1
          );
        })),
        me.apply(this, arguments)
      );
    }
    function pe() {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("forceSuspendState");
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
        _e.apply(this, arguments)
      );
    }
    function fe() {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N("fetchServiceData");
          var e = yield $.getAccountLinkingData();
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield $.updateServiceData(i);
          }
        })),
        ge.apply(this, arguments)
      );
    }
    ((l.assertModeAllowed = N),
      (l.fetchValidCertificate = M),
      (l.runWaffleGetCertsForDebug = j),
      (l.handleRecoveryAction = ee),
      (l.refreshAccessToken = ne),
      (l.ping = le),
      (l.stateExists = ue),
      (l.fetchServiceData = fe));
  },
  98,
);
