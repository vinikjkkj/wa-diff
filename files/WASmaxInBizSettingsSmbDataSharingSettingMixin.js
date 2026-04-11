__d(
  "WASmaxInBizSettingsSmbDataSharingSettingMixin",
  ["WASmaxInBizSettingsSmbDataSharingSettingValueMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "privacy");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "smb_data_sharing_with_meta_consent",
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInBizSettingsSmbDataSharingSettingValueMixin",
      ).parseSmbDataSharingSettingValueMixin(n.value);
      return (r.success, r);
    }
    l.parseSmbDataSharingSettingMixin = e;
  },
  98,
);
