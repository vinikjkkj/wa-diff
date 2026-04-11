__d(
  "WAWebCryptoRandomMediaKey",
  ["WABase64", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = new Uint8Array(32);
      return (
        self.crypto.getRandomValues(e),
        {
          key: o("WABase64").encodeB64(e),
          timestamp: o("WATimeUtils").unixTime(),
        }
      );
    }
    l.default = e;
  },
  98,
);
