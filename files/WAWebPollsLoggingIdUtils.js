__d(
  "WAWebPollsLoggingIdUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = Math.pow(2, 21),
      l = Math.pow(2, 32);
    function s() {
      var t = self.crypto.getRandomValues(new Uint32Array(2)),
        n = (t[1] % e) * l + t[0];
      return n === 0 ? 1 : n;
    }
    i.generatePollLoggingId = s;
  },
  66,
);
