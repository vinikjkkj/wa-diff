__d(
  "adsDraftIsSystemError",
  ["AdsPSRSystemErrorCode.experimental"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(r("AdsPSRSystemErrorCode.experimental").SYSTEM_ERROR_CODES);
    function s(t) {
      if (t == null) return !1;
      var n = parseInt(t, 10);
      return e.has(n);
    }
    l.default = s;
  },
  98,
);
