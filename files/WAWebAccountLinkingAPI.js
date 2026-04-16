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
      L = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      E = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "gpc_uoom",
      );
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                var c = String.fromCharCode.apply(null, l),
                  d = yield o("WAWebDirectConnectionX509").extractCertificates(
                    c,
                  ),
                  m = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).validateCertificateChain(d);
                return m != null
                  ? m.getPublicKey({
                      algorithm: {
                        algorithm: {
                          name: "RSA-OAEP",
                          hash: { name: "SHA-1" },
                        },
                        usages: ["encrypt"],
                      },
                    })
                  : (o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Fetching valid certificate failed",
                        ])),
                    ),
                    null);
              }
              return null;
            }
            var p = n.value.errorGetCertificateErrors;
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GetCertificate RPC failed: ",
                    "",
                  ])),
                p.name,
              ),
              null
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        I.apply(this, arguments)
      );
    }
    var T = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      D = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      x = null;
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = x;
          return e != null
            ? (o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE-TRACE] refreshAccessToken: skipped (dedup, already in-flight)",
                    ])),
                )
                .sendLogs("waffle-nonce-trace-refresh", { sampling: 1 }),
              e)
            : ((x = N().finally(function () {
                x = null;
              })),
              x);
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield L.getAccountLinkingData();
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
            var _ = yield o(
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
            if (_.name === "RefreshAccessTokensResponseSuccess") {
              T.reset();
              var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                  _.value.encryptionMetadataRSAEncryptionMetadataMixin,
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
                  return (yield L.updateAccesstoken(b.access_token), !0);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
            } else {
              var v = _.value.errorRefreshAccessTokensErrors,
                S = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError(v.name);
              (S === "request_nonce" &&
                (o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE-TRACE] refreshAccessToken failed with ",
                        ", triggering handleNonceRetry",
                      ])),
                    v.name,
                  )
                  .sendLogs("waffle-nonce-trace-refresh", { sampling: 1 }),
                yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(T)),
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  v.name,
                ));
            }
          }
          return !1;
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield L.getAccountLinkingData();
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
                  D.reset();
                  var l = i.value.pingIntervalElementValue;
                  yield L.updatePingInterval(l);
                } else {
                  var s = i.value.errorWfPingErrors,
                    u = yield o(
                      "WAWebWaffleIQErrorHandler",
                    ).handleCommonWaffleIQError(s.name);
                  (u === "request_nonce" &&
                    (o("WALogger")
                      .LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE-TRACE] ping failed with ",
                            ", triggering handleNonceRetry",
                          ])),
                        s.name,
                      )
                      .sendLogs("waffle-nonce-trace-ping", { sampling: 1 }),
                    yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(D)),
                    o("WALogger").ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Ping failed: ",
                          "",
                        ])),
                      s.name,
                    ));
                }
              } else
                o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Ping failed due to null waEntFbid",
                    ])),
                );
            }
          }
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
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield L.updateServiceData(i);
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield E.getAccountLinkingData();
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Updating UOOM data result",
                  ])),
              );
              return;
            }
            n.xfb_waffle_fx_wamo_update_uoom === !0 &&
              o("WAWebUserPrefsGeneral").setGPCcompleted(!0);
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          !o("WAWebUserPrefsGeneral").getGPCCompleted() &&
            o("WAWebAccountLinkingUtils").checkGPCSetting() &&
            o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled() &&
            (yield q());
        })),
        H.apply(this, arguments)
      );
    }
    ((l.fetchValidCertificate = k),
      (l.refreshAccessToken = $),
      (l.ping = w),
      (l.stateExists = F),
      (l.fetchServiceData = B),
      (l.updateUOOMData = q),
      (l.checkAndTriggerUOOMMutation = V));
  },
  98,
);
