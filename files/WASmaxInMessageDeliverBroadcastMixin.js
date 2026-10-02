__d(
  "WASmaxInMessageDeliverBroadcastMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverBroadcastContextMixin",
    "WASmaxInMessageDeliverBroadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverFanoutCountMixin",
    "WASmaxInMessageDeliverMessageEditOrRevokeOrBroadcastEphemeralMixinGroup",
    "WASmaxInMessageDeliverMessageReadMetaAttributeMixin",
    "WASmaxInMessageDeliverSMBBroadcastSourceMixin",
    "WASmaxInMessageDeliverSMBBroadcastSourceWithCampaignMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrBroadcastJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInMessageDeliverEnums").DEVICEJID_DEVICEJID,
      );
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
      var s = o("WASmaxInMessageDeliverFanoutCountMixin").parseFanoutCountMixin(
          e,
        ),
        u = o(
          "WASmaxInMessageDeliverSMBBroadcastSourceMixin",
        ).parseSMBBroadcastSourceMixin(e),
        c = o(
          "WASmaxInMessageDeliverSMBBroadcastSourceWithCampaignMixin",
        ).parseSMBBroadcastSourceWithCampaignMixin(e),
        d = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        m = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        p = o(
          "WASmaxInMessageDeliverMessageReadMetaAttributeMixin",
        ).parseMessageReadMetaAttributeMixin(e),
        _ = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        f = o(
          "WASmaxInMessageDeliverBroadcastContextMixin",
        ).parseBroadcastContextMixin(e),
        g = o(
          "WASmaxInMessageDeliverBroadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup",
        ).parseBroadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup(
          e,
        );
      if (!g.success) return g;
      var h = o(
        "WASmaxInMessageDeliverMessageEditOrRevokeOrBroadcastEphemeralMixinGroup",
      ).parseMessageEditOrRevokeOrBroadcastEphemeralMixinGroup(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantLid: i.value,
        participantUsername: l.value,
        fanoutCountMixin: s.success ? s.value : null,
        sMBBroadcastSourceMixin: u.success ? u.value : null,
        sMBBroadcastSourceWithCampaignMixin: c.success ? c.value : null,
        appdataMetaAttributeMixin: d.success ? d.value : null,
        viewOnceMetaAttributeMixin: m.success ? m.value : null,
        messageReadMetaAttributeMixin: p.success ? p.value : null,
        stsMixin: _.success ? _.value : null,
        broadcastContextMixin: f.success ? f.value : null,
        broadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup:
          g.value,
        messageEditOrRevokeOrBroadcastEphemeralMixinGroup: h.success
          ? h.value
          : null,
      });
    }
    l.parseBroadcastMixin = e;
  },
  98,
);
