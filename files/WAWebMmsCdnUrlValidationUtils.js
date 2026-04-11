__d(
  "WAWebMmsCdnUrlValidationUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = { OE: "oe" };
    function s(t) {
      var n = t instanceof URL ? t.searchParams : new URL(t).searchParams,
        r = n.get(e.OE),
        a = r == null ? void 0 : o("WATimeUtils").convertHexToDate(r);
      return { expirationDate: a };
    }
    l.parseCdnUrlParams = s;
  },
  98,
);
