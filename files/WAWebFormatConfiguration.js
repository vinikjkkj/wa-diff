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
    "WAWebStatusLinkFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "WAWebTextMentionFormatMutator",
    "cr:6000",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.emojiXstyle,
          o = e.selectable;
        return [
          [[r("WAWebEmojiFormatMutator"), { selectable: o, emojiXstyle: n }]],
        ];
      },
      s = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.selectable;
        return [
          [[r("WAWebEmojiFormatMutator"), { selectable: n, size: "large" }]],
        ];
      },
      u = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.dataTab,
          a = e.emojiXstyle,
          i = e.links,
          l = e.linkXstyle,
          s = e.selectable;
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
      },
      c = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.links,
          a = e.linkXstyle,
          i = e.selectable;
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
      },
      d = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.selectable;
        return [[[r("WAWebEmojiFormatMutator"), { selectable: n }]]];
      },
      m = function (t) {
        var e = t === void 0 ? {} : t,
          a = e.mentions,
          i = e.groupMentions,
          l = e.hasMentionAll,
          s = e.links,
          u = e.phoneNumbers,
          c = e.selectable,
          d = e.trusted,
          m = e.fromMe,
          p = e.fromChatWid,
          _ = e.commands,
          f = e.parseInlineCode,
          g = f === void 0 ? !1 : f,
          h = e.parseLists,
          y = h === void 0 ? !1 : h,
          C = e.parseQuotes,
          b = C === void 0 ? !1 : C,
          v = e.parseHeadings,
          S = v === void 0 ? !1 : v,
          R = e.onLinkClick,
          L = R === void 0 ? r("WAWebNoop") : R,
          E = e.terms,
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
            y
              ? [[r("WAWebBulletedListFormatMutator"), { selectable: c }]]
              : null,
            y
              ? [
                  [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                    { selectable: c },
                  ],
                ]
              : null,
            y
              ? [[r("WAWebNumberedListFormatMutator"), { selectable: c }]]
              : null,
            d
              ? [
                  [
                    r("WAWebLinkFormatMutator"),
                    { links: s, selectable: c, onLinkClick: L },
                  ],
                ]
              : null,
            a
              ? [
                  [
                    r("WAWebMentionFormatMutator"),
                    { mentions: a, selectable: c },
                  ],
                ]
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
      },
      p = function (t) {
        var e = t.boundary,
          n = t.groupMentions,
          a = t.mentions,
          i = t.selectable,
          l = t.terms;
        return [
          [
            [
              r("WAWebTextMentionFormatMutator"),
              { mentions: a, selectable: i },
            ],
          ],
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
              { terms: l, boundary: e, selectable: i, ignoreDiacritics: !0 },
            ],
          ],
        ];
      },
      _ = function (t) {
        var e = t.emojiXstyle,
          n = t.terms;
        return [
          [[r("WAWebEmojiFormatMutator"), { emojiXstyle: e, selectable: !1 }]],
          [
            [
              r("WAWebHighlightFormatMutator"),
              { terms: n, ignoreDiacritics: !0 },
            ],
          ],
        ];
      },
      f = function (t) {
        t === void 0 && (t = {});
        var e = o("WAWebABProps").getABPropConfigValue(
            "enable_clear_formatted_preview",
          ),
          n = t,
          a = n.groupMentions,
          i = n.isDraftMessage,
          l = n.mentions,
          s = n.selectable;
        return [
          e ? null : [[o("WAWebCodeFormatMutator").Code, { selectable: s }]],
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
          e
            ? null
            : [
                [r("WAWebBoldFormatMutator"), { selectable: s }],
                [r("WAWebItalicFormatMutator"), { selectable: s }],
                [r("WAWebStrikethroughFormatMutator"), { selectable: s }],
              ],
          [[r("WAWebEmojiFormatMutator"), { selectable: s }]],
        ].filter(Boolean);
      },
      g = function (t) {
        var e = t.boundary,
          n = t.groupMentions,
          a = t.mentions,
          i = t.selectable,
          l = t.terms;
        return [
          [[o("WAWebCodeFormatMutator").Code, { selectable: i }]],
          [
            [
              r("WAWebTextMentionFormatMutator"),
              { mentions: a, selectable: i },
            ],
          ],
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
              { terms: l, boundary: e, selectable: i },
            ],
          ],
        ];
      },
      h = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.selectable;
        return [
          [[o("WAWebCodeFormatMutator").Code, { selectable: n }]],
          [
            [r("WAWebBoldFormatMutator"), { selectable: n }],
            [r("WAWebItalicFormatMutator"), { selectable: n }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: n }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: n }]],
        ];
      },
      y = function (t) {
        var e = t.groupMentions,
          n = t.mentions,
          a = t.selectable;
        return [
          [[o("WAWebCodeFormatMutator").Code, { selectable: a }]],
          [[r("WAWebInlineCodeFormatMutator"), { selectable: a }]],
          [
            [
              r("WAWebTextMentionFormatMutator"),
              { mentions: n, selectable: a },
            ],
          ],
          [
            [
              o("WAWebGroupMentionFormatMutator").GroupMention,
              { groupMentions: e, selectable: a, clickable: !1 },
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
      },
      C = function (t) {
        var e = t.groupMentions,
          n = t.mentions,
          a = t.selectable;
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
          [
            [
              r("WAWebBulletedListFormatMutator"),
              { selectable: a, quoted: !0 },
            ],
          ],
          [
            [
              o("WAWebNumberedListItemFormatMutator").NumberedListItem,
              { selectable: a },
            ],
          ],
          [
            [
              r("WAWebNumberedListFormatMutator"),
              { selectable: a, quoted: !0 },
            ],
          ],
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
                groupMentions: e,
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
      },
      b = function (t) {
        var e = t.groupMentions,
          n = t.mentions,
          a = t.selectable;
        return [
          [[o("WAWebCodeFormatMutator").Code, { selectable: a }]],
          [[r("WAWebRawMentionMutator"), { mentions: n, selectable: a }]],
          [
            [
              o("WAWebRawGroupMentionFormatMutator").RawGroupMention,
              { groupMentions: e },
            ],
          ],
          [
            [r("WAWebBoldFormatMutator"), { selectable: a }],
            [r("WAWebItalicFormatMutator"), { selectable: a }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: a }],
          ],
        ].filter(Boolean);
      },
      v = function (t) {
        var e = t.groupMentions,
          n = t.groupMetadata,
          a = t.mentions,
          i = t.selectable;
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
              { groupMentions: e },
            ],
          ],
          [
            [r("WAWebBoldFormatMutator"), { selectable: i }],
            [r("WAWebItalicFormatMutator"), { selectable: i }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: i }],
          ],
          [[o("WAWebBlockQuoteFormatMutator").BlockQuote, { selectable: i }]],
        ].filter(Boolean);
      },
      S = function (t) {
        var e,
          a = t.links,
          i = !!t.expandedFormattingEnabled,
          l = !!((e = t.bulletPointsEnabled) != null ? e : i),
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
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: s },
                ],
              ]
            : null,
        ].filter(Boolean);
      },
      R = function (t) {
        var e,
          a = !!(t != null && t.expandedFormattingEnabled),
          i = !!((e = t == null ? void 0 : t.bulletPointsEnabled) != null
            ? e
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
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: l },
                ],
              ]
            : null,
        ].filter(Boolean);
      },
      L = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.links,
          o = e.selectable,
          a = e.trusted;
        return [
          a === !0
            ? [[r("WAWebLinkFormatMutator"), { links: n, selectable: o }]]
            : null,
          [[r("WAWebEmojiFormatMutator"), { selectable: o }]],
        ].filter(Boolean);
      },
      E = function (t) {
        t === void 0 && (t = {});
        var e = t,
          n = e.groupMentions,
          a = e.isDraftMessage,
          i = e.mentions,
          l = e.selectable;
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
          [
            [
              r("WAWebBulletedListFormatMutator"),
              { selectable: l, inline: !0 },
            ],
          ],
          [
            [
              o("WAWebNumberedListItemFormatMutator").NumberedListItem,
              { selectable: l, inline: !0 },
            ],
          ],
          [
            [
              r("WAWebNumberedListFormatMutator"),
              { selectable: l, inline: !0 },
            ],
          ],
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
      },
      k = function (t) {
        var e = t.selectable,
          n = t.parseHeadings,
          a = n === void 0 ? !0 : n,
          i = t.parseHeadlessHeadings,
          l = i === void 0 ? !1 : i,
          s = t.parseLists,
          u = s === void 0 ? !0 : s,
          c = t.parseQuotes,
          d = c === void 0 ? !0 : c,
          m = t.parseInlineCode,
          p = m === void 0 ? !0 : m,
          _ = t.showLinks,
          f = _ === void 0 ? !0 : _,
          g = t.links,
          h = t.onLinkClick,
          y = h === void 0 ? r("WAWebNoop") : h;
        return [
          [[o("WAWebCodeFormatMutator").Code, { selectable: e }]],
          p ? [[r("WAWebInlineCodeFormatMutator"), { selectable: e }]] : null,
          [
            [r("WAWebBoldFormatMutator"), { selectable: e }],
            [r("WAWebItalicFormatMutator"), { selectable: e }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: e }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: e }]],
          d
            ? [
                [
                  o("WAWebBlockQuoteFormatMutator").BlockQuote,
                  { selectable: e },
                ],
              ]
            : null,
          u
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                  { selectable: e },
                ],
              ]
            : null,
          u
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                  { selectable: e },
                ],
              ]
            : null,
          u ? [[r("WAWebBulletedListFormatMutator"), { selectable: e }]] : null,
          u
            ? [
                [
                  o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                  { selectable: e },
                ],
              ]
            : null,
          u ? [[r("WAWebNumberedListFormatMutator"), { selectable: e }]] : null,
          f
            ? [
                [
                  r("WAWebLinkFormatMutator"),
                  { links: g, selectable: e, onLinkClick: y },
                ],
              ]
            : null,
          a
            ? [
                [
                  o("WAWebHeadingFormatMutator").AIRichResponseHeading,
                  { selectable: e },
                ],
              ]
            : null,
          l
            ? [
                [
                  o("WAWebHeadingFormatMutator").HeadlessHeading,
                  { selectable: e },
                ],
              ]
            : null,
        ].filter(Boolean);
      };
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
