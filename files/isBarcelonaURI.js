__d(
  "isBarcelonaURI",
  [],
  function (t, n, r, o, a, i) {
    var e = "(^|\\.)threads\\.(net|com)$";
    function l(e) {
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
    i.default = l;
  },
  66,
);
