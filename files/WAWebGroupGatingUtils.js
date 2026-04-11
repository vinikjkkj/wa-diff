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
        "anyone_can_link_to_groups",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_anyone_can_link_m2",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_anyone_can_link_m2_flood_limit",
      );
    }
    var _ = 32;
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_multi_ppl_typing_indicator_for_chatlist_groups_variant",
      );
    }
    function g() {
      return f() !== e.NONE;
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "enhanced_mention_suggestions_non_group_members_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_group_discard_dialog_contact_threshold",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_group_experimentation_enable",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_forward_to_small_groups",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_suspension_appeals_redesign_enabled",
      );
    }
    ((l.GROUP_TYPING_VARIANT = e),
      (l.getGroupDescriptionLength = s),
      (l.getGroupMaxSubject = u),
      (l.isPersistentPendingJoinRequestsBannerEnabled = c),
      (l.isAnyoneCanLinkToGroupsEnabled = d),
      (l.isAnyoneCanLinkToGroupsM2Enabled = m),
      (l.getAnyoneCanLinkM2FloodLimit = p),
      (l.ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD = _),
      (l.getGroupTypingIndicatorVariant = f),
      (l.isGroupTypingIndicatorEnabled = g),
      (l.isEnhancedMentionSuggestionsNonGroupMembersEnabled = h),
      (l.getGroupDiscardDialogThreshold = y),
      (l.isGroupExperimentationEnabled = C),
      (l.isForwardToSmallGroupsEnabled = b),
      (l.isGroupSuspensionAppealsRedesignEnabled = v));
  },
  98,
);
