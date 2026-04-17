__d(
  "CometAudienceStrategyUtils",
  [
    "ix",
    "AppGroupsFilled16IconSvg.react",
    "ArrowsLeftRightCircleFilled16IconSvg.react",
    "BadgeFilled16IconSvg.react",
    "BriefcaseFilled16IconSvg.react",
    "DiamondFilled12IconSvg.react",
    "EnvelopeFilled16IconSvg.react",
    "FBLogger",
    "FBNucleusFollowFilled12Icon.react",
    "FriendExceptFilled16IconSvg.react",
    "FriendListFilled16IconSvg.react",
    "FriendManFilled16IconSvg.react",
    "FriendsFilled16IconSvg.react",
    "GlobeAmericasFilled16IconSvg.react",
    "GroupFilled16IconSvg.react",
    "HeartBannerFilled16IconSvg.react",
    "HeartFilled16IconSvg.react",
    "MessengerBreakingNewsFilled12IconSvg.react",
    "PennantFilled16IconSvg.react",
    "PrivacyFilled16IconSvg.react",
    "SettingsFilled16IconSvg.react",
    "StarCircleFilled16IconSvg.react",
    "StarFilled16IconSvg.react",
    "TicketFilled16IconSvg.react",
    "fbicon",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case "acquaintances":
          return r("BadgeFilled16IconSvg.react");
        case "close_friends":
          return r("StarFilled16IconSvg.react");
        case "close_friends_v2":
          return r("StarCircleFilled16IconSvg.react");
        case "paid_online_event":
          return r("TicketFilled16IconSvg.react");
        case "event":
        case "private_event":
          return r("EnvelopeFilled16IconSvg.react");
        case "everyone":
          return r("GlobeAmericasFilled16IconSvg.react");
        case "facebook":
          return o("fbicon")._(s("487657"), 12);
        case "friends":
          return r("FriendsFilled16IconSvg.react");
        case "friends_except":
        case "friends_except_acquaintances":
          return r("FriendExceptFilled16IconSvg.react");
        case "friends_of_friends":
          return r("GroupFilled16IconSvg.react");
        case "specific_friends":
          return r("FriendManFilled16IconSvg.react");
        case "list_members":
        case "generic_list":
          return r("FriendListFilled16IconSvg.react");
        case "good_friends":
          return r("HeartFilled16IconSvg.react");
        case "group":
        case "work_group_private":
          return r("AppGroupsFilled16IconSvg.react");
        case "only_me":
          return r("PrivacyFilled16IconSvg.react");
        case "school_group":
          return r("PennantFilled16IconSvg.react");
        case "work_community":
        case "work_feed":
        case "work_group_open":
          return r("BriefcaseFilled16IconSvg.react");
        case "work_multi_company":
          return r("ArrowsLeftRightCircleFilled16IconSvg.react");
        case "supporter_exclusive":
          return r("HeartBannerFilled16IconSvg.react");
        case "top_fan_exclusive":
          return r("DiamondFilled12IconSvg.react");
        case "broadcast_channel_members":
          return r("MessengerBreakingNewsFilled12IconSvg.react");
        case "followers":
          return r("FBNucleusFollowFilled12Icon.react");
        case "no_icon":
        case "app_list":
        case "custom":
        case "gamer_friends":
          return r("SettingsFilled16IconSvg.react");
        default:
          return (
            r("FBLogger")("comet_feed").warn(
              "Unhandled privacy icon name in privacyIconNameToAsset: %s",
              e,
            ),
            r("SettingsFilled16IconSvg.react")
          );
      }
    }
    function u(e) {
      switch (e) {
        case "facebook":
        case "followers":
          return !1;
        case "acquaintances":
        case "close_friends":
        case "close_friends_v2":
        case "paid_online_event":
        case "event":
        case "private_event":
        case "everyone":
        case "friends":
        case "friends_except":
        case "friends_except_acquaintances":
        case "friends_of_friends":
        case "specific_friends":
        case "list_members":
        case "generic_list":
        case "good_friends":
        case "group":
        case "work_group_private":
        case "only_me":
        case "school_group":
        case "work_community":
        case "work_feed":
        case "work_group_open":
        case "work_multi_company":
        case "supporter_exclusive":
        case "top_fan_exclusive":
        case "no_icon":
        case "app_list":
        case "custom":
        case "gamer_friends":
        default:
          return !0;
      }
    }
    ((l.privacyIconNameToAsset = e), (l.privacyIconAssetIsSVG = u));
  },
  98,
);
