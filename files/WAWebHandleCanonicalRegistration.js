__d(
  "WAWebHandleCanonicalRegistration",
  [
    "WABase64",
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdfSync",
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebODS",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = R(t),
              a = n.data,
              i = n.iv,
              l = n.tag,
              s = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get(),
              c = r("nullthrows")(s).staticKeyPair.pubKey,
              d = S(
                new Uint8Array(o("WABase64").decodeB64(e)),
                new Uint8Array(c),
              ),
              m = L(a, l);
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
        b.apply(this, arguments)
      );
    }
    function v(t) {
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
    function S(e, t) {
      return o("WACryptoHkdfSync").hkdf(
        e,
        t,
        o("WABinary")
          .Binary.build("Canonical Ent Companion Nonce Encrypt")
          .readByteArrayView(),
        32,
      );
    }
    function R(e) {
      var t = e.encryptedKeyElementValue,
        n = e.nonceElementValue,
        r = e.authTagElementValue,
        o = e.encryptedDataElementValue;
      return { key: t, iv: n, tag: r, data: o };
    }
    function L(e, t) {
      var n = new Uint8Array(e.length + t.length);
      return (n.set(e), n.set(t, e.length), n);
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            var a = o("WAJids").extractDeviceId(n);
            if (
              (o("WAWebCanonicalEntRecoveryWam").logCompanionRegistered(),
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
            var i = yield C(e, t);
            if (i == null) {
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
                  "registration",
                ));
              return;
            }
            var l = v(i);
            if (l == null) {
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
                  "registration",
                ));
              return;
            }
            var s = {
                userId: l.fbid,
                deviceId: Number(a),
                nonce: l.nonce,
                accessToken: l.accessToken,
              },
              u =
                l.accessToken != null && l.accessToken !== ""
                  ? yield o(
                      "WAWebCanonicalTokenExchange",
                    ).storeCanonicalCredentials(s)
                  : yield o(
                      "WAWebCanonicalTokenExchange",
                    ).exchangeNonceForToken(s);
            u === o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
              ? (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token exchange succeeded",
                    ])),
                ),
                r("WAWebODS").incr("web.app.canonical.registration.success"),
                o("WAWebCanonicalGating").isCanonicalAppReloadEnabled() &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "scheduleCanonicalReload",
                    { purpose: "registration" },
                  ))
              : (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token exchange failed",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.registration.nonce_exchange_failed",
                ));
          } catch (e) {
            r("WAWebODS").incr(
              "web.app.canonical.registration.unexpected_error",
            );
            var b = r("getErrorSafe")(e);
            (o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] unexpected error in canonical reg process",
                  ])),
              )
              .catching(b)
              .sendLogs("canonical-error", { sampling: 0.01 }),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "registration_unexpected_error",
                "registration",
                String(e),
              ));
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.decryptNonce = C),
      (l.parseNoncePayload = v),
      (l.handleCanonicalRegistration = E));
  },
  98,
);
