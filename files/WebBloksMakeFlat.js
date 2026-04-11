__d(
  "WebBloksMakeFlat",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      for (
        var t = {}, n = 0;
        n < (arguments.length <= 1 ? 0 : arguments.length - 1) - 1;
        n += 2
      ) {
        var r = String(
          n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1],
        );
        t[r] =
          n + 1 + 1 < 1 || arguments.length <= n + 1 + 1
            ? void 0
            : arguments[n + 1 + 1];
      }
      return t;
    }
    i.default = e;
  },
  66,
);
