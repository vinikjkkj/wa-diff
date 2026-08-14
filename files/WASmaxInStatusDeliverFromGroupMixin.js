__d(
  "WASmaxInStatusDeliverFromGroupMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverDeviceIdentityMixin",
    "WASmaxInStatusDeliverFanoutCountMixin",
    "WASmaxInStatusDeliverRegistrationIDMixin",
    "WASmaxInStatusDeliverStatusEditOrRevokeOrAdminRevokeMixinGroup",
    "WASmaxInStatusDeliverStatusEncDeliverTypes",
    "WASmaxInStatusDeliverStatusEncMentionSourceMixin",
    "WASmaxInStatusDeliverStatusEncMentionedMixin",
    "WASmaxInStatusDeliverStatusEncMentionedUsersMixin",
    "WASmaxInStatusDeliverStatusEncSessionScopeMixin",
    "WASmaxInStatusDeliverStatusReportingMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
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
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "notify",
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
          "WASmaxInStatusDeliverStatusEncMentionedMixin",
        ).parseStatusEncMentionedMixin(e),
        m = o(
          "WASmaxInStatusDeliverStatusEncMentionedUsersMixin",
        ).parseStatusEncMentionedUsersMixin(e),
        p = o(
          "WASmaxInStatusDeliverStatusEncMentionSourceMixin",
        ).parseStatusEncMentionSourceMixin(e),
        _ = o(
          "WASmaxInStatusDeliverStatusEncSessionScopeMixin",
        ).parseStatusEncSessionScopeMixin(e),
        f = o(
          "WASmaxInStatusDeliverStatusReportingMixin",
        ).parseStatusReportingMixin(e),
        g = o(
          "WASmaxInStatusDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        h = o(
          "WASmaxInStatusDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        y = o(
          "WASmaxInStatusDeliverStatusEncDeliverTypes",
        ).parseStatusEncDeliverTypes(e);
      if (!y.success) return y;
      var C = o(
        "WASmaxInStatusDeliverStatusEditOrRevokeOrAdminRevokeMixinGroup",
      ).parseStatusEditOrRevokeOrAdminRevokeMixinGroup(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantUsername: i.value,
        notify: l.value,
        offline: s.value,
        t: u.value,
        fanoutCountMixin: c.success ? c.value : null,
        statusEncMentionedMixin: d.success ? d.value : null,
        statusEncMentionedUsersMixin: m.success ? m.value : null,
        statusEncMentionSourceMixin: p.success ? p.value : null,
        statusEncSessionScopeMixin: _.success ? _.value : null,
        statusReportingMixin: f.success ? f.value : null,
        deviceIdentityMixin: g.success ? g.value : null,
        registrationIDMixin: h.success ? h.value : null,
        statusEncDeliverTypes: y.value,
        statusEditOrRevokeOrAdminRevokeMixinGroup: C.success ? C.value : null,
      });
    }
    l.parseFromGroupMixin = e;
  },
  98,
);
