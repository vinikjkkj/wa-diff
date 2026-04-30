__d(
  "WAWebAccountLinkingAPI",
  [
    "WALogger",
    "WASmaxWaffleEncryptedPayloadRequestRPC",
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
      O = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      B = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "gpc_uoom",
      );
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
          if (e != null) {
            var t = yield U(e.encryptionPem, e.passwordPem, e.passwordKeyId);
            if (t != null) return t;
          }
          return H();
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        G.apply(this, arguments)
      );
    }
    var z = (F = o(
        "WAWebWaffleIQErrorHandler",
      )).createWaffleOperationRetryState(),
      j = F.createWaffleOperationRetryState(),
      K = F.createWaffleOperationRetryState(),
      Q = F.createWaffleOperationRetryState(),
      X = null;
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.disclosureId,
            n = e.disclosureLc,
            a = e.disclosureLg,
            i = e.disclosureVersion,
            l = e.rawPassword,
            s = yield W();
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
            z.reset();
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
                ? yield O.updateEntCreationData(String(D.fbid), d)
                : o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GenerateWAEntACUser success, no fbid",
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
            var x = R.value.errorGenerateWaEntAcUserErrors,
              $ = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError(x.name);
            ($ === "request_nonce" &&
              (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(z)),
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateWAEntACUser RPC failed: ",
                    "",
                  ])),
                x.name,
              ));
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield O.getAccountLinkingData();
          if (e == null) {
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateAccessTokens failed: no account linking data",
                ])),
            );
            return;
          }
          var t = e.encryptedPassword,
            n = e.fbid;
          if (n == null || t == null) {
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
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
            j.reset();
            var m = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                d.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              p = m.data,
              _ = m.key,
              f = m.nonce,
              g = m.tag;
            try {
              var S = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(a, _, p, f, g);
              if (!("access_token" in S)) {
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GenerateAccessTokens success but response missing access_token",
                    ])),
                );
                return;
              }
              var R = d.value.pingIntervalElementValue;
              yield O.updateGenerateAccessTokensData(
                S.access_token,
                "nonce" in S ? S.nonce : null,
                "fbid" in S ? String(S.fbid) : null,
                R,
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
              ).handleCommonWaffleIQError(L.name);
            (E === "request_nonce" &&
              (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(j)),
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateAccessTokens RPC failed: ",
                    "",
                  ])),
                L.name,
              ));
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
          var e = X;
          return e != null
            ? e
            : ((X = re().finally(function () {
                X = null;
              })),
              X);
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
          var e = yield O.getAccountLinkingData();
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
              K.reset();
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
                ).decryptRSAEncryptedPayload(i, _, p, f, g);
                if ("access_token" in h)
                  return (yield O.updateAccesstoken(h.access_token), !0);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to refresh access token",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
            } else {
              var y = d.value.errorRefreshAccessTokensErrors,
                C = yield o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError(y.name);
              (C === "request_nonce" &&
                (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(K)),
                o("WALogger").ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Refresh access token RPC failed: ",
                      "",
                    ])),
                  y.name,
                ));
            }
          }
          return !1;
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
          var e = yield O.getAccountLinkingData();
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
                  Q.reset();
                  var l = i.value.pingIntervalElementValue;
                  yield O.updatePingInterval(l);
                } else {
                  var s = i.value.errorWfPingErrors,
                    u = yield o(
                      "WAWebWaffleIQErrorHandler",
                    ).handleCommonWaffleIQError(s.name);
                  (u === "request_nonce" &&
                    (yield o("WAWebWaffleIQErrorHandler").handleNonceRetry(Q)),
                    o("WALogger").ERROR(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Ping failed: ",
                          "",
                        ])),
                      s.name,
                    ));
                }
              } else
                o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Ping failed due to null waEntFbid",
                    ])),
                );
            }
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
          var e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
            timestampElementValue: Date.now(),
          });
          if (e.name === "StateExistsResponseSuccess") {
            var t = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
            if (t != null) return t;
            o("WALogger").ERROR(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to parse state exists response",
                ])),
            );
          } else {
            var n = e.value.errorStateExistsErrors;
            (yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
              n.name,
            ),
              o("WALogger").ERROR(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    "",
                  ])),
                n.name,
              ));
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
          var e = yield O.getAccountLinkingData();
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
            yield O.updateServiceData(i);
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
          var e = yield B.getAccountLinkingData();
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
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Updating UOOM data result",
                  ])),
              );
              return;
            }
            n.xfb_waffle_fx_wamo_update_uoom === !0 &&
              o("WAWebUserPrefsGeneral").setGPCcompleted(!0);
          }
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
          !o("WAWebUserPrefsGeneral").getGPCCompleted() &&
            o("WAWebAccountLinkingUtils").checkGPCSetting() &&
            o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled() &&
            (yield de());
        })),
        _e.apply(this, arguments)
      );
    }
    var fe = { FB: 0, IG: 1 },
      ge = {
        FB: "wa_nta_username_reservation_on_fb",
        IG: "wa_nta_username_reservation_on_ig",
      };
    function he(e, t) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield O.getAccountLinkingData();
          if (n == null) {
            o("WALogger").ERROR(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation failed: no account linking data",
                ])),
            );
            return;
          }
          var a = n.accesstoken,
            i = n.fbid;
          if (i == null || a == null) {
            o("WALogger").ERROR(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation failed: missing fbid or access token",
                ])),
            );
            return;
          }
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
              target_account_type: fe[t],
              opaque_target_accounts_to_be_linked_strings: [e],
              linking_entry_point: ge[t],
              family_device_id: "waffle_debug",
            },
            m = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(d);
          try {
            var p = yield o(
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
            if (p.name === "EncryptedPayloadRequestResponseSuccess")
              var _ = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                  p.value.encryptionMetadataRSAEncryptionMetadataMixin,
                ),
                f = _.data,
                g = _.key,
                h = _.nonce,
                y = _.tag,
                C = yield o(
                  "WAWebAccountLinkingCryptoUtils",
                ).decryptRSAEncryptedPayload(s, g, f, h, y);
            else {
              var b = p.value.errorEncryptedPayloadRequestErrors;
              o("WALogger").ERROR(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Linking mutation failed: ",
                    "",
                  ])),
                b.name,
              );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Linking mutation error",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        ye.apply(this, arguments)
      );
    }
    ((l.fetchValidCertificate = W),
      (l.generateWAEntACUser = Y),
      (l.generateAccessTokens = Z),
      (l.refreshAccessToken = te),
      (l.ping = ae),
      (l.stateExists = le),
      (l.fetchServiceData = ue),
      (l.updateUOOMData = de),
      (l.checkAndTriggerUOOMMutation = pe),
      (l.sendLinkingMutation = he));
  },
  98,
);
