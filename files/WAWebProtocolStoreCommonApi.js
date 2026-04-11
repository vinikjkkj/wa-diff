__d(
  "WAWebProtocolStoreCommonApi",
  ["WAWebSignalCommonUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e instanceof ArrayBuffer
        ? o("WAWebSignalCommonUtils").bufferToStr(e)
        : e;
    }
    l.stringifyIdentityKey = e;
  },
  98,
);
