__d(
  "WAWebChatInfoClearChatSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebClearRefreshedIcon.react",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebDrawerButtonRefreshed.react",
    "react",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        a = function () {
          o("WAWebCmd").Cmd.clearChat(t);
        },
        i = s._(/*BTDS*/ "Clear chat");
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
        {
          children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
            icon: u.jsx(
              o("WAWebClearRefreshedIcon.react").ClearRefreshedIcon,
              {},
            ),
            onClick: a,
            testid: void 0,
            danger: !0,
            disabled:
              n &&
              !t.msgs.getModelsArray().some(function (e) {
                return !o("WAWebCommonMsgUtils").isNotificationType(
                  e.type,
                  e.subtype,
                );
              }),
            children: i,
          }),
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
