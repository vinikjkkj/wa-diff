__d(
  "WAWebNotificationBackend",
  [
    "Promise",
    "WAWebAiHandoffNotification",
    "WAWebAppScreenTypes",
    "WAWebCallAcceptedElsewhereNotification",
    "WAWebCallLinkJoinedNotification",
    "WAWebCommentNotification",
    "WAWebMsgGetters",
    "WAWebMsgNotification",
    "WAWebNotificationController",
    "WAWebNotificationsDeviceSwitchNotification",
    "WAWebNotificationsReactionNotification",
    "WAWebNotificationsStatusReactionNotification",
    "WAWebNotificationsTestNotification",
    "WAWebPollsVoteNotification",
    "WAWebStatusNotification",
    "WAWebVoiceChatWaveNotification",
    "WAWebWaitingRoomNotification",
    "cr:17638",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:17638")) != null ? e : {},
      c = u.isWindowsBackgroundRun;
    function d(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebMsgNotification").WAMsgNotification)({ msg: e }),
      );
    }
    function m(e) {
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
    function p(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebCommentNotification").WACommentNotification)({
          commentMsg: e,
        }),
      );
    }
    function _(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.closeOrCancelNotification(
        "comment:" + e.toString(),
      );
    }
    function f(e) {
      var t = new (o("WAWebPollsVoteNotification").PollVoteNotification)({
          creationMsg: e,
        }),
        r = o(
          "WAWebNotificationController",
        ).WANotificationController.getNotification(t.buildKey());
      return r instanceof
        o("WAWebPollsVoteNotification").PollVoteNotification &&
        r.bodyText === t.bodyText
        ? (s || (s = n("Promise"))).resolve()
        : o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(t);
    }
    function g(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebNotificationsDeviceSwitchNotification",
        ).WADeviceSwitchNotification)(e),
      );
    }
    function h(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebNotificationsTestNotification").WATestNotification)({
          onClick: e,
        }),
      );
    }
    function y(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebCallAcceptedElsewhereNotification",
        ).WACallAcceptedElsewhereNotification)(e),
      );
    }
    function C(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebCallLinkJoinedNotification").WACallLinkJoinedNotification)(
          e,
        ),
      );
    }
    function b(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebWaitingRoomNotification").WAWaitingRoomNotification)(e),
      );
    }
    function v(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebVoiceChatWaveNotification").WAVoiceChatWaveNotification)(
          e,
        ),
      );
    }
    function S(e) {
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
    var R = new Set([
      o("WAWebAppScreenTypes").AppScreen.STARTUP,
      o("WAWebAppScreenTypes").AppScreen.SYNCING,
      o("WAWebAppScreenTypes").AppScreen.MAIN,
    ]);
    function L(e) {
      ((c == null ? void 0 : c()) === !0 && R.has(e)) ||
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelAllNotifications();
    }
    function E(e) {
      o(
        "WAWebNotificationController",
      ).WANotificationController.closeOrCancelNotificationsForChat(e);
    }
    function k(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o("WAWebStatusNotification").WAStatusNotification)({ msg: e }),
      );
    }
    function I(e) {
      o("WAWebNotificationController").WANotificationController.setAppContext(
        e,
      );
    }
    ((l.showMsgNotification = d),
      (l.showReactionNotification = m),
      (l.showCommentNotification = p),
      (l.removeCommentNotification = _),
      (l.showPollVoteNotification = f),
      (l.showDeviceSwitchNotification = g),
      (l.showTestNotification = h),
      (l.showCallAcceptedElsewhereNotification = y),
      (l.showCallLinkJoinedNotification = C),
      (l.showWaitingRoomNotification = b),
      (l.showVoiceChatWaveNotification = v),
      (l.showAiHandoffNotification = S),
      (l.shutdownAsNeeded = L),
      (l.closeNotifications = E),
      (l.showStatusNotification = k),
      (l.setAppContext = I));
  },
  98,
);
