__d(
  "WAWebGroupPresenceUtils",
  ["WAWebABProps", "WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 1024;
    function u() {
      return e;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_small_group_presence_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_large_group_presence_enabled",
      );
    }
    function m(e) {
      if (!e.id.isGroup()) return !1;
      var t = e.groupMetadata;
      return !(
        t == null ||
        t.isSuspendedOrTerminated() === !0 ||
        t.isCag === !0 ||
        t.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        t.groupType === o("WAWebGroupType").GroupType.COMMUNITY
      );
    }
    ((l.WEB_SMALL_MAX = e),
      (l.WEB_LARGE_MAX = s),
      (l.getSmallGroupPresenceThreshold = u),
      (l.isSmallGroupPresenceEnabled = c),
      (l.isLargeGroupPresenceEnabled = d),
      (l.isGroupEligibleForPresence = m));
  },
  98,
);
