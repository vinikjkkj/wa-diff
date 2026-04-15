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
          var t,
            n = e.event,
            r = e.threadDs,
            a = e.threadId,
            i = n.contactInfo,
            l = {
              threadDs: r,
              threadId: a,
              messagesSent: n.msgsSent,
              messagesReceived: n.msgsReceived,
              messagesRead: n.msgsRead,
              messagesUnread: n.messagesUnread,
              isMessageYourself: n.isMessageYourself,
              isAGroup: i.isAGroup,
              isAContact: i.isAGroup ? void 0 : i.isAContact,
              groupSize: i.isAGroup ? i.groupSize : void 0,
              typeOfGroup:
                i.groupType != null
                  ? o("WAWebGroupType").groupTypeToWamEnum(i.groupType)
                  : void 0,
              isArchived: n.isArchived,
              isPinned: n.isPinned,
              chatMuted: n.isMuted
                ? o("WAWebWamEnumChatMutedType").CHAT_MUTED_TYPE
                    .MUTED_NO_NOTIFICATIONS
                : o("WAWebWamEnumChatMutedType").CHAT_MUTED_TYPE.NOT_MUTED,
              isPnhEnabledChat: n.isPnhEnabledChat,
              groupStatusLikesOthersToOthers:
                n.eventGroupStatusLikeOthersToOthers,
              groupStatusLikesOthersToOwn: n.eventGroupStatusLikeOthersToOwn,
              groupStatusRepliesOthersToOthers:
                n.eventGroupStatusReplyOthersToOthers,
              groupStatusRepliesOthersToOwn: n.eventGroupStatusReplyOthersToOwn,
              groupStatusRepliesOwnToOthers: n.eventGroupStatusReplyOwnToOthers,
              groupStatusRepliesOwnToOwn: n.eventGroupStatusReplyOwnToOwn,
              hasUsername: n.hasUsername,
              hasUsernamePin: n.hasUsernamePin,
              oppositeVisibleIdentification:
                n.oppositeVisibleIdentification != null
                  ? n.oppositeVisibleIdentification
                  : void 0,
              sharesCommonGroup: n.sharesCommonGroup,
              isUsernameThread: n.isUsernameThread,
              isUsernameThreadAtCreation: n.isUsernameThreadAtCreation,
              reactionsSent: n.reactionsSent,
              reactionsReceived: n.reactionsReceived,
              forwardMessagesSent: n.forwardMessagesSent,
              forwardMessagesReceived: n.forwardMessagesReceived,
              editedMsgsSent: n.editedMsgsSent,
              viewOnceMessagesSent: n.viewOnceMsgsSent,
              viewOnceMessagesReceived: n.viewOnceMsgsReceived,
              viewOnceMessagesOpened: n.viewOnceMessagesOpened,
              commentsReceived: n.commentsReceived,
              eventCreationMessagesSent: n.eventCreationMessagesSent,
              eventCreationMessagesReceived: n.eventCreationMessagesReceived,
              eventResponseMessagesSent: n.eventResponseMessagesSent,
              eventResponseMessagesReceived: n.eventResponseMessagesReceived,
              profileViews: n.profileViews,
              profileReplies: n.profileReplies,
              statusViews: n.statusViews,
              statusReplies: n.statusReplies,
              groupMembershipReplies: n.groupMembershipReplies,
              groupPrivateReplies: n.groupPrivateReplies,
              chatOverflowClicks: n.chatOverflowClicks,
              repliesSent: n.repliesSent,
              afterReadDuration: (t = n.afterReadDuration) != null ? t : void 0,
            },
            s = new (o(
              "WAWebThreadInteractionDataCoreConsumerWamEvent",
            ).ThreadInteractionDataCoreConsumerWamEvent)(l);
          s.commit();
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
