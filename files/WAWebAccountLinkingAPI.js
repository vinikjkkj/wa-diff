__d(
  "WAWebAccountLinkingAPI",
  [
    "WAAsyncSleep",
    "WALogger",
    "WASmaxWaffleEncryptedPayloadRequestRPC",
    "WASmaxWaffleForceDeleteStateRPC",
    "WASmaxWaffleForceSuspendStateRPC",
    "WASmaxWaffleGenerateAccessTokensRPC",
    "WASmaxWaffleGenerateWAEntACUserRPC",
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
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      q = {
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
    function U(t) {
      var n = o("WAWebAccountLinkingGatingUtils").getWaffleMode(),
        a = q[t];
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
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("fetchValidCertificate");
          var e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
          if (e != null) {
            var t = yield G(e.encryptionPem, e.passwordPem, e.passwordKeyId);
            if (t != null) return t;
          }
          return j();
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        z.apply(this, arguments)
      );
    }
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        K.apply(this, arguments)
      );
    }
    var Q = (B = o(
        "WAWebWaffleIQErrorHandler",
      )).createWaffleOperationRetryState(),
      X = B.createWaffleOperationRetryState(),
      Y = B.createWaffleOperationRetryState(),
      J = B.createWaffleOperationRetryState(),
      Z = B.createWaffleOperationRetryState(),
      ee = null;
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e: {
            if (e === "request_nonce")
              return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
            if (e === "refresh_token") {
              var n = t.nextBackoffMs();
              if (n == null) return !1;
              return (yield o("WAAsyncSleep").asyncSleep(n), le());
              break e;
            }
            if (e === "refetch_certs") {
              var r = t.nextBackoffMs();
              if (r == null) return !1;
              yield o("WAAsyncSleep").asyncSleep(r);
              var a = yield V();
              return a != null;
            }
            if (e === "purge") {
              return (yield W.purgeWaffleData(), !0);
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
              var i = yield ge();
              return (i && (yield W.purgeWaffleData()), i);
              break e;
            }
            if (e === "server_pause") {
              var l = yield ye();
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
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.disclosureId,
            n = e.disclosureLc,
            a = e.disclosureLg,
            i = e.disclosureVersion,
            l = e.rawPassword;
          U("generateWAEntACUser");
          var s = yield V();
          if (s == null) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateWAEntACUser failed: no valid certificate",
                ])),
            );
            return;
          }
          var u = s.passwordKeyId,
            c = s.passwordPublicKey;
          if (c == null || u == null) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateWAEntACUser failed: no password PEM",
                ])),
            );
            return;
          }
          var d = yield o("WAWebAccountLinkingCryptoUtils").encryptPassword(
              l,
              c,
              u,
            ),
            m = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            y = m.privateKey,
            C = m.publicKey,
            b = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(C, !0),
            v = {
              version: 1,
              timestamp: Date.now(),
              password: d,
              client_pub_key: b,
              client_pub_key_type: "RSA 2048",
            },
            S = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(v, s.encryptionKey),
            R = yield o(
              "WASmaxWaffleGenerateWAEntACUserRPC",
            ).sendGenerateWAEntACUserRPC({
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: S.encryptedKey,
                nonceElementValue: S.nonce,
                encryptedDataElementValue: S.cipherText,
                authTagElementValue: S.tag,
              },
              timestampElementValue: Date.now(),
              disclosureId: t,
              disclosureVersion: i,
              disclosureLg: a,
              disclosureLc: n,
            });
          if (R.name === "GenerateWAEntACUserResponseSuccess") {
            Q.reset();
            var L = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                R.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              E = L.data,
              k = L.key,
              I = L.nonce,
              T = L.tag;
            try {
              var D = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(y, k, E, I, T);
              "fbid" in D
                ? yield W.updateEntCreationData(String(D.fbid), d)
                : o("WALogger").ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GenerateWAEntACUser success, no fbid",
                      ])),
                  );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Failed to process generateWAEntACUser response",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
          } else {
            var x = R.value.errorGenerateWaEntAcUserErrors,
              $ = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError("generateWAEntACUser", x.name);
            (yield te($, Q),
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateWAEntACUser RPC failed: ",
                    "",
                  ])),
                x.name,
              ));
          }
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("generateAccessTokens");
          var e = yield W.getAccountLinkingData();
          if (e == null) {
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateAccessTokens failed: no account linking data",
                ])),
            );
            return;
          }
          var t = e.encryptedPassword,
            n = e.fbid;
          if (n == null || t == null) {
            o("WALogger").ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateAccessTokens failed: missing fbid or encrypted password",
                ])),
            );
            return;
          }
          var r = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            a = r.privateKey,
            i = r.publicKey,
            l = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(i, !0),
            s = {
              version: 1,
              timestamp: Math.floor(Date.now() / 1e3),
              password: t,
              client_pub_key: l,
              client_pub_key_type: "RSA 2048",
            },
            u = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(s),
            c = yield o("WAWebAccountLinkingCryptoUtils").computeIdSign(n),
            d = yield o(
              "WASmaxWaffleGenerateAccessTokensRPC",
            ).sendGenerateAccessTokensRPC({
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: u.encryptedKey,
                nonceElementValue: u.nonce,
                encryptedDataElementValue: u.cipherText,
                authTagElementValue: u.tag,
              },
              timestampElementValue: Math.floor(Date.now() / 1e3),
              fbidElementValue: n,
              idSignElementValue: c,
            });
          if (d.name === "GenerateAccessTokensResponseSuccess") {
            X.reset();
            var m = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                d.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              p = m.data,
              _ = m.key,
              f = m.nonce,
              g = m.tag;
            try {
              var h = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(a, _, p, f, g);
              if (!("access_token" in h)) {
                o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GenerateAccessTokens success but response missing access_token",
                    ])),
                );
                return;
              }
              var R = d.value.pingIntervalElementValue;
              yield W.updateGenerateAccessTokensData(
                h.access_token,
                "nonce" in h ? h.nonce : null,
                "fbid" in h ? String(h.fbid) : null,
                R,
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Failed to process generateAccessTokens response: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "generate-access-tokens")
                .sendLogs("waffle-generate-access-tokens-failed", {
                  sampling: 0.01,
                });
            }
          } else {
            var L = d.value.errorGenerateAccessTokensErrors,
              E = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError("generateAccessTokens", L.name);
            (yield te(E, X),
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateAccessTokens RPC failed: ",
                    "",
                  ])),
                L.name,
              ));
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("refreshAccessToken");
          var e = ee;
          return e != null
            ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE
                  .REFRESH_TOKEN_DEDUPLICATED,
              }),
              e)
            : ((ee = ue().finally(function () {
                ee = null;
              })),
              ee);
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
          var e = Date.now();
          o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
          });
          var t = yield W.getAccountLinkingData();
          if (t == null) return (de(e, !1), !1);
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
                    yield W.updateAccesstoken(y.access_token),
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
                de(e, !1);
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  de(e, !1));
              }
            } else {
              var C = m.value.errorRefreshAccessTokensErrors,
                b = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError("refreshAccessToken", C.name);
              (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                elapsedMs: Date.now() - e,
                errorAction: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorActionToWam(b),
                errorCode: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorNameToWamCode(C.name),
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
              }),
                yield te(b, Y),
                o("WALogger").ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  C.name,
                ));
            }
          } else de(e, !1);
          return !1;
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: t,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("ping");
          var e = Date.now(),
            t = yield W.getAccountLinkingData();
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
                  J.reset();
                  var s = l.value.pingIntervalElementValue;
                  (yield W.updatePingInterval(s),
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
                    yield te(c, J),
                    o("WALogger").ERROR(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Ping failed due to null waEntFbid",
                      ])),
                  ));
            }
          }
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
          U("stateExists");
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
          }
        })),
        fe.apply(this, arguments)
      );
    }
    function ge() {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("forceDeleteState");
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] ForceDeleteState RPC failed: ",
                    "",
                  ])),
                t.name,
              )
              .sendLogs("waffle-force-delete-state-failed"),
            !1
          );
        })),
        he.apply(this, arguments)
      );
    }
    function ye() {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("forceSuspendState");
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
        Ce.apply(this, arguments)
      );
    }
    function be() {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          U("fetchServiceData");
          var e = yield W.getAccountLinkingData();
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
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield W.updateServiceData(i);
          }
        })),
        ve.apply(this, arguments)
      );
    }
    var Se = { FB: 0, IG: 1 },
      Re = {
        FB: "wa_nta_username_reservation_on_fb",
        IG: "wa_nta_username_reservation_on_ig",
      };
    function Le(e, t) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          U("sendLinkingMutation");
          var n = yield W.getAccountLinkingData();
          if (n == null)
            throw (
              o("WALogger")
                .ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation failed: no account linking data",
                    ])),
                )
                .sendLogs("waffle-linking-no-data"),
              r("err")("No account linking data")
            );
          var a = n.accesstoken,
            i = n.fbid;
          if (i == null || a == null)
            throw (
              o("WALogger")
                .ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation failed: missing fbid or access token",
                    ])),
                )
                .sendLogs("waffle-linking-missing-creds"),
              r("err")("Missing fbid or access token")
            );
          var l = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            s = l.privateKey,
            u = l.publicKey,
            c = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(u, !0),
            d = {
              version: 1,
              timestamp: Math.floor(Date.now() / 1e3),
              access_token: a,
              client_pub_key: c,
              client_pub_key_type: "RSA 2048",
              action: "waffle_100",
              target_account_type: Se[t],
              opaque_target_accounts_to_be_linked_strings: [e],
              linking_entry_point: Re[t],
              family_device_id: "waffle_debug",
            },
            m = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(d),
            p;
          try {
            p = yield o(
              "WASmaxWaffleEncryptedPayloadRequestRPC",
            ).sendEncryptedPayloadRequestRPC({
              actionElementValue: "waffle_100",
              fbidElementValue: i,
              timestampElementValue: Math.floor(Date.now() / 1e3),
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: m.encryptedKey,
                nonceElementValue: m.nonce,
                encryptedDataElementValue: m.cipherText,
                authTagElementValue: m.tag,
              },
            });
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation error",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
          if (p.name === "EncryptedPayloadRequestResponseSuccess") {
            var _ = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                p.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              f = _.data,
              g = _.key,
              h = _.nonce,
              y = _.tag,
              C = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(s, g, f, h, y),
              b = C;
            if (b.success === !0 && b.link_mutation_succeeded === !0)
              yield W.updateAccountLinkingState(
                o("WAWebAccountLinkingConstants").AccountLinkState.Active,
              );
            else
              throw (
                o("WALogger")
                  .ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Linking mutation failed: success=",
                        " link_mutation_succeeded=",
                        "",
                      ])),
                    String(b.success),
                    String(b.link_mutation_succeeded),
                  )
                  .sendLogs("waffle-linking-mutation-failed"),
                r("err")("Linking mutation failed")
              );
          } else {
            var v = p.value.errorEncryptedPayloadRequestErrors,
              S = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError("linkAction", v.name);
            throw (
              yield te(S, Z),
              o("WALogger")
                .ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation RPC error: ",
                      "",
                    ])),
                  v.name,
                )
                .sendLogs("waffle-linking-mutation-rpc-error"),
              r("err")("Linking mutation RPC error: %s", v.name)
            );
          }
        })),
        Ee.apply(this, arguments)
      );
    }
    ((l.fetchValidCertificate = V),
      (l.generateWAEntACUser = re),
      (l.generateAccessTokens = ae),
      (l.refreshAccessToken = le),
      (l.ping = me),
      (l.stateExists = _e),
      (l.forceDeleteState = ge),
      (l.forceSuspendState = ye),
      (l.fetchServiceData = be),
      (l.sendLinkingMutation = Le));
  },
  98,
);
