__d(
  "WAWebThreadLoggingCoreConsumer",
  [
    "WALogger",
    "WAWebGroupType",
    "WAWebThreadInteractionDataCoreConsumerWamEvent",
    "WAWebWamEnumChatMutedType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        t.forEach(function (e) {
          var t = e.event,
            n = e.threadDs,
            r = e.threadId,
            a = t.contactInfo,
            i = {
              threadDs: n,
              threadId: r,
              messagesSent: t.msgsSent,
              messagesReceived: t.msgsReceived,
              messagesRead: t.msgsRead,
              messagesUnread: t.messagesUnread,
              isMessageYourself: t.isMessageYourself,
              isAGroup: a.isAGroup,
              isAContact: a.isAGroup ? void 0 : a.isAContact,
              groupSize: a.isAGroup ? a.groupSize : void 0,
              typeOfGroup:
                a.groupType != null
                  ? o("WAWebGroupType").groupTypeToWamEnum(a.groupType)
                  : void 0,
              isArchived: t.isArchived,
              isPinned: t.isPinned,
              chatMuted: t.isMuted
                ? o("WAWebWamEnumChatMutedType").CHAT_MUTED_TYPE
                    .MUTED_NO_NOTIFICATIONS
                : o("WAWebWamEnumChatMutedType").CHAT_MUTED_TYPE.NOT_MUTED,
              isPnhEnabledChat: t.isPnhEnabledChat,
              groupStatusLikesOthersToOthers:
                t.eventGroupStatusLikeOthersToOthers,
              groupStatusLikesOthersToOwn: t.eventGroupStatusLikeOthersToOwn,
              groupStatusRepliesOthersToOthers:
                t.eventGroupStatusReplyOthersToOthers,
              groupStatusRepliesOthersToOwn: t.eventGroupStatusReplyOthersToOwn,
              groupStatusRepliesOwnToOthers: t.eventGroupStatusReplyOwnToOthers,
              groupStatusRepliesOwnToOwn: t.eventGroupStatusReplyOwnToOwn,
              hasUsername: t.hasUsername,
              hasUsernamePin: t.hasUsernamePin,
              oppositeVisibleIdentification:
                t.oppositeVisibleIdentification != null
                  ? t.oppositeVisibleIdentification
                  : void 0,
              sharesCommonGroup: t.sharesCommonGroup,
              isUsernameThread: t.isUsernameThread,
              isUsernameThreadAtCreation: t.isUsernameThreadAtCreation,
              reactionsSent: t.reactionsSent,
              reactionsReceived: t.reactionsReceived,
              forwardMessagesSent: t.forwardMessagesSent,
              forwardMessagesReceived: t.forwardMessagesReceived,
              editedMsgsSent: t.editedMsgsSent,
              viewOnceMessagesSent: t.viewOnceMsgsSent,
              viewOnceMessagesReceived: t.viewOnceMsgsReceived,
              viewOnceMessagesOpened: t.viewOnceMessagesOpened,
              commentsReceived: t.commentsReceived,
              eventCreationMessagesSent: t.eventCreationMessagesSent,
              eventCreationMessagesReceived: t.eventCreationMessagesReceived,
              eventResponseMessagesSent: t.eventResponseMessagesSent,
              eventResponseMessagesReceived: t.eventResponseMessagesReceived,
              profileViews: t.profileViews,
              profileReplies: t.profileReplies,
              statusViews: t.statusViews,
              statusReplies: t.statusReplies,
              groupMembershipReplies: t.groupMembershipReplies,
              groupPrivateReplies: t.groupPrivateReplies,
              chatOverflowClicks: t.chatOverflowClicks,
              repliesSent: t.repliesSent,
            },
            l = new (o(
              "WAWebThreadInteractionDataCoreConsumerWamEvent",
            ).ThreadInteractionDataCoreConsumerWamEvent)(i);
          l.commit();
        });
      } catch (t) {
        var n = t instanceof Error ? t : r("err")(String(t));
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ctlv2: error uploading Core Consumer WAM event",
              ])),
          )
          .catching(n)
          .sendLogs("thread-logging-core-consumer-upload-failure");
      }
    }
    l.ThreadInteractionCoreConsumerWamTrigger = s;
  },
  98,
);
