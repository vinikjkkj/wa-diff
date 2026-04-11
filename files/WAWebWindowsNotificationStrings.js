__d(
  "WAWebWindowsNotificationStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Type a reply");
    }
    function u() {
      return s._(/*BTDS*/ "Send");
    }
    function c() {
      return s._(/*BTDS*/ "Message");
    }
    function d(e) {
      if ((e === void 0 && (e = 1), e < 2)) return null;
      var t = "\u2709  ";
      return s._(
        /*BTDS*/ '_j{"*":"{unread-msg-icon}{unreadMessagesCount} unread messages","_1":"{unread-msg-icon}1 unread message"}',
        [s._plural(e, "unreadMessagesCount"), s._param("unread-msg-icon", t)],
      );
    }
    function m() {
      return s._(/*BTDS*/ "Mute chat for 8 hours");
    }
    function p() {
      return s._(/*BTDS*/ "Mute chat for 1 week");
    }
    function _() {
      return s._(/*BTDS*/ "Mute notifications");
    }
    function f() {
      return s._(/*BTDS*/ "Disable notifications for all messages");
    }
    function g() {
      return s._(/*BTDS*/ "Show notification banner");
    }
    ((l.getNotificationReplyInputPlaceholder = e),
      (l.getNotificationReplyButtonContent = u),
      (l.getNotificationBodyForPreviewOff = c),
      (l.getMessageNotificationFooter = d),
      (l.getMute8HoursLabel = m),
      (l.getMuteOneWeekLabel = p),
      (l.getMuteNotificationsLabel = _),
      (l.getDisableNotificationsLabel = f),
      (l.showNotificationBannerTitle = g));
  },
  226,
);
