__d(
  "WAWebSignalConvertApi",
  [
    "WALogger",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrarySenderkeySessionConversionApi",
    "WAWebCryptoLibrarySessionConversionApi",
    "WAWebSignalProtocolStore",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return (e == null ? void 0 : e.sessions) != null;
    }
    async function m(t) {
      try {
        if (t == null || !d(t)) return t;
        var n = await Promise.all([
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .getIdentityKeyPair(),
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .getLocalRegistrationId(),
          ]),
          a = n[0],
          i = n[1];
        if (!a || i == null)
          throw r("err")("Attempted to loadSession without registration info");
        var l = {
          identityKeyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(a),
          registrationId: i,
        };
        return (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeConvertSession: converting to crypto library",
                ])),
            )
            .sendLogs("libsignal-to-cryptolib-session", { sampling: 0 }),
          o(
            "WAWebCryptoLibrarySessionConversionApi",
          ).toCryptoLibrarySessionPrevSessions(t, l)
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeConvertSession: failed with error ",
                  "",
                ])),
              e,
            )
            .sendLogs("session-convert-error"),
          e
        );
      }
    }
    function p(e) {
      return e.sessions != null;
    }
    function _(e) {
      try {
        return e == null || !p(e)
          ? e
          : (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeConvertSenderKey: converting to crypto library",
                  ])),
              )
              .sendLogs("libsignal-to-cryptolib-senderkey", { sampling: 0 }),
            o(
              "WAWebCryptoLibrarySenderkeySessionConversionApi",
            ).toCryptoManagerSenderKeySession(e));
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeConvertSenderKey: failed with error ",
                  "",
                ])),
              e,
            )
            .sendLogs("senderkey-convert-error"),
          e
        );
      }
    }
    ((l.shouldConvertSession = d),
      (l.maybeConvertSession = m),
      (l.maybeConvertSenderKey = _));
  },
  98,
);
