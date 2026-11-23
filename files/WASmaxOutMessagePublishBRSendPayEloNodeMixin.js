__d(
  "WASmaxOutMessagePublishBRSendPayEloNodeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.eloDeviceSignature,
        r = e.eloWalletSignature,
        a = e.eloChallengeId,
        i = e.eloCardholderVerificationMethod,
        l = o("WASmaxJsx").smax(
          "pay",
          null,
          o("WASmaxJsx").smax("elo", {
            device_signature: (t = o("WAWap")).CUSTOM_STRING(n),
            wallet_signature: t.CUSTOM_STRING(r),
            challenge_id: t.CUSTOM_STRING(a),
            cardholder_verification_method: t.CUSTOM_STRING(i),
          }),
        );
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBRSendPayEloNodeMixin = s;
  },
  98,
);
