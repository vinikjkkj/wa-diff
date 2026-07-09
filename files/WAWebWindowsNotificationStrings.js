__d(
  "WAWebWindowsNotificationStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Message");
    }
    function u(e) {
      if ((e === void 0 && (e = 1), e < 2)) return null;
      var t = "\u2709  ";
      return s._(
        /*BTDS*/ '_j{"*":"{unread-msg-icon}{unreadMessagesCount} unread messages","_1":"{unread-msg-icon}1 unread message"}',
        [s._plural(e, "unreadMessagesCount"), s._param("unread-msg-icon", t)],
      );
    }
    function c() {
      return s._(/*BTDS*/ "Show notification banner");
    }
    ((l.getNotificationBodyForPreviewOff = e),
      (l.getMessageNotificationFooter = u),
      (l.showNotificationBannerTitle = c));
  },
  226,
);
