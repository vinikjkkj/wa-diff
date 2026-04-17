__d(
  "WAWebTextFormatUtils",
  [
    "$InternalEnum",
    "Lexical",
    "WANullthrows",
    "WAWebDelimiterNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "Bold",
        "Italic",
        "Strikethrough",
        "Code",
        "InlineCode",
        "BulletedList",
        "NumberedList",
        "Quote",
      ]),
      s = [e.BulletedList, e.NumberedList, e.Quote],
      u = 99,
      c = n("$InternalEnum").Mirrored(["Remove", "Add", "Skip"]);
    function d() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e || !e.isCollapsed()) return null;
      var t = o("Lexical").$createTextNode("");
      e.insertNodes([t]);
      for (
        var n = [t], a = t.getPreviousSibling(), i = t.getNextSibling();
        a && i;
      ) {
        var l = null;
        for (var s of L)
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
            f,
            g = o("WAWebDelimiterNode").$createDelimiterNode(l, "open"),
            h = o("WAWebDelimiterNode").$createDelimiterNode(l, "close");
          ((p = u) == null || p.replace(g),
            (f = c) == null || f.replace(h),
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
      var y = _(
        n,
        0,
        r("WANullthrows")(n[n.length - 1]).getTextContentSize() - 1,
      );
      return y
        ? babelHelpers.extends({}, y, {
            startNode: r("WANullthrows")(y.selectedNodes[0]),
            endNode: r("WANullthrows")(
              y.selectedNodes[y.selectedNodes.length - 1],
            ),
            isCollapsed: !0,
            selection: e,
            isMultiLines: !1,
          })
        : null;
    }
    function m() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return null;
      if (e.isCollapsed()) return d();
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
        c = _(t, n, a);
      return c
        ? babelHelpers.extends({}, c, {
            startNode: r("WANullthrows")(c.selectedNodes[0]),
            endNode: r("WANullthrows")(
              c.selectedNodes[c.selectedNodes.length - 1],
            ),
            isCollapsed: !1,
            selection: e,
            isMultiLines: u,
          })
        : null;
    }
    function p(e, t, n, r, a, i, l) {
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
    function _(e, t, n) {
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
      var _ = p(r, l, a, s, i, m, d);
      if (_ == null) return null;
      for (l = _.startNodeIndex, a = _.startOffset; ; ) {
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
    function f(t, n) {
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
      var p = E(n),
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
      k(i, s, u, b);
    }
    function g(e, t) {
      var n;
      t === void 0 && (t = { keepNumberedList: !1 });
      for (
        var o = t,
          a = o.keepNumberedList,
          i = e.endNode,
          l = e.startNode,
          s = r("WANullthrows")(l.getParent()),
          u = (n = i.getParent()) == null ? void 0 : n.getNextSibling();
        s;
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
            if ((p.remove(), _)) {
              var f = _.splitText(1),
                g = f[0];
              g.remove();
            }
          }
        }
        if (((s = s.getNextSibling()), s === u)) break;
      }
    }
    function h(t, n) {
      var a,
        i = t.endNode,
        l = t.startNode,
        s = r("WANullthrows")(l.getParent()),
        c = (a = i.getParent()) == null ? void 0 : a.getNextSibling(),
        d = 1;
      if (n === e.NumberedList) {
        var m,
          p = parseInt(
            (m = s) == null || (m = m.getNumberNode()) == null
              ? void 0
              : m.getTextContent(),
            10,
          );
        if (p) d = p;
        else {
          var _,
            f,
            h = (_ = s) == null ? void 0 : _.getPreviousSibling(),
            y = parseInt(
              h == null || (f = h.getNumberNode()) == null
                ? void 0
                : f.getTextContent(),
              10,
            );
          y && (d = Math.min(y + 1, u));
        }
      }
      for (g(t, { keepNumberedList: n === e.NumberedList }); s; ) {
        I(s.getFirstChild());
        var C = s.getFirstChild();
        if (
          (!C &&
            !t.isMultiLines &&
            ((C = o("Lexical").$createTextNode("")), s.append(C)),
          C)
        )
          if (n === e.BulletedList)
            C.insertBefore(
              o("WAWebListBulletNode").$createListBulletNode("* "),
            );
          else if (n === e.NumberedList) {
            if (
              (o("WAWebListNumberNode").$isListNumberNode(C)
                ? (d = parseInt(C.getTextContent(), 10))
                : C.insertBefore(
                    o("WAWebListNumberNode").$createListNumberNode(d + ". "),
                  ),
              d++,
              d > u)
            )
              break;
          } else
            n === e.Quote &&
              C.insertBefore(
                o("WAWebListNumberNode").$createListNumberNode("> "),
              );
        if (((s = s.getNextSibling()), s === c)) break;
      }
    }
    function y(e, t) {
      var n = e.endOffset,
        o = e.selectedNodes,
        a = e.selection,
        i = e.startOffset,
        l = r("WANullthrows")(b(o, i, t)),
        s = r("WANullthrows")(v(o, n, t));
      (k(a, l, s), l.remove(), s.remove());
    }
    function C(t, n) {
      var o = t.endNode,
        a = t.endOffset,
        i = t.isCollapsed,
        l = t.isMultiLines,
        u = t.selectedNodes,
        d = t.startNode,
        m = t.startOffset,
        p = s.includes(n),
        _ = n === e.Code;
      if (l && !p && !_) return c.Skip;
      if (p) {
        var f = r("WANullthrows")(d.getParent()),
          g = r("WANullthrows")(o.getParent()).getNextSibling();
        if (!l && f.getTextContentSize() === 0) return c.Add;
        for (var h = !0, y = f; y; ) {
          if (
            y.getTextContentSize() !== 0 &&
            ((n === e.BulletedList && y.getBulletNode() == null) ||
              (n === e.NumberedList && y.getNumberNode() == null) ||
              (n === e.Quote && y.getQuoteLineNode() == null))
          ) {
            h = !1;
            break;
          }
          if (((y = y.getNextSibling()), y === g)) break;
        }
        return h ? c.Remove : c.Add;
      }
      if (
        d !== o &&
        ((m !== 0 && S([d]).length !== 0) ||
          (a + 1 !== o.getTextContentSize() && S([o]).length !== 0))
      )
        return c.Skip;
      var C = b(u, m, n),
        R = v(u, a, n),
        L = !!(C && R);
      if (!L) {
        var E = S(i ? [u[0].getPreviousSibling(), u[0].getNextSibling()] : u);
        if (
          !E.some(function (e) {
            return e === n;
          }) &&
          !E.some(function (t) {
            return t === e.Code || t === e.InlineCode;
          })
        )
          return c.Add;
      }
      return L ? c.Remove : c.Skip;
    }
    function b(e, t, n) {
      if (t !== 0) return null;
      for (var r of e) {
        if (!o("WAWebDelimiterNode").$isDelimiterNode(r)) break;
        if (r.getTextContent() === E(n)) return r;
      }
      return null;
    }
    function v(e, t, n) {
      var r;
      if (
        t + 1 !==
        ((r = e[e.length - 1]) == null ? void 0 : r.getTextContentSize())
      )
        return null;
      for (var a = e.length - 1; a >= 0; a--) {
        var i = e[a];
        if (!o("WAWebDelimiterNode").$isDelimiterNode(i)) break;
        if (i.getTextContent() === E(n)) return i;
      }
      return null;
    }
    function S(t) {
      var n = [];
      return (
        t.forEach(function (t) {
          if (
            o("Lexical").$isTextNode(t) &&
            (["Bold", "Italic", "Strikethrough"].forEach(function (o) {
              t.hasFormat(o.toLowerCase()) &&
                n.push(r("WANullthrows")(e.cast(o)));
            }),
            t.hasFormat("code"))
          ) {
            var a = t.getStyle().includes("border-radius");
            n.push(a ? e.InlineCode : e.Code);
          }
        }),
        n
      );
    }
    var R = {};
    ((R[e.Bold] = "*"),
      (R[e.Italic] = "_"),
      (R[e.Strikethrough] = "~"),
      (R[e.Code] = "```"),
      (R[e.InlineCode] = "`"));
    var L = Array.from(Object.values(R));
    function E(e) {
      return r("WANullthrows")(R[e]);
    }
    function k(e, t, n, a) {
      a === void 0 && (a = !0);
      for (
        var i = t, l = n;
        a &&
        o("WAWebDelimiterNode").$isDelimiterNode(i) &&
        o("WAWebDelimiterNode").$isDelimiterNode(l) &&
        i.getTextContent() === l.getTextContent();
      )
        ((i = r("WANullthrows")(i.getNextSibling())),
          (l = r("WANullthrows")(l.getPreviousSibling())));
      e.setTextNodeRange(i, 0, l, l.getTextContentSize());
    }
    function I(e) {
      if (e) {
        var t = e.getTextContent(),
          n = t.trimStart();
        if (n.length === 0) {
          e.remove();
          return;
        }
        var r = t.length - n.length;
        if (r !== 0) {
          var o = e.splitText(r),
            a = o[0];
          a.remove();
        }
      }
    }
    function T(e) {
      var t = m();
      if (!t) return !1;
      var n = C(t, e);
      if (s.includes(e))
        switch (n) {
          case c.Add:
            return (h(t, e), !0);
          case c.Remove:
            return (g(t), !0);
          case c.Skip:
            return !1;
        }
      switch (C(t, e)) {
        case c.Add:
          return (f(t, e), !0);
        case c.Remove:
          return (y(t, e), !0);
        case c.Skip:
          return !1;
      }
    }
    ((l.TextFormatType = e),
      (l.TextFormatActionType = c),
      (l.$normalizeTextSelection = m),
      (l.$getTextFormatAction = C),
      (l.$toggleTextFormat = T));
  },
  98,
);
