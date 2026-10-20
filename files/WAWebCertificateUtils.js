__d(
  "WAWebCertificateUtils",
  [
    "JSResourceForInteraction",
    "WAHex",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("asn1js-2.1.1")
            .__setRef("WAWebCertificateUtils")
            .load();
          return e().fromBER;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = f(t),
              a = yield d(),
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
            var p = yield c(),
              _ = p.CertificateRevocationList,
              g = new _({ schema: m }),
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
      (l.parseCrlSerialNumbers = p),
      (l.decodePemOrBase64ToDer = f));
  },
  98,
);
