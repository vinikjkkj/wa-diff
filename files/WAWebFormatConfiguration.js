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
      var t = e.messageHasSpoiler,
        n = e.selectable;
      return t !== !0 || !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
        ? null
        : [[r("WAWebSpoilerFormatMutator"), { selectable: n }]];
    }
    function s(e) {
      var t = e === void 0 ? {} : e,
        n = t.emojiXstyle,
        o = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: o, emojiXstyle: n }]],
      ];
    }
    function u(e) {
      var t = e === void 0 ? {} : e,
        n = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: n, size: "large" }]],
      ];
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
      var t = e === void 0 ? {} : e,
        n = t.emojiXstyle,
        o = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: o, emojiXstyle: n }]],
      ];
    }
    function p(t) {
      var a = t === void 0 ? {} : t,
        i = a.mentions,
        l = a.groupMentions,
        s = a.hasMentionAll,
        u = a.links,
        c = u === void 0 ? [] : u,
        d = a.phoneNumbers,
        m = d === void 0 ? [] : d,
        p = a.selectable,
        _ = a.trusted,
        f = _ === void 0 ? !1 : _,
        g = a.fromMe,
        h = g === void 0 ? !1 : g,
        y = a.fromChatWid,
        C = a.commands,
        b = C === void 0 ? [] : C,
        v = a.parseInlineCode,
        S = v === void 0 ? !1 : v,
        R = a.parseLists,
        L = R === void 0 ? !1 : R,
        E = a.parseQuotes,
        k = E === void 0 ? !1 : E,
        I = a.parseHeadings,
        T = I === void 0 ? !1 : I,
        D = a.onLinkClick,
        x = D === void 0 ? r("WAWebNoop") : D,
        $ = a.terms,
        P = $ === void 0 ? null : $,
        N = a.messageHasSpoiler,
        M = N === void 0 ? !1 : N,
        w = a.boldXstyle,
        A = a.codeXstyle,
        F = a.linkXstyle,
        O =
          f && m != null && m.length > 0
            ? [
                [
                  r("WAWebPhoneNumberFormatMutator"),
                  { phoneNumbers: m, selectable: p, fromMe: h },
                ],
              ]
            : null,
        B;
      return (
        (o("WAWebBotBaseGating").isBizBot3pEnabled() ||
          o("WAWebBotBaseGating").isBotEnabled()) &&
          b &&
          b.length > 0 &&
          (B = [
            [
              o("WAWebBotCommandFormatMutator").BotCommand,
              { commands: b, selectable: p },
            ],
          ]),
        [
          [
            [
              o("WAWebCodeFormatMutator").Code,
              { selectable: p, codeXstyle: A },
            ],
          ],
          S
            ? [
                [
                  r("WAWebInlineCodeFormatMutator"),
                  { selectable: p, codeXstyle: A },
                ],
              ]
            : null,
          L
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                  { selectable: p },
                ],
              ]
            : null,
          L
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                  { selectable: p },
                ],
              ]
            : null,
          L ? [[r("WAWebBulletedListFormatMutator"), { selectable: p }]] : null,
          L
            ? [
                [
                  o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                  { selectable: p },
                ],
              ]
            : null,
          L ? [[r("WAWebNumberedListFormatMutator"), { selectable: p }]] : null,
          f
            ? [
                [
                  r("WAWebLinkFormatMutator"),
                  { links: c, selectable: p, onLinkClick: x, linkXstyle: F },
                ],
              ]
            : null,
          i
            ? [[r("WAWebMentionFormatMutator"), { mentions: i, selectable: p }]]
            : null,
          [
            [
              r("WAWebMentionAllFormatMutator"),
              { hasMentionAll: s, selectable: p },
            ],
          ],
          T
            ? [[o("WAWebHeadingFormatMutator").Heading, { selectable: p }]]
            : null,
          l
            ? [
                [
                  o("WAWebGroupMentionFormatMutator").GroupMention,
                  { groupMentions: l, selectable: p, fromChatWid: y },
                ],
              ]
            : null,
          !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(p) : null,
          O,
          e({ messageHasSpoiler: M, selectable: p }),
          [
            [r("WAWebBoldFormatMutator"), { selectable: p, boldXstyle: w }],
            [r("WAWebItalicFormatMutator"), { selectable: p }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: p }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: p }]],
          k
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: p },
                ],
              ]
            : null,
          B,
          P != null
            ? [
                [
                  r("WAWebHighlightFormatMutator"),
                  { terms: P, ignoreDiacritics: !0 },
                ],
              ]
            : null,
        ].filter(Boolean)
      );
    }
    function _(t) {
      var n = t.boundary,
        a = t.groupMentions,
        i = t.mentions,
        l = t.messageHasSpoiler,
        s = t.selectable,
        u = t.terms,
        c = e({ messageHasSpoiler: l, selectable: s });
      return [
        [[r("WAWebTextMentionFormatMutator"), { mentions: i, selectable: s }]],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            { groupMentions: a, selectable: s, clickable: !1 },
          ],
        ],
      ].concat(c != null ? [c] : [], [
        [
          [r("WAWebBoldFormatMutator"), { selectable: s }],
          [r("WAWebItalicFormatMutator"), { selectable: s }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: s }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: s }]],
        [
          [
            r("WAWebHighlightFormatMutator"),
            { terms: u, boundary: n, selectable: s, ignoreDiacritics: !0 },
          ],
        ],
      ]);
    }
    function f(e) {
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
    function g(t) {
      t === void 0 && (t = {});
      var n = o("WAWebABProps").getABPropConfigValue(
          "enable_clear_formatted_preview",
        ),
        a = t,
        i = a.groupMentions,
        l = a.isDraftMessage,
        s = a.mentions,
        u = a.messageHasSpoiler,
        c = a.selectable;
      return [
        n ? null : [[o("WAWebCodeFormatMutator").Code, { selectable: c }]],
        s
          ? [
              [
                r("WAWebTextMentionFormatMutator"),
                {
                  mentions: s,
                  selectable: c,
                  lastMessage: !0,
                  isDraftMessage: l,
                },
              ],
            ]
          : null,
        i
          ? [
              [
                o("WAWebGroupMentionFormatMutator").GroupMention,
                {
                  groupMentions: i,
                  selectable: c,
                  clickable: !1,
                  lastMessage: !0,
                  isDraftMessage: l,
                },
              ],
            ]
          : null,
        e({ messageHasSpoiler: u, selectable: c }),
        n
          ? null
          : [
              [r("WAWebBoldFormatMutator"), { selectable: c }],
              [r("WAWebItalicFormatMutator"), { selectable: c }],
              [r("WAWebStrikethroughFormatMutator"), { selectable: c }],
            ],
        [[r("WAWebEmojiFormatMutator"), { selectable: c }]],
      ].filter(Boolean);
    }
    function h(t) {
      var n = t.boundary,
        a = t.groupMentions,
        i = t.mentions,
        l = t.messageHasSpoiler,
        s = t.selectable,
        u = t.terms,
        c = e({ messageHasSpoiler: l, selectable: s });
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: s }]],
        [[r("WAWebTextMentionFormatMutator"), { mentions: i, selectable: s }]],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            { groupMentions: a, selectable: s, clickable: !1 },
          ],
        ],
      ].concat(c != null ? [c] : [], [
        [
          [r("WAWebBoldFormatMutator"), { selectable: s }],
          [r("WAWebItalicFormatMutator"), { selectable: s }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: s }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: s }]],
        [
          [
            r("WAWebHighlightFormatMutator"),
            { terms: u, boundary: n, selectable: s },
          ],
        ],
      ]);
    }
    function y(e) {
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
    function C(e) {
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
    function b(t) {
      var n = t.groupMentions,
        a = t.mentions,
        i = t.messageHasSpoiler,
        l = t.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: l }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: l, quoted: !0 }]],
        [
          [
            o("WAWebBulletedListItemFormatMutator").BulletedListItem,
            { selectable: l },
          ],
        ],
        [
          [
            o("WAWebBulletedListItemFormatMutator").HyphenListItem,
            { selectable: l },
          ],
        ],
        [[r("WAWebBulletedListFormatMutator"), { selectable: l, quoted: !0 }]],
        [
          [
            o("WAWebNumberedListItemFormatMutator").NumberedListItem,
            { selectable: l },
          ],
        ],
        [[r("WAWebNumberedListFormatMutator"), { selectable: l, quoted: !0 }]],
        [
          [
            r("WAWebTextMentionFormatMutator"),
            { mentions: a, selectable: l, theme: { quoted: !0 } },
          ],
        ],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            {
              groupMentions: n,
              selectable: l,
              theme: { quoted: !0 },
              clickable: !1,
            },
          ],
        ],
        e({ messageHasSpoiler: i, selectable: l }),
        [
          [r("WAWebBoldFormatMutator"), { selectable: l }],
          [r("WAWebItalicFormatMutator"), { selectable: l }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: l }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: l }]],
        [
          [
            o("WAWebBlockQuoteFormatMutator").BlockQuote,
            { selectable: l, quoted: !0 },
          ],
        ],
      ].filter(Boolean);
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
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
    function L(e) {
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
    function E(e) {
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
    function k(t) {
      t === void 0 && (t = {});
      var n = t,
        a = n.groupMentions,
        i = n.isDraftMessage,
        l = n.mentions,
        s = n.messageHasSpoiler,
        u = n.selectable;
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: u }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: u }]],
        [
          [
            o("WAWebBulletedListItemFormatMutator").BulletedListItem,
            { selectable: u, inline: !0 },
          ],
        ],
        [
          [
            o("WAWebBulletedListItemFormatMutator").HyphenListItem,
            { selectable: u, inline: !0 },
          ],
        ],
        [[r("WAWebBulletedListFormatMutator"), { selectable: u, inline: !0 }]],
        [
          [
            o("WAWebNumberedListItemFormatMutator").NumberedListItem,
            { selectable: u, inline: !0 },
          ],
        ],
        [[r("WAWebNumberedListFormatMutator"), { selectable: u, inline: !0 }]],
        l
          ? [
              [
                r("WAWebTextMentionFormatMutator"),
                {
                  mentions: l,
                  selectable: u,
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
                  selectable: u,
                  clickable: !1,
                  lastMessage: !0,
                  isDraftMessage: i,
                },
              ],
            ]
          : null,
        e({ messageHasSpoiler: s, selectable: u }),
        [
          [r("WAWebBoldFormatMutator"), { selectable: u }],
          [r("WAWebItalicFormatMutator"), { selectable: u }],
          [r("WAWebStrikethroughFormatMutator"), { selectable: u }],
        ],
        [[r("WAWebEmojiFormatMutator"), { selectable: u }]],
        [
          [
            o("WAWebBlockQuoteFormatMutator").BlockQuote,
            { selectable: u, inline: !0 },
          ],
        ],
      ].filter(Boolean);
    }
    function I(e) {
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
    ((l.spoilerMutatorEntry = e),
      (l.EmojiOnly = s),
      (l.LargeEmojiOnly = u),
      (l.StatusText = c),
      (l.StatusCaption = d),
      (l.Compatibility = m),
      (l.Conversation = p),
      (l.Search = _),
      (l.SearchName = f),
      (l.LastMessage = g),
      (l.FTSMessage = h),
      (l.QuickReply = y),
      (l.Unformat = C),
      (l.QuotedMention = b),
      (l.FormattedNotification = v),
      (l.FormattedGroupNotification = S),
      (l.TrustedGroupDesc = R),
      (l.UntrustedGroupDesc = L),
      (l.HeaderAndFooter = E),
      (l.InlineMessage = k),
      (l.RichResponse = I));
  },
  98,
);
