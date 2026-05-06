__d(
  "WAWebFormatConfiguration",
  [
    "WAWebABProps",
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
    "WAWebRawGroupMentionFormatMutator",
    "WAWebRawMentionMutator",
    "WAWebRawShortNameMentionFormatMutator",
    "WAWebSpoilerFormatMutator",
    "WAWebSpoilerGating",
    "WAWebStatusLinkFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "WAWebTextMentionFormatMutator",
    "cr:6000",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e === void 0 ? {} : e,
        n = t.emojiXstyle,
        o = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: o, emojiXstyle: n }]],
      ];
    }
    function s(e) {
      var t = e === void 0 ? {} : e,
        n = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: n, size: "large" }]],
      ];
    }
    function u(e) {
      var t = e === void 0 ? {} : e,
        n = t.dataTab,
        a = t.emojiXstyle,
        i = t.links,
        l = t.linkXstyle,
        s = t.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: s }]],
        [
          [
            o("WAWebStatusLinkFormatMutator").StatusLink,
            { links: i, selectable: s, linkXstyle: l, dataTab: n },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: s }],
          [r("WAWebItalicFormatMutator"), { selectable: s }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: s }],
        ],
        [
          [
            r("WAWebEmojiFormatMutator"),
            { selectable: s, size: "xlarge", emojiXstyle: a },
          ],
        ],
      ];
    }
    function c(e) {
      var t = e === void 0 ? {} : e,
        n = t.links,
        a = t.linkXstyle,
        i = t.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: i }]],
        [
          [
            o("WAWebStatusLinkFormatMutator").StatusLink,
            { links: n, selectable: i, linkXstyle: a },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: i }],
          [r("WAWebItalicFormatMutator"), { selectable: i }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: i }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: i }]],
      ];
    }
    function d(e) {
      var t = e === void 0 ? {} : e,
        n = t.selectable;
      return [[[r("WAWebEmojiFormatMutator"), { selectable: n }]]];
    }
    function m(e) {
      var t = e === void 0 ? {} : e,
        a = t.mentions,
        i = t.groupMentions,
        l = t.hasMentionAll,
        s = t.links,
        u = t.phoneNumbers,
        c = t.selectable,
        d = t.trusted,
        m = t.fromMe,
        p = t.fromChatWid,
        _ = t.commands,
        f = t.parseInlineCode,
        g = f === void 0 ? !1 : f,
        h = t.parseLists,
        y = h === void 0 ? !1 : h,
        C = t.parseQuotes,
        b = C === void 0 ? !1 : C,
        v = t.parseHeadings,
        S = v === void 0 ? !1 : v,
        R = t.onLinkClick,
        L = R === void 0 ? r("WAWebNoop") : R,
        E = t.terms,
        k = E === void 0 ? null : E,
        I =
          d && u != null && u.length > 0
            ? [
                [
                  r("WAWebPhoneNumberFormatMutator"),
                  { phoneNumbers: u, selectable: c, fromMe: m },
                ],
              ]
            : null,
        T;
      return (
        (o("WAWebBotBaseGating").isBizBot3pEnabled() ||
          o("WAWebBotBaseGating").isBotEnabled()) &&
          _ &&
          _.length > 0 &&
          (T = [
            [
              o("WAWebBotCommandFormatMutator").BotCommand,
              { commands: _, selectable: c },
            ],
          ]),
        [
          [[o("WAWebCodeFormatMutator").Code, { selectable: c }]],
          g ? [[r("WAWebInlineCodeFormatMutator"), { selectable: c }]] : null,
          y
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                  { selectable: c },
                ],
              ]
            : null,
          y
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                  { selectable: c },
                ],
              ]
            : null,
          y ? [[r("WAWebBulletedListFormatMutator"), { selectable: c }]] : null,
          y
            ? [
                [
                  o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                  { selectable: c },
                ],
              ]
            : null,
          y ? [[r("WAWebNumberedListFormatMutator"), { selectable: c }]] : null,
          d
            ? [
                [
                  r("WAWebLinkFormatMutator"),
                  { links: s, selectable: c, onLinkClick: L },
                ],
              ]
            : null,
          a
            ? [[r("WAWebMentionFormatMutator"), { mentions: a, selectable: c }]]
            : null,
          [
            [
              r("WAWebMentionAllFormatMutator"),
              { hasMentionAll: l, selectable: c },
            ],
          ],
          S
            ? [[o("WAWebHeadingFormatMutator").Heading, { selectable: c }]]
            : null,
          i
            ? [
                [
                  o("WAWebGroupMentionFormatMutator").GroupMention,
                  { groupMentions: i, selectable: c, fromChatWid: p },
                ],
              ]
            : null,
          !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(c) : null,
          I,
          o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
            ? [[r("WAWebSpoilerFormatMutator"), { selectable: c }]]
            : null,
          [
            [r("WAWebBoldFormatMutator"), { selectable: c }],
            [r("WAWebItalicFormatMutator"), { selectable: c }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: c }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: c }]],
          b
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: c },
                ],
              ]
            : null,
          T,
          k != null
            ? [
                [
                  r("WAWebHighlightFormatMutator"),
                  { terms: k, ignoreDiacritics: !0 },
                ],
              ]
            : null,
        ].filter(Boolean)
      );
    }
    function p(e) {
      var t = e.boundary,
        n = e.groupMentions,
        a = e.mentions,
        i = e.selectable,
        l = e.terms;
      return [
        [[r("WAWebTextMentionFormatMutator"), { mentions: a, selectable: i }]],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            { groupMentions: n, selectable: i, clickable: !1 },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: i }],
          [r("WAWebItalicFormatMutator"), { selectable: i }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: i }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: i }]],
        [
          [
            r("WAWebHighlightFormatMutator"),
            { terms: l, boundary: t, selectable: i, ignoreDiacritics: !0 },
          ],
        ],
      ];
    }
    function _(e) {
      var t = e.emojiXstyle,
        n = e.terms;
      return [
        [[r("WAWebEmojiFormatMutator"), { emojiXstyle: t, selectable: !1 }]],
        [
          [
            r("WAWebHighlightFormatMutator"),
            { terms: n, ignoreDiacritics: !0 },
          ],
        ],
      ];
    }
    function f(e) {
      e === void 0 && (e = {});
      var t = o("WAWebABProps").getABPropConfigValue(
          "enable_clear_formatted_preview",
        ),
        n = e,
        a = n.groupMentions,
        i = n.isDraftMessage,
        l = n.mentions,
        s = n.selectable;
      return [
        t ? null : [[o("WAWebCodeFormatMutator").Code, { selectable: s }]],
        l
          ? [
              [
                r("WAWebTextMentionFormatMutator"),
                {
                  mentions: l,
                  selectable: s,
                  lastMessage: !0,
                  isDraftMessage: i,
                },
              ],
            ]
          : null,
        a
          ? [
              [
                o("WAWebGroupMentionFormatMutator").GroupMention,
                {
                  groupMentions: a,
                  selectable: s,
                  clickable: !1,
                  lastMessage: !0,
                  isDraftMessage: i,
                },
              ],
            ]
          : null,
        t
          ? null
          : [
              [r("WAWebBoldFormatMutator"), { selectable: s }],
              [r("WAWebItalicFormatMutator"), { selectable: s }],
              [r("WAWebStrikethroughFormatMutator"), { selectable: s }],
            ],
        [[r("WAWebEmojiFormatMutator"), { selectable: s }]],
      ].filter(Boolean);
    }
    function g(e) {
      var t = e.boundary,
        n = e.groupMentions,
        a = e.mentions,
        i = e.selectable,
        l = e.terms;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: i }]],
        [[r("WAWebTextMentionFormatMutator"), { mentions: a, selectable: i }]],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            { groupMentions: n, selectable: i, clickable: !1 },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: i }],
          [r("WAWebItalicFormatMutator"), { selectable: i }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: i }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: i }]],
        [
          [
            r("WAWebHighlightFormatMutator"),
            { terms: l, boundary: t, selectable: i },
          ],
        ],
      ];
    }
    function h(e) {
      var t = e === void 0 ? {} : e,
        n = t.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: n }]],
        [
          [r("WAWebBoldFormatMutator"), { selectable: n }],
          [r("WAWebItalicFormatMutator"), { selectable: n }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: n }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: n }]],
      ];
    }
    function y(e) {
      var t = e.groupMentions,
        n = e.mentions,
        a = e.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: a }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: a }]],
        [[r("WAWebTextMentionFormatMutator"), { mentions: n, selectable: a }]],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            { groupMentions: t, selectable: a, clickable: !1 },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: a }],
          [r("WAWebItalicFormatMutator"), { selectable: a }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: a }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: a }]],
        [[o("WAWebBlockQuoteFormatMutator").BlockQuote, { selectable: a }]],
      ].filter(Boolean);
    }
    function C(e) {
      var t = e.groupMentions,
        n = e.mentions,
        a = e.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: a }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: a, quoted: !0 }]],
        [
          [
            o("WAWebBulletedListItemFormatMutator").BulletedListItem,
            { selectable: a },
          ],
        ],
        [
          [
            o("WAWebBulletedListItemFormatMutator").HyphenListItem,
            { selectable: a },
          ],
        ],
        [[r("WAWebBulletedListFormatMutator"), { selectable: a, quoted: !0 }]],
        [
          [
            o("WAWebNumberedListItemFormatMutator").NumberedListItem,
            { selectable: a },
          ],
        ],
        [[r("WAWebNumberedListFormatMutator"), { selectable: a, quoted: !0 }]],
        [
          [
            r("WAWebTextMentionFormatMutator"),
            { mentions: n, selectable: a, theme: { quoted: !0 } },
          ],
        ],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            {
              groupMentions: t,
              selectable: a,
              theme: { quoted: !0 },
              clickable: !1,
            },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: a }],
          [r("WAWebItalicFormatMutator"), { selectable: a }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: a }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: a }]],
        [
          [
            o("WAWebBlockQuoteFormatMutator").BlockQuote,
            { selectable: a, quoted: !0 },
          ],
        ],
      ].filter(Boolean);
    }
    function b(e) {
      var t = e.groupMentions,
        n = e.mentions,
        a = e.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: a }]],
        [[r("WAWebRawMentionMutator"), { mentions: n, selectable: a }]],
        [
          [
            o("WAWebRawGroupMentionFormatMutator").RawGroupMention,
            { groupMentions: t },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: a }],
          [r("WAWebItalicFormatMutator"), { selectable: a }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: a }],
        ],
      ].filter(Boolean);
    }
    function v(e) {
      var t = e.groupMentions,
        n = e.groupMetadata,
        a = e.mentions,
        i = e.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: i }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: i }]],
        [
          [
            r("WAWebRawShortNameMentionFormatMutator"),
            { mentions: a, selectable: i, groupMetadata: n },
          ],
        ],
        [
          [
            o("WAWebRawGroupMentionFormatMutator").RawGroupMention,
            { groupMentions: t },
          ],
        ],
        [
          [r("WAWebBoldFormatMutator"), { selectable: i }],
          [r("WAWebItalicFormatMutator"), { selectable: i }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: i }],
        ],
        [[o("WAWebBlockQuoteFormatMutator").BlockQuote, { selectable: i }]],
      ].filter(Boolean);
    }
    function S(e) {
      var t,
        a = e.links,
        i = !!e.expandedFormattingEnabled,
        l = !!((t = e.bulletPointsEnabled) != null ? t : i),
        s = !0;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: s }]],
        i ? [[r("WAWebInlineCodeFormatMutator"), { selectable: s }]] : null,
        l
          ? [
              [
                o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                { selectable: s },
              ],
            ]
          : null,
        l
          ? [
              [
                o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                { selectable: s },
              ],
            ]
          : null,
        l ? [[r("WAWebBulletedListFormatMutator"), { selectable: s }]] : null,
        i
          ? [
              [
                o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                { selectable: s },
              ],
            ]
          : null,
        i ? [[r("WAWebNumberedListFormatMutator"), { selectable: s }]] : null,
        [[r("WAWebLinkFormatMutator"), { links: a, selectable: s }]],
        [
          [r("WAWebBoldFormatMutator"), { selectable: s }],
          [r("WAWebItalicFormatMutator"), { selectable: s }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: s }],
        ],
        !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(s) : null,
        [[r("WAWebEmojiFormatMutator"), { selectable: s }]],
        i
          ? [[o("WAWebBlockQuoteFormatMutator").BlockQuote, { selectable: s }]]
          : null,
      ].filter(Boolean);
    }
    function R(e) {
      var t,
        a = !!(e != null && e.expandedFormattingEnabled),
        i = !!((t = e == null ? void 0 : e.bulletPointsEnabled) != null
          ? t
          : a),
        l = !0;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: l }]],
        a ? [[r("WAWebInlineCodeFormatMutator"), { selectable: l }]] : null,
        i
          ? [
              [
                o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                { selectable: l },
              ],
            ]
          : null,
        i
          ? [
              [
                o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                { selectable: l },
              ],
            ]
          : null,
        i ? [[r("WAWebBulletedListFormatMutator"), { selectable: l }]] : null,
        a
          ? [
              [
                o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                { selectable: l },
              ],
            ]
          : null,
        a ? [[r("WAWebNumberedListFormatMutator"), { selectable: l }]] : null,
        [
          [r("WAWebBoldFormatMutator"), { selectable: l }],
          [r("WAWebItalicFormatMutator"), { selectable: l }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: l }],
        ],
        !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(l) : null,
        [[r("WAWebEmojiFormatMutator"), { selectable: l }]],
        a
          ? [[o("WAWebBlockQuoteFormatMutator").BlockQuote, { selectable: l }]]
          : null,
      ].filter(Boolean);
    }
    function L(e) {
      var t = e === void 0 ? {} : e,
        n = t.links,
        o = t.selectable,
        a = t.trusted;
      return [
        a === !0
          ? [[r("WAWebLinkFormatMutator"), { links: n, selectable: o }]]
          : null,
        [[r("WAWebEmojiFormatMutator"), { selectable: o }]],
      ].filter(Boolean);
    }
    function E(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.groupMentions,
        a = t.isDraftMessage,
        i = t.mentions,
        l = t.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: l }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: l }]],
        [
          [
            o("WAWebBulletedListItemFormatMutator").BulletedListItem,
            { selectable: l, inline: !0 },
          ],
        ],
        [
          [
            o("WAWebBulletedListItemFormatMutator").HyphenListItem,
            { selectable: l, inline: !0 },
          ],
        ],
        [[r("WAWebBulletedListFormatMutator"), { selectable: l, inline: !0 }]],
        [
          [
            o("WAWebNumberedListItemFormatMutator").NumberedListItem,
            { selectable: l, inline: !0 },
          ],
        ],
        [[r("WAWebNumberedListFormatMutator"), { selectable: l, inline: !0 }]],
        i
          ? [
              [
                r("WAWebTextMentionFormatMutator"),
                {
                  mentions: i,
                  selectable: l,
                  lastMessage: !0,
                  isDraftMessage: a,
                },
              ],
            ]
          : null,
        n
          ? [
              [
                o("WAWebGroupMentionFormatMutator").GroupMention,
                {
                  groupMentions: n,
                  selectable: l,
                  clickable: !1,
                  lastMessage: !0,
                  isDraftMessage: a,
                },
              ],
            ]
          : null,
        [
          [r("WAWebBoldFormatMutator"), { selectable: l }],
          [r("WAWebItalicFormatMutator"), { selectable: l }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: l }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: l }]],
        [
          [
            o("WAWebBlockQuoteFormatMutator").BlockQuote,
            { selectable: l, inline: !0 },
          ],
        ],
      ].filter(Boolean);
    }
    function k(e) {
      var t = e.selectable,
        n = e.parseHeadings,
        a = n === void 0 ? !0 : n,
        i = e.parseHeadlessHeadings,
        l = i === void 0 ? !1 : i,
        s = e.parseLists,
        u = s === void 0 ? !0 : s,
        c = e.parseQuotes,
        d = c === void 0 ? !0 : c,
        m = e.parseInlineCode,
        p = m === void 0 ? !0 : m,
        _ = e.showLinks,
        f = _ === void 0 ? !0 : _,
        g = e.links,
        h = e.onLinkClick,
        y = h === void 0 ? r("WAWebNoop") : h;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: t }]],
        p ? [[r("WAWebInlineCodeFormatMutator"), { selectable: t }]] : null,
        [
          [r("WAWebBoldFormatMutator"), { selectable: t }],
          [r("WAWebItalicFormatMutator"), { selectable: t }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: t }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: t }]],
        d
          ? [[o("WAWebBlockQuoteFormatMutator").BlockQuote, { selectable: t }]]
          : null,
        u
          ? [
              [
                o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                { selectable: t },
              ],
            ]
          : null,
        u
          ? [
              [
                o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                { selectable: t },
              ],
            ]
          : null,
        u ? [[r("WAWebBulletedListFormatMutator"), { selectable: t }]] : null,
        u
          ? [
              [
                o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                { selectable: t },
              ],
            ]
          : null,
        u ? [[r("WAWebNumberedListFormatMutator"), { selectable: t }]] : null,
        f
          ? [
              [
                r("WAWebLinkFormatMutator"),
                { links: g, selectable: t, onLinkClick: y },
              ],
            ]
          : null,
        a
          ? [
              [
                o("WAWebHeadingFormatMutator").AIRichResponseHeading,
                { selectable: t },
              ],
            ]
          : null,
        l
          ? [
              [
                o("WAWebHeadingFormatMutator").HeadlessHeading,
                { selectable: t },
              ],
            ]
          : null,
      ].filter(Boolean);
    }
    ((l.EmojiOnly = e),
      (l.LargeEmojiOnly = s),
      (l.StatusText = u),
      (l.StatusCaption = c),
      (l.Compatibility = d),
      (l.Conversation = m),
      (l.Search = p),
      (l.SearchName = _),
      (l.LastMessage = f),
      (l.FTSMessage = g),
      (l.QuickReply = h),
      (l.Unformat = y),
      (l.QuotedMention = C),
      (l.FormattedNotification = b),
      (l.FormattedGroupNotification = v),
      (l.TrustedGroupDesc = S),
      (l.UntrustedGroupDesc = R),
      (l.HeaderAndFooter = L),
      (l.InlineMessage = E),
      (l.RichResponse = k));
  },
  98,
);
