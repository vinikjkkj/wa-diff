__d(
  "WAWebCertificateUtils",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebCertificateUtils",
      );
    function d() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    function m(t, n) {
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
    function p() {
      return new (u || (u = n("Promise")))(function (e) {
        c.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield d(),
            n = t.Certificate,
            r = yield p(),
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
        f.apply(this, arguments)
      );
    }
    ((l.getPkiJs = d),
      (l.isCertificateValidAtTime = m),
      (l.getAsn1FromBER = p),
      (l.parseCertificateChain = _));
  },
  98,
);
