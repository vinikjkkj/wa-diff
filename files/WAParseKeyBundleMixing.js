__d(
  "WAParseKeyBundleMixing",
  ["WAParsableXmlNode", "WASignalKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        regId: e,
        identity: o("WASignalKeys").serializeIdentity(
          t.keysIdentityKeyMixin.elementValue,
        ),
        signedKey: {
          id: o("WAParsableXmlNode").convertBytesToUint(
            t.keysSignedPreKeyMixin.skeyIdKeyIDMixin.elementValue,
            3,
          ),
          publicKey: o("WASignalKeys").serializeIdentity(
            t.keysSignedPreKeyMixin.skeyValueKeyDataMixin.elementValue,
          ),
          signature: t.keysSignedPreKeyMixin.skeySignatureElementValue,
        },
        oneTimeKey: null,
      };
    }
    l.parseKeyBundleMixin = e;
  },
  98,
);
