__d(
  "WAWebNotificationBackend",
  [
    "Promise",
    "WAWebAiHandoffNotification",
    "WAWebCallAcceptedElsewhereNotification",
    "WAWebCallLinkJoinedNotification",
    "WAWebCommentNotification",
    "WAWebMsgGetters",
    "WAWebNotificationController",
    "WAWebNotificationsDeviceSwitchNotification",
    "WAWebNotificationsMsgNotification",
    "WAWebNotificationsNewsletterMilestoneNotification",
    "WAWebNotificationsReactionNotification",
    "WAWebNotificationsStatusReactionNotification",
    "WAWebPollsVoteNotification",
    "WAWebStatusNotification",
    "WAWebWaitingRoomNotification",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebNotificationsMsgNotification").WAMsgNotification)({
          msg: e,
        }),
      );
    }
    function u(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebNotificationsNewsletterMilestoneNotification",
        ).WANewsletterMilestoneNotification)(e),
      );
    }
    function c(e) {
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
    function d(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebCommentNotification").WACommentNotification)({
          commentMsg: e,
        }),
      );
    }
    function m(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.closeOrCancelNotification(
        "comment:" + e.toString(),
      );
    }
    function p(t) {
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
    function _(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebNotificationsDeviceSwitchNotification",
        ).WADeviceSwitchNotification)(e),
      );
    }
    function f(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebCallAcceptedElsewhereNotification",
        ).WACallAcceptedElsewhereNotification)(e),
      );
    }
    function g(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebCallLinkJoinedNotification").WACallLinkJoinedNotification)(
          e,
        ),
      );
    }
    function h(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebWaitingRoomNotification").WAWaitingRoomNotification)(e),
      );
    }
    function y(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebAiHandoffNotification").AiHandoffNotification)({
          chat: e,
        }),
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
      (l.showNewsletterMilestoneNotification = u),
      (l.showReactionNotification = c),
      (l.showCommentNotification = d),
      (l.removeCommentNotification = m),
      (l.showPollVoteNotification = p),
      (l.showDeviceSwitchNotification = _),
      (l.showCallAcceptedElsewhereNotification = f),
      (l.showCallLinkJoinedNotification = g),
      (l.showWaitingRoomNotification = h),
      (l.showAiHandoffNotification = y),
      (l.shutdownAsNeeded = C),
      (l.closeNotifications = b),
      (l.showStatusNotification = v),
      (l.setAppContext = S));
  },
  98,
);
