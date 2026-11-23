__d(
  "MLCBaseTypeaheadUtils",
  ["Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.focus,
        n = e.anchor,
        r = n.key,
        o = n.offset,
        a = n.type;
      (n.set(t.key, t.offset, t.type), t.set(r, o, a));
    }
    function s(t, n) {
      return (
        n === void 0 && (n = !0),
        t.getEditorState().read(function () {
          var t = o("Lexical").$getRoot(),
            r = t.getTextContent(),
            a = o("Lexical").$getSelection();
          if (!o("Lexical").$isRangeSelection(a) || !n) return r;
          var i = a.clone(),
            l = i.anchor,
            s = i.focus;
          l.isBefore(s) || e(i);
          var u = o("Lexical").$getRoot().getFirstChildOrThrow();
          (i.focus.set(l.getNode().getKey(), l.offset, l.type),
            i.anchor.set(u.getKey(), 0, "element"));
          var c = i.getTextContent().length;
          return r.slice(0, c) + "<TRIGGER_POSITION>" + r.slice(c);
        })
      );
    }
    function u(e, t) {
      for (var n = 0; n < e.length; n++) if (t < e[n]) return n - 1;
      return e.length - 1;
    }
    ((l.getLexicalTextContentWithTriggerPosition = s),
      (l.getBucketLowerBound = u));
  },
  98,
);
