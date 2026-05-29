__d(
  "WAWebQueryGetPublicKeyJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebGraphQLProductCatalogGetPublicKeyJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep(
        "sendStanza",
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.businessJid,
              n = o("WAWebWidFactory").createWid(t);
            return o("WAWebGraphQLProductCatalogGetPublicKeyJob").getPublicKey(
              n,
            );
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      )
      .end();
    l.QueryGetPublicKey = e;
  },
  98,
);
