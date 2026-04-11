__d(
  "containsNode",
  ["isTextNode"],
  function (t, n, r, o, a, i, l) {
    function e(t, n) {
      return !t || !n
        ? !1
        : t === n
          ? !0
          : r("isTextNode")(t)
            ? !1
            : r("isTextNode")(n)
              ? e(t, n.parentNode)
              : "contains" in t
                ? t.contains(n)
                : t.compareDocumentPosition
                  ? !!(t.compareDocumentPosition(n) & 16)
                  : !1;
    }
    l.default = e;
  },
  98,
);
