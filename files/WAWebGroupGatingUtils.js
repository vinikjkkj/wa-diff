__d(
  "WAWebGroupGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("group_description_length");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("group_max_subject");
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "pending_group_requests_persistent_banner",
      );
    }
    var c = 32;
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_suspension_appeals_redesign_enabled",
      );
    }
    var m = 33;
    ((l.getGroupDescriptionLength = e),
      (l.getGroupMaxSubject = s),
      (l.isPersistentPendingJoinRequestsBannerEnabled = u),
      (l.ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD = c),
      (l.isGroupSuspensionAppealsRedesignEnabled = d),
      (l.GFG_GROUP_SIZE_THRESHOLD = m));
  },
  98,
);
