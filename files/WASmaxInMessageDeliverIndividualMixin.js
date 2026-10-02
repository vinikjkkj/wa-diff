__d(
  "WASmaxInMessageDeliverIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverArmadilloOriginalMessageTimestampMixin",
    "WASmaxInMessageDeliverAvailableOrUnavailableIndividualMixinGroup",
    "WASmaxInMessageDeliverBotLocaleMixin",
    "WASmaxInMessageDeliverBotOrCoExV2ProactiveOrBotProactiveMessageMixinGroup",
    "WASmaxInMessageDeliverBotPlatformMixin",
    "WASmaxInMessageDeliverBotThreadIDMixin",
    "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverDeliverLinkedDeviceScheduleMessageMixin",
    "WASmaxInMessageDeliverDisplayNameMixin",
    "WASmaxInMessageDeliverEmptyBizDeprecatedMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverGroupInviteTargetMixin",
    "WASmaxInMessageDeliverLidChatOriginMixin",
    "WASmaxInMessageDeliverMessageEditOrMessagePinOrRevokeMixinGroup",
    "WASmaxInMessageDeliverMessageReadMetaAttributeMixin",
    "WASmaxInMessageDeliverPeerRecipientLIDOrPNMixinGroup",
    "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverRecipientDisplayNameOrPeerRecipientUsernameMixinGroup",
    "WASmaxInMessageDeliverRecipientLIDOrPNMixinGroup",
    "WASmaxInMessageDeliverRecipientLatestLIDMixin",
    "WASmaxInMessageDeliverRecipientMixin",
    "WASmaxInMessageDeliverSenderAccountKindMixin",
    "WASmaxInMessageDeliverSenderLIDMixin",
    "WASmaxInMessageDeliverSenderPNMixin",
    "WASmaxInMessageDeliverSenderUsernameMixin",
    "WASmaxInMessageDeliverStatusMentionMessageMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxInMessageDeliverThreadTypeTagMixin",
    "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInMessageDeliverEnums")
          .DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID_DEVICEJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverRecipientMixin").parseRecipientMixin(e),
        a = o("WASmaxInMessageDeliverDisplayNameMixin").parseDisplayNameMixin(
          e,
        ),
        i = o(
          "WASmaxInMessageDeliverGroupInviteTargetMixin",
        ).parseGroupInviteTargetMixin(e),
        l = o("WASmaxInMessageDeliverSenderPNMixin").parseSenderPNMixin(e),
        s = o("WASmaxInMessageDeliverSenderLIDMixin").parseSenderLIDMixin(e),
        u = o(
          "WASmaxInMessageDeliverSenderUsernameMixin",
        ).parseSenderUsernameMixin(e),
        c = o(
          "WASmaxInMessageDeliverThreadTypeTagMixin",
        ).parseThreadTypeTagMixin(e),
        d = o(
          "WASmaxInMessageDeliverRecipientLatestLIDMixin",
        ).parseRecipientLatestLIDMixin(e),
        m = o("WASmaxInMessageDeliverBotThreadIDMixin").parseBotThreadIDMixin(
          e,
        ),
        p = o(
          "WASmaxInMessageDeliverLidChatOriginMixin",
        ).parseLidChatOriginMixin(e),
        _ = o("WASmaxInMessageDeliverBotLocaleMixin").parseBotLocaleMixin(e),
        f = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        g = o(
          "WASmaxInMessageDeliverEmptyBizDeprecatedMixin",
        ).parseEmptyBizDeprecatedMixin(e),
        h = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        y = o(
          "WASmaxInMessageDeliverStatusMentionMessageMixin",
        ).parseStatusMentionMessageMixin(e),
        C = o(
          "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
        ).parseCountryCodeMetaTagMixin(e),
        b = o(
          "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
        ).parseRecipientCountryCodeMetaTagMixin(e),
        v = o("WASmaxInMessageDeliverBotPlatformMixin").parseBotPlatformMixin(
          e,
        ),
        S = o(
          "WASmaxInMessageDeliverSenderAccountKindMixin",
        ).parseSenderAccountKindMixin(e),
        R = o(
          "WASmaxInMessageDeliverMessageReadMetaAttributeMixin",
        ).parseMessageReadMetaAttributeMixin(e),
        L = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        E = o(
          "WASmaxInMessageDeliverArmadilloOriginalMessageTimestampMixin",
        ).parseArmadilloOriginalMessageTimestampMixin(e),
        k = o(
          "WASmaxInMessageDeliverDeliverLinkedDeviceScheduleMessageMixin",
        ).parseDeliverLinkedDeviceScheduleMessageMixin(e),
        I = o(
          "WASmaxInMessageDeliverMessageEditOrMessagePinOrRevokeMixinGroup",
        ).parseMessageEditOrMessagePinOrRevokeMixinGroup(e),
        T = o(
          "WASmaxInMessageDeliverAvailableOrUnavailableIndividualMixinGroup",
        ).parseAvailableOrUnavailableIndividualMixinGroup(e);
      if (!T.success) return T;
      var D = o(
          "WASmaxInMessageDeliverRecipientLIDOrPNMixinGroup",
        ).parseRecipientLIDOrPNMixinGroup(e),
        x = o(
          "WASmaxInMessageDeliverPeerRecipientLIDOrPNMixinGroup",
        ).parsePeerRecipientLIDOrPNMixinGroup(e),
        $ = o(
          "WASmaxInMessageDeliverRecipientDisplayNameOrPeerRecipientUsernameMixinGroup",
        ).parseRecipientDisplayNameOrPeerRecipientUsernameMixinGroup(e),
        P = o(
          "WASmaxInMessageDeliverBotOrCoExV2ProactiveOrBotProactiveMessageMixinGroup",
        ).parseBotOrCoExV2ProactiveOrBotProactiveMessageMixinGroup(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        recipientMixin: r.success ? r.value : null,
        displayNameMixin: a.success ? a.value : null,
        groupInviteTargetMixin: i.success ? i.value : null,
        senderPNMixin: l.success ? l.value : null,
        senderLIDMixin: s.success ? s.value : null,
        senderUsernameMixin: u.success ? u.value : null,
        threadTypeTagMixin: c.success ? c.value : null,
        recipientLatestLIDMixin: d.success ? d.value : null,
        botThreadIDMixin: m.success ? m.value : null,
        lidChatOriginMixin: p.success ? p.value : null,
        botLocaleMixin: _.success ? _.value : null,
        appdataMetaAttributeMixin: f.success ? f.value : null,
        hasEmptyBizDeprecatedMixin: g.success,
        viewOnceMetaAttributeMixin: h.success ? h.value : null,
        statusMentionMessageMixin: y.success ? y.value : null,
        countryCodeMetaTagMixin: C.success ? C.value : null,
        recipientCountryCodeMetaTagMixin: b.success ? b.value : null,
        botPlatformMixin: v.success ? v.value : null,
        senderAccountKindMixin: S.success ? S.value : null,
        messageReadMetaAttributeMixin: R.success ? R.value : null,
        stsMixin: L.success ? L.value : null,
        armadilloOriginalMessageTimestampMixin: E.success ? E.value : null,
        deliverLinkedDeviceScheduleMessageMixin: k.success ? k.value : null,
        messageEditOrMessagePinOrRevokeMixinGroup: I.success ? I.value : null,
        availableOrUnavailableIndividualMixinGroup: T.value,
        recipientLIDOrPNMixinGroup: D.success ? D.value : null,
        peerRecipientLIDOrPNMixinGroup: x.success ? x.value : null,
        recipientDisplayNameOrPeerRecipientUsernameMixinGroup: $.success
          ? $.value
          : null,
        botOrCoExV2ProactiveOrBotProactiveMessageMixinGroup: P.success
          ? P.value
          : null,
      });
    }
    l.parseIndividualMixin = e;
  },
  98,
);
