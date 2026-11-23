__d(
  "WAWebVerifyPostcodeJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebGraphQLVerifyPostcodeJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendStanza", async function (e) {
        var t = e.businessJid,
          n = e.directConnectionEncryptedInfo,
          r = o("WAWebWidFactory").createWid(t);
        return o("WAWebGraphQLVerifyPostcodeJob").verifyPostcode(r, n);
      })
      .end();
    l.VerifyPostcode = e;
  },
  98,
);
