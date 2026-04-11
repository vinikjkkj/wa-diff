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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        a = e.cellRef,
        i = e.chat,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = !!(
                    e &&
                    n("cr:12224") != null &&
                    n("cr:12224").isPinnedChatsEnabled() &&
                    !(
                      n("cr:12224") != null &&
                      n("cr:12224").isPinnedChatsBenefitActive()
                    )
                  ),
                  l = o("WAWebChatPinBridge").getPinLimit(i.id),
                  c = o("WAWebChatGetters").getIsNewsletter(i)
                    ? r("WAWebNewsletterCollection")
                    : o("WAWebChatCollection").ChatCollection;
                !e ||
                (yield o("WAWebChatPinBridge").getNumConversationsPinned(
                  i.id,
                )) < l
                  ? o("WAWebCmd").Cmd.pinChat(
                      o("WAWebStateUtils").unproxy(i),
                      e,
                    )
                  : c.countWhere(d) >= l
                    ? (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                      t && n("cr:12385")
                        ? o("WAWebModalManager").ModalManager.openAlert(
                            u.jsx(n("cr:12385"), {}),
                          )
                        : o("WAWebModalManager").ModalManager.open(
                            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                              onOK: function () {
                                (o("WAWebModalManager").ModalManager.close(),
                                  a == null || a.focusOnContextMenuButton());
                              },
                              okText: r("WAWebFbtCommon")("OK"),
                              children: m.getPinLimitExceededText(i.id, l),
                            }),
                          ))
                    : (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                          title: m.getUnPinAllModalTitle(i.id, l),
                          onOK: function () {
                            (o("WAWebChatPinBridge").unpinAllConversations(
                              i.id,
                            ),
                              o("WAWebModalManager").ModalManager.close());
                          },
                          okText: s._(/*BTDS*/ "Unpin all"),
                          onCancel: o("WAWebModalManager").closeModalManager,
                          cancelText: s._(/*BTDS*/ "Cancel"),
                          children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                            children: m.getUnPinAllModalContent(i.id),
                          }),
                        }),
                      ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l;
      if (i.canPin()) {
        var p;
        return (
          t[3] !== i || t[4] !== c
            ? ((p = u.jsx(
                r("WAWebPinMenuItem.react"),
                { onPinOrUnpin: c, chat: i },
                "pin",
              )),
              (t[3] = i),
              (t[4] = c),
              (t[5] = p))
            : (p = t[5]),
          p
        );
      }
    }
    function d(e) {
      var t;
      return (
        o("WAWebFrontendChatGetters").getShouldAppearInList(e) &&
        ((t = e.pin) != null ? t : 0) > 0
      );
    }
    var m = {
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
