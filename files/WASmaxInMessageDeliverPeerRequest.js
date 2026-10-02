__d(
  "WASmaxInMessageDeliverPeerRequest",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverDeviceIdentityMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverFromCoExV2PeerOrUserMixinGroup",
    "WASmaxInMessageDeliverOfflineMixin",
    "WASmaxInMessageDeliverPaddingMixin",
    "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
    "WASmaxInMessageDeliverPrivacySensitiveAttributeMixin",
    "WASmaxInMessageDeliverRegistrationIDMixin",
    "WASmaxInMessageDeliverRetryOrIndividualRegularMixinGroup",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxInMessageDeliverVerifiedNameMixin",
    "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
    "WASmaxInMessageDeliverWaReportingMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "push_priority",
        o("WASmaxInMessageDeliverEnums").ENUM_HIGH_HIGHFORCE_LOW,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!i.success) return i;
      var l = o("WASmaxInMessageDeliverOfflineMixin").parseOfflineMixin(e),
        s = o("WASmaxInMessageDeliverVerifiedNameMixin").parseVerifiedNameMixin(
          e,
        ),
        u = o(
          "WASmaxInMessageDeliverContentTypeTextMixin",
        ).parseContentTypeTextMixin(e);
      if (!u.success) return u;
      var c = o(
          "WASmaxInMessageDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        d = o(
          "WASmaxInMessageDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        m = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        p = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        _ = o(
          "WASmaxInMessageDeliverPrivacySensitiveAttributeMixin",
        ).parsePrivacySensitiveAttributeMixin(e),
        f = o("WASmaxInMessageDeliverWaReportingMixin").parseWaReportingMixin(
          e,
        ),
        g = o(
          "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
        ).parsePeerRecipientUsernameMixin(e),
        h = o("WASmaxInMessageDeliverPaddingMixin").parsePaddingMixin(e),
        y = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        C = o(
          "WASmaxInMessageDeliverRetryOrIndividualRegularMixinGroup",
        ).parseRetryOrIndividualRegularMixinGroup(e);
      if (!C.success) return C;
      var b = o(
        "WASmaxInMessageDeliverFromCoExV2PeerOrUserMixinGroup",
      ).parseFromCoExV2PeerOrUserMixinGroup(e);
      return b.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                id: n.value,
                category: r.value,
                pushPriority: a.value,
                t: i.value,
                offlineMixin: l.success ? l.value : null,
                verifiedNameMixin: s.success ? s.value : null,
              },
              u.value,
              {
                registrationIDMixin: c.success ? c.value : null,
                deviceIdentityMixin: d.success ? d.value : null,
                appdataMetaAttributeMixin: m.success ? m.value : null,
                viewOnceMetaAttributeMixin: p.success ? p.value : null,
                privacySensitiveAttributeMixin: _.success ? _.value : null,
                waReportingMixin: f.success ? f.value : null,
                peerRecipientUsernameMixin: g.success ? g.value : null,
                paddingMixin: h.success ? h.value : null,
                stsMixin: y.success ? y.value : null,
                retryOrIndividualRegularMixinGroup: C.value,
                fromCoExV2PeerOrUserMixinGroup: b.value,
              },
            ),
          )
        : b;
    }
    l.parsePeerRequest = e;
  },
  98,
);
