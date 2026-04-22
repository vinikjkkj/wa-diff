__d(
  "WAWebAccountLinkingAPI",
  [
    "WALogger",
    "WASmaxWaffleGetCertificateRPC",
    "WASmaxWaffleRefreshAccessTokensRPC",
    "WASmaxWaffleStateExistsRPC",
    "WASmaxWaffleWFPingRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingUtils",
    "WAWebDirectConnectionX509",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebUserPrefsGeneral",
    "WAWebWaffleFXServiceDataQueryV2Mutation",
    "WAWebWaffleFXWAMOUpdateUOOMMutation",
    "WAWebWaffleIQErrorHandler",
    "asyncToGeneratorRuntime",
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
      E = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      k = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "gpc_uoom",
      );
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = Math.floor(Date.now() / 1e3);
          try {
            var n = yield o(
              "WASmaxWaffleGetCertificateRPC",
            ).sendGetCertificateRPC({
              hasPasswordPem: !0,
              hasPayloadEncCertificates: !0,
              timestampElementValue: t,
            });
            if (n.name === "GetCertificateResponseSuccess") {
              var a,
                i = n.value.replyGetCertificateResponseMixin,
                l = (a = i.encryptionPem) == null ? void 0 : a.elementValue;
              if (l != null) {
                var d = String.fromCharCode.apply(null, l),
                  m = yield o("WAWebDirectConnectionX509").extractCertificates(
                    d,
                  ),
                  p = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).validateCertificateChain(m);
                if (p != null) {
                  var _ = yield p.getPublicKey({
                      algorithm: {
                        algorithm: {
                          name: "RSA-OAEP",
                          hash: { name: "SHA-1" },
                        },
                        usages: ["encrypt"],
                      },
                    }),
                    f = null,
                    g = null,
                    h = i.passwordPem;
                  if (h != null)
                    try {
                      var y = String.fromCharCode.apply(null, h.elementValue);
                      ((f = yield o(
                        "WAWebAccountLinkingCryptoUtils",
                      ).importPasswordPublicKey(y)),
                        (g = h.keyId));
                    } catch (t) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAFFLE] Failed to import password PEM",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t));
                    }
                  return {
                    encryptionKey: _,
                    passwordPublicKey: f,
                    passwordKeyId: g,
                  };
                }
                return (
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Fetching valid certificate failed",
                      ])),
                  ),
                  null
                );
              }
              return null;
            }
            var C = n.value.errorGetCertificateErrors;
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GetCertificate RPC failed: ",
                    "",
                  ])),
                C.name,
              ),
              null
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        T.apply(this, arguments)
      );
    }
    var D = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      x = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      $ = null;
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = $;
          return e != null
            ? (o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE-TRACE] refreshAccessToken: skipped (dedup, already in-flight)",
                    ])),
                )
                .sendLogs("waffle-nonce-trace-refresh", { sampling: 1 }),
              e)
            : (($ = M().finally(function () {
                $ = null;
              })),
              $);
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield E.getAccountLinkingData();
          if (e == null) return !1;
          var t = e.fbid,
            n = e.nonce,
            a = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            i = a.privateKey,
            l = a.publicKey,
            s = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(l, !0),
            u = {
              version: 1,
              timestamp: Date.now(),
              nonce: n,
              client_pub_key: s,
              client_pub_key_type: "RSA 2048",
            },
            c = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(u);
          if (t != null) {
            var d = yield o(
              "WASmaxWaffleRefreshAccessTokensRPC",
            ).sendRefreshAccessTokensRPC({
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: c.encryptedKey,
                nonceElementValue: c.nonce,
                encryptedDataElementValue: c.cipherText,
                authTagElementValue: c.tag,
              },
              timestampElementValue: Date.now(),
              fbidElementValue: t,
            });
            if (d.name === "RefreshAccessTokensResponseSuccess") {
              D.reset();
              var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                  d.value.encryptionMetadataRSAEncryptionMetadataMixin,
                ),
                g = f.data,
                h = f.key,
                y = f.nonce,
                C = f.tag;
              try {
                var b = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).decryptRSAEncryptedPayload(i, h, g, y, C);
                if ("access_token" in b)
                  return (yield E.updateAccesstoken(b.access_token), !0);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
            } else {
              var v = d.value.errorRefreshAccessTokensErrors,
                S = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError(v.name);
              (S === "request_nonce" &&
                (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE-TRACE] refreshAccessToken failed with ",
                        ", triggering handleNonceRetry",
                      ])),
                    v.name,
                  )
                  .sendLogs("waffle-nonce-trace-refresh", { sampling: 1 }),
                yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(D)),
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  v.name,
                ));
            }
          }
          return !1;
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield E.getAccountLinkingData();
          if (e != null) {
            var t = e.accesstoken,
              n = e.fbid;
            if (t != null) {
              var r = { version: 1, timestamp: Date.now(), access_token: t },
                a = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).wrapPayloadWithRSAAESEncryption(r);
              if (n != null) {
                var i = yield o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
                  rSAEncryptionMetadataMixinArgs: {
                    encryptedKeyElementValue: a.encryptedKey,
                    nonceElementValue: a.nonce,
                    encryptedDataElementValue: a.cipherText,
                    authTagElementValue: a.tag,
                  },
                  timestampElementValue: Date.now(),
                  fbidElementValue: n,
                });
                if (i.name === "WFPingResponseSuccess") {
                  x.reset();
                  var l = i.value.pingIntervalElementValue;
                  yield E.updatePingInterval(l);
                } else {
                  var s = i.value.errorWfPingErrors,
                    u = yield o(
                      "WAWebWaffleIQErrorHandler",
                    ).handleCommonWaffleIQError(s.name);
                  (u === "request_nonce" &&
                    (o("WALogger")
                      .LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE-TRACE] ping failed with ",
                            ", triggering handleNonceRetry",
                          ])),
                        s.name,
                      )
                      .sendLogs("waffle-nonce-trace-ping", { sampling: 1 }),
                    yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(x)),
                    o("WALogger").ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Ping failed: ",
                          "",
                        ])),
                      s.name,
                    ));
                }
              } else
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Ping failed due to null waEntFbid",
                    ])),
                );
            }
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
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to parse state exists response",
                ])),
            );
          } else {
            var n = e.value.errorStateExistsErrors;
            (yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
              n.name,
            ),
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
          }
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
          var e = yield E.getAccountLinkingData();
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield E.updateServiceData(i);
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
          var e = yield k.getAccountLinkingData();
          if (e != null) {
            var t = e.accesstoken,
              n;
            try {
              n = yield o("WAWebRelayClient").commitMutation(
                r("WAWebWaffleFXWAMOUpdateUOOMMutation"),
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] updateUOOMData mutation failed: ",
                      "",
                    ])),
                  a,
                )
                .tags("waffle", "account-linking")
                .sendLogs("waffle-update-uoom-mutation-failed", {
                  sampling: 0.01,
                });
              return;
            }
            if (n == null) {
              o("WALogger").ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Updating UOOM data result",
                  ])),
              );
              return;
            }
            n.xfb_waffle_fx_wamo_update_uoom === !0 &&
              o("WAWebUserPrefsGeneral").setGPCcompleted(!0);
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          !o("WAWebUserPrefsGeneral").getGPCCompleted() &&
            o("WAWebAccountLinkingUtils").checkGPCSetting() &&
            o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled() &&
            (yield U());
        })),
        G.apply(this, arguments)
      );
    }
    ((l.fetchValidCertificate = I),
      (l.refreshAccessToken = P),
      (l.ping = A),
      (l.stateExists = O),
      (l.fetchServiceData = W),
      (l.updateUOOMData = U),
      (l.checkAndTriggerUOOMMutation = H));
  },
  98,
);
