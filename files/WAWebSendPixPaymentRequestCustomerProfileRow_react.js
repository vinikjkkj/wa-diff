__d(
  "WAWebSendPixPaymentRequestCustomerProfileRow.react",
  [
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebGroupChatImage.react",
    "WAWebName.react",
    "WAWebStackedCirclesImage.react",
    "WDSText.react",
    "react",
    "useWAWebChatValues",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { row: { height: "x1peatla", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getId,
        ]),
        a = n[0],
        i = t.contact,
        l = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebContactGetters").getIsMe,
          o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
        ]),
        c = l[0],
        d = l[1];
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: u.row,
        children: [
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            paddingEnd: 2,
            children: s.jsx(r("WAWebGroupChatImage.react"), {
              chat: t,
              theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                .CHAT_HEADER,
              regularChatImage: s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: a,
                size: 40,
                ephemeralIcon: "conversation-header",
                hiddenSubgroupIcon: "conversation-header",
                enableAdsDataSharingIcon: !0,
                enableBizAiDataSharingIcon: !0,
              }),
              showCommunityInfo: !1,
            }),
          }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            paddingStart: 12,
            children: s.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s.jsx(o("WAWebName.react").Name, {
                chat: t,
                ellipsify: !0,
                showBusinessCheckmark: d,
                testid: void 0,
                showMessageYourselfName: c,
                truncateName: !0,
              }),
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
