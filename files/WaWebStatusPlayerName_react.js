__d(
  "WaWebStatusPlayerName.react",
  [
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebName.react",
    "WDSText.react",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.isGroupStatus,
        a = e.msg,
        i = e.statusContact,
        l = o("WAWebFrontendMsgGetters").getMaybeChat(a),
        u =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            l == null ? void 0 : l.id,
            [o("WAWebFrontendChatGetters").getGroupMetadata],
          )) != null
            ? t
            : [null],
        c = u[0],
        d =
          n && l && c
            ? s.jsx(o("WAWebName.react").GroupName, {
                chat: l,
                groupMetadata: c,
                ellipsify: !0,
              })
            : s.jsx(o("WAWebName.react").ContactName, {
                contact: i,
                you: !0,
                ellipsify: !0,
                showBusinessCheckmark: o(
                  "WAWebContactGetters",
                ).getShowBusinessCheckmarkAsPrimary(i),
              });
      return s.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: "persistentAlwaysWhite",
        maxLines: 1,
        children: d,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
