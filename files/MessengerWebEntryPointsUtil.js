__d(
  "MessengerWebEntryPointsUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "pagesLikeInviteThem"
        ? "pages_like_invite_item"
        : e === "pagesPrivateReply"
          ? "pages_private_reply"
          : e === "inboxActiveContacts" ||
              e === "inboxArchived" ||
              e === "inboxSpam" ||
              e === "inboxFolder" ||
              e === "inboxThreadList" ||
              e === "inboxRecentThreads" ||
              e === "inboxRemainingThreads" ||
              e === "pendingRequests" ||
              e === "inboxRestricted" ||
              e === "archieve" ||
              e === "inboxInThread" ||
              e === "inboxPendingRequests"
            ? "inbox"
            : e === "jobs"
              ? "jobs"
              : e === "storySeenByList" || e === "friendsTab"
                ? "story_seen_by_list"
                : e === "chatParticipants"
                  ? "add_participants"
                  : e === "compat"
                    ? "compat"
                    : e === "cookie"
                      ? "cookie"
                      : e === "pagesAdminInviteItem"
                        ? "pages_admin_invite_item"
                        : e === "groupWelcomePost"
                          ? "group_welcome_post"
                          : e === "sidebarContactsList" ||
                              e === "sidebarGroupsList"
                            ? "sidebar"
                            : e === "sidebarSearch"
                              ? "sidebar_contacts_search"
                              : e === "sidebarCommunityChatsList"
                                ? "sidebar_community_chats"
                                : e === "jewelNestedFolder" || e === "jewel"
                                  ? "jewel"
                                  : e === "shop"
                                    ? "shop"
                                    : e === "chatheadsOverflow"
                                      ? "chat_heads_overflow"
                                      : e === "feedDynamicHoverCard"
                                        ? "pages_hovercard"
                                        : e === "messengerUniversalSearch"
                                          ? "search_result_page"
                                          : e === "reactorList"
                                            ? "reactor_list"
                                            : e === "feedPoll"
                                              ? "feed_poll"
                                              : e === "timeline" ||
                                                  e === "feedOrganicPost"
                                                ? "timeline"
                                                : e ===
                                                      "pageResponsivenessCard" ||
                                                    e === "pageAboutCard"
                                                  ? "pages_about"
                                                  : e === "inboxSearch" ||
                                                      e === "search"
                                                    ? "search"
                                                    : e ===
                                                        "storyAggregatedUsers"
                                                      ? "story_aggregated_users"
                                                      : e ===
                                                          "fundraiserMoreMenu"
                                                        ? "fundraiser_support:reactive_more_menu"
                                                        : e === "fundraiserFaq"
                                                          ? "fundraiser_support:reactive_faq"
                                                          : e ===
                                                              "notificationInThreadReply"
                                                            ? "message_received"
                                                            : e ===
                                                                "roomsNullState"
                                                              ? "rooms_null_state"
                                                              : e ===
                                                                  "storyViewerSheetRow"
                                                                ? "stories_viewed_by_list"
                                                                : e ===
                                                                    "feedOrganicPostNewsfeedPagePostCta"
                                                                  ? "pages_cta"
                                                                  : e ===
                                                                      "chatheadsNewMessage"
                                                                    ? "new_msg_button"
                                                                    : e ===
                                                                          "groupExperts" ||
                                                                        e ===
                                                                          "groupCommunityFriendsDialog"
                                                                      ? "group_experts_discovery_invite"
                                                                      : e ===
                                                                          "hovercard"
                                                                        ? "hovercard"
                                                                        : e ===
                                                                            "crisisListingAttachment"
                                                                          ? "crisis_listing_attachment"
                                                                          : e ===
                                                                              "mentalHealth"
                                                                            ? "mental_health"
                                                                            : e ===
                                                                                "event"
                                                                              ? "events_permalink"
                                                                              : e ===
                                                                                  "jewelSearch"
                                                                                ? "jewel_search"
                                                                                : e ===
                                                                                    "pagePopupChat"
                                                                                  ? "pages_popup_chat"
                                                                                  : e ===
                                                                                      "communityHelp"
                                                                                    ? "community_help"
                                                                                    : e ===
                                                                                        "jewelNewMessage"
                                                                                      ? "jewel_new_message"
                                                                                      : e ===
                                                                                          "fundraiser"
                                                                                        ? "fundraiser"
                                                                                        : e ===
                                                                                            "memories"
                                                                                          ? "memories_home"
                                                                                          : e ===
                                                                                              "fundraiserSupportersList"
                                                                                            ? "fundraiser_supporters_list"
                                                                                            : e ===
                                                                                                "groupRemovePost"
                                                                                              ? "group_remove_post_tombstone"
                                                                                              : e ===
                                                                                                  "pagesHeader"
                                                                                                ? "pages_header"
                                                                                                : e ===
                                                                                                    "groupMembers"
                                                                                                  ? "group_members_tab"
                                                                                                  : e ===
                                                                                                      "chatheads"
                                                                                                    ? "chat_heads"
                                                                                                    : e ===
                                                                                                        "birthday"
                                                                                                      ? "birthdays"
                                                                                                      : e ===
                                                                                                          "localBusinessesNearby"
                                                                                                        ? "local_businesses_nearby"
                                                                                                        : e ===
                                                                                                              "marketplace" ||
                                                                                                            e ===
                                                                                                              "inboxMarketplace"
                                                                                                          ? "marketplace"
                                                                                                          : e ===
                                                                                                              "mutualFriendsDialog"
                                                                                                            ? "mutual_friends_dialog"
                                                                                                            : e ===
                                                                                                                "feedOrganicPostViewAndMessage"
                                                                                                              ? "feed_story_cta"
                                                                                                              : e ===
                                                                                                                  "profileServicesMenu"
                                                                                                                ? "profile_services_menu"
                                                                                                                : e ===
                                                                                                                    "adsCta"
                                                                                                                  ? "reshares_dialog"
                                                                                                                  : e ===
                                                                                                                      "offer"
                                                                                                                    ? "offer"
                                                                                                                    : e ===
                                                                                                                        "payments"
                                                                                                                      ? "p2p_payments"
                                                                                                                      : e ===
                                                                                                                          "groupQuality"
                                                                                                                        ? "group_quality"
                                                                                                                        : e ===
                                                                                                                            "pagesHomeFriendsDialog"
                                                                                                                          ? "pages_home_friends_dialog"
                                                                                                                          : e ===
                                                                                                                              "communityFriendsDialog"
                                                                                                                            ? "pages_community_friends_dialog"
                                                                                                                            : e ===
                                                                                                                                "groupChats"
                                                                                                                              ? "group_chats"
                                                                                                                              : e ===
                                                                                                                                  "groupTab"
                                                                                                                                ? "group_tab"
                                                                                                                                : e ===
                                                                                                                                    "gratitude"
                                                                                                                                  ? "gratitude"
                                                                                                                                  : e ===
                                                                                                                                      "inboxTrayActiveNow"
                                                                                                                                    ? "inbox_tray"
                                                                                                                                    : e ===
                                                                                                                                        "noteReplyMsg"
                                                                                                                                      ? "note_reply_msg"
                                                                                                                                      : "unknown";
    }
    function l(e) {
      switch (e) {
        case "groupTab":
        case "inboxThreadList":
        case "jewel":
          return !0;
        default:
          return !1;
      }
    }
    ((i.cast = e), (i.getEntryPointShouldOverrideThreadSnippetRemoval = l));
  },
  66,
);
