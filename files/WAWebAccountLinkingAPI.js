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
            if (!A(e)) {
              var t = yield F(e);
              if (t != null) return t;
            }
          }
          return B();
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return e.payloadKeyId == null && !e.passwordIsOaep ? 1 : 2;
    }
    function A(e) {
      var t = w(e),
        n = o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          ? 2
          : 1;
      return t !== n;
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          )
            return K();
          var e = yield U();
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
              K());
        })),
        W.apply(this, arguments)
      );
    }
    var q =
      e !== void 0 ? e : (e = n("WAWebAccountLinkingAPIGetCertsQuery.graphql"));
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t,
              n,
              a,
              i = yield o("WAWebRelayClient").fetchQuery(
                q,
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
            var T = C != null;
            return (
              yield o("WAWebWaffleCertificateCache").saveCertToIDB({
                encryptionPem: u,
                passwordIsOaep: T,
                passwordKeyId: b,
                passwordPem: v,
                passwordTtlSeconds: S == null ? void 0 : S.ttl_seconds,
                payloadKeyId: g,
                ttlSeconds:
                  (a = l == null ? void 0 : l.ttl_seconds) != null ? a : null,
              }),
              {
                encryptionKey: h,
                passwordKeyId: b,
                passwordKeyIsOaepSha256: T,
                passwordPublicKey: C,
                payloadEncryptionKeyV2: y,
                payloadKeyId: g,
                source: "graphql",
              }
            );
          } catch (e) {
            var D =
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
                  D,
                )
                .tags("waffle", "account-linking"),
              null
            );
          }
        })),
        V.apply(this, arguments)
      );
    }
    var H = "whatsapp_web",
      G = {
        passwordChainLength: null,
        passwordKeyId: null,
        passwordTtlSeconds: null,
        payloadChainLength: null,
        payloadKeyId: null,
        payloadTtlSeconds: null,
      };
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                q,
                {},
                { environmentType: H },
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
              environmentType: H,
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
            return babelHelpers.extends({}, G, {
              environmentType: H,
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
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                      passwordIsOaep: !1,
                      passwordKeyId: _,
                      passwordPem: C,
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
        Q.apply(this, arguments)
      );
    }
    var X = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      Y = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      J = null;
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e: {
            if (e === "request_nonce")
              return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
            if (e === "refresh_token") {
              var n = t.nextBackoffMs();
              if (n == null) return !1;
              return (yield o("WAPromiseDelays").delayMs(n), te());
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
              var i = yield ce();
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
              var l = yield me();
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
        ee.apply(this, arguments)
      );
    }
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P("refreshAccessToken");
          var e = J;
          return e != null
            ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                  .REFRESH_TOKEN_DEDUPLICATED,
              }),
              e)
            : ((J = re().finally(function () {
                J = null;
              })),
              J);
        })),
        ne.apply(this, arguments)
      );
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Date.now();
          o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
          });
          var t = yield x.getAccountLinkingData();
          if (t == null) return (ae(e), !1);
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
              X.reset();
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
                ae(e);
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  ae(e));
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
                yield Z(S, X),
                o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  v.name,
                ));
            }
          } else ae(e);
          return !1;
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: !1,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  Y.reset();
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
                    yield Z(c, Y),
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
        le.apply(this, arguments)
      );
    }
    function se() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        ue.apply(this, arguments)
      );
    }
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        de.apply(this, arguments)
      );
    }
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        pe.apply(this, arguments)
      );
    }
    function _e() {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        fe.apply(this, arguments)
      );
    }
    ((l.assertModeAllowed = P),
      (l.fetchValidCertificate = N),
      (l.runWaffleGetCertsForDebug = z),
      (l.handleRecoveryAction = Z),
      (l.refreshAccessToken = te),
      (l.ping = ie),
      (l.stateExists = se),
      (l.fetchServiceData = _e));
  },
  98,
);
