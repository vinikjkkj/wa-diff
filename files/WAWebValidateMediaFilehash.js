__d(
  "WAWebValidateMediaFilehash",
  ["WAMediaCalculateFilehash"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o("WAMediaCalculateFilehash").calculateFilehash(e);
      return t === n;
    }
    l.validateFileash = e;
  },
  98,
);
