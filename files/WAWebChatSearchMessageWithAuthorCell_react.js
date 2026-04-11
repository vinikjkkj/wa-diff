__d(
  "WAWebChatSearchMessageWithAuthorCell.react",
  [
    "WAWebChatSearchMessageCell.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebMsgGetters").getId]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(e.msg.id, n),
        i = a[0],
        l;
      t[1] !== e.msg
        ? ((l = o("WAWebFrontendMsgGetters").getChat(e.msg)),
          (t[1] = e.msg),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebFrontendContactGetters").getFormattedShortName]),
          (t[3] = c))
        : (c = t[3]);
      var d = o("useWAWebContactValues").useContactValues(e.contact.id, c),
        m = d[0],
        p = e.msg,
        _ = e.searchText,
        f = e.onClick,
        g = e.active,
        h;
      t[4] !== i ? ((h = i.toString()), (t[4] = i), (t[5] = h)) : (h = t[5]);
      var y;
      return (
        t[6] !== u ||
        t[7] !== m ||
        t[8] !== e.active ||
        t[9] !== e.msg ||
        t[10] !== e.onClick ||
        t[11] !== e.searchText ||
        t[12] !== h
          ? ((y = s.jsx(
              r("WAWebChatSearchMessageCell.react"),
              {
                msg: p,
                chat: u,
                author: m,
                searchText: _,
                onClick: f,
                active: g,
              },
              h,
            )),
            (t[6] = u),
            (t[7] = m),
            (t[8] = e.active),
            (t[9] = e.msg),
            (t[10] = e.onClick),
            (t[11] = e.searchText),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = u;
  },
  98,
);
