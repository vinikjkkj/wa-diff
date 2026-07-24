__d(
  "WASmaxInBrPaymentBRCardMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentCardBaseMixin",
    "WASmaxInBrPaymentComboCardCapabilitiesMixin",
    "WASmaxInBrPaymentEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "image-content-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "binding-type");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "needs-device-binding",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "state",
        o("WASmaxInBrPaymentEnums")
          .ENUM_ACTIVE_DELETED_INACTIVE_NEEDSRETOKENIZATION_NEEDSRETOKENIZATIONDELETED_SUSPENDED,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-name",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-phone-number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "automatic-binding",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!u.success) return u;
      var c = o("WASmaxInBrPaymentCardBaseMixin").parseCardBaseMixin(e);
      if (!c.success) return c;
      var d = o(
        "WASmaxInBrPaymentComboCardCapabilitiesMixin",
      ).parseComboCardCapabilitiesMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            imageContentId: n.value,
            bindingType: r.value,
            needsDeviceBinding: a.value,
            state: i.value,
            bankName: l.value,
            bankPhoneNumber: s.value,
            automaticBinding: u.value,
          },
          c.value,
          { comboCardCapabilitiesMixin: d.success ? d.value : null },
        ),
      );
    }
    l.parseBRCardMixin = e;
  },
  98,
);
