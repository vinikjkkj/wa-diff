__d(
  "isWorkplaceDotComURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)workplace\\.com$", "i");
    function l(t) {
      return t.getProtocol() === "https" && e.test(t.getDomain());
    }
    i.default = l;
  },
  66,
);
