__d(
  "WAWebValidateMediaFilehash",
  ["WAMediaCalculateFilehash", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAMediaCalculateFilehash").calculateFilehash(e);
          return t === n;
        })),
        s.apply(this, arguments)
      );
    }
    l.validateFileash = e;
  },
  98,
);
