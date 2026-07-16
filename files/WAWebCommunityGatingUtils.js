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
    function d(e) {
      return e == null
        ? !1
        : (e.groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
            e.groupType ===
              o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) &&
            e.getParentGroupChat() != null;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_allow_member_suggest_existing_m3_receiver",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "parent_group_allow_member_suggest_existing_m3_sender",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_communities_general_chat_v_2",
      );
    }
    ((l.communitiesCreationEnabled = e),
      (l.getParentGroupLinkLimit = s),
      (l.getParentGroupLinkLimitCommunityCreation = u),
      (l.communityCreatePrivacyEnabled = c),
      (l.shouldShowNewSubgroupIdentity = d),
      (l.memberSuggestedGroupsM3ReceiverEnabled = m),
      (l.memberSuggestedGroupsM3SenderEnabled = p),
      (l.communityGeneralChatV2Enabled = _));
  },
  98,
);
