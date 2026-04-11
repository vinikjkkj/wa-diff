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
    "WAWebStrikethroughFormatMutator",
    "cr:9051",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "*",
      s = "_",
      u = "~",
      c = "```",
      d = "`",
      m = ">",
      p = "*",
      _ = "-",
      f = n("$InternalEnum").Mirrored([
        "Bold",
        "Italic",
        "Strikethrough",
        "Code",
        "InlineCode",
        "BlockQuote",
        "BotCommand",
        "BulletedListItem",
        "HyphenListItem",
        "NumberedListItem",
        "Link",
      ]),
      g = new Set([f.BulletedListItem, f.HyphenListItem]),
      h = new Set([f.Bold, f.Italic, f.Strikethrough, f.Code, f.InlineCode]);
    function y(t, a) {
      switch (t) {
        case r("WAWebBoldFormatMutator"):
          return { format: f.Bold, symbol: e };
        case r("WAWebItalicFormatMutator"):
          return { format: f.Italic, symbol: s };
        case r("WAWebStrikethroughFormatMutator"):
          return { format: f.Strikethrough, symbol: u };
        case o("WAWebBulletedListItemFormatMutator").BulletedListItemWithEmpty:
          return { format: f.BulletedListItem, symbol: p };
        case o("WAWebBulletedListItemFormatMutator").HyphenListItemWithEmpty:
          return { format: f.HyphenListItem, symbol: _ };
        case o("WAWebNumberedListItemFormatMutator").NumberedListItemWithEmpty:
          return { format: f.NumberedListItem, symbol: a[1] };
        case r("WAWebInlineCodeFormatMutator"):
          return { format: f.InlineCode, symbol: d };
        case o("WAWebBlockQuoteFormatMutator").BlockQuoteWithEmpty:
          return { format: f.BlockQuote, symbol: m };
        case o("WAWebCodeFormatMutator").Code:
          return { format: f.Code, symbol: c };
        case o("WAWebBotCommandFormatMutator").BotCommand:
          return { format: f.BotCommand, symbol: "" };
        case n("cr:9051"):
        case r("WAWebPhoneNumberFormatMutator"):
        case r("WAWebLinkFormatMutator"):
          return { format: f.Link, symbol: "" };
        default:
          throw r("err")("Unknown format mutator");
      }
    }
    var C = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.onDelimiter = function () {
            return null;
          }),
          (t.onMutator = function (t, n, r) {
            var e = y(t, r),
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
      b = function (t, a) {
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
          C = y === void 0 ? !1 : y;
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
    function v(e, t) {
      var n = r("WAWebFormat")(e, b(e, t != null ? t : {}), C),
        o = S(n);
      return o !== e ? null : n;
    }
    function S(e) {
      var t = "";
      for (var n of e.children) t += R(n);
      return t;
    }
    function R(e) {
      if (e.text != null) return e.text;
      if (e.children) {
        var t = e.symbol;
        for (var n of e.children) t += R(n);
        return (h.has(e.format) && (t += e.symbol), t);
      }
      throw r("err")("should never reach here");
    }
    ((l.FormatType = f), (l.BulletedListItemFormats = g), (l.parseText = v));
  },
  98,
);
