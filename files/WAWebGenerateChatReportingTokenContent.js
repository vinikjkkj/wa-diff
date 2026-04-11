__d(
  "WAWebGenerateChatReportingTokenContent",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n = new TextEncoder().encode((t = e.body) != null ? t : "");
      return self.crypto.getRandomValues(new Uint8Array(n.length));
    }
    i.default = e;
  },
  66,
);
