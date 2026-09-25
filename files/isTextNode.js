__d(
  "isTextNode",
  ["isNode"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        r("isNode")(e) && typeof e == "object" && e != null && e.nodeType == 3
      );
    }
    l.default = e;
  },
  98,
);
