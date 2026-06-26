__d(
  "isWorkplaceDotComURI",
  [],
  function (t, n, r, o, a, i) {
    var e = "(^|\\.)workplace\\.com$",
      l = new RegExp(e, "i");
    function s(e) {
      return e.getProtocol() === "https" && l.test(e.getDomain());
    }
    i.default = s;
  },
  66,
);
