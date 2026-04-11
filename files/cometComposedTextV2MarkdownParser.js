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
    "trustHTML",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
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
      ).appendMany(g(e.tokens, t, n));
    }
    function s(e) {
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
    function u(e, t, n) {
      return (
        n === void 0 && (n = 0),
        new (o(
          "CometComposedTextV2ListNode.react",
        ).CometComposedTextV2ListNode)(
          {
            key: r("cometComposedTextV2NodeKey")(),
            listType: e.ordered ? "number" : "bullet",
            start: e.start === "" ? 1 : e.start,
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
                value: a + 1,
              },
              r("CometComposedTextV2ListItemNodeRenderer.react"),
            ).appendMany(g(e.tokens, t, n));
          }),
        )
      );
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = 0),
        o("cometComposedTextV2NodeBuilders")
          .buildLinkNode(e.href)
          .appendMany(g(e.tokens, t, n))
      );
    }
    function d(e, t, n) {
      return (
        n === void 0 && (n = 0),
        new (o(
          "CometComposedTextV2ParagraphNode.react",
        ).CometComposedTextV2ParagraphNode)(
          { key: r("cometComposedTextV2NodeKey")() },
          r("CometComposedTextV2ParagraphNodeRenderer.react"),
        ).appendMany(g(e.tokens, t, n))
      );
    }
    function m(e, t, n, a, i) {
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
        ).appendMany(g(e, n, i))
      );
    }
    function p(e, t, n, a, i, l) {
      l === void 0 && (l = 0);
      var s = e.length;
      return new (o(
        "CometComposedTextV2TableRowNode.react",
      ).CometComposedTextV2TableRowNode)(
        { height: null, key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2TableRowNodeRenderer.react"),
      ).appendMany(
        e.map(function (e, r) {
          return m(
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
    function _(e, t, n) {
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
          a ? [p(e.tokens.header, "COLUMN", t, !0, s === 1, n)] : [],
          i.map(function (e, r) {
            return p(e, "NO_STATUS", t, !a && r === 0, r === l - 1, n);
          }),
        ),
      );
    }
    function f(e, t, n) {
      if (
        (n === void 0 && (n = 0),
        e.type === "text" && e.tokens != null && e.tokens.length > 0)
      )
        return g(e.tokens, t, n);
      var a = document.createElement("textarea");
      return (
        (a.innerHTML = r("trustHTML")(e.text)),
        [o("cometComposedTextV2NodeBuilders").buildTextNode(a.value, n)]
      );
    }
    function g(t, n, a) {
      a === void 0 && (a = 0);
      var i = [];
      return (
        t.forEach(function (t) {
          if (t.type === "strong")
            i.push.apply(i, g(t.tokens, n, a | r("ComposedInlineStyle").BOLD));
          else if (t.type === "em")
            i.push.apply(
              i,
              g(t.tokens, n, a | r("ComposedInlineStyle").ITALIC),
            );
          else if (t.type === "codespan")
            i.push.apply(i, f(t, n, a | r("ComposedInlineStyle").CODE));
          else if (t.type === "del")
            i.push.apply(
              i,
              g(t.tokens, n, a | r("ComposedInlineStyle").STRIKETHROUGH),
            );
          else if (t.type === "paragraph") i.push(d(t, n, a));
          else if (t.type === "heading") i.push(e(t, n, a));
          else if (t.type === "table") i.push(_(t, n, a));
          else if (t.type === "list") i.push(u(t, n, a));
          else if (t.type === "code") i.push(s(t));
          else if (t.type === "link") i.push(c(t, n, a));
          else if (t.type === "text") i.push.apply(i, f(t, n, a));
          else if (t.type === "ur-inline-entity") {
            var l;
            if (!(t.key in n)) return;
            var m = n[t.key].metadata,
              p =
                m.__typename === "GenAILatexItem" &&
                ((l = t.token) == null ? void 0 : l.type) === "katex-inline"
                  ? babelHelpers.extends({}, m, {
                      latex_expression: t.token.text,
                    })
                  : m,
              h = r("cometComposedTextV2GenAiTextInlineEntityParser")(
                p,
                t.text ? t.text : "",
              );
            h && i.push.apply(i, h);
          } else if (t.type === "katex-block" || t.type === "katex-inline")
            i.push(o("cometComposedTextV2NodeBuilders").buildMathNode(t.text));
          else {
            if (t.type === "space") return;
            if (t.type === "hr")
              i.push(
                o("cometComposedTextV2NodeBuilders").buildThematicBreakNode(),
              );
            else if (t.type === "br")
              i.push(o("cometComposedTextV2NodeBuilders").buildNewLineNode());
            else if (t.type === "escape")
              i.push.apply(
                i,
                f({ raw: t.raw, text: t.text, type: "text" }, n, a),
              );
            else if (t.type === "blockquote")
              i.push(
                o("cometComposedTextV2NodeBuilders")
                  .buildBlockQuoteNode()
                  .appendMany(g(t.tokens, n, a)),
              );
            else if (t.type === "html")
              i.push(
                o("cometComposedTextV2NodeBuilders").buildTextNode(t.text),
              );
            else throw r("err")("markdown token " + t.type);
          }
        }),
        i
      );
    }
    function h(e, t, n) {
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
        h,
        y,
        C,
        b,
        v,
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
                n == null || (h = n.plugins) == null
                  ? void 0
                  : h.thinkingBlock) != null
                ? f
                : void 0,
            urInlineEntity:
              (y =
                n == null || (C = n.plugins) == null
                  ? void 0
                  : C.urInlineEntity) != null
                ? y
                : o("MarkedURInlineEntityPlugin").urInlineEntity,
          },
          rules: {
            block:
              (b = n == null || (v = n.rules) == null ? void 0 : v.block) !=
              null
                ? b
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
            e.push.apply(e, g([t], E));
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
    l.default = h;
  },
  98,
);
