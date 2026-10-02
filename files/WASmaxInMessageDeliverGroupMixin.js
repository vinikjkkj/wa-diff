__d(
  "WASmaxInMessageDeliverGroupMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverBotLocaleMixin",
    "WASmaxInMessageDeliverBotPlatformMixin",
    "WASmaxInMessageDeliverBotThreadIDMixin",
    "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverDisplayNameMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverFanoutCountMixin",
    "WASmaxInMessageDeliverGroupAddressingModeMixin",
    "WASmaxInMessageDeliverGroupCAPIMetaAttributeMixin",
    "WASmaxInMessageDeliverGroupCAPIShardRoutingStrategyMetaAttributeMixin",
    "WASmaxInMessageDeliverGroupEditMixins",
    "WASmaxInMessageDeliverGroupEncTypes",
    "WASmaxInMessageDeliverGroupEphemeralMixin",
    "WASmaxInMessageDeliverGroupStatusMentionMessageMixin",
    "WASmaxInMessageDeliverLiveLocationModeMixin",
    "WASmaxInMessageDeliverMemberTagsMessageMetaAttributeMixin",
    "WASmaxInMessageDeliverMessageReadMetaAttributeMixin",
    "WASmaxInMessageDeliverMessageSessionScopeMixin",
    "WASmaxInMessageDeliverMetaIsGroupStatusMixin",
    "WASmaxInMessageDeliverMetaScheduledMessageMixin",
    "WASmaxInMessageDeliverParticipantLIDMixin",
    "WASmaxInMessageDeliverParticipantPNMixin",
    "WASmaxInMessageDeliverParticipantUsernameMixin",
    "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverStatusMessageMetaAttributeMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxInMessageDeliverThreadMsgMixin",
    "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInMessageDeliverEnums")
          .DEVICEJID_DEVICEJID_USERJID_USERJID_LIDUSERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o(
          "WASmaxInMessageDeliverGroupEphemeralMixin",
        ).parseGroupEphemeralMixin(e),
        i = o("WASmaxInMessageDeliverFanoutCountMixin").parseFanoutCountMixin(
          e,
        ),
        l = o(
          "WASmaxInMessageDeliverParticipantLIDMixin",
        ).parseParticipantLIDMixin(e),
        s = o(
          "WASmaxInMessageDeliverParticipantPNMixin",
        ).parseParticipantPNMixin(e),
        u = o(
          "WASmaxInMessageDeliverParticipantUsernameMixin",
        ).parseParticipantUsernameMixin(e),
        c = o("WASmaxInMessageDeliverDisplayNameMixin").parseDisplayNameMixin(
          e,
        ),
        d = o(
          "WASmaxInMessageDeliverGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        m = o("WASmaxInMessageDeliverBotThreadIDMixin").parseBotThreadIDMixin(
          e,
        ),
        p = o("WASmaxInMessageDeliverThreadMsgMixin").parseThreadMsgMixin(e),
        _ = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        f = o(
          "WASmaxInMessageDeliverLiveLocationModeMixin",
        ).parseLiveLocationModeMixin(e),
        g = o("WASmaxInMessageDeliverBotLocaleMixin").parseBotLocaleMixin(e),
        h = o(
          "WASmaxInMessageDeliverGroupCAPIMetaAttributeMixin",
        ).parseGroupCAPIMetaAttributeMixin(e),
        y = o(
          "WASmaxInMessageDeliverGroupCAPIShardRoutingStrategyMetaAttributeMixin",
        ).parseGroupCAPIShardRoutingStrategyMetaAttributeMixin(e),
        C = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        b = o(
          "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
        ).parseCountryCodeMetaTagMixin(e),
        v = o(
          "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
        ).parseRecipientCountryCodeMetaTagMixin(e),
        S = o(
          "WASmaxInMessageDeliverGroupStatusMentionMessageMixin",
        ).parseGroupStatusMentionMessageMixin(e),
        R = o("WASmaxInMessageDeliverBotPlatformMixin").parseBotPlatformMixin(
          e,
        ),
        L = o(
          "WASmaxInMessageDeliverStatusMessageMetaAttributeMixin",
        ).parseStatusMessageMetaAttributeMixin(e),
        E = o(
          "WASmaxInMessageDeliverMemberTagsMessageMetaAttributeMixin",
        ).parseMemberTagsMessageMetaAttributeMixin(e),
        k = o(
          "WASmaxInMessageDeliverMetaIsGroupStatusMixin",
        ).parseMetaIsGroupStatusMixin(e),
        I = o(
          "WASmaxInMessageDeliverMessageSessionScopeMixin",
        ).parseMessageSessionScopeMixin(e),
        T = o(
          "WASmaxInMessageDeliverMessageReadMetaAttributeMixin",
        ).parseMessageReadMetaAttributeMixin(e),
        D = o(
          "WASmaxInMessageDeliverMetaScheduledMessageMixin",
        ).parseMetaScheduledMessageMixin(e),
        x = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        $ = o("WASmaxInMessageDeliverGroupEncTypes").parseGroupEncTypes(e);
      if (!$.success) return $;
      var P = o("WASmaxInMessageDeliverGroupEditMixins").parseGroupEditMixins(
        e,
      );
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        groupEphemeralMixin: a.success ? a.value : null,
        fanoutCountMixin: i.success ? i.value : null,
        participantLIDMixin: l.success ? l.value : null,
        participantPNMixin: s.success ? s.value : null,
        participantUsernameMixin: u.success ? u.value : null,
        displayNameMixin: c.success ? c.value : null,
        groupAddressingModeMixin: d.success ? d.value : null,
        botThreadIDMixin: m.success ? m.value : null,
        threadMsgMixin: p.success ? p.value : null,
        appdataMetaAttributeMixin: _.success ? _.value : null,
        liveLocationModeMixin: f.success ? f.value : null,
        botLocaleMixin: g.success ? g.value : null,
        groupCAPIMetaAttributeMixin: h.success ? h.value : null,
        groupCAPIShardRoutingStrategyMetaAttributeMixin: y.success
          ? y.value
          : null,
        viewOnceMetaAttributeMixin: C.success ? C.value : null,
        countryCodeMetaTagMixin: b.success ? b.value : null,
        recipientCountryCodeMetaTagMixin: v.success ? v.value : null,
        groupStatusMentionMessageMixin: S.success ? S.value : null,
        botPlatformMixin: R.success ? R.value : null,
        statusMessageMetaAttributeMixin: L.success ? L.value : null,
        memberTagsMessageMetaAttributeMixin: E.success ? E.value : null,
        metaIsGroupStatusMixin: k.success ? k.value : null,
        messageSessionScopeMixin: I.success ? I.value : null,
        messageReadMetaAttributeMixin: T.success ? T.value : null,
        metaScheduledMessageMixin: D.success ? D.value : null,
        stsMixin: x.success ? x.value : null,
        groupEncTypes: $.value,
        groupEditMixins: P.success ? P.value : null,
      });
    }
    l.parseGroupMixin = e;
  },
  98,
);
