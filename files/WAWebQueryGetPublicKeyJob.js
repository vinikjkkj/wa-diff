__d(
  "WAWebQueryGetPublicKeyJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebGraphQLProductCatalogGetPublicKeyJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendStanza", async function (e) {
        var t = e.businessJid,
          n = o("WAWebWidFactory").createWid(t);
        return o("WAWebGraphQLProductCatalogGetPublicKeyJob").getPublicKey(n);
      })
      .end();
    l.QueryGetPublicKey = e;
  },
  98,
);
