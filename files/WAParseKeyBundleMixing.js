__d(
  "WAParseKeyBundleMixing",
  ["WAParsableXmlNode", "WASignalKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.keysKeyBundleContentsMixin;
      return {
        regId: e,
        identity: o("WASignalKeys").serializeIdentity(n.elementValue),
        signedKey: {
          id: o("WAParsableXmlNode").convertBytesToUint(
            n.skeyIdKeyIDMixin.elementValue,
            3,
          ),
          publicKey: o("WASignalKeys").serializeIdentity(
            n.skeyValueKeyDataMixin.elementValue,
          ),
          signature: n.skeySignatureElementValue,
        },
        oneTimeKey: null,
      };
    }
    l.parseKeyBundleMixin = e;
  },
  98,
);
