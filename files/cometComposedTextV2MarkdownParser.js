__d(
  "cometComposedTextV2MarkdownParser",
  [
    "CometComposedTextV2CodeBlockNode.react",
    "CometComposedTextV2CodeBlockNodeRenderer.react",
    "CometComposedTextV2HeadingNode.react",
    "CometComposedTextV2HeadingNodeRenderer.react",
    "CometComposedTextV2ListItemNode.react",
    "CometComposedTextV2ListItemNodeRenderer.react",
    "CometComposedTextV2ListNode.react",
    "CometComposedTextV2ListNodeRenderer.react",
    "CometComposedTextV2ParagraphNode.react",
    "CometComposedTextV2ParagraphNodeRenderer.react",
    "CometComposedTextV2TableCellNode.react",
    "CometComposedTextV2TableCellNodeRenderer.react",
    "CometComposedTextV2TableNode.react",
    "CometComposedTextV2TableNodeRenderer.react",
    "CometComposedTextV2TableRowNode.react",
    "CometComposedTextV2TableRowNodeRenderer.react",
    "CometComposedTextV2UnsupportedURType.react",
    "ComposedInlineStyle",
    "MarkedKatexPlugin",
    "MarkedTokenize",
    "MarkedURInlineEntityPlugin",
    "cometComposedTextV2GenAiTextInlineEntityParser",
    "cometComposedTextV2NodeBuilders",
    "cometComposedTextV2NodeKey",
    "err",
    "justknobx",
    "trustHTML",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      n === void 0 && (n = 0);
      var a =
        e.depth === 1
          ? "h1"
          : e.depth === 2
            ? "h2"
            : e.depth === 3
              ? "h3"
              : e.depth === 4
                ? "h4"
                : e.depth === 5
                  ? "h5"
                  : e.depth === 6
                    ? "h6"
                    : "h2";
      return new (o(
        "CometComposedTextV2HeadingNode.react",
      ).CometComposedTextV2HeadingNode)(
        { key: r("cometComposedTextV2NodeKey")(), tag: a },
        r("CometComposedTextV2HeadingNodeRenderer.react"),
      ).appendMany(v(e.tokens, t, n));
    }
    function u(e) {
      return new (o(
        "CometComposedTextV2CodeBlockNode.react",
      ).CometComposedTextV2CodeBlockNode)(
        {
          content: e.text,
          key: r("cometComposedTextV2NodeKey")(),
          language: e.lang,
        },
        r("CometComposedTextV2CodeBlockNodeRenderer.react"),
      );
    }
    function c(e, t, n) {
      n === void 0 && (n = 0);
      var a;
      e.ordered
        ? (a = "number")
        : e.items.some(function (e) {
              return e.checked != null;
            })
          ? (a = "check")
          : (a = "bullet");
      var i = e.start === "" ? 1 : Number(e.start);
      return new (o(
        "CometComposedTextV2ListNode.react",
      ).CometComposedTextV2ListNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          listType: a,
          start: i,
          tag: e.ordered ? "ol" : "ul",
        },
        r("CometComposedTextV2ListNodeRenderer.react"),
      ).appendMany(
        e.items.map(function (e, a) {
          return new (o(
            "CometComposedTextV2ListItemNode.react",
          ).CometComposedTextV2ListItemNode)(
            {
              checked: e.checked,
              key: r("cometComposedTextV2NodeKey")(),
              value: i + a,
            },
            r("CometComposedTextV2ListItemNodeRenderer.react"),
          ).appendMany(v(e.tokens, t, n));
        }),
      );
    }
    function d(e, t, n) {
      return (
        n === void 0 && (n = 0),
        o("cometComposedTextV2NodeBuilders")
          .buildLinkNode(e.href)
          .appendMany(v(e.tokens, t, n))
      );
    }
    function m(e, t, n) {
      return (
        n === void 0 && (n = 0),
        new (o(
          "CometComposedTextV2ParagraphNode.react",
        ).CometComposedTextV2ParagraphNode)(
          { key: r("cometComposedTextV2NodeKey")() },
          r("CometComposedTextV2ParagraphNodeRenderer.react"),
        ).appendMany(v(e.tokens, t, n))
      );
    }
    function p(e, t, n, a, i) {
      return (
        i === void 0 && (i = 0),
        new (o(
          "CometComposedTextV2TableCellNode.react",
        ).CometComposedTextV2TableCellNode)(
          {
            backgroundColor: null,
            colSpan: null,
            headerState: t,
            key: r("cometComposedTextV2NodeKey")(),
            position: a,
            rowSpan: null,
            verticalAlign: null,
            width: null,
          },
          r("CometComposedTextV2TableCellNodeRenderer.react"),
        ).appendMany(v(e, n, i))
      );
    }
    function _(e, t, n, a, i, l) {
      l === void 0 && (l = 0);
      var s = e.length;
      return new (o(
        "CometComposedTextV2TableRowNode.react",
      ).CometComposedTextV2TableRowNode)(
        { height: null, key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2TableRowNodeRenderer.react"),
      ).appendMany(
        e.map(function (e, r) {
          return p(
            e,
            t,
            n,
            {
              isInFirstColumn: r === 0,
              isInFirstRow: a,
              isInLastColumn: r === s - 1,
              isInLastRow: i,
            },
            l,
          );
        }),
      );
    }
    function f(e, t, n) {
      n === void 0 && (n = 0);
      var a = e.tokens.header.length > 0,
        i = e.tokens.cells.filter(function (e) {
          return e.length > 0;
        }),
        l = i.length,
        s = (a ? 1 : 0) + l;
      return new (o(
        "CometComposedTextV2TableNode.react",
      ).CometComposedTextV2TableNode)(
        {
          colWidths: null,
          frozenColumnCount: null,
          frozenRowCount: null,
          key: r("cometComposedTextV2NodeKey")(),
          rowStriping: null,
        },
        r("CometComposedTextV2TableNodeRenderer.react"),
      ).appendMany(
        [].concat(
          a ? [_(e.tokens.header, "COLUMN", t, !0, s === 1, n)] : [],
          i.map(function (e, r) {
            return _(e, "NO_STATUS", t, !a && r === 0, r === l - 1, n);
          }),
        ),
      );
    }
    function g(e, t, n) {
      if (
        (n === void 0 && (n = 0),
        e.type === "text" && e.tokens != null && e.tokens.length > 0)
      )
        return v(e.tokens, t, n);
      var a = document.createElement("textarea");
      return (
        (a.innerHTML = r("trustHTML")(e.text)),
        [o("cometComposedTextV2NodeBuilders").buildTextNode(a.value, n)]
      );
    }
    var h = {
        b: (e = r("ComposedInlineStyle")).BOLD,
        del: e.STRIKETHROUGH,
        em: e.ITALIC,
        i: e.ITALIC,
        ins: e.UNDERLINE,
        s: e.STRIKETHROUGH,
        strike: e.STRIKETHROUGH,
        strong: e.BOLD,
        u: e.UNDERLINE,
      },
      y = /^<(\/?)(u|ins|s|del|strike|b|strong|i|em)\s*>$/i,
      C = /^<br\s*\/?>$/i;
    function b(e) {
      var t = new Set();
      e.forEach(function (e, n) {
        e > 0 && t.add(h[n]);
      });
      var n = 0;
      return (
        t.forEach(function (e) {
          n += e;
        }),
        n
      );
    }
    function v(e, t, n) {
      n === void 0 && (n = 0);
      var a = [],
        i = new Map();
      return (
        e.forEach(function (e) {
          var l = n | b(i);
          if (e.type === "strong")
            a.push.apply(a, v(e.tokens, t, l | r("ComposedInlineStyle").BOLD));
          else if (e.type === "em")
            a.push.apply(
              a,
              v(e.tokens, t, l | r("ComposedInlineStyle").ITALIC),
            );
          else if (e.type === "codespan")
            a.push.apply(a, g(e, t, l | r("ComposedInlineStyle").CODE));
          else if (e.type === "del")
            a.push.apply(
              a,
              v(e.tokens, t, l | r("ComposedInlineStyle").STRIKETHROUGH),
            );
          else if (e.type === "paragraph") a.push(m(e, t, l));
          else if (e.type === "heading") a.push(s(e, t, l));
          else if (e.type === "table") a.push(f(e, t, l));
          else if (e.type === "list") a.push(c(e, t, l));
          else if (e.type === "code") a.push(u(e));
          else if (e.type === "link") a.push(d(e, t, l));
          else if (e.type === "text") a.push.apply(a, g(e, t, l));
          else if (e.type === "ur-inline-entity") {
            var p;
            if (!Object.hasOwn(t, e.key)) {
              var _;
              a.push(
                o("cometComposedTextV2NodeBuilders").buildTextNode(
                  (_ = e.text) != null ? _ : "",
                  l,
                ),
              );
              return;
            }
            var h = t[e.key].metadata,
              S =
                h.__typename === "GenAILatexItem" &&
                ((p = e.token) == null ? void 0 : p.type) === "katex-inline"
                  ? babelHelpers.extends({}, h, {
                      latex_expression: e.token.text,
                    })
                  : h,
              R = r("cometComposedTextV2GenAiTextInlineEntityParser")(
                S,
                e.text ? e.text : "",
                l,
              );
            R && a.push.apply(a, R);
          } else if (e.type === "katex-block" || e.type === "katex-inline")
            a.push(o("cometComposedTextV2NodeBuilders").buildMathNode(e.text));
          else {
            if (e.type === "space") return;
            if (e.type === "hr")
              a.push(
                o("cometComposedTextV2NodeBuilders").buildThematicBreakNode(),
              );
            else if (e.type === "br")
              a.push(o("cometComposedTextV2NodeBuilders").buildNewLineNode());
            else if (e.type === "escape")
              a.push.apply(
                a,
                g({ raw: e.raw, text: e.text, type: "text" }, t, l),
              );
            else if (e.type === "blockquote")
              a.push(
                o("cometComposedTextV2NodeBuilders")
                  .buildBlockQuoteNode()
                  .appendMany(v(e.tokens, t, l)),
              );
            else if (e.type === "html") {
              var L = e.text.trim(),
                E = L.match(y);
              if (!r("justknobx")._("7351"))
                a.push(
                  o("cometComposedTextV2NodeBuilders").buildTextNode(e.text),
                );
              else if (E != null) {
                var k,
                  I = E[2].toLowerCase(),
                  T = (k = i.get(I)) != null ? k : 0;
                i.set(I, E[1] === "/" ? Math.max(0, T - 1) : T + 1);
              } else
                C.test(L)
                  ? a.push(
                      o("cometComposedTextV2NodeBuilders").buildNewLineNode(),
                    )
                  : a.push(
                      o("cometComposedTextV2NodeBuilders").buildTextNode(
                        e.text,
                        l,
                      ),
                    );
            } else if (e.type === "image")
              e.text !== "" &&
                a.push.apply(
                  a,
                  g({ raw: e.raw, text: e.text, type: "text" }, t, l),
                );
            else throw r("err")("markdown token " + e.type);
          }
        }),
        a
      );
    }
    function S(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        S,
        R,
        L,
        E =
          (r =
            t == null
              ? void 0
              : t.reduce(function (e, t) {
                  return ((e[t.key] = t), e);
                }, {})) != null
            ? r
            : {},
        k = {
          allowSingleTildeStrikethrough:
            n == null ? void 0 : n.allowSingleTildeStrikethrough,
          breaks: (a = n == null ? void 0 : n.breaks) != null ? a : !1,
          isOptimistic:
            (i = n == null ? void 0 : n.isOptimistic) != null ? i : !0,
          plugins: {
            em:
              (l = n == null || (s = n.plugins) == null ? void 0 : s.em) != null
                ? l
                : void 0,
            katexBlock:
              (u =
                n == null || (c = n.plugins) == null ? void 0 : c.katexBlock) !=
              null
                ? u
                : o("MarkedKatexPlugin").katexBlock,
            katexInline:
              (d =
                n == null || (m = n.plugins) == null
                  ? void 0
                  : m.katexInline) != null
                ? d
                : o("MarkedKatexPlugin").katexInline,
            strong:
              (p = n == null || (_ = n.plugins) == null ? void 0 : _.strong) !=
              null
                ? p
                : void 0,
            thinkingBlock:
              (f =
                n == null || (g = n.plugins) == null
                  ? void 0
                  : g.thinkingBlock) != null
                ? f
                : void 0,
            urInlineEntity:
              (h =
                n == null || (y = n.plugins) == null
                  ? void 0
                  : y.urInlineEntity) != null
                ? h
                : o("MarkedURInlineEntityPlugin").urInlineEntity,
          },
          rules: {
            block:
              (C = n == null || (b = n.rules) == null ? void 0 : b.block) !=
              null
                ? C
                : void 0,
            inline: babelHelpers.extends(
              {},
              n == null || (S = n.rules) == null ? void 0 : S.inline,
              {
                text:
                  (R =
                    n == null || (L = n.rules) == null || (L = L.inline) == null
                      ? void 0
                      : L.text) != null
                    ? R
                    : o("MarkedURInlineEntityPlugin")
                        .textWithURInlineEntityAndKatexRule,
              },
            ),
          },
        };
      return o("MarkedTokenize")
        .tokenize(e, k)
        .reduce(function (e, t) {
          try {
            e.push.apply(e, v([t], E));
          } catch (t) {
            var n = t instanceof Error ? t.message : String(t);
            e.push(
              o(
                "CometComposedTextV2UnsupportedURType.react",
              ).buildUnsupportedURTypeNode(n),
            );
          }
          return e;
        }, []);
    }
    l.default = S;
  },
  98,
);
