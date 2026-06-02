__d(
  "WAWebHandleCanonicalRegistration",
  [
    "WABase64",
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdfSync",
    "WAJids",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebODS",
    "WAWebUserPrefsInfoStore",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t, n) {
      try {
        var a = S(n),
          i = a.data,
          l = a.iv,
          s = a.tag,
          u = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get(),
          c = r("nullthrows")(u).staticKeyPair.pubKey,
          d = v(new Uint8Array(o("WABase64").decodeB64(t)), new Uint8Array(c)),
          m = R(i, s);
        return await o("WACryptoAesGcm").gcmDecrypt(d, l, m);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Error while decrypting nonce: ",
                  "",
                ])),
              t,
            )
            .sendLogs("canonical-error", { sampling: 0.01 }),
          null
        );
      }
    }
    function b(e) {
      try {
        var t = new TextDecoder("utf-8").decode(e),
          n = JSON.parse(t),
          r = n.access_token,
          a = n.fbid,
          i = n.nonce,
          l = n.timestamp;
        return i == null || a == null
          ? (o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Nonce payload missing required fields",
                ])),
            ),
            null)
          : {
              nonce: i,
              fbid: a,
              timestamp: l,
              accessToken: r != null ? r : null,
            };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function v(e, t) {
      return o("WACryptoHkdfSync").hkdf(
        e,
        t,
        o("WABinary")
          .Binary.build("Canonical Ent Companion Nonce Encrypt")
          .readByteArrayView(),
        32,
      );
    }
    function S(e) {
      var t = e.nonceElementValue,
        n = e.authTagElementValue,
        r = e.encryptedDataElementValue;
      return { iv: t, tag: n, data: r };
    }
    function R(e, t) {
      var n = new Uint8Array(e.length + t.length);
      return (n.set(e), n.set(t, e.length), n);
    }
    async function L(e, t, n) {
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
            r("WAWebODS").incr("web.app.canonical.registration.missing_jid"),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "registration_missing_jid",
              "registration",
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
            ),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "registration_missing_metadata",
              "registration",
            ));
          return;
        }
        var i = await C(e, t);
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
        var l = b(i);
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
              ? await o(
                  "WAWebCanonicalTokenExchange",
                ).storeCanonicalCredentials(s, "registration")
              : await o("WAWebCanonicalTokenExchange").exchangeNonceForToken(
                  s,
                  "registration",
                );
        u === o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
          ? (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] token exchange succeeded",
                ])),
            ),
            r("WAWebODS").incr("web.app.canonical.registration.success"))
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
        r("WAWebODS").incr("web.app.canonical.registration.unexpected_error");
        var v = r("getErrorSafe")(e);
        (o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] unexpected error in canonical reg process",
              ])),
          )
          .catching(v)
          .sendLogs("canonical-error", { sampling: 0.01 }),
          o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
            "registration_unexpected_error",
            "registration",
            String(e),
          ));
      }
    }
    ((l.decryptNonce = C),
      (l.parseNoncePayload = b),
      (l.handleCanonicalRegistration = L));
  },
  98,
);
