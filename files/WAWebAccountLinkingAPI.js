__d(
  "WAWebAccountLinkingAPI",
  [
    "WALogger",
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
    "WAWebAccountLinkingUtils",
    "WAWebDirectConnectionX509",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebUserPrefsGeneral",
    "WAWebWaffleCertificateCache",
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
      E,
      k,
      I,
      T = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      D = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "gpc_uoom",
      );
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
          if (e != null) {
            var t = yield P(e.encryptionPem, e.passwordPem, e.passwordKeyId);
            if (t != null) return t;
          }
          return M();
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            var i = yield o("WAWebDirectConnectionX509").extractCertificates(t),
              l = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(i);
            if (l != null) {
              var s = yield l.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                }),
                u = null;
              return (
                n != null &&
                  (u = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).importPasswordPublicKey(n)),
                {
                  encryptionKey: s,
                  passwordPublicKey: u,
                  passwordKeyId: a != null ? a : null,
                }
              );
            }
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to restore cert from PEM",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          }
          return null;
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
                  m = yield o("WAWebDirectConnectionX509").extractCertificates(
                    l,
                  ),
                  p = yield o(
                    "WAWebAccountLinkingCryptoUtils",
                  ).validateCertificateChain(m);
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
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        w.apply(this, arguments)
      );
    }
    var A = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      F = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      O = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      B = null;
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.disclosureId,
            n = e.disclosureLc,
            a = e.disclosureLg,
            i = e.disclosureVersion,
            l = e.rawPassword,
            s = yield x();
          if (s == null) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateWAEntACUser failed: no valid certificate",
                ])),
            );
            return;
          }
          var u = s.passwordKeyId,
            c = s.passwordPublicKey;
          if (c == null || u == null) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
            h = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            y = h.privateKey,
            C = h.publicKey,
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
            A.reset();
            var L = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                R.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              E = L.data,
              k = L.key,
              I = L.nonce,
              D = L.tag;
            try {
              var $ = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(y, k, E, I, D);
              "fbid" in $
                ? yield T.updateEntCreationData(String($.fbid), d)
                : o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GenerateWAEntACUser success but response missing fbid",
                      ])),
                  );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Failed to process generateWAEntACUser response",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
          } else {
            var P = R.value.errorGenerateWaEntAcUserErrors,
              N = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError(P.name);
            (N === "request_nonce" &&
              (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(A)),
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateWAEntACUser RPC failed: ",
                    "",
                  ])),
                P.name,
              ));
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
          var e = B;
          return e != null
            ? e
            : ((B = H().finally(function () {
                B = null;
              })),
              B);
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
          var e = yield T.getAccountLinkingData();
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
              F.reset();
              var m = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                  d.value.encryptionMetadataRSAEncryptionMetadataMixin,
                ),
                p = m.data,
                _ = m.key,
                f = m.nonce,
                g = m.tag;
              try {
                var C = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).decryptRSAEncryptedPayload(i, _, p, f, g);
                if ("access_token" in C)
                  return (yield T.updateAccesstoken(C.access_token), !0);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
            } else {
              var b = d.value.errorRefreshAccessTokensErrors,
                v = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError(b.name);
              (v === "request_nonce" &&
                (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(F)),
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  b.name,
                ));
            }
          }
          return !1;
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield T.getAccountLinkingData();
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
                  O.reset();
                  var l = i.value.pingIntervalElementValue;
                  yield T.updatePingInterval(l);
                } else {
                  var s = i.value.errorWfPingErrors,
                    u = yield o(
                      "WAWebWaffleIQErrorHandler",
                    ).handleCommonWaffleIQError(s.name);
                  (u === "request_nonce" &&
                    (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(O)),
                    o("WALogger").ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Ping failed: ",
                          "",
                        ])),
                      s.name,
                    ));
                }
              } else
                o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Ping failed due to null waEntFbid",
                    ])),
                );
            }
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
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to parse state exists response",
                ])),
            );
          } else {
            var n = e.value.errorStateExistsErrors;
            (yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
              n.name,
            ),
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield T.getAccountLinkingData();
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data result",
                  ])),
              );
              return;
            }
            var i = o("WAWebAPIParser").parseServiceData(n);
            if (i == null) {
              o("WALogger").ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching service data failed",
                  ])),
              );
              return;
            }
            yield T.updateServiceData(i);
          }
        })),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield D.getAccountLinkingData();
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Updating UOOM data result",
                  ])),
              );
              return;
            }
            n.xfb_waffle_fx_wamo_update_uoom === !0 &&
              o("WAWebUserPrefsGeneral").setGPCcompleted(!0);
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          !o("WAWebUserPrefsGeneral").getGPCCompleted() &&
            o("WAWebAccountLinkingUtils").checkGPCSetting() &&
            o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled() &&
            (yield J());
        })),
        te.apply(this, arguments)
      );
    }
    ((l.fetchValidCertificate = x),
      (l.generateWAEntACUser = W),
      (l.refreshAccessToken = U),
      (l.ping = z),
      (l.stateExists = K),
      (l.fetchServiceData = X),
      (l.updateUOOMData = J),
      (l.checkAndTriggerUOOMMutation = ee));
  },
  98,
);
