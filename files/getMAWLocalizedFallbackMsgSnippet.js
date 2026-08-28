__d(
  "getMAWLocalizedFallbackMsgSnippet",
  ["fbt", "FBLogger"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case "userSendEncryptedMessage":
          return s._(
            /*BTDS*/ "Waiting for this message. This might take a while.",
          );
        case "currentUserSendUnrenderableMessage":
          return s._(
            /*BTDS*/ "You sent a message but this browser can't show it.",
          );
        case "participantSendUnrenderableMessage":
          return s._(
            /*BTDS*/ "You received a message but this browser can't show it.",
          );
        case "currentUserSendLiveLocationFallback":
          return s._(
            /*BTDS*/ "You sent a live location. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendLocationFallback":
          return s._(
            /*BTDS*/ "You sent a pinned location. Use the Messenger mobile app to see it.",
          );
        case "participantSendLiveLocation":
          return s._(
            /*BTDS*/ "You received a live location. Use the Messenger mobile app to see it.",
          );
        case "participantSendLocation":
          return s._(
            /*BTDS*/ "You received a pinned location. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendPollCreationFallback":
          return s._(
            /*BTDS*/ "You sent a poll. Use the Messenger mobile app to see it.",
          );
        case "participantSendPollCreation":
          return s._(
            /*BTDS*/ "You received a poll. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendContactShareFallback":
          return s._(
            /*BTDS*/ "You sent a contact card. Use the Messenger mobile app to see it.",
          );
        case "participantSendContactShareFallback":
          return s._(
            /*BTDS*/ "You received a contact card. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendStoryMentionFallback":
          return s._(
            /*BTDS*/ "You sent a story mention. Use the Messenger mobile app to see it.",
          );
        case "participantSendStoryMentionFallback":
          return s._(
            /*BTDS*/ "You received a story mention. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendPostMentionFallback":
          return s._(
            /*BTDS*/ "You sent a post mention. Use the Messenger mobile app to see it.",
          );
        case "participantSendPostMentionFallback":
          return s._(
            /*BTDS*/ "You received a post mention. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendNoteMentionFallback":
          return s._(
            /*BTDS*/ "You mentioned someone in your note. Use the Messenger mobile app to see it.",
          );
        case "participantSendNoteMentionFallback":
          return s._(
            /*BTDS*/ "Someone mentioned you in their note. Use the Messenger mobile app to see it.",
          );
        case "messengerMemoryEncryptedMessageFallback":
          return s._(
            /*BTDS*/ "To see this memory, open the Messenger app on your phone.",
          );
        case "metaAISendMessageFallback":
          return s._(
            /*BTDS*/ "You received a message from Meta AI. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendBumpMessageFallback":
          return s._(
            /*BTDS*/ "You sent a bumped message. Use the Messenger mobile app to see it.",
          );
        case "participantSendBumpMessageFallback":
          return s._(
            /*BTDS*/ "You received a bumped message. Use the Messenger mobile app to see it.",
          );
        case "participantSendStickerReceiverFetchMessageFallback":
          return s._(
            /*BTDS*/ "You received a sticker. Use the Messenger mobile app to see it.",
          );
        case "currentUserSendStickerReceiverFetchMessageFallback":
          return s._(
            /*BTDS*/ "You sent a sticker. Use the Messenger mobile app to see it.",
          );
        case "userSendUnavailableMessage":
          return s._(
            /*BTDS*/ "Message sent before this device was added to this conversation. This message cannot be delivered.",
          );
        case "participantSendBumpMessageOriginalUnavailable":
          return s._(/*BTDS*/ "Message unavailable.");
        case "unavailableStory":
          return s._(/*BTDS*/ "Story unavailable");
        case "unavailableStatus":
          return s._(/*BTDS*/ "Status unavailable");
        case "viewOncePhotoMessageFallback":
          return s._(
            /*BTDS*/ "This photo can only be viewed once. Use the mobile app to view.",
          );
        case "viewOnceVideoMessageFallback":
          return s._(
            /*BTDS*/ "This video can only be viewed once. Use the mobile app to view.",
          );
        case "rtcXMAMessageFallback":
          return s._(
            /*BTDS*/ "To see this call notification message, open the Messenger app on your phone.",
          );
        default:
          return (
            r("FBLogger")("messenger_web").mustfix(
              "unexpected content fallback type %s",
              e,
            ),
            ""
          );
      }
    }
    l.default = e;
  },
  226,
);
