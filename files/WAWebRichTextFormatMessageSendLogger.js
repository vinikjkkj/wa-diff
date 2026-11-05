__d(
  "WAWebRichTextFormatMessageSendLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAdjustDelimitedRange",
    "WAWebBlockQuoteFormatRegex",
    "WAWebBoldFormatRegex",
    "WAWebBulletedListItemFormatRegex",
    "WAWebCodeBlockFormatRegex",
    "WAWebExtractRangesUsingRegex",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebInlineCodeFormatRegex",
    "WAWebItalicFormatRegex",
    "WAWebLinkify",
    "WAWebMsgType",
    "WAWebNumberedListItemFormatRegex",
    "WAWebRichTextFormatMessageSendWamEvent",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebStrikethroughFormatRegex",
    "WAWebViewMode.flow",
    "WAWebWid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set([o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA]),
      c = "`",
      d = "*",
      m = "_",
      p = "~",
      _ = [
        o("WAWebBlockQuoteFormatRegex").QUOTE_REGEX,
        o("WAWebBulletedListItemFormatRegex").BULLETED_LIST_ITEM_REGEX,
        o("WAWebBulletedListItemFormatRegex").HYPHEN_LIST_ITEM_REGEX,
        r("WAWebNumberedListItemFormatRegex"),
      ];
    function f(t, n) {
      if (
        t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
        n.isStatus() ||
        (t.viewMode != null && u.has(t.viewMode)) ||
        t.forwardedFromWeb === !0
      )
        return null;
      try {
        return g(t, n);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[rich_text_format] Failed to classify outgoing message formatting",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("rich-text-format-classification-failed"),
          null
        );
      }
    }
    function g(e, t) {
      if (
        !o("WAWebABProps").getABPropConfigValue("rich_format_logging_enabled")
      )
        return null;
      var n = C(e).filter(h);
      if (n.length === 0) return null;
      var a = R(n),
        i = a.hasCodeBlock,
        l = a.hasMonospace,
        u = a.segmentsWithExclusions,
        c = {
          hasBlockQuote: k(o("WAWebBlockQuoteFormatRegex").QUOTE_REGEX, u),
          hasBold: E(r("WAWebBoldFormatRegex"), u, d),
          hasBulletedList:
            k(
              o("WAWebBulletedListItemFormatRegex").BULLETED_LIST_ITEM_REGEX,
              u,
            ) ||
            k(o("WAWebBulletedListItemFormatRegex").HYPHEN_LIST_ITEM_REGEX, u),
          hasCodeBlock: i,
          hasItalic: E(r("WAWebItalicFormatRegex"), u, m),
          hasMonospace: l,
          hasNumberedList: k(r("WAWebNumberedListItemFormatRegex"), u),
          hasSpoiler: E(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, u),
          hasStrikethrough: E(r("WAWebStrikethroughFormatRegex"), u, p),
        },
        _ =
          c.hasSpoiler && !o("WAWebSpoilerGating").isSpoilerSenderEnabled()
            ? babelHelpers.extends({}, c, { hasSpoiler: !1 })
            : c;
      if (!Object.values(_).some(Boolean)) return null;
      var f = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(t);
      return function () {
        try {
          new (o(
            "WAWebRichTextFormatMessageSendWamEvent",
          ).RichTextFormatMessageSendWamEvent)(
            babelHelpers.extends({ chatType: f }, _),
          ).commit();
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[rich_text_format] Failed to commit outgoing message formatting",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("rich-text-format-commit-failed");
        }
      };
    }
    function h(e) {
      return (
        (e.parsesBlockCode &&
          L(r("WAWebCodeBlockFormatRegex"), e.text).length > 0) ||
        (e.parsesInlineCode &&
          L(r("WAWebInlineCodeFormatRegex"), e.text, c).length > 0) ||
        L(r("WAWebBoldFormatRegex"), e.text, d).length > 0 ||
        L(r("WAWebItalicFormatRegex"), e.text, m).length > 0 ||
        L(r("WAWebStrikethroughFormatRegex"), e.text, p).length > 0 ||
        L(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, e.text).length > 0 ||
        y(e)
      );
    }
    function y(e) {
      return (
        e.parsesLineFormats &&
        _.some(function (t) {
          return I(t, e.text, []);
        })
      );
    }
    function C(e) {
      var t,
        n = ((t = e.mentionedJidList) != null ? t : [])
          .map(function (e) {
            var t;
            return "@" + ((t = r("WAWebWid").user(e)) != null ? t : "");
          })
          .filter(function (e) {
            return e !== "@";
          });
      return [].concat(b(e, n), v(e, n), S(e));
    }
    function b(e, t) {
      return (e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) &&
        e.body != null
        ? [
            {
              mentionTokens: t,
              parsesBlockCode: !0,
              parsesInlineCode: !0,
              parsesLineFormats: !0,
              text: e.body,
            },
          ]
        : [];
    }
    function v(e, t) {
      var n =
        e.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
        e.isCaptionByUser === !0;
      return e.caption != null && n
        ? [
            {
              mentionTokens: t,
              parsesBlockCode: !0,
              parsesInlineCode: !0,
              parsesLineFormats: !0,
              text: e.caption,
            },
          ]
        : [];
    }
    function S(e) {
      var t = [];
      if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var n;
        (e.pollName != null &&
          t.push({
            mentionTokens: [],
            parsesBlockCode: !0,
            parsesInlineCode: !1,
            parsesLineFormats: !1,
            text: e.pollName,
          }),
          (n = e.pollOptions) == null ||
            n.forEach(function (e) {
              e.name != null &&
                t.push({
                  mentionTokens: [],
                  parsesBlockCode: !0,
                  parsesInlineCode: !1,
                  parsesLineFormats: !1,
                  text: e.name,
                });
            }));
      }
      return t;
    }
    function R(e) {
      var t = e.map(function (e) {
        var t = o("WAWebLinkify")
            .findLinks(e.text, !1)
            .map(function (e) {
              return { end: e.index + e.url.length, start: e.index };
            }),
          n = D(e.text, e.mentionTokens),
          a = [].concat(t, n),
          i = e.parsesBlockCode
            ? L(r("WAWebCodeBlockFormatRegex"), e.text).filter(function (e) {
                return !x(e, a);
              })
            : [],
          l = e.parsesInlineCode
            ? L(r("WAWebInlineCodeFormatRegex"), e.text, c)
            : [],
          s = l.filter(function (e) {
            return !T(e, i) && !x(e, a);
          });
        return {
          excludedRanges: [].concat(i, s, a),
          hasBlock: i.length > 0,
          hasInline: s.length > 0,
          parsesLineFormats: e.parsesLineFormats,
          text: e.text,
        };
      });
      return {
        hasCodeBlock: t.some(function (e) {
          return e.hasBlock;
        }),
        hasMonospace: t.some(function (e) {
          return e.hasInline;
        }),
        segmentsWithExclusions: t,
      };
    }
    function L(e, t, n) {
      return r("WAWebExtractRangesUsingRegex")(
        t,
        e,
        1,
        n == null ? void 0 : r("WAWebAdjustDelimitedRange")(n),
      ).map(function (e) {
        var t = e[0],
          n = e[3];
        return { start: t, end: n + 1 };
      });
    }
    function E(e, t, n) {
      return t.some(function (t) {
        return L(e, t.text, n).some(function (e) {
          return !T(e, t.excludedRanges);
        });
      });
    }
    function k(e, t) {
      return t.some(function (t) {
        return t.parsesLineFormats && I(e, t.text, t.excludedRanges);
      });
    }
    function I(e, t, n) {
      e.lastIndex = 0;
      for (var r = e.exec(t); r != null; r = e.exec(t)) {
        var o = { end: r.index + r[0].length, start: r.index };
        if (!T(o, n)) return ((e.lastIndex = 0), !0);
      }
      return !1;
    }
    function T(e, t) {
      return t.some(function (t) {
        return (
          e.start < t.end &&
          t.start < e.end &&
          !(e.start <= t.start && t.end <= e.end)
        );
      });
    }
    function D(e, t) {
      var n = [];
      for (var r of t)
        for (var o = e.indexOf(r); o >= 0; )
          (n.push({ start: o, end: o + r.length }),
            (o = e.indexOf(r, o + r.length)));
      return n;
    }
    function x(e, t) {
      return t.some(function (t) {
        return t.start <= e.start && e.end <= t.end;
      });
    }
    l.maybeCreateRichTextFormatMessageSendCommit = f;
  },
  98,
);
