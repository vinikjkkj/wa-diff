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
      d,
      m,
      p,
      _ = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebCertificateUtils",
      );
    function f() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    function g(t, n) {
      try {
        var r,
          a,
          i = new Date(
            (r = (a = t.notBefore) == null ? void 0 : a.value) != null
              ? r
              : t.notBefore,
          ),
          l = new Date(t.notAfter.value);
        return n >= i && n <= l;
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[certificate-utils] Failed to check certificate validity",
              ])),
          ),
          !1
        );
      }
    }
    function h() {
      return new (p || (p = n("Promise")))(function (e) {
        _.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield f(),
            n = t.Certificate,
            r = yield h(),
            a = [];
          for (var i of e) {
            var l = r(i.buffer),
              s = l.offset,
              c = l.result;
            if (s === -1 || (c.error != null && c.error !== ""))
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[certificate-utils] Failed to parse certificate DER",
                      ])),
                  )
                  .sendLogs("certificate-utils-cert-parse-error"),
                []
              );
            a.push(new n({ schema: c }));
          }
          return a;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = S(e),
              n = yield h(),
              a = n(t.buffer),
              i = a.offset,
              l = a.result;
            if (i === -1 || (l.error != null && l.error !== ""))
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[certificate-utils] Failed to parse CRL DER",
                      ])),
                  )
                  .sendLogs("certificate-utils-crl-der-parse-error"),
                null
              );
            var s = yield f(),
              u = s.CertificateRevocationList,
              p = new u({ schema: l }),
              _ = p.revokedCertificates;
            if (_ == null || _.length === 0) return [];
            var g = [];
            for (var y of _) {
              var C,
                b =
                  (C = y.userCertificate) == null || (C = C.valueBlock) == null
                    ? void 0
                    : C.valueHex;
              if (b == null)
                return (
                  o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[certificate-utils] Malformed CRL entry, treating CRL as unparseable",
                        ])),
                    )
                    .sendLogs("certificate-utils-crl-malformed-entry"),
                  null
                );
              g.push(o("WAHex").toLowerCaseHex(new Uint8Array(b)));
            }
            return g;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[certificate-utils] Failed to parse CRL binary",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("certificate-utils-crl-parse-error"),
              null
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e) {
      try {
        var t,
          n = e.serialNumber;
        return (n == null || (t = n.valueBlock) == null
          ? void 0
          : t.valueHex) != null
          ? o("WAHex").toLowerCaseHex(new Uint8Array(n.valueBlock.valueHex))
          : null;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[certificate-utils] Failed to extract certificate serial number",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("certificate-utils-serial-extract-error"),
          null
        );
      }
    }
    ((l.getPkiJs = f),
      (l.isCertificateValidAtTime = g),
      (l.getAsn1FromBER = h),
      (l.parseCertificateChain = y),
      (l.parseCrlSerialNumbers = b),
      (l.decodePemOrBase64ToDer = S),
      (l.getCertificateSerialNumber = R));
  },
  98,
);
