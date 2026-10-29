__d(
  "WAWebTextFormatUtils",
  [
    "invariant",
    "$InternalEnum",
    "Lexical",
    "WAWebABProps",
    "WAWebBidiParagraphNode",
    "WAWebDelimiterNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebQuoteLineUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
        "Bold",
        "Italic",
        "Strikethrough",
        "Spoiler",
        "Code",
        "InlineCode",
        "BulletedList",
        "NumberedList",
        "Quote",
      ]),
      u = [e.BulletedList, e.NumberedList, e.Quote],
      c = 99,
      d = n("$InternalEnum").Mirrored(["Remove", "Add", "Skip"]);
    function m() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e || !e.isCollapsed()) return null;
      var t = o("Lexical").$createTextNode("");
      e.insertNodes([t]);
      for (
        var n = [t], a = t.getPreviousSibling(), i = t.getNextSibling();
        o("Lexical").$isTextNode(a) && o("Lexical").$isTextNode(i);
      ) {
        var l = null;
        for (var s of P)
          if (
            a.getTextContent().endsWith(s) &&
            i.getTextContent().startsWith(s)
          ) {
            l = s;
            break;
          }
        if (l == null) break;
        var u = void 0,
          c = void 0,
          d = o("WAWebLexicalUtils").$splitText(
            a,
            a.getTextContentSize() - l.length,
          );
        ((a = d[0]), (u = d[1]));
        var m = o("WAWebLexicalUtils").$splitText(i, l.length);
        if (((c = m[0]), (i = m[1]), u && c)) {
          var p,
            _,
            g = o("WAWebDelimiterNode").$createDelimiterNode(l, "open"),
            h = o("WAWebDelimiterNode").$createDelimiterNode(l, "close");
          ((p = u) == null || p.replace(g),
            (_ = c) == null || _.replace(h),
            (n = [g].concat(n, [h])));
        }
      }
      if (n.length === 1)
        return {
          startNode: t,
          startOffset: -1,
          endNode: t,
          endOffset: -1,
          selectedNodes: [t],
          isCollapsed: !0,
          selection: e,
          isMultiLines: !1,
        };
      var y = f(
        n,
        0,
        r("nullthrows")(n[n.length - 1]).getTextContentSize() - 1,
      );
      return y
        ? babelHelpers.extends({}, y, {
            startNode: r("nullthrows")(y.selectedNodes[0]),
            endNode: r("nullthrows")(
              y.selectedNodes[y.selectedNodes.length - 1],
            ),
            isCollapsed: !0,
            selection: e,
            isMultiLines: !1,
          })
        : null;
    }
    function p() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return null;
      if (e.isCollapsed()) return m();
      var t = e.getNodes().filter(o("Lexical").$isTextNode);
      if (t.length === 0) return null;
      var n = e.anchor.offset,
        a = e.focus.offset;
      if (e.isBackward()) {
        var i = [a, n];
        ((n = i[0]), (a = i[1]));
      }
      a--;
      var l = t[0],
        s = t[t.length - 1],
        u = l.getParent() !== s.getParent(),
        c = f(t, n, a);
      return c
        ? babelHelpers.extends({}, c, {
            startNode: r("nullthrows")(c.selectedNodes[0]),
            endNode: r("nullthrows")(
              c.selectedNodes[c.selectedNodes.length - 1],
            ),
            isCollapsed: !1,
            selection: e,
            isMultiLines: u,
          })
        : null;
    }
    function _(e, t, n, r, a, i, l) {
      for (var s = t, u = n; ; ) {
        var c = e[s];
        if (c == null || (c === e[r] && u > a)) return null;
        if (
          (o("WAWebDelimiterNode").$isDelimiterNode(c) && !c.isOpen()) ||
          (o("WAWebDelimiterNode").$isDelimiterNode(c) && !i[l(c, "close")]) ||
          u === c.getTextContentSize()
        ) {
          (s++, (u = 0));
          continue;
        }
        if (c.getTextContent()[u] === " ") {
          u++;
          continue;
        }
        break;
      }
      return { startNodeIndex: s, startOffset: u };
    }
    function f(e, t, n) {
      var r = [].concat(e),
        a = t,
        i = n,
        l = 0,
        s = r.length - 1;
      if (
        (o("WAWebDelimiterNode").$isDelimiterNode(r[l]) && (a = 0),
        o("WAWebDelimiterNode").$isDelimiterNode(r[s]) &&
          (i = r[s].getTextContentSize() - 1),
        a === 0)
      )
        for (
          var u;
          (u = r[l].getPreviousSibling()) &&
          o("WAWebDelimiterNode").$isDelimiterNode(u);
        )
          (r.unshift(u), (a = 0), s++);
      if (i === r[s].getTextContentSize() - 1)
        for (
          var c;
          (c = r[s].getNextSibling()) &&
          o("WAWebDelimiterNode").$isDelimiterNode(c);
        )
          (r.push(c), s++, (i = c.getTextContentSize() - 1));
      var d = function (t, n) {
          return t.getTextContent() + "-" + n;
        },
        m = {};
      r.forEach(function (e) {
        var t;
        if (o("WAWebDelimiterNode").$isDelimiterNode(e)) {
          var n = d(e, e.getPosition());
          m[n] = ((t = m[n]) != null ? t : 0) + 1;
        }
      });
      var p = _(r, l, a, s, i, m, d);
      if (p == null) return null;
      for (l = p.startNodeIndex, a = p.startOffset; ; ) {
        var f = r[s];
        if (f == null || (f === r[l] && a > i)) return null;
        if (
          (o("WAWebDelimiterNode").$isDelimiterNode(f) && f.isOpen()) ||
          (o("WAWebDelimiterNode").$isDelimiterNode(f) && !m[d(f, "open")]) ||
          i === -1
        ) {
          var g;
          (s--,
            (i = ((g = r[s]) == null ? void 0 : g.getTextContentSize()) - 1));
          continue;
        }
        if (f.getTextContent()[i] === " ") {
          i--;
          continue;
        }
        break;
      }
      return { selectedNodes: r.slice(l, s + 1), startOffset: a, endOffset: i };
    }
    function g(t, n) {
      var r = t.endOffset,
        a = t.isCollapsed,
        i = t.selection,
        l = t.startOffset,
        s = t.startNode,
        u = t.endNode;
      if (!a && (l !== 0 || r !== u.getTextContentSize() - 1))
        if (s === u) {
          var c = s.splitText(l, r + 1);
          ((s = l === 0 ? c[0] : c[1]), (u = s));
        } else {
          if (l !== 0) {
            var d = s.splitText(l);
            s = d[1];
          }
          var m = u.splitText(r + 1);
          u = m[0];
        }
      var p = N(n),
        _ = o("WAWebDelimiterNode").$createDelimiterNode(p, "open"),
        f = o("WAWebDelimiterNode").$createDelimiterNode(p, "close");
      (s.insertBefore(_), u.insertAfter(f));
      var g = _.getPreviousSibling(),
        h = g == null ? void 0 : g.getTextContent();
      h != null &&
        h[h.length - 1] !== " " &&
        !o("WAWebDelimiterNode").$isDelimiterNode(g) &&
        _.insertBefore(o("Lexical").$createTextNode(" "));
      var y = f.getNextSibling(),
        C = y == null ? void 0 : y.getTextContent();
      C != null &&
        C[0] !== " " &&
        !o("WAWebDelimiterNode").$isDelimiterNode(y) &&
        f.insertAfter(o("Lexical").$createTextNode(" "));
      var b = n !== e.InlineCode && n !== e.Code;
      M(i, s, u, b);
    }
    function h(e, t) {
      var n;
      t === void 0 && (t = { keepNumberedList: !1 });
      for (
        var r = t,
          a = r.keepNumberedList,
          i = e.endNode,
          l = e.startNode,
          s = v(l),
          u = (n = i.getParent()) == null ? void 0 : n.getNextSibling();
        s instanceof o("WAWebBidiParagraphNode").BidiParagraphNode;
      ) {
        var c = a && !!s.getNumberNode();
        if (!c) {
          var d,
            m,
            p =
              (d = (m = s.getBulletNode()) != null ? m : s.getNumberNode()) !=
              null
                ? d
                : s.getQuoteLineNode();
          if (p) {
            var _ = p.getNextSibling();
            if ((p.remove(), o("Lexical").$isTextNode(_))) {
              var f = _.splitText(1),
                g = f[0];
              g.remove();
            }
          }
        }
        if (((s = s.getNextSibling()), s === u)) break;
      }
    }
    function y(t, n) {
      var r,
        a = t.endNode,
        i = t.startNode,
        l = v(i),
        s = l,
        u = (r = a.getParent()) == null ? void 0 : r.getNextSibling(),
        d = 1;
      if (n === e.NumberedList) {
        var m,
          p = parseInt(
            (m = l.getNumberNode()) == null ? void 0 : m.getTextContent(),
            10,
          );
        if (p) d = p;
        else {
          var _,
            f = l.getPreviousSibling(),
            g = parseInt(
              f instanceof o("WAWebBidiParagraphNode").BidiParagraphNode
                ? (_ = f.getNumberNode()) == null
                  ? void 0
                  : _.getTextContent()
                : null,
              10,
            );
          g && (d = Math.min(g + 1, c));
        }
      }
      for (
        h(t, { keepNumberedList: n === e.NumberedList });
        s instanceof o("WAWebBidiParagraphNode").BidiParagraphNode;
      ) {
        w(s.getFirstChild());
        var y = s.getFirstChild();
        if (
          (!y &&
            !t.isMultiLines &&
            ((y = o("Lexical").$createTextNode("")), s.append(y)),
          y)
        )
          if (n === e.BulletedList)
            y.insertBefore(
              o("WAWebListBulletNode").$createListBulletNode("* "),
            );
          else if (n === e.NumberedList) {
            if (
              (o("WAWebListNumberNode").$isListNumberNode(y)
                ? (d = parseInt(y.getTextContent(), 10))
                : y.insertBefore(
                    o("WAWebListNumberNode").$createListNumberNode(d + ". "),
                  ),
              d++,
              d > c)
            )
              break;
          } else
            n === e.Quote &&
              y.insertBefore(
                o("WAWebListNumberNode").$createListNumberNode("> "),
              );
        if (((s = s.getNextSibling()), s === u)) break;
      }
    }
    function C(t) {
      return (
        t === e.Quote &&
        o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_menu_items_enabled",
        )
      );
    }
    function b(e, t) {
      t === void 0 && (t = !1);
      for (
        var n = e.endNode,
          a = e.startNode,
          i = v(a),
          l = r("nullthrows")(n.getParent()).getNextSibling(),
          s = S(i),
          u = [],
          c = [],
          d = i;
        d instanceof o("WAWebBidiParagraphNode").BidiParagraphNode && d !== l;
      ) {
        var m = d.getTextContent(),
          p = o("WAWebQuoteLineUtils").isInsideCodeBlock(m);
        (s || p
          ? (c = [])
          : m.trim() !== ""
            ? (u.push.apply(u, c.concat([d])), (c = []))
            : t && u.length > 0 && c.push(d),
          p && (s = !s),
          (d = d.getNextSibling()));
      }
      return u;
    }
    function v(e) {
      var t = e.getParent();
      return (
        t instanceof o("WAWebBidiParagraphNode").BidiParagraphNode ||
          s(0, 189089),
        t
      );
    }
    function S(e) {
      for (var t = [], n = e.getPreviousSibling(); n; )
        (t.push(n.getTextContent()), (n = n.getPreviousSibling()));
      return o("WAWebQuoteLineUtils").isInsideCodeBlock(t.join("\n"));
    }
    function R(t) {
      var n = b(
        t,
        o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_multiline_quotes",
        ),
      );
      if (n.length === 0) {
        y(t, e.Quote);
        return;
      }
      for (var r of n)
        if (r.getQuoteLineNode() == null) {
          w(r.getFirstChild());
          var a = r.getFirstChild();
          (a == null && ((a = o("Lexical").$createTextNode("")), r.append(a)),
            a.insertBefore(
              o("WAWebListNumberNode").$createListNumberNode(
                o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX,
              ),
            ));
        }
    }
    function L(e) {
      for (var t of b(e)) {
        var n = t.getQuoteLineNode();
        if (n) {
          var r = n.getNextSibling();
          if ((n.remove(), o("Lexical").$isTextNode(r))) {
            var a = r.splitText(1),
              i = a[0];
            i.remove();
          }
        }
      }
    }
    function E(e, t) {
      var n = e.endOffset,
        o = e.selectedNodes,
        a = e.selection,
        i = e.startOffset,
        l = r("nullthrows")(T(o, i, t)),
        s = r("nullthrows")(D({ format: t, nodes: o, offset: n }));
      (M(a, l, s), l.remove(), s.remove());
    }
    function k(t, n) {
      var a = t.endNode,
        i = t.endOffset,
        l = t.isCollapsed,
        s = t.isMultiLines,
        c = t.selectedNodes,
        m = t.startNode,
        p = t.startOffset,
        _ = u.includes(n),
        f = n === e.Code;
      if (s && !_ && !f) return d.Skip;
      if (_) {
        var g = v(m),
          h = r("nullthrows")(a.getParent()).getNextSibling();
        if (!s && g.getTextContentSize() === 0) return I(g, n);
        if (C(n)) {
          var y = b(t);
          return y.length === 0
            ? d.Skip
            : y.every(function (e) {
                  return e.getQuoteLineNode() != null;
                })
              ? d.Remove
              : d.Add;
        }
        for (
          var S = !0, R = g;
          R instanceof o("WAWebBidiParagraphNode").BidiParagraphNode;
        ) {
          if (
            R.getTextContentSize() !== 0 &&
            ((n === e.BulletedList && R.getBulletNode() == null) ||
              (n === e.NumberedList && R.getNumberNode() == null) ||
              (n === e.Quote && R.getQuoteLineNode() == null))
          ) {
            S = !1;
            break;
          }
          if (((R = R.getNextSibling()), R === h)) break;
        }
        return S ? d.Remove : d.Add;
      }
      if (
        m !== a &&
        ((p !== 0 && x([m]).length !== 0) ||
          (i + 1 !== a.getTextContentSize() && x([a]).length !== 0))
      )
        return d.Skip;
      var L = T(c, p, n),
        E = D({ format: n, nodes: c, offset: i }),
        k = !!(L && E);
      if (!k) {
        var $ = x(l ? [c[0].getPreviousSibling(), c[0].getNextSibling()] : c);
        if (
          !$.some(function (e) {
            return e === n;
          }) &&
          !$.some(function (t) {
            return t === e.Code || t === e.InlineCode;
          })
        )
          return d.Add;
      }
      return k ? d.Remove : d.Skip;
    }
    function I(e, t) {
      return C(t) && S(e) ? d.Skip : d.Add;
    }
    function T(e, t, n) {
      if (t !== 0) return null;
      for (var r of e) {
        if (!o("WAWebDelimiterNode").$isDelimiterNode(r)) break;
        if (r.getTextContent() === N(n)) return r;
      }
      return null;
    }
    function D(e) {
      var t,
        n = e.format,
        r = e.nodes,
        a = e.offset;
      if (
        a + 1 !==
        ((t = r[r.length - 1]) == null ? void 0 : t.getTextContentSize())
      )
        return null;
      for (var i = r.length - 1; i >= 0; i--) {
        var l = r[i];
        if (!o("WAWebDelimiterNode").$isDelimiterNode(l)) break;
        if (l.getTextContent() === N(n)) return l;
      }
      return null;
    }
    function x(t) {
      var n = [];
      return (
        t.forEach(function (t) {
          if (o("Lexical").$isTextNode(t)) {
            var a = [
              ["Bold", "bold"],
              ["Italic", "italic"],
              ["Strikethrough", "strikethrough"],
            ];
            if (
              (a.forEach(function (o) {
                var a = o[0],
                  i = o[1];
                t.hasFormat(i) && n.push(r("nullthrows")(e.cast(a)));
              }),
              t.hasFormat("code"))
            ) {
              var i = t.getStyle().includes("border-radius");
              n.push(i ? e.InlineCode : e.Code);
            }
          }
        }),
        n
      );
    }
    var $ = {};
    (($[e.Bold] = "*"),
      ($[e.Italic] = "_"),
      ($[e.Strikethrough] = "~"),
      ($[e.Spoiler] = "||"),
      ($[e.Code] = "```"),
      ($[e.InlineCode] = "`"));
    var P = Array.from(Object.values($));
    function N(e) {
      return r("nullthrows")($[e]);
    }
    function M(e, t, n, r) {
      r === void 0 && (r = !0);
      for (
        var a = t, i = n;
        r &&
        o("WAWebDelimiterNode").$isDelimiterNode(a) &&
        o("WAWebDelimiterNode").$isDelimiterNode(i) &&
        a.getTextContent() === i.getTextContent();
      )
        ((a = o("WAWebLexicalUtils").assertTextNode(a.getNextSibling())),
          (i = o("WAWebLexicalUtils").assertTextNode(i.getPreviousSibling())));
      e.setTextNodeRange(a, 0, i, i.getTextContentSize());
    }
    function w(e) {
      if (e) {
        var t = e.getTextContent(),
          n = t.trimStart();
        if (n.length === 0) {
          e.remove();
          return;
        }
        var r = t.length - n.length;
        if (!(r === 0 || !o("Lexical").$isTextNode(e))) {
          var a = e.splitText(r),
            i = a[0];
          i.remove();
        }
      }
    }
    function A(e) {
      var t = p();
      if (!t) return !1;
      var n = k(t, e);
      if (u.includes(e))
        switch (n) {
          case d.Add:
            return (C(e) ? R(t) : y(t, e), !0);
          case d.Remove:
            return (C(e) ? L(t) : h(t), !0);
          case d.Skip:
            return !1;
        }
      switch (k(t, e)) {
        case d.Add:
          return (g(t, e), !0);
        case d.Remove:
          return (E(t, e), !0);
        case d.Skip:
          return !1;
      }
    }
    ((l.TextFormatType = e),
      (l.TextFormatActionType = d),
      (l.$normalizeTextSelection = p),
      (l.$getTextFormatAction = k),
      (l.$toggleTextFormat = A));
  },
  98,
);
