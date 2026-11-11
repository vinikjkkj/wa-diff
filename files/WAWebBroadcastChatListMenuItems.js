__d(
  "WAWebBroadcastChatListMenuItems",
  [
    "WALogger",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatCellDebugMenuItems.react",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebGetMaybeChatById",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSIconIcInfo.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.audienceId,
        r,
        a;
      return (
        t[0] !== n
          ? ((r = function () {
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.chatListContextMenuOpened(n);
            }),
            (a = [n]),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : ((r = t[1]), (a = t[2])),
        d(r, a),
        null
      );
    }
    function p(t) {
      var n = t.cellRef,
        a = t.chatId,
        i = t.groupMetadata,
        l = t.isCAG,
        u = t.kind,
        d = t.multiSelection,
        p = t.onStartMultiSelect,
        _ = t.searchQuery,
        f = t.selectableState,
        g = o("WAWebWidToJid").widToBroadcastJid(a),
        h = function () {
          var t = o("WAWebGetMaybeChatById").getMaybeChatById(a);
          if (t == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast-chat-list-menu] audience info skipped, chat left the collection",
                ])),
            );
            return;
          }
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoButtonClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
            g,
          ),
            o("WAWebCmd")
              .Cmd.openChatBottom({
                chat: t,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .Chatlist,
              })
              .then(function () {
                o("WAWebCmd").Cmd.chatInfoDrawer(t);
              }));
        },
        y = [
          c.jsx(m, { audienceId: g }, "logger"),
          c.jsx(
            r("WDSMenuItem.react"),
            {
              testid: "mi-broadcast-info",
              onPress: h,
              Icon: r("WDSIconIcInfo.react"),
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getBroadcastAudienceInfoLabel(),
            },
            "info",
          ),
          c.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chatId: a },
            "Archive",
          ),
          c.jsx(r("WAWebChatContextMenuItemMute.react"), { chatId: a }, "Mute"),
          c.jsx(
            r("WAWebChatContextMenuItemPin.react"),
            { chatId: a, cellRef: n },
            "Pin",
          ),
        ],
        C = function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.labelChatClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
            g,
          );
        },
        b = function () {
          var e = o("WAWebGetMaybeChatById").getMaybeChatById(a);
          if (e == null) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast-chat-list-menu] label chat skipped, chat left the collection",
                ])),
            );
            return;
          }
          (C(),
            o(
              "WAWebChatContextMenuItemEditLabel.react",
            ).handleLabelMenuItemClick({
              chat: e,
              multiSelection: d,
              onStartMultiSelect: p,
              searchQuery: _,
              selectableState: f,
            }));
        };
      return (
        y.push(
          c.jsx(r("WAWebChatContextMenuItemEditList.react"), {
            chatId: a,
            displayContext: "chat-list",
            onSMBLabelMenuItemClick: b,
          }),
        ),
        y.push(
          c.jsx(
            r("WAWebChatContextMenuItemMarkUnread.react"),
            { chatId: a },
            "MarkUnread",
          ),
        ),
        y.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" })),
        y.push(
          c.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chatId: a },
            "Delete",
          ),
        ),
        y.push.apply(
          y,
          o(
            "WAWebChatCellDebugMenuItems.react",
          ).getWAWebChatCellDebugMenuItemsFor({
            chatId: a,
            groupMetadata: i,
            isCAG: l,
            kind: u,
          }),
        ),
        y
      );
    }
    l.getBroadcastChatListMenuItems = p;
  },
  98,
);
