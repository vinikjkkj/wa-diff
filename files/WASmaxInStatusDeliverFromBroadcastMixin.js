__d(
  "WASmaxInStatusDeliverFromBroadcastMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverDeviceIdentityMixin",
    "WASmaxInStatusDeliverFanoutCountMixin",
    "WASmaxInStatusDeliverRegistrationIDMixin",
    "WASmaxInStatusDeliverStatusEditOrRevokeMixinGroup",
    "WASmaxInStatusDeliverStatusEncDeliverTypes",
    "WASmaxInStatusDeliverStatusEncMentionSourceMixin",
    "WASmaxInStatusDeliverStatusEncMentionedMixin",
    "WASmaxInStatusDeliverStatusEncMentionedUsersMixin",
    "WASmaxInStatusDeliverStatusEncPushEligibleMixin",
    "WASmaxInStatusDeliverStatusEncSessionScopeMixin",
    "WASmaxInStatusDeliverStatusEncSettingMixin",
    "WASmaxInStatusDeliverStatusReportingMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
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
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "original_addressing_mode",
        "lid",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        e,
        "offline",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(
        e,
        "t",
        1577865600,
        4102473600,
      );
      if (!u.success) return u;
      var c = o("WASmaxInStatusDeliverFanoutCountMixin").parseFanoutCountMixin(
          e,
        ),
        d = o(
          "WASmaxInStatusDeliverStatusEncSettingMixin",
        ).parseStatusEncSettingMixin(e),
        m = o(
          "WASmaxInStatusDeliverStatusEncMentionedMixin",
        ).parseStatusEncMentionedMixin(e),
        p = o(
          "WASmaxInStatusDeliverStatusEncPushEligibleMixin",
        ).parseStatusEncPushEligibleMixin(e),
        _ = o(
          "WASmaxInStatusDeliverStatusEncMentionedUsersMixin",
        ).parseStatusEncMentionedUsersMixin(e),
        f = o(
          "WASmaxInStatusDeliverStatusEncMentionSourceMixin",
        ).parseStatusEncMentionSourceMixin(e),
        g = o(
          "WASmaxInStatusDeliverStatusEncSessionScopeMixin",
        ).parseStatusEncSessionScopeMixin(e),
        h = o(
          "WASmaxInStatusDeliverStatusReportingMixin",
        ).parseStatusReportingMixin(e),
        y = o(
          "WASmaxInStatusDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        C = o(
          "WASmaxInStatusDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        b = o(
          "WASmaxInStatusDeliverStatusEncDeliverTypes",
        ).parseStatusEncDeliverTypes(e);
      if (!b.success) return b;
      var v = o(
        "WASmaxInStatusDeliverStatusEditOrRevokeMixinGroup",
      ).parseStatusEditOrRevokeMixinGroup(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantUsername: i.value,
        originalAddressingMode: l.value,
        offline: s.value,
        t: u.value,
        fanoutCountMixin: c.success ? c.value : null,
        statusEncSettingMixin: d.success ? d.value : null,
        statusEncMentionedMixin: m.success ? m.value : null,
        statusEncPushEligibleMixin: p.success ? p.value : null,
        statusEncMentionedUsersMixin: _.success ? _.value : null,
        statusEncMentionSourceMixin: f.success ? f.value : null,
        statusEncSessionScopeMixin: g.success ? g.value : null,
        statusReportingMixin: h.success ? h.value : null,
        deviceIdentityMixin: y.success ? y.value : null,
        registrationIDMixin: C.success ? C.value : null,
        statusEncDeliverTypes: b.value,
        statusEditOrRevokeMixinGroup: v.success ? v.value : null,
      });
    }
    l.parseFromBroadcastMixin = e;
  },
  98,
);
