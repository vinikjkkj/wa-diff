__d(
  "WAWebNoiseInfoMainThread",
  ["WAWebUserPrefsInfoStore"],
  function (t, n, r, o, a, i, l) {
    var e = {
      getNoiseInfo: function () {
        return o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
      },
      setCertificateChain: function (t) {
        return o("WAWebUserPrefsInfoStore").waNoiseInfo.setCertificateChain(t);
      },
    };
    l.noiseInfoMainThread = e;
  },
  98,
);
