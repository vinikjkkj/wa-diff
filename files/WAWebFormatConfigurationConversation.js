__d(
  "WAWebFormatConfigurationConversation",
  [
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
    "WAWebBotBaseGating",
    "WAWebBotCommandFormatMutator",
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebEmojiFormatMutator",
    "WAWebGroupMentionFormatMutator",
    "WAWebHeadingFormatMutator",
    "WAWebHighlightFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebMentionAllFormatMutator",
    "WAWebMentionFormatMutator",
    "WAWebNoop",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemFormatMutator",
    "WAWebPhoneNumberFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "cr:6000",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e === void 0 ? {} : e,
        a = t.mentions,
        i = t.groupMentions,
        l = t.hasMentionAll,
        s = t.links,
        u = s === void 0 ? [] : s,
        c = t.phoneNumbers,
        d = c === void 0 ? [] : c,
        m = t.selectable,
        p = t.trusted,
        _ = p === void 0 ? !1 : p,
        f = t.fromMe,
        g = f === void 0 ? !1 : f,
        h = t.fromChatWid,
        y = t.commands,
        C = y === void 0 ? [] : y,
        b = t.parseInlineCode,
        v = b === void 0 ? !1 : b,
        S = t.parseLists,
        R = S === void 0 ? !1 : S,
        L = t.parseQuotes,
        E = L === void 0 ? !1 : L,
        k = t.parseHeadings,
        I = k === void 0 ? !1 : k,
        T = t.onLinkClick,
        D = T === void 0 ? r("WAWebNoop") : T,
        x = t.terms,
        $ = x === void 0 ? null : x,
        P = t.boldXstyle,
        N = t.codeXstyle,
        M = t.linkXstyle,
        w =
          _ && d != null && d.length > 0
            ? [
                [
                  r("WAWebPhoneNumberFormatMutator"),
                  { phoneNumbers: d, selectable: m, fromMe: g },
                ],
              ]
            : null,
        A;
      return (
        (o("WAWebBotBaseGating").isBizBot3pEnabled() ||
          o("WAWebBotBaseGating").isBotEnabled()) &&
          C &&
          C.length > 0 &&
          (A = [
            [
              o("WAWebBotCommandFormatMutator").BotCommand,
              { commands: C, selectable: m },
            ],
          ]),
        [
          [
            [
              o("WAWebCodeFormatMutator").Code,
              { selectable: m, codeXstyle: N },
            ],
          ],
          v
            ? [
                [
                  r("WAWebInlineCodeFormatMutator"),
                  { selectable: m, codeXstyle: N },
                ],
              ]
            : null,
          R
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                  { selectable: m },
                ],
              ]
            : null,
          R
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                  { selectable: m },
                ],
              ]
            : null,
          R ? [[r("WAWebBulletedListFormatMutator"), { selectable: m }]] : null,
          R
            ? [
                [
                  o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                  { selectable: m },
                ],
              ]
            : null,
          R ? [[r("WAWebNumberedListFormatMutator"), { selectable: m }]] : null,
          _
            ? [
                [
                  r("WAWebLinkFormatMutator"),
                  { links: u, selectable: m, onLinkClick: D, linkXstyle: M },
                ],
              ]
            : null,
          a
            ? [
                [
                  r("WAWebMentionFormatMutator"),
                  { mentions: a, selectable: m, fromChatWid: h },
                ],
              ]
            : null,
          [
            [
              r("WAWebMentionAllFormatMutator"),
              { hasMentionAll: l, selectable: m },
            ],
          ],
          I
            ? [[o("WAWebHeadingFormatMutator").Heading, { selectable: m }]]
            : null,
          i
            ? [
                [
                  o("WAWebGroupMentionFormatMutator").GroupMention,
                  { groupMentions: i, selectable: m, fromChatWid: h },
                ],
              ]
            : null,
          !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(m) : null,
          w,
          [
            [r("WAWebBoldFormatMutator"), { selectable: m, boldXstyle: P }],
            [r("WAWebItalicFormatMutator"), { selectable: m }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: m }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: m }]],
          E
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: m },
                ],
              ]
            : null,
          A,
          $ != null
            ? [
                [
                  r("WAWebHighlightFormatMutator"),
                  { terms: $, ignoreDiacritics: !0 },
                ],
              ]
            : null,
        ].filter(Boolean)
      );
    }
    l.Conversation = e;
  },
  98,
);
