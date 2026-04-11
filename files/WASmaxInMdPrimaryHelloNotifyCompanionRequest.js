__d(
  "WASmaxInMdPrimaryHelloNotifyCompanionRequest",
  [
    "WAResultOrError",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "link_code_companion_reg",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "link_code_pairing_wrapped_primary_ephemeral_pub",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "primary_identity_pub",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "link_code_pairing_ref",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "link_code_companion_reg",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "stage",
        "primary_hello",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").contentBytes(r.value);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").contentBytes(a.value);
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").contentBytes(i.value);
      if (!m.success) return m;
      var p = o(
        "WASmaxInMdServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: l.value,
                from: s.value,
                linkCodeCompanionRegStage: u.value,
                linkCodeCompanionRegLinkCodePairingWrappedPrimaryEphemeralPubElementValue:
                  c.value,
                linkCodeCompanionRegPrimaryIdentityPubElementValue: d.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: m.value,
              },
              p.value,
            ),
          )
        : p;
    }
    l.parsePrimaryHelloNotifyCompanionRequest = e;
  },
  98,
);
