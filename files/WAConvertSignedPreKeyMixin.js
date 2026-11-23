__d(
  "WAConvertSignedPreKeyMixin",
  ["WAParsableXmlNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        id: o("WAParsableXmlNode").convertBytesToUint(
          e.skeyIdKeyIDMixin.elementValue,
          3,
        ),
        pubkey: e.skeyValueKeyDataMixin.elementValue,
        signature: e.skeySignatureElementValue,
      };
    }
    l.convertSignedPreKeyMixin = e;
  },
  98,
);
