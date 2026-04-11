__d(
  "WAWebGraphQLProductCatalogGetPublicKeyJob",
  [
    "WAWebDirectConnectionUtils",
    "WAWebGraphQLProductCatalogGetPublicKeyJobQuery.graphql",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebGraphQLProductCatalogGetPublicKeyJobQuery.graphql"));
    function u(e) {
      return o("WAWebRelayClient")
        .fetchQuery(s, { request: { public_key: { biz_jid: e.toJid() } } })
        .then(function (e) {
          var t,
            n =
              e == null || (t = e.xwa_product_catalog_get_public_key) == null
                ? void 0
                : t.public_key_certificate_pem;
          return {
            certificate:
              n != null
                ? o("WAWebDirectConnectionUtils").stringToCertificateString(n)
                : null,
          };
        });
    }
    l.getPublicKey = u;
  },
  98,
);
