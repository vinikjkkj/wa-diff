__d(
  "WAWebMexFetchBotCertificateRevocationList",
  [
    "WAWebMexClient",
    "WAWebMexFetchBotCertificateRevocationListQuery.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "whatsapp_simple_signal",
      u = 1728e5,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchBotCertificateRevocationListQuery.graphql"));
    async function d() {
      var e = await o("WAWebMexClient").fetchQuery(c, { crl_name: s }),
        t = e == null ? void 0 : e.xwa2_fetch_feature_pki_crl;
      if (t == null) throw r("err")("Empty CRL response from server");
      var n = t.next_update != null ? parseInt(t.next_update, 10) * 1e3 : NaN,
        a = Number.isFinite(n) ? n : Date.now() + u;
      return { crl: t.crl, nextUpdateMs: a };
    }
    l.mexFetchBotCertificateRevocationList = d;
  },
  98,
);
