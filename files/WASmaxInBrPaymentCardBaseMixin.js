__d(
  "WASmaxInBrPaymentCardBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentCardCapabilitiesBaseMixin",
    "WASmaxInBrPaymentConsumerBaseMixin",
    "WASmaxInBrPaymentEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "last4");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "verified",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "type");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "network-type");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(e, "time-last-added");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "display-state",
        o("WASmaxInBrPaymentEnums").ENUM_ACTIVE_EXPIRED_SUSPENDED_VOIDED,
      );
      if (!s.success) return s;
      var u = o("WASmaxInBrPaymentConsumerBaseMixin").parseConsumerBaseMixin(e);
      if (!u.success) return u;
      var c = o(
        "WASmaxInBrPaymentCardCapabilitiesBaseMixin",
      ).parseCardCapabilitiesBaseMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                last4: n.value,
                verified: r.value,
                type: a.value,
                networkType: i.value,
                timeLastAdded: l.value,
                displayState: s.value,
              },
              u.value,
              c.value,
            ),
          )
        : c;
    }
    l.parseCardBaseMixin = e;
  },
  98,
);
