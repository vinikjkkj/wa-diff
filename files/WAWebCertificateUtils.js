__d(
  "WAWebCertificateUtils",
  ["JSResourceForInteraction", "WAHex", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    async function d() {
      var e = await r("JSResourceForInteraction")("asn1js-2.1.1")
        .__setRef("WAWebCertificateUtils")
        .load();
      return e().fromBER;
    }
    async function m(t) {
      try {
        var n = p(t),
          a = await d(),
          i = a(n.buffer),
          l = i.offset,
          m = i.result;
        if (l === -1 || (m.error != null && m.error !== ""))
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[certificate-utils] Failed to parse CRL DER",
                  ])),
              )
              .sendLogs("certificate-utils-crl-der-parse-error"),
            null
          );
        var _ = await c(),
          f = _.CertificateRevocationList,
          g = new f({ schema: m }),
          h = g.revokedCertificates;
        if (h == null || h.length === 0) return [];
        var y = [];
        for (var C of h) {
          var b,
            v =
              (b = C.userCertificate) == null || (b = b.valueBlock) == null
                ? void 0
                : b.valueHex;
          if (v == null)
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[certificate-utils] malformed CRL entry, unparseable",
                    ])),
                )
                .sendLogs("certificate-utils-crl-malformed-entry"),
              null
            );
          y.push(o("WAHex").toLowerCaseHex(new Uint8Array(v)));
        }
        return y;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[certificate-utils] Failed to parse CRL binary",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("certificate-utils-crl-parse-error"),
          null
        );
      }
    }
    function p(e) {
      var t = e;
      if (
        (e.startsWith("-----BEGIN") || (t = atob(e)),
        t.startsWith("-----BEGIN"))
      ) {
        for (
          var n = t
              .replace(/-----BEGIN[^-]*-----/g, "")
              .replace(/-----END[^-]*-----/g, "")
              .replace(/\s/g, ""),
            r = atob(n),
            o = new Uint8Array(r.length),
            a = 0;
          a < r.length;
          a++
        )
          o[a] = r.charCodeAt(a);
        return o;
      }
      for (var i = new Uint8Array(t.length), l = 0; l < t.length; l++)
        i[l] = t.charCodeAt(l);
      return i;
    }
    ((l.getPkiJs = c),
      (l.getAsn1FromBER = d),
      (l.parseCrlSerialNumbers = m),
      (l.decodePemOrBase64ToDer = p));
  },
  98,
);
