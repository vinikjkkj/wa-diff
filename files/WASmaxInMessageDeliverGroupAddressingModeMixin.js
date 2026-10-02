__d(
  "WASmaxInMessageDeliverGroupAddressingModeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "addressing_mode",
        o("WASmaxInMessageDeliverEnums").ENUM_LID_PN,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ addressingMode: t.value })
        : t;
    }
    l.parseGroupAddressingModeMixin = e;
  },
  98,
);
