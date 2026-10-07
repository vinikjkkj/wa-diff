__d(
  "WAWebBotCertificateUtils",
  [
    "WAHex",
    "WALogger",
    "WAWebCertificateUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield o("WAWebCertificateUtils").getPkiJs(),
            n = t.Certificate,
            r = yield o("WAWebCertificateUtils").getAsn1FromBER(),
            a = [];
          for (var i of e) {
            var l = r(new Uint8Array(i).buffer),
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
                  "[certificate-utils] extract cert serial failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("certificate-utils-serial-extract-error"),
          null
        );
      }
    }
    ((l.isCertificateValidAtTime = c),
      (l.parseCertificateChain = d),
      (l.getCertificateSerialNumber = p));
  },
  98,
);
