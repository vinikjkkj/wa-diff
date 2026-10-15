__d(
  "WAWebParseCertificateChain",
  ["WAArrayBufferUtils", "WABase64", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = o("WAArrayBufferUtils").arrayBufferToString(t);
      try {
        var r = JSON.parse(n),
          a = r.intermediate,
          i = r.leaf;
        return {
          intermediate: {
            key: o("WABase64").decodeB64(a.key),
            notAfter: Number(a.notAfter),
            notBefore: Number(a.notBefore),
          },
          leaf: {
            key: o("WABase64").decodeB64(i.key),
            notAfter: Number(i.notAfter),
            notBefore: Number(i.notBefore),
          },
        };
      } catch (t) {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error parsing certificate chain: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    l.parseCertificateChain = s;
  },
  98,
);
