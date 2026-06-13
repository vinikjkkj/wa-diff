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
        "community_general_chat_create_enabled",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_allow_member_suggest_existing_m3_receiver",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_allow_member_suggest_existing_m3_sender",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_communities_general_chat_v_2",
      );
    }
    function h() {
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
      (l.communityGeneralChatCreateEnabled = p),
      (l.memberSuggestedGroupsM3ReceiverEnabled = _),
      (l.memberSuggestedGroupsM3SenderEnabled = f),
      (l.communityGeneralChatV2Enabled = g),
      (l.communityPollIntervalTimeInSeconds = h));
  },
  98,
);
