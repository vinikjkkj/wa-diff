__d(
  "WAWebLexicalUtils",
  ["Lexical", "LexicalSelection"],
  function (t, n, r, o, a, i, l) {
    var e = "text-send-clear",
      s = "programmatic-text";
    function u() {
      var e = c();
      return e ? e.node.getTextContent().slice(0, e.point.offset) : null;
    }
    function c() {
      var e = C();
      if (!(e == null || !e.isCollapsed())) {
        var t = e.anchor;
        if (t.type === "text") {
          var n = t.getNode();
          if (o("Lexical").$isTextNode(n)) return { point: t, node: n };
        }
      }
    }
    function d(e) {
      return o("Lexical").$isTextNode(e) && e.getTextContent()[0] === " ";
    }
    function m(e) {
      var t = o("Lexical").$isTextNode(e) ? e.getTextContent() : "";
      return t[t.length - 1] === " ";
    }
    function p(e, t) {
      var n = t != null ? t : {},
        r = n.moveCaret,
        a = r === void 0 ? !1 : r;
      if (!m(e)) {
        for (var i = e.getNextSibling(); i && !o("Lexical").$isTextNode(i); )
          i = i.getNextSibling();
        if (i && d(i)) {
          a && i.select(1, 1);
          return;
        }
        var l = new (o("Lexical").TextNode)(" ");
        (e.insertAfter(l), a && l.select());
      }
    }
    function _(e, t) {
      var n = t != null ? t : {},
        r = n.moveCaret,
        a = r === void 0 ? !1 : r;
      if (!(d(e) || !e.getPreviousSibling())) {
        for (
          var i = e.getPreviousSibling();
          i && !o("Lexical").$isTextNode(i);
        )
          i = i.getPreviousSibling();
        if (i && m(i)) {
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
    function f(e, t) {
      (t === void 0 && (t = new (o("Lexical").TextNode)("")),
        e.replace(t),
        t.selectNext(0, 0));
    }
    function g() {
      var e = o("Lexical").$getRoot().getChildren(),
        t = [];
      for (var n of e) t.push(n.getTextContent());
      return t.join("\n");
    }
    function h(e) {
      var t = new (o("Lexical").TextNode)(e.getTextContent());
      e.replace(t);
    }
    function y(e, t) {
      var n,
        r = t != null ? t : {},
        a = r.insertLeadingSpace,
        i = a === void 0 ? !1 : a,
        l = (n = C()) != null ? n : o("Lexical").$getRoot().selectEnd(),
        s = o("Lexical").$createTextNode(e);
      (l.insertNodes([s]), i && _(s));
    }
    function C() {
      var e = o("Lexical").$getSelection();
      return o("Lexical").$isRangeSelection(e) ? e : null;
    }
    function b() {
      var e = o("Lexical").$getPreviousSelection();
      return o("Lexical").$isRangeSelection(e) ? e : null;
    }
    function v(e) {
      if (!e) return !1;
      var t = e.getRootElement();
      return t ? t.ownerDocument.activeElement === t : !1;
    }
    function S(e) {
      return v(e)
        ? D(e).length === 0
          ? !0
          : e.getEditorState().read(function () {
              var e = C();
              if ((e == null ? void 0 : e.anchor.type) === "element")
                return L(e, !1);
              var t = c();
              return t
                ? t.point.offset === 0 &&
                    t.node === o("Lexical").$getRoot().getFirstDescendant()
                : !1;
            })
        : !1;
    }
    function R(e) {
      return v(e)
        ? D(e).length === 0
          ? !0
          : e.getEditorState().read(function () {
              var e = C();
              if ((e == null ? void 0 : e.anchor.type) === "element")
                return L(e, !0);
              var t = c();
              return t
                ? t.point.offset === t.node.getTextContentSize() &&
                    t.node === o("Lexical").$getRoot().getLastDescendant()
                : !1;
            })
        : !1;
    }
    function L(e, t) {
      if (!e.isCollapsed()) return !1;
      var n = e.anchor.getNode();
      if (!o("Lexical").$isElementNode(n)) return !1;
      var r = t ? n.getChildrenSize() : 0;
      if (e.anchor.offset !== r) return !1;
      for (var a = o("Lexical").$getRoot(); n !== a; ) {
        var i = t ? n.getNextSibling() : n.getPreviousSibling();
        if (i != null) return !1;
        n = n.getParentOrThrow();
      }
      return !0;
    }
    var E = (function (e) {
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
    function k(e, t) {
      if (!o("Lexical").$isTextNode(e)) throw new E("TextNode", e, t);
      return e;
    }
    function I(e) {
      if (!o("Lexical").$isParagraphNode(e)) throw new E("ParagraphNode", e);
      return e;
    }
    function T(e) {
      (e.focus(),
        e.update(function () {
          var e = C();
          e &&
            (o("LexicalSelection").$selectAll == null ||
              o("LexicalSelection").$selectAll(e));
        }));
    }
    function D(e) {
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
    function x(e, t) {
      var n = o("Lexical").$getRoot();
      n.clear();
      for (var r = e.split(/\r?\n/), a = 0; a < r.length; a++) {
        var i = o("Lexical").$createParagraphNode();
        n.append(i);
        var l = new (o("Lexical").TextNode)(r[a]);
        i.append(l);
      }
      t ? n.selectEnd() : o("Lexical").$setSelection(null);
    }
    function $(e, t, n) {
      e.update(
        function () {
          return x(t, v(e));
        },
        n == null ? void 0 : { tag: n },
      );
    }
    function P() {
      var e,
        t = C(),
        n = t == null || (e = t.getNodes()) == null ? void 0 : e[0];
      if (o("Lexical").$isParagraphNode(n)) return n;
      if (o("Lexical").$isTextNode(n)) {
        var r = n.getParent();
        return o("Lexical").$isParagraphNode(r) ? r : null;
      }
      return null;
    }
    function* N(e) {
      for (var t = e.getFirstChild(); t; ) {
        var n;
        if (o("Lexical").$isTextNode(t)) yield t;
        else if (o("Lexical").$isElementNode(t)) for (var r of N(t)) yield r;
        t = (n = t) == null ? void 0 : n.getNextSibling();
      }
    }
    function M(e) {
      return e
        ? e.getEditorState().read(function () {
            for (var e of N(o("Lexical").$getRoot()))
              if (e.getStyle().includes("bot-command-text")) return !0;
            return !1;
          })
        : !1;
    }
    function w(e, t) {
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
      (l.PROGRAMMATIC_TEXT_UPDATE_TAG = s),
      (l.$getTextUpToAnchor = u),
      (l.$getTextAnchor = c),
      (l.$insertTrailingSpace = p),
      (l.$insertLeadingSpace = _),
      (l.$replaceTextNode = f),
      (l.$rootTextContent = g),
      (l.$toTextNode = h),
      (l.$insertText = y),
      (l.$getRangeSelection = C),
      (l.$getPreviousRangeSelection = b),
      (l.isFocused = v),
      (l.isCursorAtStart = S),
      (l.isCursorAtEnd = R),
      (l.NodeTypeAssertionError = E),
      (l.assertTextNode = k),
      (l.assertParagraphNode = I),
      (l.selectAll = T),
      (l.getTextContent = D),
      (l.$setTextContent = x),
      (l.setTextContent = $),
      (l.$getSelectionParagraph = P),
      (l.textNodesIterator = N),
      (l.hasBotCommand = M),
      (l.$splitText = w));
  },
  98,
);
