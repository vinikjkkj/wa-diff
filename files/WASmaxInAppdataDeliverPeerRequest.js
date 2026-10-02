__d(
  "WASmaxInAppdataDeliverPeerRequest",
  [
    "WAResultOrError",
    "WASmaxInAppdataDeliverDeviceIdentityMixin",
    "WASmaxInAppdataDeliverEncRetryMixin",
    "WASmaxInAppdataDeliverEncTypeIndividualMixin",
    "WASmaxInAppdataDeliverEncVersionFutureproofMixin",
    "WASmaxInAppdataDeliverEnums",
    "WASmaxInAppdataDeliverInternalTestMixin",
    "WASmaxInAppdataDeliverOfflineMixin",
    "WASmaxInAppdataDeliverRegistrationIDMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "appdata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "push_priority",
        o("WASmaxInAppdataDeliverEnums").ENUM_HIGH_LOW,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!s.success) return s;
      var u = o(
        "WASmaxInAppdataDeliverEncVersionFutureproofMixin",
      ).parseEncVersionFutureproofMixin(n.value);
      if (!u.success) return u;
      var c = o("WASmaxInAppdataDeliverEncRetryMixin").parseEncRetryMixin(
          n.value,
        ),
        d = o(
          "WASmaxInAppdataDeliverEncTypeIndividualMixin",
        ).parseEncTypeIndividualMixin(n.value);
      if (!d.success) return d;
      var m = o(
          "WASmaxInAppdataDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        p = o(
          "WASmaxInAppdataDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        _ = o("WASmaxInAppdataDeliverOfflineMixin").parseOfflineMixin(e),
        f = o("WASmaxInAppdataDeliverInternalTestMixin").parseInternalTestMixin(
          e,
        );
      return o("WAResultOrError").makeResult({
        id: r.value,
        category: a.value,
        pushPriority: i.value,
        from: l.value,
        t: s.value,
        encEncVersionFutureproofMixin: u.value,
        encEncRetryMixin: c.success ? c.value : null,
        encEncTypeIndividualMixin: d.value,
        deviceIdentityMixin: m.success ? m.value : null,
        registrationIDMixin: p.success ? p.value : null,
        offlineMixin: _.success ? _.value : null,
        internalTestMixin: f.success ? f.value : null,
      });
    }
    l.parsePeerRequest = e;
  },
  98,
);
