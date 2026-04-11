__d(
  "WAWebKeptDrawer.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebDisappearingMessageKeepInChatWamEvent",
    "WAWebDisplayType",
    "WAWebEmptyState.react",
    "WAWebKicNux.react",
    "WAWebMsgDrawer.react",
    "WAWebWamEnumKicActionNameType",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumTriggerType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.keptMsgs,
        u = a.onClose,
        m = o("WAWebKicNux.react").useKicNux(i),
        p = m[0],
        _ = m[1];
      (d(function () {
        p &&
          _(
            o("WAWebWamEnumTriggerType").TRIGGER_TYPE
              .KEPT_FOLDER_TAP_FIRST_TIME,
          );
      }, []),
        d(function () {
          var e = new (o(
            "WAWebDisappearingMessageKeepInChatWamEvent",
          ).DisappearingMessageKeepInChatWamEvent)({
            kicActionName: o("WAWebWamEnumKicActionNameType")
              .KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
            kicEntryPoint: o("WAWebWamEnumKicEntryPointType")
              .KIC_ENTRY_POINT_TYPE.CHAT_INFO,
            messagesInFolder: l.length,
            isAGroup: i != null && o("WAWebChatGetters").getIsGroup(i),
          });
          if (i == null) {
            e.commit();
            return;
          }
          if (o("WAWebChatGetters").getIsGroup(i)) {
            var t;
            e.set({
              isAdmin:
                (t = i.groupMetadata) == null
                  ? void 0
                  : t.participants.iAmAdmin(),
            });
          }
          o("WAWebChatThreadLogging")
            .getChatThreadID(i.id.toJid())
            .then(function (t) {
              t != null && e.set({ threadId: t });
            })
            .finally(function () {
              e.commit();
            });
        }, []));
      var f = s._(/*BTDS*/ "Kept messages"),
        g = c.jsx(o("WAWebEmptyState.react").KeptMsgs, {}),
        h = null;
      if (i != null && o("WAWebChatGetters").getIsGroup(i)) {
        var y;
        (y = i.groupMetadata) != null && y.restrict
          ? (h = c.jsx("div", {
              className:
                "x1xy6bms x1xnnf8n x84yb8i x162tt16 x1nxh6w3 x1sibtaa xib33u6",
              children: s._(
                /*BTDS*/ "These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.",
              ),
            }))
          : (h = c.jsx("div", {
              className:
                "x1xy6bms x1xnnf8n x84yb8i x162tt16 x1nxh6w3 x1sibtaa xib33u6",
              children: s._(
                /*BTDS*/ "These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.",
              ),
            }));
      } else
        h = c.jsx("div", {
          className:
            "x1xy6bms x1xnnf8n x84yb8i x162tt16 x1nxh6w3 x1sibtaa xib33u6",
          children: s._(
            /*BTDS*/ "These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.",
          ),
        });
      return c.jsx(r("WAWebMsgDrawer.react"), {
        testid: void 0,
        ref: n,
        msgCollection: l,
        onClose: u,
        chat: i,
        title: f,
        emptyListText: g,
        descriptionSection: h,
        displayType: o("WAWebDisplayType").DISPLAY_TYPE.KEPT_MSGS,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
