__d(
  "WASmaxOutMdCompanionHelloRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutMdBaseIQSetRequestMixin",
    "WASmaxOutMdCompanionPlatformDisplayElMixin",
    "WASmaxOutMdCompanionPlatformIdElMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.linkCodePairingNonceElementValue,
        n = o("WASmaxJsx").smax("link_code_pairing_nonce", null, t);
      return n;
    }
    function s(t) {
      var n,
        r = t.linkCodePairingNonceArgs,
        a = t.linkCodeCompanionRegJid,
        i = t.linkCodeCompanionRegShouldShowPushNotification,
        l = t.linkCodePairingWrappedCompanionEphemeralPubElementValue,
        s = t.companionServerAuthKeyPubElementValue,
        u = t.companionPlatformIdElMixinArgs,
        c = t.companionPlatformDisplayElMixinArgs,
        d = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          (n = o("WASmaxJsx")).smax(
            "iq",
            { xmlns: "md", to: o("WAWap").S_WHATSAPP_NET },
            n.smax(
              "link_code_companion_reg",
              {
                jid: o("WAWap").USER_JID(a),
                stage: "companion_hello",
                should_show_push_notification: o("WASmaxAttrs").OPTIONAL(
                  o("WAWap").CUSTOM_STRING,
                  i,
                ),
              },
              n.smax(
                "link_code_pairing_wrapped_companion_ephemeral_pub",
                null,
                l,
              ),
              n.smax("companion_server_auth_key_pub", null, s),
              o(
                "WASmaxOutMdCompanionPlatformIdElMixin",
              ).mergeCompanionPlatformIdElMixin(
                n.smax("companion_platform_id", null),
                u,
              ),
              o(
                "WASmaxOutMdCompanionPlatformDisplayElMixin",
              ).mergeCompanionPlatformDisplayElMixin(
                n.smax("companion_platform_display", null),
                c,
              ),
              o("WASmaxChildren").OPTIONAL_CHILD(e, r),
            ),
          ),
        );
      return d;
    }
    ((l.makeCompanionHelloRequestLinkCodeCompanionRegLinkCodePairingNonce = e),
      (l.makeCompanionHelloRequest = s));
  },
  98,
);
