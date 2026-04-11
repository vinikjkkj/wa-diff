__d(
  "isBarcelonaURI",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.getProtocol(),
        n = e.getDomain();
      return (
        (t === "http" || t === "https") &&
        (n === "threads.net" ||
          n.endsWith(".threads.net") ||
          n === "threads.com" ||
          n.endsWith(".threads.com"))
      );
    }
    i.default = e;
  },
  66,
);
