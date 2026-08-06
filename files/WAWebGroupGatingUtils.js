__d(
  "WAWebGroupGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = { NONE: 0, SHOW_COUNT_ONLY: 1, SHOW_NAME_AND_COUNT: 2 };
    function s() {
      return o("WAWebABProps").getABPropConfigValue("group_description_length");
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("group_max_subject");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "pending_group_requests_persistent_banner",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_anyone_can_link_m2",
      );
    }
    var m = 32;
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_multi_ppl_typing_indicator_for_chatlist_groups_variant",
      );
    }
    function _() {
      return p() !== e.NONE;
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_group_discard_dialog_contact_threshold",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_group_experimentation_enable",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_suspension_appeals_redesign_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_suspension_appeals_redesign_variant_enable",
      );
    }
    var C = 33;
    ((l.GROUP_TYPING_VARIANT = e),
      (l.getGroupDescriptionLength = s),
      (l.getGroupMaxSubject = u),
      (l.isPersistentPendingJoinRequestsBannerEnabled = c),
      (l.isAnyoneCanLinkToGroupsM2Enabled = d),
      (l.ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD = m),
      (l.getGroupTypingIndicatorVariant = p),
      (l.isGroupTypingIndicatorEnabled = _),
      (l.getGroupDiscardDialogThreshold = f),
      (l.isGroupExperimentationEnabled = g),
      (l.isGroupSuspensionAppealsRedesignEnabled = h),
      (l.isGroupSuspensionAppealsRedesignVariantEnabled = y),
      (l.GFG_GROUP_SIZE_THRESHOLD = C));
  },
  98,
);
