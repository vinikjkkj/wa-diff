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
      p = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebCertificateUtils",
      );
    function _() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    function f(t, n) {
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
    function g() {
      return new (m || (m = n("Promise")))(function (e) {
        p.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield _(),
            n = t.Certificate,
            r = yield g(),
            a = [];
          for (var i of e) {
            var l = r(i.buffer),
              u = l.result;
            if (u.error != null && u.error !== "")
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[certificate-utils] Failed to parse certificate DER",
                      ])),
                  )
                  .sendLogs("certificate-utils-cert-parse-error"),
                []
              );
            a.push(new n({ schema: u }));
          }
          return a;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = v(e),
              n = yield g(),
              a = n(t.buffer),
              i = a.offset,
              l = a.result;
            if (i === -1 || (l.error != null && l.error !== ""))
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[certificate-utils] Failed to parse CRL DER",
                      ])),
                  )
                  .sendLogs("certificate-utils-crl-der-parse-error"),
                null
              );
            var s = yield _(),
              m = s.CertificateRevocationList,
              p = new m({ schema: l }),
              f = p.revokedCertificates;
            if (f == null || f.length === 0) return [];
            var h = [];
            for (var y of f) {
              var C,
                b =
                  (C = y.userCertificate) == null || (C = C.valueBlock) == null
                    ? void 0
                    : C.valueHex;
              if (b == null)
                return (
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[certificate-utils] Malformed CRL entry, treating CRL as unparseable",
                        ])),
                    )
                    .sendLogs("certificate-utils-crl-malformed-entry"),
                  null
                );
              h.push(o("WAHex").toLowerCaseHex(new Uint8Array(b)));
            }
            return h;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[certificate-utils] Failed to parse CRL binary",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("certificate-utils-crl-parse-error"),
              null
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
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
    ((l.getPkiJs = _),
      (l.isCertificateValidAtTime = f),
      (l.getAsn1FromBER = g),
      (l.parseCertificateChain = h),
      (l.parseCrlSerialNumbers = C),
      (l.decodePemOrBase64ToDer = v));
  },
  98,
);
