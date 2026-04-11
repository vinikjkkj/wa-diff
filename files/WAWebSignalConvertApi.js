__d(
  "WAWebSignalConvertApi",
  [
    "Promise",
    "WALogger",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrarySenderkeySessionConversionApi",
    "WAWebCryptoLibrarySessionConversionApi",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return (e == null ? void 0 : e.sessions) != null;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (e == null || !m(e)) return e;
            var t = yield (d || (d = n("Promise"))).all([
                o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .getIdentityKeyPair(),
                o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .getLocalRegistrationId(),
              ]),
              a = t[0],
              i = t[1];
            if (!a || i == null)
              throw r("err")(
                "Attempted to loadSession without registration info",
              );
            var l = {
              identityKeyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(a),
              registrationId: i,
            };
            return (
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeConvertSession: converting to crypto library",
                    ])),
                )
                .sendLogs("libsignal-to-cryptolib-session", { sampling: 0 }),
              o(
                "WAWebCryptoLibrarySessionConversionApi",
              ).toCryptoLibrarySessionPrevSessions(e, l)
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeConvertSession: failed with error ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("session-convert-error"),
              e
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e.sessions != null;
    }
    function g(t) {
      try {
        return t == null || !f(t)
          ? t
          : (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeConvertSenderKey: converting to crypto library",
                  ])),
              )
              .sendLogs("libsignal-to-cryptolib-senderkey", { sampling: 0 }),
            o(
              "WAWebCryptoLibrarySenderkeySessionConversionApi",
            ).toCryptoManagerSenderKeySession(t));
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.shouldConvertSession = m),
      (l.maybeConvertSession = p),
      (l.maybeConvertSenderKey = g));
  },
  98,
);
