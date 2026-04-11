__d(
  "WAWebWrapperMessageDropdownMenuReactionsTray.react",
  [
    "WAWebChatGetters",
    "WAWebDropdown.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebPrepareMessageSendingAction",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsPanel.react",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayContainer.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WDSGlobalContext",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = e.anchor,
        n = e.isSentByMe,
        a = e.isWideDisplay,
        i = e.msg,
        l = e.onMouseEnter,
        c = e.onMouseLeave,
        d = e.onMouseOver,
        m = e.onReactionPickerOpen,
        p = e.onReactionSent,
        _ = u(o("WDSGlobalContext").WDSContext),
        f = _.closeAllMenus,
        g = r("useWAWebStableCallback")(function (e) {
          o("WAWebReactionsUtils").canReactToMessage(i) &&
            (e !== o("WAWebSendReactionsTray.react").MORE_REACTIONS
              ? h(e)
              : (f(),
                self.setTimeout(function () {
                  y(i, t);
                }, 150)));
        }),
        h = function (t) {
          (o(
            "WAWebReactionUserJourneyLogger",
          ).ReactionUserJourneyLogger.reactionSelect(t),
            o("WAWebSendReactionMsgAction")
              .sendReactionToMsg(i, t)
              .catch(function (e) {})
              .finally(function () {
                (p(), f());
              }));
        },
        y = r("useWAWebStableCallback")(function (e, i) {
          o("WAWebReactionsUtils").canReactToMessage(e) &&
            m({
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX:
                n && !a
                  ? o("WAWebDropdown.react").DirX.LEFT
                  : o("WAWebDropdown.react").DirX.RIGHT,
              type: o("WAWebDropdown.react").MenuType.ReactionPicker,
              menu: s.jsx(r("WAWebReactionsPanel.react"), {
                msgId: e.id.toString(),
                onSelection: h,
              }),
              flipOnRTL: !0,
              anchor: t,
            });
        });
      return !o("WAWebReactionsUtils").isContextMenuReactiondEnabled() ||
        !o("WAWebReactionsUtils").canReactToMessage(i)
        ? null
        : (!o("WAWebFrontendChatGetters").getIsCAG(
            o("WAWebFrontendMsgGetters").getChat(i),
          ) &&
            !o("WAWebChatGetters").getIsNewsletter(
              o("WAWebFrontendMsgGetters").getChat(i),
            ) &&
            o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(
              o("WAWebFrontendMsgGetters").getChat(i),
            ),
          s.jsxs(s.Fragment, {
            children: [
              s.jsx(
                o("WAWebSendReactionsTrayContainer.react")
                  .SendReactionsTrayContainer,
                {
                  isInlineMode: !0,
                  selectedCallback: g,
                  msg: i,
                  onMouseEnter: l,
                  onMouseOver: c,
                  onMouseLeave: d,
                  userJourneyEntryPoint: o(
                    "WAWebWamEnumReactionUserJourneyEntryPoint",
                  ).REACTION_USER_JOURNEY_ENTRY_POINT
                    .MACOS_MESSAGE_MENU_ITEM_REACTION,
                },
              ),
              s.jsx(r("WAWebDropdownItemSeparator.react"), {}),
            ],
          }));
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
