__d(
  "adsLibFormatNumber",
  ["intlNumUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      return e === "N/A"
        ? e
        : o("intlNumUtils").formatNumberRaw(e != null ? e : 0, t, n, r, a);
    }
    l.default = e;
  },
  98,
);
