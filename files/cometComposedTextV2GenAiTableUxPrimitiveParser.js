__d(
  "cometComposedTextV2GenAiTableUxPrimitiveParser",
  [
    "CometComposedTextV2RootNode.react",
    "CometComposedTextV2RootNodeRenderer.react",
    "CometComposedTextV2TableCellNode.react",
    "CometComposedTextV2TableCellNodeRenderer.react",
    "CometComposedTextV2TableNode.react",
    "CometComposedTextV2TableNodeRenderer.react",
    "CometComposedTextV2TableRowNode.react",
    "CometComposedTextV2TableRowNodeRenderer.react",
    "cometComposedTextV2MarkdownParser",
    "cometComposedTextV2NodeBuilders",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return new (o(
        "CometComposedTextV2TableCellNode.react",
      ).CometComposedTextV2TableCellNode)(
        {
          backgroundColor: null,
          colSpan: null,
          headerState: t,
          key: r("cometComposedTextV2NodeKey")(),
          position: n,
          rowSpan: null,
          verticalAlign: null,
          width: null,
        },
        r("CometComposedTextV2TableCellNodeRenderer.react"),
      ).append(o("cometComposedTextV2NodeBuilders").buildTextNode(e));
    }
    function s(e, t, n, a) {
      var i = r("cometComposedTextV2MarkdownParser")(
        e.text,
        e.inline_entities,
        a,
      );
      return new (o(
        "CometComposedTextV2TableCellNode.react",
      ).CometComposedTextV2TableCellNode)(
        {
          backgroundColor: null,
          colSpan: null,
          headerState: t,
          key: r("cometComposedTextV2NodeKey")(),
          position: n,
          rowSpan: null,
          verticalAlign: null,
          width: null,
        },
        r("CometComposedTextV2TableCellNodeRenderer.react"),
      ).appendMany(i);
    }
    function u(t, n, a, i) {
      var l = t.markdown_cells,
        u = t.is_header === !0 ? "COLUMN" : "NO_STATUS";
      if (l != null) {
        var c = l.length;
        return new (o(
          "CometComposedTextV2TableRowNode.react",
        ).CometComposedTextV2TableRowNode)(
          { height: null, key: r("cometComposedTextV2NodeKey")() },
          r("CometComposedTextV2TableRowNodeRenderer.react"),
        ).appendMany(
          l.map(function (e, t) {
            return s(
              e,
              u,
              {
                isInFirstColumn: t === 0,
                isInFirstRow: n,
                isInLastColumn: t === c - 1,
                isInLastRow: a,
              },
              i,
            );
          }),
        );
      }
      var d = t.cells.length;
      return new (o(
        "CometComposedTextV2TableRowNode.react",
      ).CometComposedTextV2TableRowNode)(
        { height: null, key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2TableRowNodeRenderer.react"),
      ).appendMany(
        t.cells.map(function (t, r) {
          return e(t, u, {
            isInFirstColumn: r === 0,
            isInFirstRow: n,
            isInLastColumn: r === d - 1,
            isInLastRow: a,
          });
        }),
      );
    }
    function c(e, t, n) {
      var a = e.length,
        i = null;
      if (n != null) {
        for (var l = 0, s = 0; s < e.length; s++) {
          var c,
            d = e[s],
            m = ((c = d.markdown_cells) != null ? c : d.cells).length;
          m > l && (l = m);
        }
        l > n.overflowCellCount && (i = Array(l).fill(n.overflowCellSize));
      }
      return new (o(
        "CometComposedTextV2TableNode.react",
      ).CometComposedTextV2TableNode)(
        {
          colWidths: i,
          frozenColumnCount: null,
          frozenRowCount: null,
          key: r("cometComposedTextV2NodeKey")(),
          rowStriping: null,
        },
        r("CometComposedTextV2TableNodeRenderer.react"),
      ).appendMany(
        e.map(function (e, n) {
          return u(e, n === 0, n === a - 1, t);
        }),
      );
    }
    function d(e, t, n) {
      return new (o(
        "CometComposedTextV2RootNode.react",
      ).CometComposedTextV2RootNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2RootNodeRenderer.react"),
      ).append(c(e.rows, t, n));
    }
    l.default = d;
  },
  98,
);
