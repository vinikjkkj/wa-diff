__d(
  "WAWebFormatConfiguration",
  [
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
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
    "WAWebNoop",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemFormatMutator",
    "WAWebPreviewFormatGating",
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
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebHighlightFormatMutator"));
    e.compatibility = !0;
    function s(e) {
      var t = e.messageHasSpoiler,
        n = e.selectable,
        a = e.spoilerInteractive,
        i = e.spoilerRevealContext;
      return t !== !0 || !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
        ? null
        : [
            [
              r("WAWebSpoilerFormatMutator"),
              { selectable: n, spoilerInteractive: a, spoilerRevealContext: i },
            ],
          ];
    }
    function u(e) {
      var t = e === void 0 ? {} : e,
        n = t.parseBlockCode,
        a = n === void 0 ? !1 : n,
        i = t.parseInlineCode,
        l = i === void 0 ? !1 : i;
      return [].concat(
        a ? [[[o("WAWebCodeFormatMutator").Code, {}]]] : [],
        l ? [[[r("WAWebInlineCodeFormatMutator"), {}]]] : [],
        [[[r("WAWebSpoilerFormatMutator"), {}]]],
      );
    }
    function c(e) {
      var t = e === void 0 ? {} : e,
        n = t.emojiXstyle,
        o = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: o, emojiXstyle: n }]],
      ];
    }
    function d(e) {
      var t = e === void 0 ? {} : e,
        n = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: n, size: "large" }]],
      ];
    }
    function m(e) {
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
    function p(e) {
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
    function _(e) {
      var t = e === void 0 ? {} : e,
        n = t.emojiXstyle,
        o = t.selectable;
      return [
        [[r("WAWebEmojiFormatMutator"), { selectable: o, emojiXstyle: n }]],
      ];
    }
    function f(t) {
      var n = t.boundary,
        a = t.groupMentions,
        i = t.groupMetadata,
        l = t.mentions,
        u = t.messageHasSpoiler,
        c = t.previewRichFormat,
        d = t.selectable,
        m = t.terms,
        p = s({ messageHasSpoiler: u, selectable: d }),
        _ =
          c === !0 &&
          o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled(),
        f = _ ? e : r("WAWebHighlightFormatMutator");
      return [].concat(
        _
          ? [
              [[o("WAWebCodeFormatMutator").Code, { selectable: d }]],
              [[r("WAWebInlineCodeFormatMutator"), { selectable: d }]],
            ]
          : [],
        [
          [
            [
              r("WAWebTextMentionFormatMutator"),
              { groupMetadata: i, mentions: l, selectable: d },
            ],
          ],
          [
            [
              o("WAWebGroupMentionFormatMutator").GroupMention,
              { groupMentions: a, selectable: d, clickable: !1 },
            ],
          ],
        ],
        p != null ? [p] : [],
        [
          [
            [r("WAWebBoldFormatMutator"), { selectable: d }],
            [r("WAWebItalicFormatMutator"), { selectable: d }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: d }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: d }]],
          [[f, { terms: m, boundary: n, selectable: d, ignoreDiacritics: !0 }]],
        ],
      );
    }
    function g(e) {
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
    function h(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.groupMentions,
        a = t.groupMetadata,
        i = t.isDraftMessage,
        l = t.mentions,
        u = t.messageHasSpoiler,
        c = t.selectable,
        d = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled(),
        m = [];
      (d &&
        (m.push([[o("WAWebCodeFormatMutator").Code, { selectable: c }]]),
        m.push([[r("WAWebInlineCodeFormatMutator"), { selectable: c }]])),
        l &&
          m.push([
            [
              r("WAWebTextMentionFormatMutator"),
              {
                mentions: l,
                selectable: c,
                lastMessage: !0,
                isDraftMessage: i,
                groupMetadata: a,
              },
            ],
          ]),
        n &&
          m.push([
            [
              o("WAWebGroupMentionFormatMutator").GroupMention,
              {
                groupMentions: n,
                selectable: c,
                clickable: !1,
                lastMessage: !0,
                isDraftMessage: i,
              },
            ],
          ]));
      var p = s({ messageHasSpoiler: u, selectable: c });
      return (
        p != null && m.push(p),
        d &&
          m.push([
            [r("WAWebBoldFormatMutator"), { selectable: c }],
            [r("WAWebItalicFormatMutator"), { selectable: c }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: c }],
          ]),
        m.push([[r("WAWebEmojiFormatMutator"), { selectable: c }]]),
        m
      );
    }
    function y(t) {
      var n = t.boundary,
        a = t.groupMentions,
        i = t.groupMetadata,
        l = t.mentions,
        u = t.messageHasSpoiler,
        c = t.selectable,
        d = t.terms,
        m = s({ messageHasSpoiler: u, selectable: c }),
        p = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled(),
        _ = p ? e : r("WAWebHighlightFormatMutator");
      return [[[o("WAWebCodeFormatMutator").Code, { selectable: c }]]].concat(
        p ? [[[r("WAWebInlineCodeFormatMutator"), { selectable: c }]]] : [],
        [
          [
            [
              r("WAWebTextMentionFormatMutator"),
              { groupMetadata: i, mentions: l, selectable: c },
            ],
          ],
          [
            [
              o("WAWebGroupMentionFormatMutator").GroupMention,
              { groupMentions: a, selectable: c, clickable: !1 },
            ],
          ],
        ],
        m != null ? [m] : [],
        [
          [
            [r("WAWebBoldFormatMutator"), { selectable: c }],
            [r("WAWebItalicFormatMutator"), { selectable: c }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: c }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: c }]],
          [[_, { terms: d, boundary: n, selectable: c }]],
        ],
      );
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
    function b(e) {
      var t = e.groupMentions,
        n = e.mentions,
        a = e.messageHasSpoiler,
        i = e.selectable,
        l = e.spoilerRevealContext,
        u = s({
          messageHasSpoiler: a,
          selectable: i,
          spoilerInteractive: !0,
          spoilerRevealContext: l,
        });
      return [
        [[o("WAWebCodeFormatMutator").Code, { selectable: i }]],
        [[r("WAWebInlineCodeFormatMutator"), { selectable: i, quoted: !0 }]],
        [
          [
            o("WAWebBulletedListItemFormatMutator").BulletedListItem,
            { selectable: i },
          ],
        ],
        [
          [
            o("WAWebBulletedListItemFormatMutator").HyphenListItem,
            { selectable: i },
          ],
        ],
        [[r("WAWebBulletedListFormatMutator"), { selectable: i, quoted: !0 }]],
        [
          [
            o("WAWebNumberedListItemFormatMutator").NumberedListItem,
            { selectable: i },
          ],
        ],
        [[r("WAWebNumberedListFormatMutator"), { selectable: i, quoted: !0 }]],
        [
          [
            r("WAWebTextMentionFormatMutator"),
            { mentions: n, selectable: i, theme: { quoted: !0 } },
          ],
        ],
        [
          [
            o("WAWebGroupMentionFormatMutator").GroupMention,
            {
              groupMentions: t,
              selectable: i,
              theme: { quoted: !0 },
              clickable: !1,
            },
          ],
        ],
      ]
        .concat(u != null ? [u] : [], [
          [
            [r("WAWebBoldFormatMutator"), { selectable: i }],
            [r("WAWebItalicFormatMutator"), { selectable: i }],
            [r("WAWebStrikethroughFormatMutator"), { selectable: i }],
          ],
          [[r("WAWebEmojiFormatMutator"), { selectable: i }]],
          [
            [
              o("WAWebBlockQuoteFormatMutator").BlockQuote,
              { selectable: i, quoted: !0 },
            ],
          ],
        ])
        .filter(Boolean);
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
    function k(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.groupMentions,
        a = t.isDraftMessage,
        i = t.mentions,
        l = t.messageHasSpoiler,
        u = t.selectable,
        c = t.spoilerRevealContext;
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
        i
          ? [
              [
                r("WAWebTextMentionFormatMutator"),
                {
                  mentions: i,
                  selectable: u,
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
                  selectable: u,
                  clickable: !1,
                  lastMessage: !0,
                  isDraftMessage: a,
                },
              ],
            ]
          : null,
        s({
          messageHasSpoiler: l,
          selectable: u,
          spoilerInteractive: !0,
          spoilerRevealContext: c,
        }),
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
    ((l.spoilerMutatorEntry = s),
      (l.NotificationSpoilerMask = u),
      (l.EmojiOnly = c),
      (l.LargeEmojiOnly = d),
      (l.StatusText = m),
      (l.StatusCaption = p),
      (l.Compatibility = _),
      (l.Search = f),
      (l.SearchName = g),
      (l.LastMessage = h),
      (l.FTSMessage = y),
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
