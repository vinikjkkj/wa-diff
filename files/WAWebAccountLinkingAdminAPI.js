__d(
  "WAWebAccountLinkingAdminAPI",
  [
    "WALogger",
    "WASmaxWaffleEncryptedPayloadRequestRPC",
    "WASmaxWaffleGenerateAccessTokensRPC",
    "WASmaxWaffleGenerateWAEntACUserRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebWaffleIQErrorHandler",
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
      S = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      R = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      L = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      E = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState();
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.disclosureId,
            a = t.disclosureLc,
            i = t.disclosureLg,
            l = t.disclosureVersion,
            m = t.rawPassword;
          o("WAWebAccountLinkingAPI").assertModeAllowed("generateWAEntACUser");
          var p = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
          if (p == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateWAEntACUser failed: no valid certificate",
                ])),
            );
            return;
          }
          var _ = p.passwordKeyId,
            f = p.passwordPublicKey;
          if (f == null || _ == null) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateWAEntACUser failed: no password PEM",
                ])),
            );
            return;
          }
          var g = yield o("WAWebAccountLinkingCryptoUtils").encryptPassword(
              m,
              f,
              _,
            ),
            h = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            y = h.privateKey,
            C = h.publicKey,
            b = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(C, !0),
            v = {
              version: 1,
              timestamp: Date.now(),
              password: g,
              client_pub_key: b,
              client_pub_key_type: "RSA 2048",
            },
            L = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(v, p.encryptionKey),
            E = yield o(
              "WASmaxWaffleGenerateWAEntACUserRPC",
            ).sendGenerateWAEntACUserRPC({
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: L.encryptedKey,
                nonceElementValue: L.nonce,
                encryptedDataElementValue: L.cipherText,
                authTagElementValue: L.tag,
              },
              timestampElementValue: Date.now(),
              disclosureId: n,
              disclosureVersion: l,
              disclosureLg: i,
              disclosureLc: a,
            });
          if (E.name === "GenerateWAEntACUserResponseSuccess") {
            R.reset();
            var k = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                E.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              I = k.data,
              T = k.key,
              D = k.nonce,
              x = k.tag;
            try {
              var $ = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(y, T, I, D, x);
              "fbid" in $
                ? yield S.updateEntCreationData(String($.fbid), g)
                : o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GenerateWAEntACUser success, no fbid",
                      ])),
                  );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Failed to process generateWAEntACUser response",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
          } else {
            var P = E.value.errorGenerateWaEntAcUserErrors,
              N = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError("generateWAEntACUser", P.name);
            (yield o("WAWebAccountLinkingAPI").handleRecoveryAction(N, R),
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateWAEntACUser RPC failed: ",
                    "",
                  ])),
                P.name,
              ));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebAccountLinkingAPI").assertModeAllowed("generateAccessTokens");
          var e = yield S.getAccountLinkingData();
          if (e == null) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateAccessTokens failed: no account linking data",
                ])),
            );
            return;
          }
          var t = e.encryptedPassword,
            n = e.fbid;
          if (n == null || t == null) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
            L.reset();
            var h = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                d.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              y = h.data,
              C = h.key,
              b = h.nonce,
              v = h.tag;
            try {
              var R = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(a, C, y, b, v);
              if (!("access_token" in R)) {
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] GenerateAccessTokens success but response missing access_token",
                    ])),
                );
                return;
              }
              var E = d.value.pingIntervalElementValue;
              yield S.updateGenerateAccessTokensData(
                R.access_token,
                "nonce" in R ? R.nonce : null,
                "fbid" in R ? String(R.fbid) : null,
                E,
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
            var k = d.value.errorGenerateAccessTokensErrors,
              I = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError("generateAccessTokens", k.name);
            (yield o("WAWebAccountLinkingAPI").handleRecoveryAction(I, L),
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateAccessTokens RPC failed: ",
                    "",
                  ])),
                k.name,
              ));
          }
        })),
        D.apply(this, arguments)
      );
    }
    var x = { FB: 0, IG: 1 },
      $ = {
        FB: "wa_nta_username_reservation_on_fb",
        IG: "wa_nta_username_reservation_on_ig",
      };
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebAccountLinkingAPI").assertModeAllowed("sendLinkingMutation");
          var a = yield S.getAccountLinkingData();
          if (a == null)
            throw (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation failed: no account linking data",
                    ])),
                )
                .sendLogs("waffle-linking-no-data"),
              r("err")("No account linking data")
            );
          var i = a.accesstoken,
            l = a.fbid;
          if (l == null || i == null)
            throw (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation failed: missing fbid or access token",
                    ])),
                )
                .sendLogs("waffle-linking-missing-creds"),
              r("err")("Missing fbid or access token")
            );
          var s = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            u = s.privateKey,
            c = s.publicKey,
            d = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(c, !0),
            m = {
              version: 1,
              timestamp: Math.floor(Date.now() / 1e3),
              access_token: i,
              client_pub_key: d,
              client_pub_key_type: "RSA 2048",
              action: "waffle_100",
              target_account_type: x[t],
              opaque_target_accounts_to_be_linked_strings: [e],
              linking_entry_point: $[t],
              family_device_id: n,
            },
            p = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(m),
            _;
          try {
            _ = yield o(
              "WASmaxWaffleEncryptedPayloadRequestRPC",
            ).sendEncryptedPayloadRequestRPC({
              actionElementValue: "waffle_100",
              fbidElementValue: l,
              timestampElementValue: Math.floor(Date.now() / 1e3),
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: p.encryptedKey,
                nonceElementValue: p.nonce,
                encryptedDataElementValue: p.cipherText,
                authTagElementValue: p.tag,
              },
            });
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation error",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
          if (_.name === "EncryptedPayloadRequestResponseSuccess") {
            var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                _.value.encryptionMetadataRSAEncryptionMetadataMixin,
              ),
              g = f.data,
              R = f.key,
              L = f.nonce,
              k = f.tag,
              I = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).decryptRSAEncryptedPayload(u, R, g, L, k);
            if (
              "link_mutation_succeeded" in I &&
              I.success === !0 &&
              I.link_mutation_succeeded === !0
            )
              yield S.updateAccountLinkingState(
                o("WAWebAccountLinkingConstants").AccountLinkState.Active,
              );
            else {
              var T = "success" in I ? I.success : void 0,
                D =
                  "link_mutation_succeeded" in I
                    ? I.link_mutation_succeeded
                    : void 0;
              throw (
                o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Linking mutation failed: success=",
                        " link_mutation_succeeded=",
                        "",
                      ])),
                    String(T),
                    String(D),
                  )
                  .sendLogs("waffle-linking-mutation-failed"),
                r("err")("Linking mutation failed")
              );
            }
          } else {
            var P = _.value.errorEncryptedPayloadRequestErrors,
              N = yield o(
                "WAWebWaffleIQErrorHandler",
              ).handleCommonWaffleIQError("linkAction", P.name);
            throw (
              yield o("WAWebAccountLinkingAPI").handleRecoveryAction(N, E),
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Linking mutation RPC error: ",
                      "",
                    ])),
                  P.name,
                )
                .sendLogs("waffle-linking-mutation-rpc-error"),
              r("err")("Linking mutation RPC error: %s", P.name)
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    ((l.generateWAEntACUser = k),
      (l.generateAccessTokens = T),
      (l.sendLinkingMutation = P));
  },
  98,
);
