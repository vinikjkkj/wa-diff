__d(
  "WAWebShortcakeLinkingIq",
  [
    "WALogger",
    "WASmaxMdGetPasskeyRequestOptionsRPC",
    "WASmaxMdSetCompanionNonceRPC",
    "WASmaxMdSetEncryptedPairingRequestRPC",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: sending GetPasskeyRequestOptions IQ",
          ])),
      );
      var t = await o(
        "WASmaxMdGetPasskeyRequestOptionsRPC",
      ).sendGetPasskeyRequestOptionsRPC();
      if (t.name !== "GetPasskeyRequestOptionsResponseSuccess")
        throw r("err")("Shortcake: GetPasskeyRequestOptions IQ failed");
      return t.value.passkeyRequestOptionsPasskeyRequestOptionsMixin
        .elementValue;
    }
    async function d(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: sending SetCompanionNonce IQ",
          ])),
      );
      var t = await o("WASmaxMdSetCompanionNonceRPC").sendSetCompanionNonceRPC({
        companionNonceElementValue: e,
      });
      if (t.name !== "SetCompanionNonceResponseSuccess")
        throw r("err")("Shortcake: SetCompanionNonce IQ failed");
    }
    async function m(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: sending SetEncryptedPairingRequest IQ",
          ])),
      );
      var t = await o(
        "WASmaxMdSetEncryptedPairingRequestRPC",
      ).sendSetEncryptedPairingRequestRPC({
        encryptedPairingRequestElementValue: e,
      });
      if (t.name !== "SetEncryptedPairingRequestResponseSuccess")
        throw r("err")("Shortcake: SetEncryptedPairingRequest IQ failed");
    }
    ((l.requestPasskeyRequestOptions = c),
      (l.sendCompanionNonce = d),
      (l.sendEncryptedPairingRequest = m));
  },
  98,
);
