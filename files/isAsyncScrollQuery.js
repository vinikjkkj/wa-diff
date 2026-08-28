__d(
  "isAsyncScrollQuery",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      return (
        e === null &&
          (e =
            r("UserAgent").isPlatform("Mac OS X >= 10.8") &&
            r("UserAgent").isBrowser("Safari >= 6.0")),
        e
      );
    }
    l.default = s;
  },
  98,
);
