__d(
  "WAWebVerifyPostcodeJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebGraphQLVerifyPostcodeJob",
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
              n = e.directConnectionEncryptedInfo,
              r = o("WAWebWidFactory").createWid(t);
            return o("WAWebGraphQLVerifyPostcodeJob").verifyPostcode(r, n);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      )
      .end();
    l.VerifyPostcode = e;
  },
  98,
);
