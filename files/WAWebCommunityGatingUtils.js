__d(
  "WAWebCommunityGatingUtils",
  ["WAWebABProps", "WAWebGroupType", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("parent_group_link_limit") + 1
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "parent_group_link_limit_community_creation",
        ) + 1
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_create_privacy",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_subgroup_filter",
      );
    }
    function m(e) {
      return e == null
        ? !1
        : (e.groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
            e.groupType ===
              o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) &&
            e.getParentGroupChat() != null;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "community_general_chat_UI_enabled",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "community_general_chat_create_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_allow_member_suggest_existing_m3_receiver",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_allow_member_suggest_existing_m3_sender",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_communities_general_chat_v_2",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_community_suspend_and_appeals",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "improve_subgroup_activation_subgroup_poll_interval",
      );
    }
    ((l.communitiesCreationEnabled = e),
      (l.getParentGroupLinkLimit = s),
      (l.getParentGroupLinkLimitCommunityCreation = u),
      (l.communityCreatePrivacyEnabled = c),
      (l.subgroupFilterEnabled = d),
      (l.shouldShowNewSubgroupIdentity = m),
      (l.communityGeneralChatUIEnabled = p),
      (l.communityGeneralChatCreateEnabled = _),
      (l.memberSuggestedGroupsM3ReceiverEnabled = f),
      (l.memberSuggestedGroupsM3SenderEnabled = g),
      (l.communityGeneralChatV2Enabled = h),
      (l.isCommunitySuspendAppealEnabled = y),
      (l.communityPollIntervalTimeInSeconds = C));
  },
  98,
);
