__d(
  "WAWebChatSearchMessageWithAuthorCell.react",
  [
    "WAWebChatSearchMessageCell.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "react",
    "useWAWebContactValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          o("WAWebMsgGetters").getId,
        ]),
        n = t[0],
        a = o("WAWebFrontendMsgGetters").getChat(e.msg),
        i = o("useWAWebContactValues").useContactValues(e.contact.id, [
          o("WAWebFrontendContactGetters").getFormattedShortName,
        ]),
        l = i[0];
      return s.jsx(
        r("WAWebChatSearchMessageCell.react"),
        {
          msg: e.msg,
          chat: a,
          author: l,
          searchText: e.searchText,
          onClick: e.onClick,
          active: e.active,
        },
        n.toString(),
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
