__d(
  "WAWebBroadcastInfoLabelsSection.react",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebChatInfoDrawerSection.react",
    "WAWebClickable.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebListIcon.react",
    "WDSIconIcChevronRight.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        labelRow: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        labelIcon: {
          flexShrink: "x2lah0s",
          marginInlineEnd: "xviac27",
          $$css: !0,
        },
        labelInfo: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        chevronIcon: {
          flexShrink: "x2lah0s",
          marginInlineStart: "x150mmf0",
          $$css: !0,
        },
      };
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(12),
        i = e.chat,
        l = e.onLabelSelect,
        c = (t = i.broadcastMetadata) == null ? void 0 : t.audienceExpression;
      if (c == null) return null;
      var d, m, p;
      if (
        a[0] !== c ||
        a[1] !==
          ((n = i.broadcastMetadata) == null ? void 0 : n.recipients.length) ||
        a[2] !== l
      ) {
        var _,
          f,
          g,
          h = o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(c),
          y = o("WAWebBizBroadcastsHomeStrings").getListsLinkedTitle(
            h.length,
            (_ =
              (f = i.broadcastMetadata) == null
                ? void 0
                : f.recipients.length) != null
              ? _
              : 0,
          );
        ((d = o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection),
          (m = y));
        var C;
        (a[6] !== l
          ? ((C = function (t) {
              var e = o("WAWebLabelCollection").LabelCollection.assertGet(t),
                n = o("WAWebLabelGetters").getHexColor(e),
                a = e.chatCount;
              return s.jsx(
                o("WAWebClickable.react").Clickable,
                {
                  onClick: function () {
                    return l(t);
                  },
                  children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: u.labelRow,
                    children: [
                      s.jsx(r("WAWebListIcon.react"), {
                        color: n,
                        size: 24,
                        xstyle: u.labelIcon,
                      }),
                      s.jsxs(o("WAWebFlex.react").FlexColumn, {
                        xstyle: u.labelInfo,
                        children: [
                          s.jsx(r("WDSText.react"), {
                            type: "Body1",
                            colorName: "contentDefault",
                            children: s.jsx(
                              o("WAWebEmojiText.react").EmojiText,
                              { text: e.name },
                            ),
                          }),
                          s.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: "contentDeemphasized",
                            children: o(
                              "WAWebBizBroadcastsCreationStrings",
                            ).getAudienceRecipientCountLabel(a),
                          }),
                        ],
                      }),
                      s.jsx(r("WDSIconIcChevronRight.react"), {
                        colorName: "contentDeemphasized",
                        directional: !0,
                        xstyle: u.chevronIcon,
                      }),
                    ],
                  }),
                },
                t,
              );
            }),
            (a[6] = l),
            (a[7] = C))
          : (C = a[7]),
          (p = h.map(C)),
          (a[0] = c),
          (a[1] =
            (g = i.broadcastMetadata) == null ? void 0 : g.recipients.length),
          (a[2] = l),
          (a[3] = d),
          (a[4] = m),
          (a[5] = p));
      } else ((d = a[3]), (m = a[4]), (p = a[5]));
      var b;
      return (
        a[8] !== d || a[9] !== m || a[10] !== p
          ? ((b = s.jsx(d, { title: m, children: p })),
            (a[8] = d),
            (a[9] = m),
            (a[10] = p),
            (a[11] = b))
          : (b = a[11]),
        b
      );
    }
    l.default = c;
  },
  98,
);
