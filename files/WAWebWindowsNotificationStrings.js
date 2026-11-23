__d(
  "WAWebWindowsNotificationStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u(e) {
      if ((e === void 0 && (e = 1), e < 2)) return null;
      var t = "\u2709  ";
      return s._(/*BTDS*/ "", [
        s._plural(e, "unreadMessagesCount"),
        s._param("unread-msg-icon", t),
      ]);
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    ((l.getNotificationBodyForPreviewOff = e),
      (l.getMessageNotificationFooter = u),
      (l.showNotificationBannerTitle = c));
  },
  226,
);
