__d(
  "WASmaxInStatusDeliverStatusEncSettingMixin",
  ["WAResultOrError", "WASmaxInStatusDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status_setting",
        o("WASmaxInStatusDeliverEnums")
          .ENUM_ALLOWLIST_CLOSEFRIENDS_CONTACTS_CUSTOMLIST_DENYLIST,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaStatusSetting: r.value })
        : r;
    }
    l.parseStatusEncSettingMixin = e;
  },
  98,
);
