__d(
  "WAWebChatContextMenuItemPin.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatPinBridge",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebNewsletterCollection",
    "WAWebPinMenuItem.react",
    "WAWebPinnedChatsWamUtils",
    "WAWebStateUtils",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "cr:12224",
    "cr:12385",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.cellRef,
        a = e.chat;
      function i(e) {
        return l.apply(this, arguments);
      }
      function l() {
        return (
          (l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var i = !!(
                e &&
                n("cr:12224") != null &&
                n("cr:12224").isPinnedChatsEnabled() &&
                !(
                  n("cr:12224") != null &&
                  n("cr:12224").isPinnedChatsBenefitActive()
                )
              ),
              l = o("WAWebChatPinBridge").getPinLimit(a.id),
              c = o("WAWebChatGetters").getIsNewsletter(a)
                ? r("WAWebNewsletterCollection")
                : o("WAWebChatCollection").ChatCollection;
            !e ||
            (yield o("WAWebChatPinBridge").getNumConversationsPinned(a.id)) < l
              ? o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(a), e)
              : c.countWhere(function (e) {
                    var t;
                    return (
                      o("WAWebFrontendChatGetters").getShouldAppearInList(e) &&
                      ((t = e.pin) != null ? t : 0) > 0
                    );
                  }) >= l
                ? (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                  i && n("cr:12385")
                    ? o("WAWebModalManager").ModalManager.openAlert(
                        u.jsx(n("cr:12385"), {}),
                      )
                    : o("WAWebModalManager").ModalManager.open(
                        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                          onOK: function () {
                            (o("WAWebModalManager").ModalManager.close(),
                              t == null || t.focusOnContextMenuButton());
                          },
                          okText: r("WAWebFbtCommon")("OK"),
                          children: d.getPinLimitExceededText(a.id, l),
                        }),
                      ))
                : (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      title: d.getUnPinAllModalTitle(a.id, l),
                      onOK: function () {
                        (o("WAWebChatPinBridge").unpinAllConversations(a.id),
                          o("WAWebModalManager").ModalManager.close());
                      },
                      okText: s._(/*BTDS*/ "Unpin all"),
                      onCancel: o("WAWebModalManager").closeModalManager,
                      cancelText: s._(/*BTDS*/ "Cancel"),
                      children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                        children: d.getUnPinAllModalContent(a.id),
                      }),
                    }),
                  ));
          })),
          l.apply(this, arguments)
        );
      }
      if (a.canPin())
        return u.jsx(
          r("WAWebPinMenuItem.react"),
          { onPinOrUnpin: i, chat: a },
          "pin",
        );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      getPinLimitExceededText: function (t, n) {
        return t.isNewsletter()
          ? s._(
              /*BTDS*/ '_j{"*":"You can only pin up to {number} channels.","_1":"You can only pin up to 1 channel."}',
              [s._plural(n, "number")],
            )
          : s._(
              /*BTDS*/ '_j{"*":"You can only pin up to {number} chats.","_1":"You can only pin up to 1 chat."}',
              [s._plural(n, "number")],
            );
      },
      getUnPinAllModalTitle: function (t, n) {
        return t.isNewsletter()
          ? s._(
              /*BTDS*/ '_j{"*":"You can only pin up to {number} channels","_1":"You can only pin up to 1 channel"}',
              [s._plural(n, "number")],
            )
          : s._(
              /*BTDS*/ '_j{"*":"You can only pin up to {number} chats","_1":"You can only pin up to 1 chat"}',
              [s._plural(n, "number")],
            );
      },
      getUnPinAllModalContent: function (t) {
        return t.isNewsletter()
          ? s._(
              /*BTDS*/ "Some of your pinned channels can't be seen on this device. To pin a different channel, unpin all channels first.",
            )
          : s._(
              /*BTDS*/ "Some of your pinned chats can't be seen on this device. To pin a different chat, unpin all chats first.",
            );
      },
    };
    l.default = c;
  },
  226,
);
