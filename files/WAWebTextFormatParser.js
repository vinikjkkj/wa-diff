__d(
  "WAWebTextFormatParser",
  [
    "$InternalEnum",
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
    "WAWebBotCommandFormatMutator",
    "WAWebBulletedListItemFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebFormat",
    "WAWebFormatSerializer",
    "WAWebHelpersFindPhoneNumbers",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebLinkify",
    "WAWebNumberedListItemFormatMutator",
    "WAWebPhoneNumberFormatMutator",
    "WAWebSpoilerFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "cr:9051",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "*",
      s = "_",
      u = "~",
      c = "||",
      d = "```",
      m = "`",
      p = ">",
      _ = "*",
      f = "-",
      g = n("$InternalEnum").Mirrored([
        "Bold",
        "Italic",
        "Strikethrough",
        "Spoiler",
        "Code",
        "InlineCode",
        "BlockQuote",
        "BotCommand",
        "BulletedListItem",
        "HyphenListItem",
        "NumberedListItem",
        "Link",
      ]),
      h = new Set([g.BulletedListItem, g.HyphenListItem]),
      y = new Set([
        g.Bold,
        g.Italic,
        g.Strikethrough,
        g.Spoiler,
        g.Code,
        g.InlineCode,
      ]);
    function C(t, a) {
      switch (t) {
        case r("WAWebBoldFormatMutator"):
          return { format: g.Bold, symbol: e };
        case r("WAWebItalicFormatMutator"):
          return { format: g.Italic, symbol: s };
        case r("WAWebStrikethroughFormatMutator"):
          return { format: g.Strikethrough, symbol: u };
        case r("WAWebSpoilerFormatMutator"):
          return { format: g.Spoiler, symbol: c };
        case o("WAWebBulletedListItemFormatMutator").BulletedListItemWithEmpty:
          return { format: g.BulletedListItem, symbol: _ };
        case o("WAWebBulletedListItemFormatMutator").HyphenListItemWithEmpty:
          return { format: g.HyphenListItem, symbol: f };
        case o("WAWebNumberedListItemFormatMutator").NumberedListItemWithEmpty:
          return { format: g.NumberedListItem, symbol: a[1] };
        case r("WAWebInlineCodeFormatMutator"):
          return { format: g.InlineCode, symbol: m };
        case o("WAWebBlockQuoteFormatMutator").BlockQuoteWithEmpty:
          return { format: g.BlockQuote, symbol: p };
        case o("WAWebCodeFormatMutator").Code:
          return { format: g.Code, symbol: d };
        case o("WAWebBotCommandFormatMutator").BotCommand:
          return { format: g.BotCommand, symbol: "" };
        case n("cr:9051"):
        case r("WAWebPhoneNumberFormatMutator"):
        case r("WAWebLinkFormatMutator"):
          return { format: g.Link, symbol: "" };
        default:
          throw r("err")("Unknown format mutator");
      }
    }
    var b = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.onDelimiter = function () {
            return null;
          }),
          (t.onMutator = function (t, n, r) {
            var e = C(t, r),
              o = e.format,
              a = e.symbol;
            return { format: o, symbol: a, children: n.filter(Boolean) };
          }),
          (t.onRoot = function (t) {
            return { children: t.filter(Boolean) };
          }),
          (t.onText = function (t) {
            return { text: t };
          }),
          t
        );
      })(r("WAWebFormatSerializer")),
      v = function (t, a) {
        var e = a.blockQuoteEnabled,
          i = e === void 0 ? !1 : e,
          l = a.bulletPointsEnabled,
          s = l === void 0 ? !1 : l,
          u = a.highlightedBotCommands,
          c = a.inlineCodeEnabled,
          d = c === void 0 ? !1 : c,
          m = a.internLinksEnabled,
          p = m === void 0 ? !1 : m,
          _ = a.linksEnabled,
          f = _ === void 0 ? !1 : _,
          g = a.numberedListEnabled,
          h = g === void 0 ? !1 : g,
          y = a.phoneNumbersEnabled,
          C = y === void 0 ? !1 : y,
          b = a.spoilerEnabled,
          v = b === void 0 ? !1 : b;
        return [
          [[o("WAWebCodeFormatMutator").Code, {}]],
          s
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator")
                    .BulletedListItemWithEmpty,
                  {},
                ],
              ]
            : null,
          s
            ? [
                [
                  o("WAWebBulletedListItemFormatMutator")
                    .HyphenListItemWithEmpty,
                  {},
                ],
              ]
            : null,
          h
            ? [
                [
                  o("WAWebNumberedListItemFormatMutator")
                    .NumberedListItemWithEmpty,
                  {},
                ],
              ]
            : null,
          i
            ? [[o("WAWebBlockQuoteFormatMutator").BlockQuoteWithEmpty, {}]]
            : null,
          d ? [[r("WAWebInlineCodeFormatMutator"), {}]] : null,
          v ? [[r("WAWebSpoilerFormatMutator"), {}]] : null,
          [
            [r("WAWebBoldFormatMutator"), {}],
            [r("WAWebItalicFormatMutator"), {}],
            [r("WAWebStrikethroughFormatMutator"), {}],
          ],
          f
            ? [
                [
                  r("WAWebLinkFormatMutator"),
                  { links: o("WAWebLinkify").findLinks(t) },
                ],
              ]
            : null,
          C
            ? [
                [
                  r("WAWebPhoneNumberFormatMutator"),
                  { phoneNumbers: r("WAWebHelpersFindPhoneNumbers")(t) },
                ],
              ]
            : null,
          p && n("cr:9051") ? [[n("cr:9051"), {}]] : null,
          u
            ? [[o("WAWebBotCommandFormatMutator").BotCommand, { commands: u }]]
            : null,
        ].filter(Boolean);
      };
    function S(e, t) {
      var n = r("WAWebFormat")(e, v(e, t != null ? t : {}), b),
        o = R(n);
      return o !== e ? null : n;
    }
    function R(e) {
      var t = "";
      for (var n of e.children) t += L(n);
      return t;
    }
    function L(e) {
      if (e.text != null) return e.text;
      if (e.children) {
        var t = e.symbol;
        for (var n of e.children) t += L(n);
        return (y.has(e.format) && (t += e.symbol), t);
      }
      throw r("err")("should never reach here");
    }
    ((l.FormatType = g), (l.BulletedListItemFormats = h), (l.parseText = S));
  },
  98,
);
