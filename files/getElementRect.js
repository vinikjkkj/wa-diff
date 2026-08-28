__d(
  "getElementRect",
  ["containsNode", "normalizeBoundingClientRect"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n =
          e == null || (t = e.ownerDocument) == null
            ? void 0
            : t.documentElement;
      return !e || !("getBoundingClientRect" in e) || !r("containsNode")(n, e)
        ? { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 }
        : r("normalizeBoundingClientRect")(e, e.getBoundingClientRect());
    }
    l.default = e;
  },
  98,
);
