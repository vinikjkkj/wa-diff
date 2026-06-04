__d(
  "WAWebShortcakeLinkingIq",
  [
    "WALogger",
    "WASmaxMdGetPasskeyRequestOptionsRPC",
    "WASmaxMdSetCompanionNonceRPC",
    "WASmaxMdSetEncryptedPairingRequestRPC",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: sending GetPasskeyRequestOptions IQ",
              ])),
          );
          var t = yield o(
            "WASmaxMdGetPasskeyRequestOptionsRPC",
          ).sendGetPasskeyRequestOptionsRPC();
          if (t.name !== "GetPasskeyRequestOptionsResponseSuccess")
            throw r("err")("Shortcake: GetPasskeyRequestOptions IQ failed");
          return t.value.passkeyRequestOptionsPasskeyRequestOptionsMixin
            .elementValue;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: sending SetCompanionNonce IQ",
              ])),
          );
          var t = yield o(
            "WASmaxMdSetCompanionNonceRPC",
          ).sendSetCompanionNonceRPC({ companionNonceElementValue: e });
          if (t.name !== "SetCompanionNonceResponseSuccess")
            throw r("err")("Shortcake: SetCompanionNonce IQ failed");
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: sending SetEncryptedPairingRequest IQ",
              ])),
          );
          var t = yield o(
            "WASmaxMdSetEncryptedPairingRequestRPC",
          ).sendSetEncryptedPairingRequestRPC({
            encryptedPairingRequestElementValue: e,
          });
          if (t.name !== "SetEncryptedPairingRequestResponseSuccess")
            throw r("err")("Shortcake: SetEncryptedPairingRequest IQ failed");
        })),
        f.apply(this, arguments)
      );
    }
    ((l.requestPasskeyRequestOptions = c),
      (l.sendCompanionNonce = m),
      (l.sendEncryptedPairingRequest = _));
  },
  98,
);
