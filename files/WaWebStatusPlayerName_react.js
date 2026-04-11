__d(
  "WaWebStatusPlayerName.react",
  [
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebName.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = o("react-compiler-runtime").c(7),
        a = e.isGroupStatus,
        i = e.msg,
        l = e.statusContact,
        u;
      n[0] !== i
        ? ((u = o("WAWebFrontendMsgGetters").getMaybeChat(i)),
          (n[0] = i),
          (n[1] = u))
        : (u = n[1]);
      var c = u,
        d =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            c == null ? void 0 : c.id,
            [o("WAWebFrontendChatGetters").getGroupMetadata],
          )) != null
            ? t
            : [null],
        m = d[0],
        p;
      if (n[2] !== c || n[3] !== m || n[4] !== a || n[5] !== l) {
        var _ =
          a && c && m
            ? s.jsx(o("WAWebName.react").GroupName, {
                chat: c,
                groupMetadata: m,
                ellipsify: !0,
              })
            : s.jsx(o("WAWebName.react").ContactName, {
                contact: l,
                you: !0,
                ellipsify: !0,
                showBusinessCheckmark: o(
                  "WAWebContactGetters",
                ).getShowBusinessCheckmarkAsPrimary(l),
              });
        ((p = s.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: "persistentAlwaysWhite",
          maxLines: 1,
          children: _,
        })),
          (n[2] = c),
          (n[3] = m),
          (n[4] = a),
          (n[5] = l),
          (n[6] = p));
      } else p = n[6];
      return p;
    }
    l.default = u;
  },
  98,
);
