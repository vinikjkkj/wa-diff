__d(
  "WAWebLogLineSanitizer",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e.replace(/(\d){1,16}(\d{4}[@:-])/g, "...$2");
    }
    i.sanitizeLine = e;
  },
  66,
);
