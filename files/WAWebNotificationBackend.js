__d(
  "WAWebNotificationBackend",
  [
    "Promise",
    "WAWebAiHandoffNotification",
    "WAWebCallAcceptedElsewhereNotification",
    "WAWebCallLinkJoinedNotification",
    "WAWebCommentNotification",
    "WAWebMsgGetters",
    "WAWebMsgNotification",
    "WAWebNotificationController",
    "WAWebNotificationsDeviceSwitchNotification",
    "WAWebNotificationsReactionNotification",
    "WAWebNotificationsStatusReactionNotification",
    "WAWebPollsVoteNotification",
    "WAWebStatusNotification",
    "WAWebVoiceChatWaveNotification",
    "WAWebWaitingRoomNotification",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebMsgNotification").WAMsgNotification)({ msg: e }),
      );
    }
    function u(e) {
      return o("WAWebMsgGetters").getIsStatus(e)
        ? o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new (o(
              "WAWebNotificationsStatusReactionNotification",
            ).WAStatusReactionNotification)({ reactionMsg: e }),
          )
        : o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new (o(
              "WAWebNotificationsReactionNotification",
            ).WAReactionNotification)({ reactionMsg: e }),
          );
    }
    function c(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebCommentNotification").WACommentNotification)({
          commentMsg: e,
        }),
      );
    }
    function d(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.closeOrCancelNotification(
        "comment:" + e.toString(),
      );
    }
    function m(t) {
      var r = new (o("WAWebPollsVoteNotification").PollVoteNotification)({
          creationMsg: t,
        }),
        a = o(
          "WAWebNotificationController",
        ).WANotificationController.getNotification(r.buildKey());
      return a instanceof
        o("WAWebPollsVoteNotification").PollVoteNotification &&
        a.bodyText === r.bodyText
        ? (e || (e = n("Promise"))).resolve()
        : o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(r);
    }
    function p(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebNotificationsDeviceSwitchNotification",
        ).WADeviceSwitchNotification)(e),
      );
    }
    function _(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebCallAcceptedElsewhereNotification",
        ).WACallAcceptedElsewhereNotification)(e),
      );
    }
    function f(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebCallLinkJoinedNotification").WACallLinkJoinedNotification)(
          e,
        ),
      );
    }
    function g(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebWaitingRoomNotification").WAWaitingRoomNotification)(e),
      );
    }
    function h(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebVoiceChatWaveNotification").WAVoiceChatWaveNotification)(
          e,
        ),
      );
    }
    function y(e) {
      var t = new (o("WAWebAiHandoffNotification").AiHandoffNotification)({
        chat: e,
      });
      return (
        t.logDelivered(),
        o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(t)
      );
    }
    function C() {
      o(
        "WAWebNotificationController",
      ).WANotificationController.closeOrCancelAllNotifications();
    }
    function b(e) {
      o(
        "WAWebNotificationController",
      ).WANotificationController.closeOrCancelNotificationsForChat(e);
    }
    function v(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebStatusNotification").WAStatusNotification)({ msg: e }),
      );
    }
    function S(e) {
      o("WAWebNotificationController").WANotificationController.setAppContext(
        e,
      );
    }
    ((l.showMsgNotification = s),
      (l.showReactionNotification = u),
      (l.showCommentNotification = c),
      (l.removeCommentNotification = d),
      (l.showPollVoteNotification = m),
      (l.showDeviceSwitchNotification = p),
      (l.showCallAcceptedElsewhereNotification = _),
      (l.showCallLinkJoinedNotification = f),
      (l.showWaitingRoomNotification = g),
      (l.showVoiceChatWaveNotification = h),
      (l.showAiHandoffNotification = y),
      (l.shutdownAsNeeded = C),
      (l.closeNotifications = b),
      (l.showStatusNotification = v),
      (l.setAppContext = S));
  },
  98,
);
