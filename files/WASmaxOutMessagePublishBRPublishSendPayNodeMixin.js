__d(
  "WASmaxOutMessagePublishBRPublishSendPayNodeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBRPublishSendPayNodeP2POrMMixinGroup",
    "WASmaxOutMessagePublishBRSendPayEloNodeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.payCredentialId,
        r = e.payDeviceId,
        a = e.payId,
        i = e.payPaymentRails,
        l = e.payTrustedDeviceInfo,
        s = e.payNonce,
        u = e.bRSendPayEloNodeMixinArgs,
        c = e.bRPublishSendPayNodeP2POrMMixinGroupArgs,
        d = o(
          "WASmaxOutMessagePublishBRPublishSendPayNodeP2POrMMixinGroup",
        ).mergeBRPublishSendPayNodeP2POrMMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishBRSendPayEloNodeMixin")
              .mergeBRSendPayEloNodeMixin,
            o("WASmaxJsx").smax("pay", {
              "credential-id": (t = o("WAWap")).CUSTOM_STRING(n),
              "device-id": t.CUSTOM_STRING(r),
              id: t.CUSTOM_STRING(a),
              "payment-rails": t.CUSTOM_STRING(i),
              "trusted-device-info": t.CUSTOM_STRING(l),
              nonce: t.CUSTOM_STRING(s),
            }),
            u,
          ),
          c,
        );
      return d;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBRPublishSendPayNodeMixin = s;
  },
  98,
);
