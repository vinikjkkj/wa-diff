__d(
  "WAWebPonyfillsFetch",
  ["WAWebHttpExtendedFetch"],
  function (t, n, r, o, a, i, l) {
    function e() {}
    var s = "fetch" in self ? self.fetch : u;
    function u(t, n) {
      return (
        n === void 0 && (n = {}),
        o("WAWebHttpExtendedFetch").sharedFetch(
          t,
          babelHelpers.extends({}, n, { onProgress: e }),
        )
      );
    }
    l.default = s;
  },
  98,
);
