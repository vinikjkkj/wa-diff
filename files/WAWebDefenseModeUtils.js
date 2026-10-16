__d(
  "WAWebDefenseModeUtils",
  ["WAWebUserPrefsGeneral", "WAWebWamEnumDefenseModeClickControlName"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        profilePicture: (e = o("WAWebWamEnumDefenseModeClickControlName"))
          .DEFENSE_MODE_CLICK_CONTROL_NAME.PROFILE_PHOTO,
        about: e.DEFENSE_MODE_CLICK_CONTROL_NAME.ABOUT,
        groupAdd: e.DEFENSE_MODE_CLICK_CONTROL_NAME.GROUPS,
        lastSeen: e.DEFENSE_MODE_CLICK_CONTROL_NAME.LAST_SEEN,
        online: e.DEFENSE_MODE_CLICK_CONTROL_NAME.ONLINE,
        disableLinkPreviews:
          e.DEFENSE_MODE_CLICK_CONTROL_NAME.DISABLE_LINK_PREVIEWS,
        securityNotifications:
          e.DEFENSE_MODE_CLICK_CONTROL_NAME.SHOW_SECURITY_NOTIFICATIONS,
        messages:
          e.DEFENSE_MODE_CLICK_CONTROL_NAME.BLOCK_UNKNOWN_ACCOUNT_MESSAGES,
        disallowAllP2p:
          e.DEFENSE_MODE_CLICK_CONTROL_NAME.PROTECT_IP_ADDRESS_IN_CALLS,
        callAdd: e.DEFENSE_MODE_CLICK_CONTROL_NAME.SILENCE_UNKNOWN_CALLERS,
      };
    function u() {
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return e.defenseMode === "on_standard" ? !0 : (e.defenseMode, !1);
    }
    function c(e) {
      if (u()) return s[e];
    }
    l.getWamEnumIfSettingLockedByDefenseMode = c;
  },
  98,
);
