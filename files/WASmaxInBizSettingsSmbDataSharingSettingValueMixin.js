__d(
  "WASmaxInBizSettingsSmbDataSharingSettingValueMixin",
  ["WAResultOrError", "WASmaxInBizSettingsEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "value",
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        1,
        void 0,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ value: t.value, version: n.value })
        : n;
    }
    l.parseSmbDataSharingSettingValueMixin = e;
  },
  98,
);
