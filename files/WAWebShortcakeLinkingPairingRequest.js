__d(
  "WAWebShortcakeLinkingPairingRequest",
  [
    "WABase64",
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsInfoStore",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: building PairingRequest",
          ])),
      );
      var t = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
      if (t == null) throw r("err")("Shortcake: noise info not available");
      var n = await o(
        "WAWebSignalStoreApi",
      ).waSignalStore.getRegistrationInfo();
      if (n == null)
        throw r("err")("Shortcake: registration info not available");
      var a = await o("WAWebAdvSignatureApi").getADVSecretKey(),
        i = o("WABase64").decodeB64(a);
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").PairingRequestSpec, {
          companionPublicKey: t.staticKeyPair.pubKey,
          companionIdentityKey: n.identityKeyPair.pubKey,
          advSecret: i,
        })
        .readBuffer();
    }
    l.default = s;
  },
  98,
);
