__d(
  "WAWebDisplayedNameIsBizName",
  ["WAWebContactCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e),
        r = n == null ? void 0 : n.name;
      return r == null ? !0 : r === t;
    }
    l.default = e;
  },
  98,
);
