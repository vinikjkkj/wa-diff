__d(
  "WAWebCertificateUtils",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAHex",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebCertificateUtils",
      );
    function m() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    function p() {
      return new (c || (c = n("Promise")))(function (e) {
        d.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = g(t),
              a = yield p(),
              i = a(n.buffer),
              l = i.offset,
              c = i.result;
            if (l === -1 || (c.error != null && c.error !== ""))
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
            var d = yield m(),
              _ = d.CertificateRevocationList,
              f = new _({ schema: c }),
              h = f.revokedCertificates;
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
    ((l.getPkiJs = m),
      (l.getAsn1FromBER = p),
      (l.parseCrlSerialNumbers = _),
      (l.decodePemOrBase64ToDer = g));
  },
  98,
);
