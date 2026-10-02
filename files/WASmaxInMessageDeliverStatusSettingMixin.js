__d(
  "WASmaxInMessageDeliverStatusSettingMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status_setting",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ALLOWLIST_CONTACTS_CUSTOMLIST_DENYLIST,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaStatusSetting: r.value })
        : r;
    }
    l.parseStatusSettingMixin = e;
  },
  98,
);
