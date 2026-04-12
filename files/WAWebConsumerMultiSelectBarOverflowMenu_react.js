__d(
  "WAWebConsumerMultiSelectBarOverflowMenu.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatModel",
    "WAWebClearSelectedChatsDropdownItem.react",
    "WAWebCmd",
    "WAWebUpdateUnreadChatAction",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
    "WDSIconIcArchive.react",
    "WDSIconIcNotificationsFilled.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcUnarchive.react",
    "WDSIconIcUnread.react",
    "WDSIconWdsIcChat.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onComplete,
        n = e.selectedModels,
        a = e.unmutedChatCount,
        i = e.unreadChatCount,
        l = n.getSelected(),
        c = l.reduce(function (e, t) {
          return (t instanceof o("WAWebChatModel").Chat && e.push(t), e);
        }, []),
        d = function (n) {
          (c.forEach(function (e) {
            o("WAWebUpdateUnreadChatAction").markUnread(e, n, !1);
          }),
            o("WAWebWamChatActionEventsLogger").logChatActionEvent({
              chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint")
                .CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
              chatActionType: n
                ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNREAD
                : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.READ,
            }),
            t());
        },
        m = i !== 0,
        p = m
          ? s._(/*BTDS*/ '_j{"*":"Mark as read"}', [s._plural(c.length)])
          : s._(/*BTDS*/ '_j{"*":"Mark as unread"}', [s._plural(c.length)]),
        _ =
          "multi-select-bar-overflow-menu-item-mark-" + (m ? "read" : "unread"),
        f = function () {
          d(!m);
        },
        g = u.jsx(r("WDSMenuItem.react"), {
          onPress: f,
          Icon: r(m ? "WDSIconWdsIcChat.react" : "WDSIconIcUnread.react"),
          testid: void 0,
          title: p,
        }),
        h = a !== 0,
        y = function (n) {
          var e = function () {
            (o("WAWebWamChatActionEventsLogger").logChatActionEvent({
              chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint")
                .CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
              chatActionType: n
                ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.MUTE
                : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNMUTE,
            }),
              t());
          };
          o("WAWebCmd").Cmd.muteChatMultiselect(c, n, e);
        },
        C = h
          ? s._(/*BTDS*/ "Mute notifications")
          : s._(/*BTDS*/ "Unmute notifications"),
        b = "multi-select-bar-overflow-menu-item-" + (h ? "mute" : "unmute"),
        v = function () {
          y(h);
        },
        S = u.jsx(r("WDSMenuItem.react"), {
          Icon: r(
            h
              ? "WDSIconIcNotificationsFilled.react"
              : "WDSIconIcNotificationsOff.react",
          ),
          title: C,
          onPress: v,
          testid: void 0,
        }),
        R = c.some(function (e) {
          return !e.archive;
        }),
        L = function (n) {
          (c.forEach(function (e) {
            o("WAWebCmd").Cmd.archiveChat(e, n);
          }),
            o("WAWebWamChatActionEventsLogger").logChatActionEvent({
              chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint")
                .CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
              chatActionType: o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE
                .ARCHIVE,
            }),
            t());
        },
        E = R
          ? s._(/*BTDS*/ '_j{"*":"Archive chats","_1":"Archive chat"}', [
              s._plural(c.length),
            ])
          : s._(/*BTDS*/ '_j{"*":"Unarchive chats","_1":"Unarchive chat"}', [
              s._plural(c.length),
            ]),
        k =
          "multi-select-bar-overflow-menu-item-" +
          (R ? "archive" : "unarchive"),
        I = function () {
          L(R);
        },
        T = u.jsx(r("WDSMenuItem.react"), {
          Icon: r(R ? "WDSIconIcArchive.react" : "WDSIconIcUnarchive.react"),
          title: E,
          onPress: I,
          testid: void 0,
        }),
        D = o("WAWebABProps").getABPropConfigValue(
          "wa_web_clear_selected_chats_enabled",
        ),
        x = u.jsxs(u.Fragment, {
          children: [
            g,
            S,
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_feature_parity_small_wins",
            ) && T,
            D &&
              u.jsx(r("WAWebClearSelectedChatsDropdownItem.react"), {
                selectedModels: n,
                onComplete: t,
              }),
          ],
        });
      return u.jsx(r("WDSMenu.react"), { children: x });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
