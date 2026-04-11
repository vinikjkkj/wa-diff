__d(
  "WASmaxInReceiptDeprecatedEditMixin",
  ["WAResultOrError", "WASmaxInReceiptEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "edit",
        o("WASmaxInReceiptEnums").ENUM_0_1_7,
      );
      return t.success ? o("WAResultOrError").makeResult({ edit: t.value }) : t;
    }
    l.parseDeprecatedEditMixin = e;
  },
  98,
);
