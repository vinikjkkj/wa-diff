__d(
  "WASmaxInPrivacyCategoryNamesForOrgsListMixin",
  ["WAResultOrError", "WASmaxInPrivacyEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "name",
        o("WASmaxInPrivacyEnums")
          .ENUM_CALLADD_DEPENDENTACCOUNTMESSAGES_GROUPADD_LAST_LINKEDPROFILES_MESSAGES_PIX_PROFILE_STATUS_STICKERS,
      );
      return t.success ? o("WAResultOrError").makeResult({ name: t.value }) : t;
    }
    l.parseCategoryNamesForOrgsListMixin = e;
  },
  98,
);
