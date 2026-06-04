__d(
  "WAWebShortcakeLinkingPairingRequest",
  [
    "WABase64",
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: building PairingRequest",
              ])),
          );
          var t = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          if (t == null) throw r("err")("Shortcake: noise info not available");
          var n = yield o(
            "WAWebSignalStoreApi",
          ).waSignalStore.getRegistrationInfo();
          if (n == null)
            throw r("err")("Shortcake: registration info not available");
          var a = yield o("WAWebAdvSignatureApi").getADVSecretKey(),
            i = o("WABase64").decodeB64(a);
          return o("encodeProtobuf")
            .encodeProtobuf(
              o("WAWebProtobufsCompanionReg.pb").PairingRequestSpec,
              {
                companionPublicKey: t.staticKeyPair.pubKey,
                companionIdentityKey: n.identityKeyPair.pubKey,
                advSecret: i,
              },
            )
            .readBuffer();
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
