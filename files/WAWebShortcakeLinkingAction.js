__d(
  "WAWebShortcakeLinkingAction",
  [
    "WALogger",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingPairingRequest",
    "WAWebShortcakeLinkingPasskeyPrologue",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake action: starting passkey pairing",
          ])),
      ),
        await o(
          "WAWebShortcakeLinkingPasskeyPrologue",
        ).executePasskeyPrologue());
    }
    async function d() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake action: confirming verification code",
          ])),
      );
      var e = await r("WAWebShortcakeLinkingPairingRequest")();
      await o("WAWebShortcakeLinkingApi").confirmVerificationCode(e);
    }
    function m() {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake action: cancelling passkey pairing",
          ])),
      ),
        o("WAWebShortcakeLinkingApi").cancelShortcakeLinking());
    }
    ((l.startShortcakePasskeyPairing = c),
      (l.confirmShortcakeVerificationCode = d),
      (l.cancelShortcakePasskeyPairing = m));
  },
  98,
);
