__d(
  "WAWebFormat",
  ["WAWebFormatParse", "WAWebFormatSerialize"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      return (
        i === void 0 && (i = 1 / 0),
        r("WAWebFormatSerialize")(n, o("WAWebFormatParse").parse(e, t, i), a)
      );
    }
    l.default = e;
  },
  98,
);
