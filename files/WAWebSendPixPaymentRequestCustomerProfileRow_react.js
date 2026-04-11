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
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { row: { height: "x1peatla", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebChatGetters").getId]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n.id, a),
        l = i[0],
        c = n.contact,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            o("WAWebContactGetters").getIsMe,
            o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
          ]),
          (t[1] = d))
        : (d = t[1]);
      var m = o("useWAWebContactValues").useContactValues(c.id, d),
        p = m[0],
        _ = m[1],
        f;
      t[2] !== l
        ? ((f = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: l,
            size: 40,
            ephemeralIcon: "conversation-header",
            hiddenSubgroupIcon: "conversation-header",
            enableAdsDataSharingIcon: !0,
            enableBizAiDataSharingIcon: !0,
          })),
          (t[2] = l),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== n || t[5] !== f
        ? ((g = s.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            paddingEnd: 2,
            children: s.jsx(r("WAWebGroupChatImage.react"), {
              chat: n,
              theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                .CHAT_HEADER,
              regularChatImage: f,
              showCommunityInfo: !1,
            }),
          })),
          (t[4] = n),
          (t[5] = f),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== n || t[8] !== p || t[9] !== _
        ? ((h = s.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            paddingStart: 12,
            children: s.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s.jsx(o("WAWebName.react").Name, {
                chat: n,
                ellipsify: !0,
                showBusinessCheckmark: _,
                testid: void 0,
                showMessageYourselfName: p,
                truncateName: !0,
              }),
            }),
          })),
          (t[7] = n),
          (t[8] = p),
          (t[9] = _),
          (t[10] = h))
        : (h = t[10]);
      var y;
      return (
        t[11] !== g || t[12] !== h
          ? ((y = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: u.row,
              children: [g, h],
            })),
            (t[11] = g),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = c;
  },
  98,
);
