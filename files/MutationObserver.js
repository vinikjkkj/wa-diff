__d(
  "MutationObserver",
  [],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s = (function () {
        function e(e) {}
        var t = e.prototype;
        return (
          (t.observe = function (t, n) {}),
          (t.disconnect = function () {}),
          (t.takeRecords = function () {
            return [];
          }),
          e
        );
      })(),
      u =
        (e = (l = t.MutationObserver) != null ? l : t.WebKitMutationObserver) !=
        null
          ? e
          : s,
      c = u;
    i.default = c;
  },
  66,
);
