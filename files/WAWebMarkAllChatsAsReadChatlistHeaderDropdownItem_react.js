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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t = d,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = function (n) {
            (n == null || n.stopPropagation(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "mark-all-read",
                  },
                  title: s._(/*BTDS*/ "Mark all chats as read?"),
                  onOK: function () {
                    (o("WAWebModalManager").ModalManager.close(), t());
                  },
                  onCancel: o("WAWebModalManager").closeModalManager,
                }),
              ));
          }),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        var l = s._(/*BTDS*/ "Mark all as read");
        ((i = u.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconWdsIcChat.react"),
          title: l,
          onPress: a,
          testid: void 0,
        })),
          (e[1] = i));
      } else i = e[1];
      return i;
    }
    function d() {
      var e = o("WAWebChatCollection").ChatCollection.filter(p);
      e.forEach(m);
    }
    function m(e) {
      r("promiseDone")(o("WAWebUpdateUnreadChatAction").markUnread(e, !1, !1));
    }
    function p(e) {
      if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e)) return !1;
      var t = o("WAWebChatMessageSearch").matchFilter(e, {
          kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        }),
        n = e.archive;
      return t && !n;
    }
    l.default = c;
  },
  226,
);
