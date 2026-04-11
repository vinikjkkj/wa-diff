__d(
  "WASmaxOutMdCompanionFinishRequest",
  ["WASmaxJsx", "WASmaxOutMdBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.linkCodeCompanionRegJid,
        r = e.linkCodePairingWrappedKeyBundleElementValue,
        a = e.companionIdentityPublicElementValue,
        i = e.linkCodePairingRefElementValue,
        l = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            { xmlns: "md", to: o("WAWap").S_WHATSAPP_NET },
            t.smax(
              "link_code_companion_reg",
              { jid: o("WAWap").USER_JID(n), stage: "companion_finish" },
              t.smax("link_code_pairing_wrapped_key_bundle", null, r),
              t.smax("companion_identity_public", null, a),
              t.smax("link_code_pairing_ref", null, i),
            ),
          ),
        );
      return l;
    }
    l.makeCompanionFinishRequest = e;
  },
  98,
);
