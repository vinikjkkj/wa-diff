__d(
  "getElementPosition",
  ["getElementRect"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("getElementRect")(e);
      return {
        x: t.left,
        y: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top,
      };
    }
    l.default = e;
  },
  98,
);
