__d(
  "WAWebFormatAllowNonAdminSubGroupCreationNotification",
  ["fbt", "WAWebGroupType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n,
        r =
          t[0] &&
          o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(
            t[0].toString(),
          ) ===
            o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On,
        a = !!((n = e.groupMetadata) != null && n.participants.iAmAdmin());
      return r
        ? a
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "")
        : a
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    l.default = e;
  },
  226,
);
