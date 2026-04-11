__d(
  "WAWebNewsletterViewModeUIUtils",
  ["WAWebMessageAssociationUIUtils", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT);
      var n = o(
          "WAWebMessageAssociationUIUtils",
        ).getHiddenViewModeMessagesForChat(e, t),
        r = n
          .map(function (e) {
            return e.serverId;
          })
          .filter(Boolean);
      return new Set(r);
    }
    l.getHiddenMessageServerIdsForChat = e;
  },
  98,
);
