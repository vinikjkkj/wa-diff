__d(
  "WAWebGroupMenuDropdown.react",
  [
    "WATimeUtils",
    "WAWebChatThreadLogging",
    "WAWebConversationMenus",
    "WDSMenu.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["_ref"],
      s,
      u = s || (s = o("react")),
      c = s.useEffect;
    function d(t) {
      var n = t._ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.onSearchChat,
        s = a.onSelectMessages;
      c(
        function () {
          o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
            {
              activityType: "chatOverflowClicks",
              ts: o("WATimeUtils").unixTime(),
              chatId: i.id,
            },
          ]);
        },
        [i.id],
      );
      var d = u.jsx(o("WAWebConversationMenus").GroupMenu, {
        chat: i,
        onSearchChat: l,
        onSelect: s,
      });
      return u.jsx(r("WDSMenu.react"), { children: d });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
