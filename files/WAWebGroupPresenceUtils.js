__d(
  "WAWebGroupPresenceUtils",
  ["WAWebABProps", "WAWebGroupMetadataGetters", "WAWebGroupType"],
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
        o("WAWebGroupMetadataGetters").getIsCag(t) ||
        o("WAWebGroupMetadataGetters").getGroupType(t) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        o("WAWebGroupMetadataGetters").getGroupType(t) ===
          o("WAWebGroupType").GroupType.COMMUNITY
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
