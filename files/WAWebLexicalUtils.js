__d(
  "WAWebLexicalUtils",
  ["Lexical", "LexicalSelection", "WANullthrows"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = s();
      return e ? e.node.getTextContent().slice(0, e.point.offset) : null;
    }
    function s() {
      var e = h();
      if (!(e == null || !e.isCollapsed())) {
        var t = e.anchor;
        if (t.type === "text") {
          var n = t.getNode();
          if (o("Lexical").$isTextNode(n)) return { point: t, node: n };
        }
      }
    }
    function u(e) {
      return o("Lexical").$isTextNode(e) && e.getTextContent()[0] === " ";
    }
    function c(e) {
      var t = o("Lexical").$isTextNode(e) ? e.getTextContent() : "";
      return t[t.length - 1] === " ";
    }
    function d(e, t) {
      var n = t != null ? t : {},
        r = n.moveCaret,
        a = r === void 0 ? !1 : r;
      if (!c(e)) {
        var i = e;
        do i = i.getNextSibling();
        while (i && !o("Lexical").$isTextNode(i));
        if (i && u(i)) {
          a && i.select(1, 1);
          return;
        }
        var l = new (o("Lexical").TextNode)(" ");
        (e.insertAfter(l), a && l.select());
      }
    }
    function m(e, t) {
      var n = t != null ? t : {},
        r = n.moveCaret,
        a = r === void 0 ? !1 : r;
      if (!(u(e) || !e.getPreviousSibling())) {
        var i = e;
        do i = i.getPreviousSibling();
        while (i && !o("Lexical").$isTextNode(i));
        if (i && c(i)) {
          if (a) {
            var l = i.getTextContent().length;
            i.select(l - 1, l);
          }
          return;
        }
        var s = new (o("Lexical").TextNode)(" ");
        (e.insertBefore(s), a && s.select());
      }
    }
    function p(e, t) {
      (t === void 0 && (t = new (o("Lexical").TextNode)("")),
        e.replace(t),
        t.selectNext(0, 0));
    }
    function _() {
      var e = o("Lexical").$getRoot().getChildren(),
        t = [];
      for (var n of e) t.push(n.getTextContent());
      return t.join("\n");
    }
    function f(e) {
      var t = new (o("Lexical").TextNode)(e.getTextContent());
      e.replace(t);
    }
    function g(e, t) {
      var n,
        r = t != null ? t : {},
        a = r.insertLeadingSpace,
        i = a === void 0 ? !1 : a,
        l = (n = h()) != null ? n : o("Lexical").$getRoot().selectEnd(),
        s = o("Lexical").$createTextNode(e);
      (l.insertNodes([s]), i && m(s));
    }
    function h() {
      var e = o("Lexical").$getSelection();
      return o("Lexical").$isRangeSelection(e) ? e : null;
    }
    function y() {
      var e = o("Lexical").$getPreviousSelection();
      return o("Lexical").$isRangeSelection(e) ? e : null;
    }
    function C(e) {
      if (!e) return !1;
      var t = e.getRootElement();
      return t ? t.ownerDocument.activeElement === t : !1;
    }
    function b(e) {
      return C(e)
        ? k(e).length === 0
          ? !0
          : e.getEditorState().read(function () {
              var e = s();
              return e
                ? e.point.offset === 0 &&
                    e.node === o("Lexical").$getRoot().getFirstDescendant()
                : !1;
            })
        : !1;
    }
    function v(e) {
      return C(e)
        ? k(e).length === 0
          ? !0
          : e.getEditorState().read(function () {
              var e = s();
              return e
                ? e.point.offset === e.node.getTextContentSize() &&
                    e.node === o("Lexical").$getRoot().getLastDescendant()
                : !1;
            })
        : !1;
    }
    var S = (function (e) {
      function t(t, n, r) {
        var o,
          a,
          i =
            (o = n == null ? void 0 : n.getType()) != null
              ? o
              : "undefined node",
          l = "Expect node to be a " + t + ", but received " + i;
        return (
          r != null && (l += " (context: " + r + ")"),
          (a = e.call(this, l) || this),
          (a.name = "NodeTypeAssertionError"),
          a
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function R(e, t) {
      if (!o("Lexical").$isTextNode(e)) throw new S("TextNode", e, t);
      return e;
    }
    function L(e) {
      if (!o("Lexical").$isParagraphNode(e)) throw new S("ParagraphNode", e);
      return e;
    }
    function E(e) {
      (e.focus(),
        e.update(function () {
          var e = h();
          e &&
            (o("LexicalSelection").$selectAll == null ||
              o("LexicalSelection").$selectAll(e));
        }));
    }
    function k(e) {
      return e.getEditorState().read(function () {
        return o("Lexical")
          .$getRoot()
          .getChildren()
          .map(function (e) {
            return e.getTextContent();
          })
          .join("\n");
      });
    }
    function I(e, t) {
      var n = o("Lexical").$getRoot();
      n.clear();
      for (var a = e.split(/\r?\n/), i = 0; i < a.length; i++) {
        n.append(o("Lexical").$createParagraphNode());
        var l = r("WANullthrows")(n.getLastChild()),
          s = new (o("Lexical").TextNode)(a[i]);
        l.append(s);
      }
      t ? n.selectEnd() : o("Lexical").$setSelection(null);
    }
    function T(e, t) {
      e.update(function () {
        return I(t, C(e));
      });
    }
    function D() {
      var e,
        t = h(),
        n = t == null || (e = t.getNodes()) == null ? void 0 : e[0];
      return o("Lexical").$isParagraphNode(n)
        ? n
        : o("Lexical").$isTextNode(n)
          ? n.getParent()
          : null;
    }
    function* x(e) {
      for (var t = e.getFirstChild(); t; ) {
        var n;
        if (o("Lexical").$isTextNode(t)) yield t;
        else for (var r of x(t)) yield r;
        t = (n = t) == null ? void 0 : n.getNextSibling();
      }
    }
    function $(e) {
      return e
        ? e.getEditorState().read(function () {
            for (var e of x(o("Lexical").$getRoot()))
              if (e.getStyle().includes("bot-command-text")) return !0;
            return !1;
          })
        : !1;
    }
    function P(e, t) {
      var n = e.splitText(t),
        r = n[0],
        o = n[1];
      return r && o
        ? [r, o]
        : t >= e.getTextContentSize()
          ? [r, null]
          : [null, r];
    }
    ((l.$getTextUpToAnchor = e),
      (l.$getTextAnchor = s),
      (l.$insertTrailingSpace = d),
      (l.$insertLeadingSpace = m),
      (l.$replaceTextNode = p),
      (l.$rootTextContent = _),
      (l.$toTextNode = f),
      (l.$insertText = g),
      (l.$getRangeSelection = h),
      (l.$getPreviousRangeSelection = y),
      (l.isFocused = C),
      (l.isCursorAtStart = b),
      (l.isCursorAtEnd = v),
      (l.NodeTypeAssertionError = S),
      (l.assertTextNode = R),
      (l.assertParagraphNode = L),
      (l.selectAll = E),
      (l.getTextContent = k),
      (l.$setTextContent = I),
      (l.setTextContent = T),
      (l.$getSelectionParagraph = D),
      (l.textNodesIterator = x),
      (l.hasBotCommand = $),
      (l.$splitText = P));
  },
  98,
);
