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
      return t.success
        ? o("WAResultOrError").makeResult({ value: t.value })
        : t;
    }
    l.parseSmbDataSharingSettingValueMixin = e;
  },
  98,
);
