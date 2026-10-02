__d(
  "WASmaxInMessageDeliverStatusMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverFanoutCountMixin",
    "WASmaxInMessageDeliverMessageEditOrRevokeMixinGroup",
    "WASmaxInMessageDeliverMessageSessionScopeMixin",
    "WASmaxInMessageDeliverMetaIsGroupStatusMixin",
    "WASmaxInMessageDeliverStatusDualOrSingleEncMixinGroup",
    "WASmaxInMessageDeliverStatusMentionSourceMixin",
    "WASmaxInMessageDeliverStatusMentionedMixin",
    "WASmaxInMessageDeliverStatusMentionedUsersMixin",
    "WASmaxInMessageDeliverStatusPushEligibleMixin",
    "WASmaxInMessageDeliverStatusSettingMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrStatusJid,
        e,
        "from",
        "status@broadcast",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "participant_lid",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "original_addressing_mode",
        "lid",
      );
      if (!s.success) return s;
      var u = o("WASmaxInMessageDeliverFanoutCountMixin").parseFanoutCountMixin(
          e,
        ),
        c = o(
          "WASmaxInMessageDeliverStatusSettingMixin",
        ).parseStatusSettingMixin(e),
        d = o(
          "WASmaxInMessageDeliverStatusMentionedMixin",
        ).parseStatusMentionedMixin(e),
        m = o(
          "WASmaxInMessageDeliverStatusPushEligibleMixin",
        ).parseStatusPushEligibleMixin(e),
        p = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        _ = o(
          "WASmaxInMessageDeliverStatusMentionedUsersMixin",
        ).parseStatusMentionedUsersMixin(e),
        f = o(
          "WASmaxInMessageDeliverStatusMentionSourceMixin",
        ).parseStatusMentionSourceMixin(e),
        g = o(
          "WASmaxInMessageDeliverMetaIsGroupStatusMixin",
        ).parseMetaIsGroupStatusMixin(e),
        h = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        y = o(
          "WASmaxInMessageDeliverMessageSessionScopeMixin",
        ).parseMessageSessionScopeMixin(e),
        C = o(
          "WASmaxInMessageDeliverStatusDualOrSingleEncMixinGroup",
        ).parseStatusDualOrSingleEncMixinGroup(e);
      if (!C.success) return C;
      var b = o(
        "WASmaxInMessageDeliverMessageEditOrRevokeMixinGroup",
      ).parseMessageEditOrRevokeMixinGroup(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantLid: i.value,
        participantUsername: l.value,
        originalAddressingMode: s.value,
        fanoutCountMixin: u.success ? u.value : null,
        statusSettingMixin: c.success ? c.value : null,
        statusMentionedMixin: d.success ? d.value : null,
        statusPushEligibleMixin: m.success ? m.value : null,
        appdataMetaAttributeMixin: p.success ? p.value : null,
        statusMentionedUsersMixin: _.success ? _.value : null,
        statusMentionSourceMixin: f.success ? f.value : null,
        metaIsGroupStatusMixin: g.success ? g.value : null,
        stsMixin: h.success ? h.value : null,
        messageSessionScopeMixin: y.success ? y.value : null,
        statusDualOrSingleEncMixinGroup: C.value,
        messageEditOrRevokeMixinGroup: b.success ? b.value : null,
      });
    }
    l.parseStatusMixin = e;
  },
  98,
);
