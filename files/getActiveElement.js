__d(
  "getActiveElement",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if ((e === void 0 && (e = document), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    i.default = e;
  },
  66,
);
