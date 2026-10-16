__d(
  "WAWebRichTextFormatMessageSendLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAdjustDelimitedRange",
    "WAWebBoldFormatRegex",
    "WAWebCodeBlockFormatRegex",
    "WAWebExtractRangesUsingRegex",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebInlineCodeFormatRegex",
    "WAWebItalicFormatRegex",
    "WAWebLinkify",
    "WAWebMsgType",
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
      p = "~";
    function _(t, n) {
      if (
        t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
        n.isStatus() ||
        (t.viewMode != null && u.has(t.viewMode)) ||
        t.forwardedFromWeb === !0
      )
        return null;
      try {
        return f(t, n);
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
    function f(e, t) {
      if (
        !o("WAWebABProps").getABPropConfigValue("rich_format_logging_enabled")
      )
        return null;
      var n = h(e).filter(g);
      if (n.length === 0) return null;
      var a = v(n),
        i = a.hasCodeBlock,
        l = a.hasMonospace,
        u = a.segmentsWithExclusions,
        c = {
          hasBold: R(r("WAWebBoldFormatRegex"), u, d),
          hasCodeBlock: i,
          hasItalic: R(r("WAWebItalicFormatRegex"), u, m),
          hasMonospace: l,
          hasSpoiler: R(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, u),
          hasStrikethrough: R(r("WAWebStrikethroughFormatRegex"), u, p),
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
    function g(e) {
      return (
        (e.parsesBlockCode &&
          S(r("WAWebCodeBlockFormatRegex"), e.text).length > 0) ||
        (e.parsesInlineCode &&
          S(r("WAWebInlineCodeFormatRegex"), e.text, c).length > 0) ||
        S(r("WAWebBoldFormatRegex"), e.text, d).length > 0 ||
        S(r("WAWebItalicFormatRegex"), e.text, m).length > 0 ||
        S(r("WAWebStrikethroughFormatRegex"), e.text, p).length > 0 ||
        S(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, e.text).length > 0
      );
    }
    function h(e) {
      var t,
        n = ((t = e.mentionedJidList) != null ? t : [])
          .map(function (e) {
            var t;
            return "@" + ((t = r("WAWebWid").user(e)) != null ? t : "");
          })
          .filter(function (e) {
            return e !== "@";
          });
      return [].concat(y(e, n), C(e, n), b(e));
    }
    function y(e, t) {
      return (e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) &&
        e.body != null
        ? [
            {
              mentionTokens: t,
              parsesBlockCode: !0,
              parsesInlineCode: !0,
              text: e.body,
            },
          ]
        : [];
    }
    function C(e, t) {
      var n =
        e.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
        e.isCaptionByUser === !0;
      return e.caption != null && n
        ? [
            {
              mentionTokens: t,
              parsesBlockCode: !0,
              parsesInlineCode: !0,
              text: e.caption,
            },
          ]
        : [];
    }
    function b(e) {
      var t = [];
      if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var n;
        (e.pollName != null &&
          t.push({
            mentionTokens: [],
            parsesBlockCode: !0,
            parsesInlineCode: !1,
            text: e.pollName,
          }),
          (n = e.pollOptions) == null ||
            n.forEach(function (e) {
              e.name != null &&
                t.push({
                  mentionTokens: [],
                  parsesBlockCode: !0,
                  parsesInlineCode: !1,
                  text: e.name,
                });
            }));
      }
      return t;
    }
    function v(e) {
      var t = e.map(function (e) {
        var t = o("WAWebLinkify")
            .findLinks(e.text, !1)
            .map(function (e) {
              return { end: e.index + e.url.length, start: e.index };
            }),
          n = E(e.text, e.mentionTokens),
          a = [].concat(t, n),
          i = e.parsesBlockCode
            ? S(r("WAWebCodeBlockFormatRegex"), e.text).filter(function (e) {
                return !k(e, a);
              })
            : [],
          l = e.parsesInlineCode
            ? S(r("WAWebInlineCodeFormatRegex"), e.text, c)
            : [],
          s = l.filter(function (e) {
            return !L(e, i) && !k(e, a);
          });
        return {
          excludedRanges: [].concat(i, s, a),
          hasBlock: i.length > 0,
          hasInline: s.length > 0,
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
    function S(e, t, n) {
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
    function R(e, t, n) {
      return t.some(function (t) {
        return S(e, t.text, n).some(function (e) {
          return !L(e, t.excludedRanges);
        });
      });
    }
    function L(e, t) {
      return t.some(function (t) {
        return (
          e.start < t.end &&
          t.start < e.end &&
          !(e.start <= t.start && t.end <= e.end)
        );
      });
    }
    function E(e, t) {
      var n = [];
      for (var r of t)
        for (var o = e.indexOf(r); o >= 0; )
          (n.push({ start: o, end: o + r.length }),
            (o = e.indexOf(r, o + r.length)));
      return n;
    }
    function k(e, t) {
      return t.some(function (t) {
        return t.start <= e.start && e.end <= t.end;
      });
    }
    l.maybeCreateRichTextFormatMessageSendCommit = _;
  },
  98,
);
