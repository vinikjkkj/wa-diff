__d(
  "WAWebThreadLoggingCoreConsumer",
  [
    "Promise",
    "WALogger",
    "WAWebGroupType",
    "WAWebThreadInteractionDataCoreConsumerWamEvent",
    "WAWebThreadLoggingFalco",
    "WAWebWamEnumChatMutedType",
    "WamThreadInteractionDataCoreConsumerFalcoEvent",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [];
          try {
            (t.forEach(function (e) {
              if (a) {
                i.push(d(e));
                return;
              }
              var t = new (o(
                "WAWebThreadInteractionDataCoreConsumerWamEvent",
              ).ThreadInteractionDataCoreConsumerWamEvent)(m(e));
              t.commit();
            }),
              yield (s || (s = n("Promise"))).all(i));
          } catch (t) {
            var l = t instanceof Error ? t : r("err")(String(t));
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ctlv2: error uploading Core Consumer WAM event",
                  ])),
              )
              .catching(l)
              .sendLogs("thread-logging-core-consumer-upload-failure");
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = m(e);
      return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(
        r("WamThreadInteractionDataCoreConsumerFalcoEvent"),
        function () {
          return {
            thread_ds: t.threadDs,
            thread_id: t.threadId,
            messages_sent: t.messagesSent,
            messages_received: t.messagesReceived,
            messages_read: t.messagesRead,
            messages_unread: t.messagesUnread,
            is_message_yourself: t.isMessageYourself,
            thread_type: t.threadType,
            chat_type_ind: t.chatTypeInd,
            is_a_group: t.isAGroup,
            is_a_contact: t.isAContact,
            group_size: t.groupSize,
            type_of_group: t.typeOfGroup,
            is_archived: t.isArchived,
            is_pinned: t.isPinned,
            chat_muted: t.chatMuted,
            is_pnh_enabled_chat: t.isPnhEnabledChat,
            group_status_likes_others_to_others:
              t.groupStatusLikesOthersToOthers,
            group_status_likes_others_to_own: t.groupStatusLikesOthersToOwn,
            group_status_replies_others_to_others:
              t.groupStatusRepliesOthersToOthers,
            group_status_replies_others_to_own: t.groupStatusRepliesOthersToOwn,
            group_status_replies_own_to_others: t.groupStatusRepliesOwnToOthers,
            group_status_replies_own_to_own: t.groupStatusRepliesOwnToOwn,
            has_username: t.hasUsername,
            has_username_pin: t.hasUsernamePin,
            opposite_visible_identification: t.oppositeVisibleIdentification,
            shares_common_group: t.sharesCommonGroup,
            is_username_thread: t.isUsernameThread,
            is_username_thread_at_creation: t.isUsernameThreadAtCreation,
            has_replied_1_on_1: t.hasReplied1On1,
            opposite_party_has_profile_photo: t.oppositePartyHasProfilePhoto,
            reactions_sent: t.reactionsSent,
            reactions_received: t.reactionsReceived,
            status_reactions_sent: t.statusReactionsSent,
            status_reactions_received: t.statusReactionsReceived,
            forward_messages_sent: t.forwardMessagesSent,
            forward_messages_received: t.forwardMessagesReceived,
            edited_msgs_sent: t.editedMsgsSent,
            view_once_messages_sent: t.viewOnceMessagesSent,
            view_once_messages_received: t.viewOnceMessagesReceived,
            view_once_messages_opened: t.viewOnceMessagesOpened,
            comments_received: t.commentsReceived,
            event_creation_messages_sent: t.eventCreationMessagesSent,
            event_creation_messages_received: t.eventCreationMessagesReceived,
            event_response_messages_sent: t.eventResponseMessagesSent,
            event_response_messages_received: t.eventResponseMessagesReceived,
            profile_views: t.profileViews,
            profile_replies: t.profileReplies,
            status_views: t.statusViews,
            status_replies: t.statusReplies,
            group_membership_replies: t.groupMembershipReplies,
            group_private_replies: t.groupPrivateReplies,
            chat_overflow_clicks: t.chatOverflowClicks,
            replies_sent: t.repliesSent,
            after_read_duration: t.afterReadDuration,
            after_read_messages_sent: t.afterReadMessagesSent,
            after_read_messages_received: t.afterReadMessagesReceived,
            after_read_messages_expired: t.afterReadMessagesExpired,
            after_read_messages_unread_expired:
              t.afterReadMessagesUnreadExpired,
            after_read_turned_on: t.afterReadTurnedOn,
            after_read_turned_off: t.afterReadTurnedOff,
          };
        },
      );
    }
    function m(e) {
      var t,
        n = e.event,
        r = e.threadDs,
        a = e.threadId,
        i = n.contactInfo;
      return {
        threadDs: r,
        threadId: a,
        messagesSent: n.msgsSent,
        messagesReceived: n.msgsReceived,
        messagesRead: n.msgsRead,
        messagesUnread: n.messagesUnread,
        isMessageYourself: n.isMessageYourself,
        threadType: n.threadType,
        chatTypeInd: n.chatTypeInd,
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
        groupStatusLikesOthersToOthers: n.eventGroupStatusLikeOthersToOthers,
        groupStatusLikesOthersToOwn: n.eventGroupStatusLikeOthersToOwn,
        groupStatusRepliesOthersToOthers: n.eventGroupStatusReplyOthersToOthers,
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
        hasReplied1On1: n.hasReplied1On1,
        oppositePartyHasProfilePhoto: n.oppositePartyHasProfilePhoto,
        reactionsSent: n.reactionsSent,
        reactionsReceived: n.reactionsReceived,
        statusReactionsSent: n.statusReactionsSent,
        statusReactionsReceived: n.statusReactionsReceived,
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
        afterReadMessagesSent: n.afterReadMessagesSent,
        afterReadMessagesReceived: n.afterReadMessagesReceived,
        afterReadMessagesExpired: n.afterReadMessagesExpired,
        afterReadMessagesUnreadExpired: n.afterReadMessagesUnreadExpired,
        afterReadTurnedOn: n.afterReadTurnedOn ? !0 : void 0,
        afterReadTurnedOff: n.afterReadTurnedOff ? !0 : void 0,
      };
    }
    ((l.ThreadInteractionCoreConsumerWamTrigger = u),
      (l.logThreadInteractionCoreConsumerFalcoEvent = d));
  },
  98,
);
