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
    "WAWebFormatConfiguration",
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
        c = t.messageHasSpoiler,
        d = t.phoneNumbers,
        m = d === void 0 ? [] : d,
        p = t.selectable,
        _ = t.spoilerInteractive,
        f = t.spoilerRevealContext,
        g = t.trusted,
        h = g === void 0 ? !1 : g,
        y = t.fromMe,
        C = y === void 0 ? !1 : y,
        b = t.fromChatWid,
        v = t.commands,
        S = v === void 0 ? [] : v,
        R = t.parseInlineCode,
        L = R === void 0 ? !1 : R,
        E = t.parseLists,
        k = E === void 0 ? !1 : E,
        I = t.parseQuotes,
        T = I === void 0 ? !1 : I,
        D = t.parseHeadings,
        x = D === void 0 ? !1 : D,
        $ = t.onLinkClick,
        P = $ === void 0 ? r("WAWebNoop") : $,
        N = t.terms,
        M = N === void 0 ? null : N,
        w = t.boldXstyle,
        A = t.codeXstyle,
        F = t.linkXstyle,
        O =
          h && m != null && m.length > 0
            ? [
                [
                  r("WAWebPhoneNumberFormatMutator"),
                  { phoneNumbers: m, selectable: p, fromMe: C },
                ],
              ]
            : null,
        B;
      return (
        (o("WAWebBotBaseGating").isBizBot3pEnabled() ||
          o("WAWebBotBaseGating").isBotEnabled()) &&
          S &&
          S.length > 0 &&
          (B = [
            [
              o("WAWebBotCommandFormatMutator").BotCommand,
              { commands: S, selectable: p },
            ],
          ]),
        [
          [
            [
              o("WAWebCodeFormatMutator").Code,
              { selectable: p, codeXstyle: A },
            ],
          ],
          L
            ? [
                [
                  r("WAWebInlineCodeFormatMutator"),
                  { selectable: p, codeXstyle: A },
                ],
              ]
            : null,
          k
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                  { selectable: p },
                ],
              ]
            : null,
          k
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                  { selectable: p },
                ],
              ]
            : null,
          k ? [[r("WAWebBulletedListFormatMutator"), { selectable: p }]] : null,
          k
            ? [
                [
                  o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                  { selectable: p },
                ],
              ]
            : null,
          k ? [[r("WAWebNumberedListFormatMutator"), { selectable: p }]] : null,
          o("WAWebFormatConfiguration").spoilerMutatorEntry({
            messageHasSpoiler: c,
            selectable: p,
            spoilerInteractive: _,
            spoilerRevealContext: f,
          }),
          h
            ? [
                [
                  r("WAWebLinkFormatMutator"),
                  { links: u, selectable: p, onLinkClick: P, linkXstyle: F },
                ],
              ]
            : null,
          a
            ? [
                [
                  r("WAWebMentionFormatMutator"),
                  { mentions: a, selectable: p, fromChatWid: b },
                ],
              ]
            : null,
          [
            [
              r("WAWebMentionAllFormatMutator"),
              { hasMentionAll: l, selectable: p },
            ],
          ],
          x
            ? [[o("WAWebHeadingFormatMutator").Heading, { selectable: p }]]
            : null,
          i
            ? [
                [
                  o("WAWebGroupMentionFormatMutator").GroupMention,
                  { groupMentions: i, selectable: p, fromChatWid: b },
                ],
              ]
            : null,
          !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(p) : null,
          O,
          [
            [r("WAWebBoldFormatMutator"), { selectable: p, boldXstyle: w }],
            [r("WAWebItalicFormatMutator"), { selectable: p }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: p }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: p }]],
          T
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: p },
                ],
              ]
            : null,
          B,
          M != null
            ? [
                [
                  r("WAWebHighlightFormatMutator"),
                  { terms: M, ignoreDiacritics: !0 },
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
