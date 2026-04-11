__d(
  "WAWebMediaUpdateMsg",
  ["WAWebDBUpdateMessageTable", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, t),
            e.set(t));
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
