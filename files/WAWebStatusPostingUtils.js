__d(
  "WAWebStatusPostingUtils",
  ["fbt", "WAWebUserPrefsStatusType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = 0;
      switch (e.setting) {
        case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
          return s._(/*BTDS*/ "My contacts");
        case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
          return (
            (t = e.allowList.length || 0),
            s._(
              /*BTDS*/ '_j{"*":"{allow-contacts} contacts included","_1":"1 contact included"}',
              [s._plural(t, "allow-contacts")],
            )
          );
        case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
          return (
            (t = e.denyList.length || 0),
            s._(
              /*BTDS*/ '_j{"*":"{count} contacts excluded","_1":"1 contact excluded"}',
              [s._plural(t, "count")],
            )
          );
      }
    }
    l.formatStatusSetting = e;
  },
  226,
);
