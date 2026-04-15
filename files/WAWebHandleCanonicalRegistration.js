__d(
  "WAWebHandleCanonicalRegistration",
  [
    "WABase64",
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdfSync",
    "WAJids",
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUtils",
    "WAWebODS",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
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
      S = 5e3;
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = I(t),
              a = n.data,
              i = n.iv,
              l = n.tag,
              s = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get(),
              c = r("nullthrows")(s).staticKeyPair.pubKey,
              d = k(
                new Uint8Array(o("WABase64").decodeB64(e)),
                new Uint8Array(c),
              ),
              m = T(a, l);
            return yield o("WACryptoAesGcm").gcmDecrypt(d, i, m);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Error while decrypting nonce: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              null
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      try {
        var n = new TextDecoder("utf-8").decode(t),
          r = JSON.parse(n),
          a = r.access_token,
          i = r.fbid,
          l = r.nonce,
          u = r.timestamp;
        return l == null || i == null
          ? (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Nonce payload missing required fields",
                ])),
            ),
            null)
          : {
              nonce: l,
              fbid: i,
              timestamp: u,
              accessToken: a != null ? a : null,
            };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Error while parsing nonce payload: ",
                  "",
                ])),
              e,
            )
            .sendLogs("canonical-error", { sampling: 0.01 }),
          null
        );
      }
    }
    function k(e, t) {
      return o("WACryptoHkdfSync").hkdf(
        e,
        t,
        o("WABinary")
          .Binary.build("Canonical Ent Companion Nonce Encrypt")
          .readByteArrayView(),
        32,
      );
    }
    function I(e) {
      var t = e.encryptedKeyElementValue,
        n = e.nonceElementValue,
        r = e.authTagElementValue,
        o = e.encryptedDataElementValue;
      return { key: t, iv: n, tag: r, data: o };
    }
    function T(e, t) {
      var n = new Uint8Array(e.length + t.length);
      return (n.set(e), n.set(t, e.length), n);
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = null;
          try {
            if (!o("WAWebCanonicalGating").isCanonicalEnabled()) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] canonical reg is disabled",
                  ])),
              );
              return;
            }
            if (
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] begin canonical reg process",
                  ])),
              ),
              r("WAWebODS").incr("web.app.canonical.registration.start"),
              n == null)
            ) {
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] device jid not present in pair success",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.registration.missing_jid",
                ));
              return;
            }
            var i = o("WAJids").extractDeviceId(n);
            if (
              (o("WAWebCanonicalEntRecoveryWam").setDeviceId(String(i)),
              o("WAWebCanonicalEntRecoveryWam").logCompanionRegistered(),
              t == null)
            ) {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] encryption metadata not present in pair success",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.registration.missing_metadata",
                ));
              return;
            }
            var l = yield R(e, t);
            if (l == null) {
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] failed to decrypt nonce from encryption metadata",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.registration.nonce_decryption_failed",
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "nonce_decryption_failed",
                ));
              return;
            }
            var s = E(l);
            if (s == null) {
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] failed to parse decrypted nonce payload",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.registration.nonce_parse_failed",
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "nonce_parse_failed",
                ));
              return;
            }
            a = yield o("WAWebCanonicalTokenExchange").exchangeNonceForToken(
              {
                userId: s.fbid,
                deviceId: i,
                nonce: s.nonce,
                accessToken: s.accessToken,
              },
              S,
            );
            e: {
              if (
                a ===
                o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
              ) {
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token exchange succeeded",
                    ])),
                ),
                  r("WAWebODS").incr("web.app.canonical.registration.success"));
                break e;
              }
              if (
                a ===
                o("WAWebCanonicalTokenExchange").TokenExchangeResult.TIMEOUT
              ) {
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token exchange timed out",
                    ])),
                ),
                  r("WAWebODS").incr(
                    "web.app.canonical.registration.token_exchange_timeout",
                  ));
                break e;
              }
              if (
                a ===
                o("WAWebCanonicalTokenExchange").TokenExchangeResult.FAILED
              ) {
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token exchange failed",
                    ])),
                ),
                  r("WAWebODS").incr(
                    "web.app.canonical.registration.nonce_exchange_failed",
                  ));
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  a,
              );
            }
          } catch (e) {
            r("WAWebODS").incr(
              "web.app.canonical.registration.unexpected_error",
            );
            var u = r("getErrorSafe")(e);
            (o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] unexpected error in canonical reg process",
                  ])),
              )
              .catching(u)
              .sendLogs("canonical-error", { sampling: 0.01 }),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "registration_unexpected_error",
                String(e),
              ));
          } finally {
            yield $(a);
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebCanonicalGating").isCanonicalAppReloadEnabled()) {
            var t =
              self.location.pathname === "/login" ||
              e ===
                o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS;
            if (!t) {
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical][reload] skip, token exchange failed",
                  ])),
              );
              return;
            }
            (o("WAWebCanonicalUtils").setCanonicalAppReloadPending(!0),
              yield o("WAWebAdvSignatureApi").clearADVSecretKey(),
              yield o("WAWebUserPrefsGeneral").resetLoginCounter(),
              window.setTimeout(function () {
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] reloading after canonical reg",
                    ])),
                ),
                  o("WAWebCanonicalUtils").markCredentialsStoredForPostReload(
                    o("WAWebCanonicalUtils").CanonicalReloadReason.REGISTRATION,
                  ),
                  self.location.reload());
              }, 0));
          }
        })),
        P.apply(this, arguments)
      );
    }
    ((l.COMPANION_REG_EXCHANGE_NONCE_TIMEOUT_MS = S),
      (l.decryptNonce = R),
      (l.parseNoncePayload = E),
      (l.handleCanonicalRegistration = D));
  },
  98,
);
