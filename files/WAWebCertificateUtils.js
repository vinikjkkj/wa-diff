__d(
  "WAWebCertificateUtils",
  ["JSResourceForInteraction", "Promise", "WALogger", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebCertificateUtils",
      );
    function c() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebCertificateUtils")
        .load();
    }
    function d(t, n) {
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
    function m() {
      return new (s || (s = n("Promise")))(function (e) {
        u.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    ((l.getPkiJs = c),
      (l.isCertificateValidAtTime = d),
      (l.getAsn1FromBER = m));
  },
  98,
);
