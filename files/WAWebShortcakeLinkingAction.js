__d(
  "WAWebShortcakeLinkingAction",
  [
    "WALogger",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingPairingRequest",
    "WAWebShortcakeLinkingPasskeyPrologue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake action: starting passkey pairing",
              ])),
          ),
            yield o(
              "WAWebShortcakeLinkingPasskeyPrologue",
            ).executePasskeyPrologue());
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake action: confirming verification code",
              ])),
          );
          var e = yield r("WAWebShortcakeLinkingPairingRequest")();
          yield o("WAWebShortcakeLinkingApi").confirmVerificationCode(e);
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake action: cancelling passkey pairing",
          ])),
      ),
        o("WAWebShortcakeLinkingApi").cancelShortcakeLinking());
    }
    ((l.startShortcakePasskeyPairing = c),
      (l.confirmShortcakeVerificationCode = m),
      (l.cancelShortcakePasskeyPairing = _));
  },
  98,
);
