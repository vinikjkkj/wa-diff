__d(
  "getPrivacyAwareEditorState",
  ["Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return { nodes: s(e), selection: c(e) };
    }
    function s(e) {
      var t = [],
        n = [
          "key",
          "type",
          "detail",
          "format",
          "mode",
          "children",
          "parent",
          "first",
          "last",
          "size",
          "next",
          "prev",
        ];
      for (var r of e._nodeMap) {
        var o = r[0],
          a = r[1],
          i = {};
        for (var l of n) {
          var s = "__" + l,
            c = a[s];
          c == null || u(l, c) || (i[l] = c);
        }
        t.push(i);
      }
      return t;
    }
    function u(e, t) {
      var n = new Set(["detail", "format"]);
      return !!((n.has(e) && t === 0) || (e === "mode" && t === "normal"));
    }
    function c(e) {
      var t = e._selection;
      if (!o("Lexical").$isRangeSelection(t)) return null;
      var n = t.anchor,
        r = t.focus;
      return {
        anchor: { key: n.key, offset: n.offset, type: n.type },
        focus: { key: r.key, offset: r.offset, type: r.type },
      };
    }
    l.default = e;
  },
  98,
);
