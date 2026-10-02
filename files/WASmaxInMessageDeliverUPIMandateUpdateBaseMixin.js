__d(
  "WASmaxInMessageDeliverUPIMandateUpdateBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverMoneyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate-update");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "amount");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "end-ts", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "seq-no");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "mandate-update-info");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInMessageDeliverEnums").ENUM_FAILURE_INIT_SUCCESS,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "action",
        o("WASmaxInMessageDeliverEnums").ENUM_ACCEPT_REJECT_UNKNOWN,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!u.success) return u;
      var c = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(n.value);
      return c.success
        ? o("WAResultOrError").makeResult({
            endTs: r.value,
            seqNo: a.value,
            mandateUpdateInfo: i.value,
            status: l.value,
            action: s.value,
            errorCode: u.value,
            amountMoneyMixin: c.value,
          })
        : c;
    }
    l.parseUPIMandateUpdateBaseMixin = e;
  },
  98,
);
