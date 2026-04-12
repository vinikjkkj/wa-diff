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
        a,
        i = e.chat,
        l = e.onLabelSelect,
        c = (t = i.broadcastMetadata) == null ? void 0 : t.audienceExpression;
      if (c == null) return null;
      var d = o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(c),
        m = o("WAWebBizBroadcastsHomeStrings").getListsLinkedTitle(
          d.length,
          (n =
            (a = i.broadcastMetadata) == null ? void 0 : a.recipients.length) !=
            null
            ? n
            : 0,
        );
      return s.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
        {
          title: m,
          children: d.map(function (e) {
            var t = o("WAWebLabelCollection").LabelCollection.assertGet(e),
              n = o("WAWebLabelGetters").getHexColor(t),
              a = t.chatCount;
            return s.jsx(
              o("WAWebClickable.react").Clickable,
              {
                onClick: function () {
                  return l(e);
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
                          children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: t.name,
                          }),
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
              e,
            );
          }),
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
