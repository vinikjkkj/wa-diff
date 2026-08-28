__d(
  "A2UIMarkdownTokens",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /\*\*([\s\S]+?)\*\*/,
      s = /\[([^\]]+)\]\(([^)]+)\)/,
      u = /`([^`]+)`/;
    function c(e) {
      for (var t = [], n = e; n.length > 0; ) {
        var r = d(n);
        if (r == null) {
          t.push({ kind: "text", text: n });
          break;
        }
        (r.index > 0 && t.push({ kind: "text", text: n.slice(0, r.index) }),
          t.push(r.token),
          (n = n.slice(r.index + r.length)));
      }
      return t;
    }
    function d(t) {
      var n = t.match(e),
        r = t.match(s),
        o = t.match(u),
        a = [];
      if (n != null) {
        var i;
        a.push({
          index: (i = n.index) != null ? i : 0,
          length: n[0].length,
          token: { kind: "bold", children: c(n[1]) },
        });
      }
      if (r != null) {
        var l;
        a.push({
          index: (l = r.index) != null ? l : 0,
          length: r[0].length,
          token: { kind: "link", text: r[1], url: r[2] },
        });
      }
      if (o != null) {
        var d;
        a.push({
          index: (d = o.index) != null ? d : 0,
          length: o[0].length,
          token: { kind: "code", text: o[1] },
        });
      }
      var m = null;
      for (var p of a) (m == null || p.index < m.index) && (m = p);
      return m;
    }
    function m(e) {
      var t = o("ConstUriUtils").getUri(e);
      return t == null ? null : t.toString();
    }
    ((l.tokenizeInlineMarkdown = c), (l.getSafeMarkdownUrl = m));
  },
  98,
);
