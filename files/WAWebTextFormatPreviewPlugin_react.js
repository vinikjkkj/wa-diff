__d(
  "WAWebTextFormatPreviewPlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WALogger",
    "WANullthrows",
    "WAWebDelimiterNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebMentionNode",
    "WAWebQuoteLineNode",
    "WAWebTextFormatParser",
    "WDSVars.stylex",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(e) {
      var t = e.blockQuoteEnabled,
        n = e.bulletPointsEnabled,
        r = e.highlightedBotCommands,
        a = e.inlineCodeEnabled,
        i = e.internLinksEnabled,
        l = e.linksEnabled,
        s = e.numberedListEnabled,
        c = e.phoneNumbersEnabled,
        m = o("LexicalComposerContext").useLexicalComposerContext(),
        p = m[0];
      return (
        u(
          function () {
            var e = !1;
            function u() {
              d(p, {
                bulletPointsEnabled: n,
                numberedListEnabled: s,
                inlineCodeEnabled: a,
                blockQuoteEnabled: t,
                internLinksEnabled: i,
                phoneNumbersEnabled: c,
                linksEnabled: l,
                highlightedBotCommands: r,
              });
            }
            var m = p.registerTextContentListener(function () {
                e = !0;
              }),
              _ = p.registerUpdateListener(function () {
                p.isComposing() || !e || ((e = !1), u());
              }),
              f = p.registerMutationListener(
                o("Lexical").ParagraphNode,
                function (e) {
                  for (var t of e) {
                    var n = t[1];
                    if (n === "created" || n === "destroyed") {
                      self.setTimeout(u, 0);
                      break;
                    }
                  }
                },
                { skipInitialization: !0 },
              );
            return function () {
              (m(), f(), _());
            };
          },
          [p, n, s, a, t, r, i, c, l],
        ),
        u(
          function () {
            return (
              d(p, {
                bulletPointsEnabled: n,
                numberedListEnabled: s,
                inlineCodeEnabled: a,
                blockQuoteEnabled: t,
                highlightedBotCommands: r,
                internLinksEnabled: i,
                phoneNumbersEnabled: c,
                linksEnabled: l,
              }),
              function () {
                p.update(v);
              }
            );
          },
          [p, n, s, a, t, r, i, c, l],
        ),
        null
      );
    }
    function d(e, t) {
      e.update(
        function () {
          var e = R();
          if (!e) {
            v();
            return;
          }
          var n = o("WAWebTextFormatParser").parseText(e, t);
          if (!n) {
            v();
            return;
          }
          (m(n), y());
        },
        { tag: "history-merge", skipTransforms: !0 },
      );
    }
    function m(t) {
      try {
        var n = o("Lexical").$getRoot();
        if (!n.getFirstChild()) return;
        var a = b();
        if (!a) return;
        for (var i of t.children) {
          if (!a) break;
          a = p(i, a, []);
        }
      } catch (t) {
        if (t instanceof o("WAWebLexicalUtils").NodeTypeAssertionError)
          (r("gkx")("26258") ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "lexical-text-input",
                  ])),
              )
              .catching(t)
              .sendLogs("lexical-text-input: text format error"),
            v());
        else throw t;
      }
    }
    function p(e, t, n) {
      if (e.text != null) {
        var a = t,
          i = e.text.replace(/\n/g, "");
        if (!i) return a;
        for (a of _(a, i.length)) h(a, n);
        return f(a);
      } else if (
        o("WAWebTextFormatParser").BulletedListItemFormats.has(e.format) &&
        e.children
      ) {
        var l = o("WAWebListBulletNode").$transformToListBulletNode(
            g(t, e.symbol),
          ),
          s = f(l),
          u = s;
        for (var c of e.children) {
          if (!u) break;
          var d = p(c, u, n);
          u = d;
        }
        return u;
      } else if (
        e.format === o("WAWebTextFormatParser").FormatType.NumberedListItem &&
        e.children
      ) {
        var m = o("WAWebListNumberNode").$transformToListNumberNode(
            g(t, e.symbol),
          ),
          y = f(m),
          C = y;
        for (var b of e.children) {
          if (!C) break;
          var v = p(b, C, n);
          C = v;
        }
        return C;
      } else if (
        e.format === o("WAWebTextFormatParser").FormatType.BlockQuote &&
        e.children
      ) {
        var R = o("WAWebQuoteLineNode").$transformToQuoteLineNode(
            g(t, e.symbol),
          ),
          L = f(R),
          E = L;
        for (var k of e.children) {
          if (!E) break;
          var I = p(
            k,
            E,
            [o("WAWebTextFormatParser").FormatType.BlockQuote].concat(n),
          );
          E = I;
        }
        return E;
      } else if (
        e.format === o("WAWebTextFormatParser").FormatType.BotCommand &&
        e.children
      ) {
        var T = t;
        for (var D of e.children) {
          if (!T) break;
          var x = p(
            D,
            T,
            [o("WAWebTextFormatParser").FormatType.BotCommand].concat(n),
          );
          T = x;
        }
        return T;
      } else if (
        e.format === o("WAWebTextFormatParser").FormatType.Link &&
        e.children
      ) {
        var $ = t;
        for (var P of e.children) {
          if (!$) break;
          var N = p(
            P,
            $,
            [o("WAWebTextFormatParser").FormatType.Link].concat(n),
          );
          $ = N;
        }
        return $;
      } else if (e.children) {
        var M = o("WAWebLexicalUtils").assertTextNode(
            S(t),
            "text node starts with an opening symbol",
          ),
          w = o("WAWebDelimiterNode").$transformToDelimiterNode(
            g(M, e.symbol),
            "open",
          ),
          A = f(w);
        M = r("WANullthrows")(A);
        for (var F of e.children) {
          var O = p(F, M, [].concat(n, [e.format]));
          M = r("WANullthrows")(O);
        }
        var B = o("WAWebDelimiterNode").$transformToDelimiterNode(
          g(
            o("WAWebLexicalUtils").assertTextNode(
              M,
              "text node starts with a closing symbol",
            ),
            e.symbol,
          ),
          "close",
        );
        return f(B);
      }
    }
    function* _(e, t) {
      for (var n = e, r = 0; n && r < t; ) {
        n = S(n);
        var o = n.getTextContentSize(),
          a = t - r;
        if (a < o) {
          var i = n.splitText(0, a);
          n = i[0];
        }
        (yield n, (r += o), (n = f(n)));
      }
    }
    function f(e) {
      for (
        var t = e == null ? void 0 : e.getNextSibling();
        t != null && !o("Lexical").$isTextNode(t);
      )
        t = t.getNextSibling();
      if (t != null)
        return o("WAWebLexicalUtils").assertTextNode(
          t,
          "getNextTextNode: has next sibling",
        );
      for (
        var n = o("WAWebLexicalUtils").assertParagraphNode(
            e == null ? void 0 : e.getParent(),
          ),
          r = n;
        r && !t && ((r = r.getNextSibling()), !!r);
      )
        t = o("WAWebLexicalUtils").assertParagraphNode(r).getFirstChild();
      return (
        t &&
        o("WAWebLexicalUtils").assertTextNode(
          t,
          "getNextTextNode: found next node",
        )
      );
    }
    function g(e, t) {
      var n = e.getTextContentSize();
      if (n === t.length) return e;
      if (n > t.length) {
        var o = e.splitText(0, t.length),
          a = o[0];
        return a;
      }
      for (var i = e; i.getTextContentSize() < t.length; ) {
        var l = r("WANullthrows")(f(i)).splitText(
            0,
            t.length - i.getTextContentSize(),
          ),
          s = l[0];
        i = i.mergeWithSibling(s);
      }
      return i;
    }
    function h(e, t, n) {
      if (
        (n === void 0 && (n = !1),
        !(!o("Lexical").$isTextNode(e) || e.isToken()))
      ) {
        L(e);
        for (var r of t)
          switch (r) {
            case o("WAWebTextFormatParser").FormatType.Bold:
              e.toggleFormat("bold");
              break;
            case o("WAWebTextFormatParser").FormatType.Italic:
              e.toggleFormat("italic");
              break;
            case o("WAWebTextFormatParser").FormatType.Strikethrough:
              e.toggleFormat("strikethrough");
              break;
            case o("WAWebTextFormatParser").FormatType.Code:
              e.toggleFormat("code");
              break;
            case o("WAWebTextFormatParser").FormatType.InlineCode:
              (e.toggleFormat("code"),
                E(
                  e,
                  "color: " +
                    o("WDSVars.stylex").WDSVars["--WDS-content-deemphasized"] +
                    ";",
                  "border-radius: 6px;",
                  "background-color: " +
                    o("WDSVars.stylex").WDSVars["--WDS-surface-highlight"] +
                    ";",
                  "padding: 0 4px;",
                ));
              break;
            case o("WAWebTextFormatParser").FormatType.BlockQuote:
              !n &&
                !o("WAWebMentionNode").$isMentionNode(e) &&
                E(e, "color: var(--block-quote-text);");
              break;
            case o("WAWebTextFormatParser").FormatType.BotCommand:
              E(e, "color: var(--bot-command-text);");
              break;
            case o("WAWebTextFormatParser").FormatType.Link: {
              var a =
                o("WDSVars.stylex").WDSVars["--WDS-content-external-link"];
              E(e, "color: " + a);
              break;
            }
            case o("WAWebTextFormatParser").FormatType.BulletedListItem:
            case o("WAWebTextFormatParser").FormatType.HyphenListItem:
            case o("WAWebTextFormatParser").FormatType.NumberedListItem:
              break;
          }
      }
    }
    function y() {
      for (var e = o("Lexical").$getRoot(), t = e.getFirstChild(); t; )
        (o("WAWebLexicalUtils").assertParagraphNode(t),
          C(t),
          (t = t.getNextSibling()));
    }
    function C(e) {
      e.setIndent(e.getTargetIndent());
    }
    function b() {
      for (
        var e = o("WAWebLexicalUtils").assertParagraphNode(
          o("Lexical").$getRoot().getFirstChild(),
        );
        !e.getFirstChild();
      ) {
        if (!e.getNextSibling()) return null;
        e = o("WAWebLexicalUtils").assertParagraphNode(e.getNextSibling());
      }
      var t = e.getFirstChild();
      return (
        t && o("WAWebLexicalUtils").assertTextNode(t, "get first text node")
      );
    }
    function v() {
      var e = o("Lexical").$getRoot();
      e.getChildren().forEach(function (e) {
        (e.setIndent(0),
          e.getChildren().forEach(function (e) {
            if (o("Lexical").$isTextNode(e)) {
              var t = S(e);
              (t.setFormat(0), t.setStyle(""));
            }
          }));
      });
    }
    function S(e) {
      if (
        !(e instanceof o("WAWebListBulletNode").ListBulletNode) &&
        !(e instanceof o("WAWebListNumberNode").ListNumberNode) &&
        !(e instanceof o("WAWebQuoteLineNode").QuoteLineNode) &&
        !(e instanceof o("WAWebDelimiterNode").DelimiterNode)
      )
        return e;
      var t = new (o("Lexical").TextNode)(e.getTextContent());
      return (e.replace(t), t);
    }
    function R() {
      var e = [];
      for (var t of o("Lexical").$getRoot().getChildren()) {
        var n = [];
        for (var r of t.getChildren()) {
          if (!o("Lexical").$isTextNode(r)) {
            n.push(r.getTextContent());
            continue;
          }
          var a = r.getTextContent();
          (o("WAWebMentionNode").$isMentionNode(r) &&
            (a = a.replace(/[\*_~`]/g, "=")),
            n.push(a));
        }
        e.push(n.join(""));
      }
      return e.join("\n");
    }
    function L(e) {
      (e.setStyle(""), e.setFormat(0));
    }
    function E(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      e.setStyle(e.getStyle() + " " + n.join(""));
    }
    l.default = c;
  },
  98,
);
