__d(
  "WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebConfirmPopup.react",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebUpdateUnreadChatAction",
    "WDSIconWdsIcChat.react",
    "WDSMenuItem.react",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function () {
          var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
            if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e))
              return !1;
            var t = o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
              }),
              n = e.archive;
            return t && !n;
          });
          e.forEach(function (e) {
            var t = !1;
            r("promiseDone")(
              o("WAWebUpdateUnreadChatAction").markUnread(e, t, !1),
            );
          });
        },
        t = function (n) {
          (n == null || n.stopPropagation(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "mark-all-read",
                },
                title: s._(/*BTDS*/ "Mark all chats as read?"),
                onOK: function () {
                  (o("WAWebModalManager").ModalManager.close(), e());
                },
                onCancel: o("WAWebModalManager").closeModalManager,
              }),
            ));
        },
        n = s._(/*BTDS*/ "Mark all as read"),
        a = "mi-mark-all-as-read";
      return u.jsx(r("WDSMenuItem.react"), {
        Icon: r("WDSIconWdsIcChat.react"),
        title: n,
        onPress: t,
        testid: void 0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
