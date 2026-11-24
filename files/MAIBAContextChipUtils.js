__d(
  "MAIBAContextChipUtils",
  ["Lexical", "MAIBAContextChipNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return t.length >= n
        ? "limit"
        : t.some(function (t) {
              return t.entity_id === e.entity_id;
            })
          ? "duplicate"
          : null;
    }
    function s(t, n) {
      var r = [],
        a = [],
        i = o("Lexical").$createParagraphNode(),
        l = function (t) {
          t !== "" && i.append(o("Lexical").$createTextNode(t));
        };
      for (var s of t)
        s.kind === "text"
          ? l(s.text)
          : e(s.chip, r, n) == null
            ? (i.append(
                o("MAIBAContextChipNode").$createMAIBAContextChipNode(s.chip),
              ),
              r.push(s.chip))
            : (l(s.replacedText), a.push(s.chip));
      return (
        o("MAIBAContextChipNode").$isMAIBAContextChipNode(i.getLastChild()) &&
          i.append(o("Lexical").$createTextNode(" ")),
        o("Lexical").$getRoot().clear().append(i),
        i.selectEnd(),
        { inserted: r, rejected: a }
      );
    }
    function u() {
      var e = [],
        t = new Set();
      function n(r) {
        if (o("MAIBAContextChipNode").$isMAIBAContextChipNode(r)) {
          var a = r.getChip();
          t.has(a.entity_id) || (t.add(a.entity_id), e.push(a));
          return;
        }
        if (o("Lexical").$isElementNode(r)) for (var i of r.getChildren()) n(i);
      }
      return (n(o("Lexical").$getRoot()), e);
    }
    function c(e) {
      var t = "",
        n = [];
      function r(a) {
        if (o("MAIBAContextChipNode").$isMAIBAContextChipNode(a)) {
          var i = a.getChip(),
            l = e(i);
          ((t += l), n.push({ chip: i, matchedText: l }));
          return;
        }
        if (o("Lexical").$isElementNode(a)) {
          for (var s of a.getChildren()) r(s);
          return;
        }
        if (o("Lexical").$isLineBreakNode(a)) {
          t += "\n";
          return;
        }
        o("Lexical").$isLeafNode(a) && (t += a.getTextContent());
      }
      return (
        r(o("Lexical").$getRoot()),
        { chipReferences: n, value: t.trim() }
      );
    }
    function d(e) {
      var t = o("Lexical").$getNodeByKey(e);
      if (
        !(
          !o("MAIBAContextChipNode").$isMAIBAContextChipNode(t) ||
          !t.isAttached()
        )
      ) {
        var n = t.getNextSibling();
        if (o("Lexical").$isTextNode(n) && n.getTextContent().startsWith(" ")) {
          var r = o("Lexical").$getSelection();
          if (o("Lexical").$isRangeSelection(r))
            for (var a of [r.anchor, r.focus])
              a.key === n.getKey() &&
                a.offset > 0 &&
                a.set(a.key, a.offset - 1, a.type);
          n.spliceText(0, 1, "");
        }
        t.remove();
      }
    }
    function m(e, t) {
      var n = o("MAIBAContextChipNode").$createMAIBAContextChipNode(e),
        r = o("Lexical").$createTextNode(" ");
      if (t != null && t.replaceNodeKey != null) {
        var a = o("Lexical").$getNodeByKey(t.replaceNodeKey);
        if (o("Lexical").$isTextNode(a)) {
          var i = a.getNextSibling();
          (a.replace(n),
            o("Lexical").$isTextNode(i) && /^\s/.test(i.getTextContent())
              ? i.select(1, 1)
              : (n.insertAfter(r), r.select(1, 1)));
          return;
        }
      }
      if (t != null && t.selection != null) {
        var l = t.selection;
        if (
          o("Lexical").$getNodeByKey(l.anchor.key) != null &&
          o("Lexical").$getNodeByKey(l.focus.key) != null
        ) {
          o("Lexical").$setSelection(l.clone());
          var s = o("Lexical").$getSelection();
          if (o("Lexical").$isRangeSelection(s)) {
            (s.insertNodes([n, r]), r.select(1, 1));
            return;
          }
        }
      }
      var u = o("Lexical").$getRoot(),
        c = u.getLastChild();
      (o("Lexical").$isElementNode(c)
        ? c.append(n)
        : u.append(o("Lexical").$createParagraphNode().append(n)),
        n.insertAfter(r),
        r.select(1, 1));
    }
    function p(e) {
      var t = e.target;
      if (
        !(t instanceof Element) ||
        t.closest('button, [role="button"]') != null
      )
        return !1;
      var n = o("Lexical").$getNearestNodeFromDOMNode(t);
      if (!o("MAIBAContextChipNode").$isMAIBAContextChipNode(n)) return !1;
      var r = o("Lexical").$getEditor().getElementByKey(n.getKey());
      if (r == null) return !1;
      var a = r.getBoundingClientRect(),
        i = e.clientX < a.left + a.width / 2,
        l = getComputedStyle(r).direction === "rtl";
      return (i !== l ? n.selectPrevious() : n.selectNext(0, 0), !0);
    }
    ((l.getMAIBAContextChipRejection = e),
      (l.$replaceMAIBAComposerContentWithSegments = s),
      (l.$readMAIBAContextChipsInOrder = u),
      (l.$readMAIBAComposerValueWithChipReferences = c),
      (l.$removeMAIBAContextChipNode = d),
      (l.$insertMAIBAContextChip = m),
      (l.$selectBesideClickedMAIBAContextChip = p));
  },
  98,
);
