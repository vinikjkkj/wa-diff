__d(
  "WASmaxInMessageDeliverUPITransactionProtocolMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverUPIComplaintMixin",
    "WASmaxInMessageDeliverUPIInternationalTransactionDetailMixin",
    "WASmaxInMessageDeliverUPITransactionProtocolWithP2MHybridOrP2PMixinGroup",
    "WASmaxInMessageDeliverUPITransactionWithMandateMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "complaint");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverUPIComplaintMixin",
      ).parseUPIComplaintMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "international-transaction-detail",
      );
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverUPIInternationalTransactionDetailMixin",
      ).parseUPIInternationalTransactionDetailMixin(e);
      return (n.success, n);
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "transaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "complaint", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "international-transaction-detail",
        s,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender-alias",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver-alias",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver-name",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "bank-transaction-id",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "seq-no",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrStringEnum(
        t,
        "is_vpa",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "ref-url",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrStringEnum(
        t,
        "is-mandate",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").attrStringEnum(
        t,
        "is-collect",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrStringEnum(
        t,
        "nodal",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t,
        "is-complaint-eligible",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!h.success) return h;
      var y = o(
          "WASmaxInMessageDeliverUPITransactionWithMandateMixin",
        ).parseUPITransactionWithMandateMixin(t),
        C = o(
          "WASmaxInMessageDeliverUPITransactionProtocolWithP2MHybridOrP2PMixinGroup",
        ).parseUPITransactionProtocolWithP2MHybridOrP2PMixinGroup(t);
      return o("WAResultOrError").makeResult({
        senderAlias: i.value,
        receiverAlias: l.value,
        receiverName: u.value,
        bankTransactionId: c.value,
        seqNo: d.value,
        isVpa: m.value,
        refUrl: p.value,
        isMandate: _.value,
        isCollect: f.value,
        nodal: g.value,
        isComplaintEligible: h.value,
        uPITransactionWithMandateMixin: y.success ? y.value : null,
        uPITransactionProtocolWithP2MHybridOrP2PMixinGroup: C.success
          ? C.value
          : null,
        complaint: r.value,
        internationalTransactionDetail: a.value,
      });
    }
    ((l.parseUPITransactionProtocolComplaint = e),
      (l.parseUPITransactionProtocolInternationalTransactionDetail = s),
      (l.parseUPITransactionProtocolMixin = u));
  },
  98,
);
