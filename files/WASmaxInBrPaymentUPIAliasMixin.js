__d(
  "WASmaxInBrPaymentUPIAliasMixin",
  ["WAResultOrError", "WASmaxInBrPaymentEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "alias");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "alias_value");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "alias_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "alias_type",
        o("WASmaxInBrPaymentEnums").ENUM_MOBILENUMBER_NUMERICID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "alias_status",
        o("WASmaxInBrPaymentEnums")
          .ENUM_ACTIVE_ACTIVEPENDING_ACTIVESTATUSPENDING_AVAILABLE_AVAILABLEPENDING_AVAILABLESTATUSPENDING_BLOCKED_DEREGISTERED_DEREGISTEREDPENDING_INACTIVE_INACTIVEPENDING_INACTIVESTATUSPENDING_UNKNOWN,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            aliasValue: n.value,
            aliasId: r.value,
            aliasType: a.value,
            aliasStatus: i.value,
          })
        : i;
    }
    l.parseUPIAliasMixin = e;
  },
  98,
);
