__d(
  "WAPhash",
  [
    "Promise",
    "WABase64",
    "WABinary",
    "WACryptoDependencies",
    "WALogger",
    "WASortedLists",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Calculate pHash -- Start",
          ])),
      );
      for (
        var r = o("WASortedLists").sortAndDedupe(t),
          a = new (o("WABinary").Binary)(),
          i = 0;
        i < r.length;
        i++
      )
        a.writeString(r[i]);
      return (u || (u = n("Promise"))).resolve(
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.digest("SHA-256", a.readByteArrayView())
          .then(function (e) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Calculate pHash -- end",
                ])),
            );
            var t = new Uint8Array(e, 0, 6);
            return "2:" + o("WABase64").encodeB64(t);
          }),
      );
    }
    l.calculatePHash = c;
  },
  98,
);
