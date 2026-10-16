__d(
  "WAWebFormat",
  ["WAWebFormatParse", "WAWebFormatSerialize"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i,
        l = (i = a == null ? void 0 : a.parseLimit) != null ? i : 1 / 0;
      return r("WAWebFormatSerialize")(
        n,
        o("WAWebFormatParse").parse(e, t, l, a == null ? void 0 : a.textLimit),
        a == null ? void 0 : a.serializerOptions,
      );
    }
    l.default = e;
  },
  98,
);
