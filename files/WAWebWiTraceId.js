__d(
  "WAWebWiTraceId",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    var e = 16;
    function s() {
      return o("WABase64").encodeB64(
        self.crypto.getRandomValues(new Uint8Array(e)),
      );
    }
    l.generateWiTraceId = s;
  },
  98,
);
