__d(
  "WAWebGroupMenuDropdown.react",
  [
    "WATimeUtils",
    "WAWebChatThreadLogging",
    "WAWebConversationMenus",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["_ref"],
      s,
      u = s || (s = o("react")),
      c = s.useEffect;
    function d(t) {
      var n = o("react-compiler-runtime").c(9),
        a;
      if (n[0] !== t) {
        var i = t._ref,
          l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((a = l), (n[0] = t), (n[1] = a));
      } else a = n[1];
      var s = a,
        d = s.chat,
        m = s.onSearchChat,
        p = s.onSelectMessages,
        _,
        f;
      (n[2] !== d.id
        ? ((_ = function () {
            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
              {
                activityType: "chatOverflowClicks",
                ts: o("WATimeUtils").unixTime(),
                chatId: d.id,
              },
            ]);
          }),
          (f = [d.id]),
          (n[2] = d.id),
          (n[3] = _),
          (n[4] = f))
        : ((_ = n[3]), (f = n[4])),
        c(_, f));
      var g;
      if (n[5] !== d || n[6] !== m || n[7] !== p) {
        var h = u.jsx(o("WAWebConversationMenus").GroupMenu, {
          chat: d,
          onSearchChat: m,
          onSelect: p,
        });
        ((g = u.jsx(r("WDSMenu.react"), { children: h })),
          (n[5] = d),
          (n[6] = m),
          (n[7] = p),
          (n[8] = g));
      } else g = n[8];
      return g;
    }
    l.default = d;
  },
  98,
);
