__d(
  "WAWebLexicalUtils",
  ["Lexical", "LexicalSelection", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = "text-send-clear";
    function s() {
      var e = u();
      return e ? e.node.getTextContent().slice(0, e.point.offset) : null;
    }
    function u() {
      var e = y();
      if (!(e == null || !e.isCollapsed())) {
        var t = e.anchor;
        if (t.type === "text") {
          var n = t.getNode();
          if (o("Lexical").$isTextNode(n)) return { point: t, node: n };
        }
      }
    }
    function c(e) {
      return o("Lexical").$isTextNode(e) && e.getTextContent()[0] === " ";
    }
    function d(e) {
      var t = o("Lexical").$isTextNode(e) ? e.getTextContent() : "";
      return t[t.length - 1] === " ";
    }
    function m(e, t) {
      var n = t != null ? t : {},
        r = n.moveCaret,
        a = r === void 0 ? !1 : r;
      if (!d(e)) {
        var i = e;
        do i = i.getNextSibling();
        while (i && !o("Lexical").$isTextNode(i));
        if (i && c(i)) {
          a && i.select(1, 1);
          return;
        }
        var l = new (o("Lexical").TextNode)(" ");
        (e.insertAfter(l), a && l.select());
      }
    }
    function p(e, t) {
      var n = t != null ? t : {},
        r = n.moveCaret,
        a = r === void 0 ? !1 : r;
      if (!(c(e) || !e.getPreviousSibling())) {
        var i = e;
        do i = i.getPreviousSibling();
        while (i && !o("Lexical").$isTextNode(i));
        if (i && d(i)) {
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
    function _(e, t) {
      (t === void 0 && (t = new (o("Lexical").TextNode)("")),
        e.replace(t),
        t.selectNext(0, 0));
    }
    function f() {
      var e = o("Lexical").$getRoot().getChildren(),
        t = [];
      for (var n of e) t.push(n.getTextContent());
      return t.join("\n");
    }
    function g(e) {
      var t = new (o("Lexical").TextNode)(e.getTextContent());
      e.replace(t);
    }
    function h(e, t) {
      var n,
        r = t != null ? t : {},
        a = r.insertLeadingSpace,
        i = a === void 0 ? !1 : a,
        l = (n = y()) != null ? n : o("Lexical").$getRoot().selectEnd(),
        s = o("Lexical").$createTextNode(e);
      (l.insertNodes([s]), i && p(s));
    }
    function y() {
      var e = o("Lexical").$getSelection();
      return o("Lexical").$isRangeSelection(e) ? e : null;
    }
    function C() {
      var e = o("Lexical").$getPreviousSelection();
      return o("Lexical").$isRangeSelection(e) ? e : null;
    }
    function b(e) {
      if (!e) return !1;
      var t = e.getRootElement();
      return t ? t.ownerDocument.activeElement === t : !1;
    }
    function v(e) {
      return b(e)
        ? I(e).length === 0
          ? !0
          : e.getEditorState().read(function () {
              var e = u();
              return e
                ? e.point.offset === 0 &&
                    e.node === o("Lexical").$getRoot().getFirstDescendant()
                : !1;
            })
        : !1;
    }
    function S(e) {
      return b(e)
        ? I(e).length === 0
          ? !0
          : e.getEditorState().read(function () {
              var e = u();
              return e
                ? e.point.offset === e.node.getTextContentSize() &&
                    e.node === o("Lexical").$getRoot().getLastDescendant()
                : !1;
            })
        : !1;
    }
    var R = (function (e) {
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
    function L(e, t) {
      if (!o("Lexical").$isTextNode(e)) throw new R("TextNode", e, t);
      return e;
    }
    function E(e) {
      if (!o("Lexical").$isParagraphNode(e)) throw new R("ParagraphNode", e);
      return e;
    }
    function k(e) {
      (e.focus(),
        e.update(function () {
          var e = y();
          e &&
            (o("LexicalSelection").$selectAll == null ||
              o("LexicalSelection").$selectAll(e));
        }));
    }
    function I(e) {
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
    function T(e, t) {
      var n = o("Lexical").$getRoot();
      n.clear();
      for (var a = e.split(/\r?\n/), i = 0; i < a.length; i++) {
        n.append(o("Lexical").$createParagraphNode());
        var l = r("nullthrows")(n.getLastChild()),
          s = new (o("Lexical").TextNode)(a[i]);
        l.append(s);
      }
      t ? n.selectEnd() : o("Lexical").$setSelection(null);
    }
    function D(e, t, n) {
      e.update(
        function () {
          return T(t, b(e));
        },
        n == null ? void 0 : { tag: n },
      );
    }
    function x() {
      var e,
        t = y(),
        n = t == null || (e = t.getNodes()) == null ? void 0 : e[0];
      return o("Lexical").$isParagraphNode(n)
        ? n
        : o("Lexical").$isTextNode(n)
          ? n.getParent()
          : null;
    }
    function* $(e) {
      for (var t = e.getFirstChild(); t; ) {
        var n;
        if (o("Lexical").$isTextNode(t)) yield t;
        else for (var r of $(t)) yield r;
        t = (n = t) == null ? void 0 : n.getNextSibling();
      }
    }
    function P(e) {
      return e
        ? e.getEditorState().read(function () {
            for (var e of $(o("Lexical").$getRoot()))
              if (e.getStyle().includes("bot-command-text")) return !0;
            return !1;
          })
        : !1;
    }
    function N(e, t) {
      var n = e.splitText(t),
        r = n[0],
        o = n[1];
      return r && o
        ? [r, o]
        : t >= e.getTextContentSize()
          ? [r, null]
          : [null, r];
    }
    ((l.TEXT_SEND_CLEAR_UPDATE_TAG = e),
      (l.$getTextUpToAnchor = s),
      (l.$getTextAnchor = u),
      (l.$insertTrailingSpace = m),
      (l.$insertLeadingSpace = p),
      (l.$replaceTextNode = _),
      (l.$rootTextContent = f),
      (l.$toTextNode = g),
      (l.$insertText = h),
      (l.$getRangeSelection = y),
      (l.$getPreviousRangeSelection = C),
      (l.isFocused = b),
      (l.isCursorAtStart = v),
      (l.isCursorAtEnd = S),
      (l.NodeTypeAssertionError = R),
      (l.assertTextNode = L),
      (l.assertParagraphNode = E),
      (l.selectAll = k),
      (l.getTextContent = I),
      (l.$setTextContent = T),
      (l.setTextContent = D),
      (l.$getSelectionParagraph = x),
      (l.textNodesIterator = $),
      (l.hasBotCommand = P),
      (l.$splitText = N));
  },
  98,
);
