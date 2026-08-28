__d(
  "MAWAdminMsg",
  [
    "fbt",
    "MAWLocalizationType",
    "MAWMemoriesShareXMASnippetFbt",
    "MAWPostMentionXMASnippetFbt",
    "MWVisibilityPlaceholderSnippet",
    "getMAWLocalizedBumpMsgReplySnippet",
    "getMAWLocalizedFallbackMsgSnippet",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      switch (n) {
        case o("MAWLocalizationType").LOCALIZATION_TYPE.EMPTY_SNIPPET:
          return "";
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CREATED_GROUP:
          return s._(/*BTDS*/ "You created this group").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CREATED_GROUP:
          return s
            ._(/*BTDS*/ "{actor} created this group", [s._param("actor", e[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_CREATED_GROUP:
          return s._(/*BTDS*/ "This group was created.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_NAMED_GROUP:
          return s
            ._(/*BTDS*/ "You named the group {custom group name}.", [
              s._param("custom group name", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_NAMED_GROUP:
          return s
            ._(/*BTDS*/ "The group name was set to {custom group name}.", [
              s._param("custom group name", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_NAMED_GROUP:
          return s
            ._(/*BTDS*/ "{actor} named the group {custom group name}.", [
              s._param("actor", t[0]),
              s._param("custom group name", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_DEVICE:
          return s
            ._(/*BTDS*/ "You added a new device to this conversation.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_DEVICE:
          return s
            ._(/*BTDS*/ "{actor} added a new device to this conversation.", [
              s._param("actor", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_REMOVED_DEVICE:
          return s
            ._(/*BTDS*/ "You removed a device from this conversation.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_REMOVED_DEVICE:
          return s
            ._(/*BTDS*/ "{actor} removed a device from this conversation.", [
              s._param("actor", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_UPDATED_DEVICE:
          return s._(/*BTDS*/ "Your key has changed.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_UPDATED_DEVICE:
          return s
            ._(/*BTDS*/ "{user_name}'s key has changed.", [
              s._param("user_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_ONE_PARTICIPANT:
          return s
            ._(
              /*BTDS*/ "You added {user_name} to the group. They can only see messages sent after they were added.",
              [s._param("user_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_TWO_PARTICIPANTS:
          return s
            ._(
              /*BTDS*/ "You added {user_name_1} and {user_name_2} to the group. They can only see messages sent after they were added.",
              [s._param("user_name_1", t[0]), s._param("user_name_2", t[1])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_MORE_THAN_TWO_PARTICIPANTS:
          return s
            ._(
              /*BTDS*/ "You added {user_name} and {number of participants} others to the group. They can only see messages sent after they were added.",
              [
                s._param("user_name", t[0]),
                s._param("number of participants", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU:
          return s
            ._(
              /*BTDS*/ "{actor} added you to the group. You can only see messages sent after you were added.",
              [s._param("actor", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_YOU_AND_ONE_USER:
          return s
            ._(
              /*BTDS*/ "{actor} added you and {user_name} to the group. You can only see messages sent after you were added.",
              [s._param("actor", t[0]), s._param("user_name", t[1])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_YOU_AND_MORE_THAN_ONE_USERS:
          return s
            ._(
              /*BTDS*/ "{actor} added you and {number of participants} others to the group. You can only see messages sent after you were added.",
              [
                s._param("actor", t[0]),
                s._param("number of participants", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_ONE_USER:
          return s
            ._(
              /*BTDS*/ "{actor} added {user_name} to the group. They can only see messages sent after they were added.",
              [s._param("actor", t[0]), s._param("user_name", t[1])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_TWO_USER:
          return s
            ._(
              /*BTDS*/ "{actor} added {user_name_1} and {user_name_2} to the group. They can only see messages sent after they were added.",
              [
                s._param("actor", t[0]),
                s._param("user_name_1", t[1]),
                s._param("user_name_2", t[2]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_MORE_THAN_TWO_USER:
          return s
            ._(
              /*BTDS*/ "{actor} added {user_name_1} and {number of participants} others to the group. They can only see messages sent after they were added.",
              [
                s._param("actor", t[0]),
                s._param("user_name_1", t[1]),
                s._param("number of participants", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_REMOVED_ONE_PARTICIPANT:
          return s
            ._(/*BTDS*/ "You removed {user_name} from the group.", [
              s._param("user_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_YOU:
          return s
            ._(/*BTDS*/ "{user_name_1} removed you from the group.", [
              s._param("user_name_1", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_REMOVED_ONE_USER:
          return s
            ._(/*BTDS*/ "{user_name_1} removed {user_name_2} from the group.", [
              s._param("user_name_1", t[0]),
              s._param("user_name_2", t[1]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LEFT_GROUP:
          return s
            ._(/*BTDS*/ "{name} left the group.", [s._param("name", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LEFT_GROUP:
          return s._(/*BTDS*/ "You left the group.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_GOT_PROMOTED:
          return s
            ._(/*BTDS*/ "{user_name} is now an admin.", [
              s._param("user_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_GOT_DEMOTED:
          return s
            ._(/*BTDS*/ "{user_name} is no longer an admin.", [
              s._param("user_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_GOT_PROMOTED:
          return s._(/*BTDS*/ "You are now an admin.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_GOT_DEMOTED:
          return s._(/*BTDS*/ "You are no longer an admin.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_PROMOTED_YOU:
          return s
            ._(/*BTDS*/ "{actor} added you as a group admin.", [
              s._param("actor", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_DEMOTED_YOU:
          return s
            ._(/*BTDS*/ "{actor} removed you as a group admin.", [
              s._param("actor", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_PROMOTED_PARTICIPANT:
          return s
            ._(/*BTDS*/ "{actor} added {target} as a group admin.", [
              s._param("actor", t[0]),
              s._param("target", t[1]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_DEMOTED_PARTICIPANT:
          return s
            ._(/*BTDS*/ "{actor} removed {target} as a group admin.", [
              s._param("actor", t[0]),
              s._param("target", t[1]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_DEMOTED_PARTICIPANT:
          return s
            ._(/*BTDS*/ "You removed {target} as a group admin.", [
              s._param("target", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_PROMOTED_PARTICIPANT:
          return s
            ._(/*BTDS*/ "You added {target} as a group admin.", [
              s._param("target", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SELF_DEMOTED:
          return s
            ._(/*BTDS*/ "{actor} removed themself as a group admin.", [
              s._param("actor", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SELF_DEMOTED:
          return s
            ._(/*BTDS*/ "You removed yourself as a group admin.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_TEXT:
          return s._(/*BTDS*/ "You").toString() + ": " + e[0];
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT:
          return e[0];
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_TEXT_IN_GROUP:
          return t[0] + ": " + e[0];
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_IMAGE:
          return s._(/*BTDS*/ "You sent a photo.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_VIDEO:
          return s._(/*BTDS*/ "You sent a video.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_AUDIO:
          return s._(/*BTDS*/ "You sent a voice message.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_GIF:
          return s._(/*BTDS*/ "You sent a GIF.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_STICKER:
          return s._(/*BTDS*/ "You sent a sticker.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_ATTACHMENT:
          return s._(/*BTDS*/ "You sent an attachment.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_POST:
          return s._(/*BTDS*/ "You sent a post").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_REEL:
          return s._(/*BTDS*/ "You sent a reel").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_STORY:
          return s._(/*BTDS*/ "You sent a story.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_CONTACT_SHARE:
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_AI_CONTACT_SHARE:
          return s._(/*BTDS*/ "You sent a contact card.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_EVENT:
          return s._(/*BTDS*/ "You sent an event.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SENT_STORY_HIGHLIGHT:
          return s._(/*BTDS*/ "You sent a story highlight").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_MENTIONED_STORY_IG:
          return s
            ._(/*BTDS*/ "You mentioned \u0040{user} in your story.", [
              s._param("user", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_RECEIVED_STORY_MENTION_IG:
          return s._(/*BTDS*/ "Mentioned you in their story").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_STORY_MENTION:
          return s
            ._(/*BTDS*/ "You mentioned this user in your story")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_STORY_MENTION:
          return s
            ._(/*BTDS*/ "{user} mentioned you in their story", [
              s._param("user", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_IMAGE:
          return s
            ._(/*BTDS*/ "{user} sent a photo.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_VIDEO:
          return s
            ._(/*BTDS*/ "{user} sent a video.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_AUDIO:
          return s
            ._(/*BTDS*/ "{user} sent a voice message.", [
              s._param("user", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_GIF:
          return s
            ._(/*BTDS*/ "{user} sent a GIF.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_STICKER:
          return s
            ._(/*BTDS*/ "{user} sent a sticker.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_POST:
          return s._(/*BTDS*/ "Sent a post").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_REEL:
          return s._(/*BTDS*/ "Sent a reel").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_ATTACHMENT:
          return s
            ._(/*BTDS*/ "{user} sent an attachment.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_POST_MENTION:
          return o("MAWPostMentionXMASnippetFbt")
            .getCurrentUserSendPostMentionSnippetFbt(t[1])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_POST_MENTION:
          return o("MAWPostMentionXMASnippetFbt")
            .getParticipantSendPostMentionSnippetFbt(t[0])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_LOCATION:
          return s._(/*BTDS*/ "You sent a location.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_LOCATION:
          return s
            ._(/*BTDS*/ "{user} sent a location.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_STORY:
          return s
            ._(/*BTDS*/ "{user} sent a story.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_CONTACT_SHARE:
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_AI_CONTACT_SHARE:
          return s
            ._(/*BTDS*/ "{user} sent a contact card.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_EVENT:
          return s
            ._(/*BTDS*/ "{user} sent an event.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SENT_STORY_HIGHLIGHT:
          return s._(/*BTDS*/ "Sent a story highlight").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET:
          return s._(/*BTDS*/ "Unavailable message").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .MESSAGE_UNAVAILABLE_SNIPPET:
          return s._(/*BTDS*/ "Message unavailable").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.MESSAGE_NOT_RESTORED:
          return o(
            "MWVisibilityPlaceholderSnippet",
          ).VISIBILITY_PLACEHOLDER_SNIPPET.toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.TWO_USERS_CONNECTED:
          return s
            ._(
              /*BTDS*/ "You can now message and call each other and see info like active status and when you have read messages.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .TWO_USERS_CONNECTED_ONE_MSPLIT:
          return s
            ._(/*BTDS*/ "You can now message and call each other.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.REACHABILITY_ERROR:
          return s
            ._(
              /*BTDS*/ "This account can't receive your message because they don't allow new message requests from everyone.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_SECONDS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were turned on. Messages will disappear {number} seconds after they\'re sent.","_1":"Disappearing messages were turned on. Messages will disappear 1 second after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_MINUTES:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were turned on. Messages will disappear {number} minutes after they\'re sent.","_1":"Disappearing messages were turned on. Messages will disappear 1 minute after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_HOURS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were turned on. Messages will disappear {number} hours after they\'re sent.","_1":"Disappearing messages were turned on. Messages will disappear 1 hour after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_DAYS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were turned on. Messages will disappear {number} days after they\'re sent.","_1":"Disappearing messages were turned on. Messages will disappear 1 day after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_TURNED_ON_SECONDS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. Messages will disappear {number} seconds after they\'re sent.","_1":"You turned on disappearing messages. Messages will disappear 1 second after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_TURNED_ON_MINUTES:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. Messages will disappear {number} minutes after they\'re sent.","_1":"You turned on disappearing messages. Messages will disappear 1 minute after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_TURNED_ON_HOURS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. Messages will disappear {number} hours after they\'re sent.","_1":"You turned on disappearing messages. Messages will disappear 1 hour after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_TURNED_ON_DAYS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. Messages will disappear {number} days after they\'re sent.","_1":"You turned on disappearing messages. Messages will disappear 1 day after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_SECONDS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} turned on disappearing messages. Messages will disappear {number} seconds after they\'re sent.","_1":"{user} turned on disappearing messages. Messages will disappear 1 second after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_MINUTES:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} turned on disappearing messages. Messages will disappear {number} minutes after they\'re sent.","_1":"{user} turned on disappearing messages. Messages will disappear 1 minute after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_HOURS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} turned on disappearing messages. Messages will disappear {number} hours after they\'re sent.","_1":"{user} turned on disappearing messages. Messages will disappear 1 hour after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_DAYS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} turned on disappearing messages. Messages will disappear {number} days after they\'re sent.","_1":"{user} turned on disappearing messages. Messages will disappear 1 day after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_SECONDS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were changed. Messages will disappear {number} seconds after they\'re sent.","_1":"Disappearing messages were changed. Messages will disappear 1 second after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_MINUTES:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were changed. Messages will disappear {number} minutes after they\'re sent.","_1":"Disappearing messages were changed. Messages will disappear 1 minute after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_HOURS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were changed. Messages will disappear {number} hours after they\'re sent.","_1":"Disappearing messages were changed. Messages will disappear 1 hour after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_DAYS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"Disappearing messages were changed. Messages will disappear {number} days after they\'re sent.","_1":"Disappearing messages were changed. Messages will disappear 1 day after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CUTOVER_THREAD_ADMIN_MESSAGE:
          return s
            ._(
              /*BTDS*/ "New messages and calls are secured with end-to-end encryption. Only people in this chat can read, listen to, or share them.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .DUAL_THREAD_CUTOVER_ADMIN_MESSAGE:
          return s._(/*BTDS*/ "Your other chat has been archived.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CUTOVER_IGD_THREAD_ADMIN_MESSAGE:
          return s
            ._(
              /*BTDS*/ "Instagram upgraded the security of this chat. Messages and calls will be secured with end-to-end encryption.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CUTOVER_ROLLBACK_ADMIN_MESSAGE:
          return s
            ._(/*BTDS*/ "Previous messages may be in your other chat.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_CHANGE_SECONDS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You changed disappearing messages. Messages will disappear {number} seconds after they\'re sent.","_1":"You changed disappearing messages. Messages will disappear 1 second after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_CHANGE_MINUTES:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You changed disappearing messages. Messages will disappear {number} minutes after they\'re sent.","_1":"You changed disappearing messages. Messages will disappear 1 minute after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_CHANGE_HOURS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You changed disappearing messages. Messages will disappear {number} hours after they\'re sent.","_1":"You changed disappearing messages. Messages will disappear 1 hour after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_CHANGE_DAYS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"You changed disappearing messages. Messages will disappear {number} days after they\'re sent.","_1":"You changed disappearing messages. Messages will disappear 1 day after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number")],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_CHANGE_SECONDS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} changed disappearing messages. Messages will disappear {number} seconds after they\'re sent.","_1":"{user} changed disappearing messages. Messages will disappear 1 second after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_CHANGE_MINUTES:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} changed disappearing messages. Messages will disappear {number} minutes after they\'re sent.","_1":"{user} changed disappearing messages. Messages will disappear 1 minute after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_CHANGE_HOURS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} changed disappearing messages. Messages will disappear {number} hours after they\'re sent.","_1":"{user} changed disappearing messages. Messages will disappear 1 hour after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_CHANGE_DAYS:
          return s
            ._(
              /*BTDS*/ '_j{"*":"{user} changed disappearing messages. Messages will disappear {number} days after they\'re sent.","_1":"{user} changed disappearing messages. Messages will disappear 1 day after they\'re sent."}',
              [s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_OFF:
          return s
            ._(/*BTDS*/ "Disappearing messages were turned off.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_SETTING_TURNED_OFF:
          return s
            ._(/*BTDS*/ "You turned off disappearing messages.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_SETTING_TURNED_OFF:
          return s
            ._(/*BTDS*/ "{user} turned off disappearing messages.", [
              s._param("user", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .EPHEMERAL_SETTINGS_AUTO_RESET:
          return s
            ._(
              /*BTDS*/ "Disappearing messages were turned off. Turn them back on to have messages disappear 24 hours after they're sent.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_UNSENT_MESSAGE:
          return s._(/*BTDS*/ "You unsent a message").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_UNSENT_MESSAGE:
          return s
            ._(/*BTDS*/ "{first name} unsent a message", [
              s._param("first name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_REACT_MESSAGE_IN_GROUP:
          return s
            ._(/*BTDS*/ "{name} reacted {emoji} to your message", [
              s._param("name", t[0]),
              s._param("emoji", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_REACT_MESSAGE:
          return s
            ._(/*BTDS*/ "Reacted {emoji} to your message", [
              s._param("emoji", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_TAKE_SCREENSHOT:
          return s._(/*BTDS*/ "A screenshot was taken.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_EPHEMERAL_RECORD_SCREEN:
          return s._(/*BTDS*/ "Current screen was recorded.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_TAKE_SCREENSHOT:
          return s._(/*BTDS*/ "You took a screenshot.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .YOU_EPHEMERAL_RECORD_SCREEN:
          return s._(/*BTDS*/ "You recorded the screen.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_TAKE_SCREENSHOT:
          return s
            ._(/*BTDS*/ "{user} took a screenshot.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_EPHEMERAL_RECORD_SCREEN:
          return s
            ._(/*BTDS*/ "{user} recorded the screen.", [s._param("user", t[0])])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION:
          return s
            ._(
              /*BTDS*/ "Messages and calls are secured with end-to-end encryption.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU:
          return s
            ._(
              /*BTDS*/ "Someone added you to the group. You can only see messages sent after you were added.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_ADDED_YOU_AND_ONE_USER:
          return s
            ._(
              /*BTDS*/ "Someone added you and {user_name} to the group. You can only see messages sent after you were added.",
              [s._param("user_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_ADDED_YOU_AND_MORE_THAN_ONE_USER:
          return s
            ._(
              /*BTDS*/ "Someone added you and {number of participants} others to the group. You can only see messages sent after you were added.",
              [s._param("number of participants", e[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_ADDED_ONE_USER:
          return s
            ._(
              /*BTDS*/ "Someone added {user_name} to the group. They can only see messages sent after they were added.",
              [s._param("user_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_ADDED_TWO_USER:
          return s
            ._(
              /*BTDS*/ "Someone added {user_name_1} and {user_name_2} to the group. They can only see messages sent after they were added.",
              [s._param("user_name_1", t[0]), s._param("user_name_2", t[1])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .UNKNOWN_USER_ADDED_MORE_THAN_TWO_USER:
          return s
            ._(
              /*BTDS*/ "Someone added {user_name_1} and {number of participants} others to the group. They can only see messages sent after they were added.",
              [
                s._param("user_name_1", t[0]),
                s._param("number of participants", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.DEBUG_MSG:
          return e[0];
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_MISSED_AUDIO_CALL: {
          var a = t[0];
          return a != null
            ? s
                ._(/*BTDS*/ "You missed an audio call from {user_name}.", [
                  s._param("user_name", a),
                ])
                .toString()
            : s._(/*BTDS*/ "You missed a call from a contact.").toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_MISSED_AUDIO_CALL: {
          var i = t[0];
          return i != null
            ? s
                ._(/*BTDS*/ "{user_name} missed your audio call.", [
                  s._param("user_name", i),
                ])
                .toString()
            : s._(/*BTDS*/ "A contact missed your audio call.").toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_MISSED_VIDEO_CALL: {
          var l = t[0];
          return l != null
            ? s
                ._(/*BTDS*/ "You missed a video call from {user_name}.", [
                  s._param("user_name", l),
                ])
                .toString()
            : s
                ._(/*BTDS*/ "You missed a video call from a contact.")
                .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_MISSED_VIDEO_CALL: {
          var u = t[0];
          return u != null
            ? s
                ._(/*BTDS*/ "{user} missed your video call.", [
                  s._param("user", u),
                ])
                .toString()
            : s._(/*BTDS*/ "A contact missed your video chat.").toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_AUDIO_CALLED:
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_AUDIO_CALLED:
          return s._(/*BTDS*/ "The audio call ended.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_VIDEO_CALLED:
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_VIDEO_CALLED:
          return s._(/*BTDS*/ "The video call ended.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_STARTED_GROUP_AUDIO_CALL:
          return s._(/*BTDS*/ "You started a call.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_STARTED_GROUP_AUDIO_CALL: {
          var c = t[0];
          return c != null
            ? s
                ._(/*BTDS*/ "{user} started a call.", [s._param("user", c)])
                .toString()
            : s._(/*BTDS*/ "A contact started a call.").toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_STARTED_GROUP_VIDEO_CALL:
          return s._(/*BTDS*/ "You started a video chat.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_STARTED_GROUP_VIDEO_CALL: {
          var d = t[0];
          return d != null
            ? s
                ._(/*BTDS*/ "{user} started a video chat.", [
                  s._param("user", d),
                ])
                .toString()
            : s._(/*BTDS*/ "A contact started a video chat.").toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CUSTOMIZE_HOTLIKE:
          return s
            ._(/*BTDS*/ "You set the quick reaction to {emoji}.", [
              s._param("emoji", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CUSTOMIZE_HOTLIKE:
          return s
            ._(
              /*BTDS*/ "{participant_name} set the quick reaction to {emoji}.",
              [s._param("participant_name", t[0]), s._param("emoji", e[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CUSTOMIZE_NICKNAME:
          return s
            ._(
              /*BTDS*/ "You set the nickname for {participant_name} to {nickname}.",
              [s._param("participant_name", t[0]), s._param("nickname", e[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CUSTOMIZE_THEME:
          return e[1] != null
            ? s
                ._(
                  /*BTDS*/ "You changed the theme to {theme_name} {theme_emoji}.",
                  [s._param("theme_name", e[0]), s._param("theme_emoji", e[1])],
                )
                .toString()
            : s
                ._(/*BTDS*/ "You changed the theme to {theme_name}.", [
                  s._param("theme_name", e[0]),
                ])
                .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CUSTOMIZE_AI_THEME:
          return e[1] != null
            ? s
                ._(
                  /*BTDS*/ 'You changed the theme using AI to "{theme_name}" {theme_emoji}.',
                  [s._param("theme_name", e[0]), s._param("theme_emoji", e[1])],
                )
                .toString()
            : s
                ._(
                  /*BTDS*/ 'You changed the theme using AI to "{theme_name}".',
                  [s._param("theme_name", e[0])],
                )
                .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CUSTOMIZE_PHOTO:
          return s._(/*BTDS*/ "You changed the group photo.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_PINNED_MESSAGE:
          return s._(/*BTDS*/ "You pinned a message.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_UNPINNED_MESSAGE:
          return s._(/*BTDS*/ "You unpinned a message.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .E2EE_THREAD_UK_OSA_ADMIN_MESSAGE:
          return s
            ._(
              /*BTDS*/ "You're messaging {participant_name} for the first time. If you ever feel uncomfortable, there are",
              [s._param("participant_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CUSTOMIZE_PARTICIPANT_NICKNAME:
          return s
            ._(
              /*BTDS*/ "{participant_name_1} set the nickname for {participant_name_2} to {nickname}.",
              [
                s._param("participant_name_1", t[0]),
                s._param("participant_name_2", t[1]),
                s._param("nickname", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CLEAR_PARTICIPANT_NICKNAME:
          return s
            ._(
              /*BTDS*/ "{participant_name_1} cleared the nickname for {participant_name_2}.",
              [
                s._param("participant_name_1", t[0]),
                s._param("participant_name_2", t[1]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CUSTOMIZE_THEME:
          return e[1] != null
            ? s
                ._(
                  /*BTDS*/ "{participant_name} changed the theme to {theme_name} {theme_emoji}.",
                  [
                    s._param("participant_name", t[0]),
                    s._param("theme_name", e[0]),
                    s._param("theme_emoji", e[1]),
                  ],
                )
                .toString()
            : s
                ._(
                  /*BTDS*/ "{participant_name} changed the theme to {theme_name}.",
                  [
                    s._param("participant_name", t[0]),
                    s._param("theme_name", e[0]),
                  ],
                )
                .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CUSTOMIZE_AI_THEME:
          return e[1] != null
            ? s
                ._(
                  /*BTDS*/ '{participant_name} changed the theme using AI to "{theme_name}" {theme_emoji}.',
                  [
                    s._param("participant_name", t[0]),
                    s._param("theme_name", e[0]),
                    s._param("theme_emoji", e[1]),
                  ],
                )
                .toString()
            : s
                ._(
                  /*BTDS*/ '{participant_name} changed the theme using AI to "{theme_name}".',
                  [
                    s._param("participant_name", t[0]),
                    s._param("theme_name", e[0]),
                  ],
                )
                .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CREATED_POLL:
          return s
            ._(/*BTDS*/ "You created a poll: {poll_name}.", [
              s._param("poll_name", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CREATED_POLL:
          return s
            ._(/*BTDS*/ "{participant_name} created a poll: {poll_name}.", [
              s._param("participant_name", t[0]),
              s._param("poll_name", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_POLL_OPTION:
          return s
            ._(
              /*BTDS*/ '{participant_name} added "{poll_option}" to the poll.',
              [
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_POLL_VOTE:
          return s
            ._(
              /*BTDS*/ '{participant_name} voted for "{poll_option}" in the poll.',
              [
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_POLL_OPTION:
          return s
            ._(/*BTDS*/ 'You added "{poll_option}" to the poll.', [
              s._param("poll_option", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_POLL_VOTE:
          return s
            ._(/*BTDS*/ 'You voted for "{poll_option}" in the poll.', [
              s._param("poll_option", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_MULTIPLE_POLL_OPTIONS: {
          var m = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"{participant_name} added \\"{poll_option}\\" and {num_other_options} other options to the poll.","_1":"{participant_name} added \\"{poll_option}\\" and {num_other_options} other option to the poll."}',
              [
                s._plural(m),
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
                s._param("num_other_options", m),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_MULTIPLE_POLL_OPTIONS: {
          var p = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"You added \\"{poll_option}\\" and {num_other_options} other options to the poll.","_1":"You added \\"{poll_option}\\" and {num_other_options} other option to the poll."}',
              [
                s._plural(p),
                s._param("poll_option", e[0]),
                s._param("num_other_options", p),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_ADDED_MULTIPLE_POLL_VOTES: {
          var _ = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"You voted for \\"{poll_option}\\" and {num_other_votes} other options in the poll.","_1":"You voted for \\"{poll_option}\\" and {num_other_votes} other option in the poll."}',
              [
                s._plural(_),
                s._param("poll_option", e[0]),
                s._param("num_other_votes", _),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_ADDED_MULTIPLE_POLL_VOTES: {
          var f = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"{participant_name} voted for \\"{poll_option}\\" and {num_other_votes} other options in the poll.","_1":"{participant_name} voted for \\"{poll_option}\\" and {num_other_votes} other option in the poll."}',
              [
                s._plural(f),
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
                s._param("num_other_votes", f),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_REMOVED_MULTIPLE_POLL_VOTES: {
          var g = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"You removed your vote for \\"{poll_option}\\" and {num_other_removed_votes} other options in the poll.","_1":"You removed your vote for \\"{poll_option}\\" and {num_other_removed_votes} other option in the poll."}',
              [
                s._plural(g),
                s._param("poll_option", e[0]),
                s._param("num_other_removed_votes", g),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_REMOVED_MULTIPLE_POLL_VOTES: {
          var h = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"{participant_name} removed their vote for \\"{poll_option}\\" and {num_other_removed_votes} other options in the poll.","_1":"{participant_name} removed their vote for \\"{poll_option}\\" and {num_other_removed_votes} other option in the poll."}',
              [
                s._plural(h),
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
                s._param("num_other_removed_votes", h),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_REMOVED_POLL_VOTE:
          return s
            ._(
              /*BTDS*/ 'You removed your vote for "{poll_option}" in the poll.',
              [s._param("poll_option", e[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_REMOVED_POLL_VOTE:
          return s
            ._(
              /*BTDS*/ '{participant_name} removed their vote for "{poll_option}" in the poll.',
              [
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_MIXED_POLL_UPDATE:
          return s
            ._(/*BTDS*/ "{participant_name}'s poll has multiple updates.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_MIXED_POLL_UPDATE:
          return s._(/*BTDS*/ "Your poll has multiple updates.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CHANGED_POLL_VOTE:
          return s
            ._(
              /*BTDS*/ 'You changed your vote to "{poll_option}" in the poll.',
              [s._param("poll_option", e[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CHANGED_POLL_VOTE:
          return s
            ._(
              /*BTDS*/ '{participant_name} changed their vote to "{poll_option}" in the poll.',
              [
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
              ],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CHANGED_MULTIPLE_POLL_VOTES: {
          var y = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"You changed your vote to \\"{poll_option}\\" and {num_other_changed_votes} other options in the poll.","_1":"You changed your vote to \\"{poll_option}\\" and {num_other_changed_votes} other option in the poll."}',
              [
                s._plural(y),
                s._param("poll_option", e[0]),
                s._param("num_other_changed_votes", y),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CHANGED_MULTIPLE_POLL_VOTES: {
          var C = parseInt(e[1], 10) - 1;
          return s
            ._(
              /*BTDS*/ '_j{"*":"{participant_name} changed their vote to \\"{poll_option}\\" and {num_other_changed_votes} other options in the poll.","_1":"{participant_name} changed their vote to \\"{poll_option}\\" and {num_other_changed_votes} other option in the poll."}',
              [
                s._plural(C),
                s._param("participant_name", t[0]),
                s._param("poll_option", e[0]),
                s._param("num_other_changed_votes", C),
              ],
            )
            .toString();
        }
        case o("MAWLocalizationType").LOCALIZATION_TYPE.POLL_UNSENT_UPDATE:
          return s._(/*BTDS*/ "A poll has been unsent.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CUSTOMIZE_PHOTO:
          return s
            ._(/*BTDS*/ "{participant_name} changed the group photo.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_PINNED_MESSAGE:
          return s
            ._(/*BTDS*/ "{participant_name} pinned a message.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_UNPINNED_MESSAGE:
          return s
            ._(/*BTDS*/ "{participant_name} unpinned a message.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CUSTOMIZE_CURRENT_USER_NICKNAME:
          return s
            ._(/*BTDS*/ "{participant_name} set your nickname to {nickname}.", [
              s._param("participant_name", t[0]),
              s._param("nickname", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SET_OWN_NICKNAME:
          return s
            ._(/*BTDS*/ "You set your nickname to {nickname}.", [
              s._param("nickname", e[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CLEAR_OWN_NICKNAME:
          return s._(/*BTDS*/ "You cleared your nickname.").toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_CLEAR_PARTICIPANT_NICKNAME:
          return s
            ._(/*BTDS*/ "You cleared the nickname for {participant_name}.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SET_OWN_NICKNAME:
          return s
            ._(
              /*BTDS*/ "{participant_name} set their own nickname to {nickname}.",
              [s._param("participant_name", t[0]), s._param("nickname", e[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CLEAR_OWN_NICKNAME:
          return s
            ._(/*BTDS*/ "{participant_name} cleared their own nickname.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_CLEAR_CURRENT_USER_NICKNAME:
          return s
            ._(/*BTDS*/ "{participant_name} cleared your nickname.", [
              s._param("participant_name", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SET_ADD_MODE_ADMIN_ONLY:
          return s
            ._(/*BTDS*/ "You changed who can add people to admins only.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SET_ADD_MODE_ALL_MEMBERS:
          return s
            ._(/*BTDS*/ "You changed who can add people to all members.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SET_ADD_MODE_ADMIN_ONLY:
          return s
            ._(
              /*BTDS*/ "{participant_name} changed who can add people to admins only.",
              [s._param("participant_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SET_ADD_MODE_ALL_MEMBERS:
          return s
            ._(
              /*BTDS*/ "{participant_name} changed who can add people to all members.",
              [s._param("participant_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .SERVER_SET_ADD_MODE_ADMIN_ONLY:
          return s
            ._(
              /*BTDS*/ "A chat admin changed who can add people to all members.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .SERVER_SET_ADD_MODE_ALL_MEMBERS:
          return s
            ._(
              /*BTDS*/ "A chat admin changed who can add people to admins only.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_WITH_OTHER_USER_NAME:
          return s
            ._(/*BTDS*/ "Your other chat with {user} was archived.", [
              s._param("user", t[0]),
            ])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_SELF_THREAD:
          return s
            ._(/*BTDS*/ "Your other chat with yourself was archived.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_OTHER_USER_NAME_UNKNOWN:
          return s
            ._(/*BTDS*/ "Your other chat with this person was archived.")
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_BUMPED_OWN_MESSAGE:
          return r("getMAWLocalizedBumpMsgReplySnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_BUMPED_OWN_MESSAGE,
            null,
            null,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_BUMPED_MESSAGE:
          return r("getMAWLocalizedBumpMsgReplySnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_BUMPED_MESSAGE,
            null,
            t[0],
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_BUMPED_CURRENT_USER_MESSAGE:
          return r("getMAWLocalizedBumpMsgReplySnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_BUMPED_CURRENT_USER_MESSAGE,
            t[0],
            null,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_BUMPED_OWN_MESSAGE:
          return r("getMAWLocalizedBumpMsgReplySnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_BUMPED_OWN_MESSAGE,
            t[0],
            null,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_BUMPED_PARTICIPANT_MESSAGE:
          return r("getMAWLocalizedBumpMsgReplySnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_BUMPED_PARTICIPANT_MESSAGE,
            t[0],
            t[1],
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .USER_SEND_UNAVAILABLE_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .USER_SEND_UNAVAILABLE_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .USER_SEND_ENCRYPTED_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .USER_SEND_ENCRYPTED_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_LOCATION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_LOCATION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_LOCATION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_LOCATION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_POLL_CREATION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_POLL_CREATION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_POLL_CREATION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_POLL_CREATION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_STORY_MENTION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_STORY_MENTION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_STORY_MENTION_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_STORY_MENTION_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_MEMORIES_SHARE:
          return o("MAWMemoriesShareXMASnippetFbt")
            .getCurrentUserSendMemoriesShareSnippetFbt()
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_MEMORIES_SHARE:
          return o("MAWMemoriesShareXMASnippetFbt")
            .getParticipantSendMemoriesShareSnippetFbt(t[0])
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE.RTC_XMA_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE.RTC_XMA_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .META_AI_SEND_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .META_AI_SEND_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_BUMP_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_BUMP_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_BUMP_MESSAGE:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_BUMP_MESSAGE,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK:
          return r("getMAWLocalizedFallbackMsgSnippet")(
            o("MAWLocalizationType").LOCALIZATION_TYPE
              .CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK,
          ).toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_LIMIT_SHARING_DISABLED:
          return s
            ._(
              /*BTDS*/ "You turned on message sharing permissions for this chat. Everyone in this chat can now share messages with Meta AI or auto-save photos.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .CURRENT_USER_LIMIT_SHARING_ENABLED:
          return s
            ._(
              /*BTDS*/ "You turned off message sharing permissions for this chat.",
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_LIMIT_SHARING_DISABLED:
          return s
            ._(
              /*BTDS*/ "{participant_name} turned on message sharing permissions for this chat. Everyone in this chat can now share messages with Meta AI or auto-save photos.",
              [s._param("participant_name", t[0])],
            )
            .toString();
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_LIMIT_SHARING_ENABLED:
          return s
            ._(
              /*BTDS*/ "{participant_name} turned off message sharing permissions for this chat.",
              [s._param("participant_name", t[0])],
            )
            .toString();
        default:
          return "";
      }
    }
    l.buildLocalizedString = e;
  },
  226,
);
