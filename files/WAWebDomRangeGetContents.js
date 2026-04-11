__d(
  "WAWebDomRangeGetContents",
  ["invariant", "WAWebDomIsTextNode"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      if (e.collapsed) return [];
      if (e.startContainer === e.endContainer)
        return r("WAWebDomIsTextNode")(e.startContainer)
          ? [e.startContainer]
          : Array.from(e.startContainer.childNodes).slice(
              e.startOffset,
              e.endOffset,
            );
      var t = e.commonAncestorContainer.childNodes,
        n;
      (e.commonAncestorContainer === e.startContainer
        ? (n = t[0])
        : (n = u(e.commonAncestorContainer, e.startContainer)),
        n || s(0, 56328));
      var o;
      (e.commonAncestorContainer === e.endContainer
        ? (o = t[t.length - 1])
        : (o = u(e.commonAncestorContainer, e.endContainer)),
        o || s(0, 56327));
      for (
        var a = o,
          i = function (t) {
            return t == null ? void 0 : t.nextSibling;
          },
          l = [],
          c = n;
        c && c !== a;
      )
        (l.push(c), (c = i(c) || i(c.parentNode)));
      return (l.push(a), l);
    }
    function u(e, t) {
      for (var n = t; n.parentNode !== e; ) {
        if (!n.parentNode) return null;
        n = n.parentNode;
      }
      return n;
    }
    l.default = e;
  },
  98,
);
