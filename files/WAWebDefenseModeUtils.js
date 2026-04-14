__d(
  "WAWebDefenseModeUtils",
  [
    "fbt",
    "WAWebABProps",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumDefenseModeClickControlName",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        profilePicture: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.PROFILE_PHOTO,
        about: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.ABOUT,
        groupAdd: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.GROUPS,
        lastSeen: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.LAST_SEEN,
        online: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.ONLINE,
        disableLinkPreviews: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.DISABLE_LINK_PREVIEWS,
        securityNotifications: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.SHOW_SECURITY_NOTIFICATIONS,
        messages: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.BLOCK_UNKNOWN_ACCOUNT_MESSAGES,
        disallowAllP2p: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.PROTECT_IP_ADDRESS_IN_CALLS,
        callAdd: o("WAWebWamEnumDefenseModeClickControlName")
          .DEFENSE_MODE_CLICK_CONTROL_NAME.SILENCE_UNKNOWN_CALLERS,
      };
    function d() {
      if (o("WAWebABProps").getABPropConfigValue("defense_mode_available") < 1)
        return !1;
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return e.defenseMode === "on_standard" ? !0 : (e.defenseMode, !1);
    }
    function m(e) {
      if (d()) return c[e];
    }
    function p() {
      var e = o("WAWebFaqUrl").getDefenseModeFaqUrl();
      return u.jsx(r("WAWebClickableLink.react"), {
        href: e,
        onClick: function (n) {
          (n.preventDefault(),
            o("WAWebExternalLink.react").openExternalLink(e));
        },
        children: s._(/*BTDS*/ "Learn more"),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.getWamEnumIfSettingLockedByDefenseMode = m),
      (l.WAWebDefenseModeLearnMoreClickableLink = p));
  },
  226,
);
