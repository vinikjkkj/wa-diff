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
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_anyone_can_link_m2",
      );
    }
    var d = 32;
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_suspension_appeals_redesign_enabled",
      );
    }
    var p = 33;
    ((l.getGroupDescriptionLength = e),
      (l.getGroupMaxSubject = s),
      (l.isPersistentPendingJoinRequestsBannerEnabled = u),
      (l.isAnyoneCanLinkToGroupsM2Enabled = c),
      (l.ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD = d),
      (l.isGroupSuspensionAppealsRedesignEnabled = m),
      (l.GFG_GROUP_SIZE_THRESHOLD = p));
  },
  98,
);
