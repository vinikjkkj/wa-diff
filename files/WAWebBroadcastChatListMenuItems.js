__d(
  "WAWebBroadcastChatListMenuItems",
  [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizGatingUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatCellDebugMenuItems.react",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebListsGatingUtils",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.audienceId;
      return (
        u(
          function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.chatListContextMenuOpened(t);
          },
          [t],
        ),
        null
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.cellRef,
        n = e.chat,
        a = e.multiSelection,
        i = e.onStartMultiSelect,
        l = e.searchQuery,
        u = e.selectableState,
        d = o("WAWebWidToJid").widToBroadcastJid(n.id),
        m = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoButtonClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
            d,
          ),
            o("WAWebCmd")
              .Cmd.openChatBottom({ chat: n })
              .then(function () {
                o("WAWebCmd").Cmd.chatInfoDrawer(n);
              }));
        },
        p = o("WAWebListsGatingUtils").isListsEnabled(),
        _ = [
          s.jsx(c, { audienceId: d }, "logger"),
          s.jsx(
            r("WDSMenuItem.react"),
            {
              testid: void 0,
              onPress: m,
              Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getBroadcastAudienceInfoLabel(),
            },
            "info",
          ),
          s.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chat: n },
            "Archive",
          ),
          s.jsx(r("WAWebChatContextMenuItemMute.react"), { chat: n }, "Mute"),
          s.jsx(
            r("WAWebChatContextMenuItemPin.react"),
            { chat: n, cellRef: t },
            "Pin",
          ),
        ],
        f = function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.labelChatClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
            d,
          );
        },
        g = function () {
          (f(),
            o(
              "WAWebChatContextMenuItemEditLabel.react",
            ).handleLabelMenuItemClick({
              chat: n,
              multiSelection: a,
              onStartMultiSelect: i,
              searchQuery: l,
              selectableState: u,
            }));
        };
      return (
        o("WAWebBizGatingUtils").canEditLabelAssociation() &&
          !p &&
          _.push(
            s.jsx(
              o("WAWebChatContextMenuItemEditLabel.react")
                .WAWebChatContextMenuItemEditLabel,
              {
                chat: n,
                multiSelection: a,
                onClickCallback: f,
                onStartMultiSelect: i != null ? i : void 0,
                searchQuery: l != null ? l : void 0,
                selectableState: u,
              },
            ),
          ),
        p &&
          _.push(
            s.jsx(r("WAWebChatContextMenuItemEditList.react"), {
              chat: n,
              displayContext: "chat-list",
              onSMBLabelMenuItemClick: g,
            }),
          ),
        _.push(
          s.jsx(
            r("WAWebChatContextMenuItemMarkUnread.react"),
            { chat: n },
            "MarkUnread",
          ),
        ),
        _.push(s.jsx(r("WAWebDropdownItemSeparator.react"), {})),
        _.push(
          s.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chat: n },
            "Delete",
          ),
        ),
        _.push.apply(
          _,
          o("WAWebChatCellDebugMenuItems.react").getWAWebChatCellDebugMenuItems(
            n,
          ),
        ),
        _
      );
    }
    l.getBroadcastChatListMenuItems = d;
  },
  98,
);
