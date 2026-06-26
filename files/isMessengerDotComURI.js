__d(
  "isMessengerDotComURI",
  [],
  function (t, n, r, o, a, i) {
    var e = "(^|\\.)messenger\\.com$",
      l = new RegExp(e, "i"),
      s = ["https"];
    function u(e) {
      return (e.isEmpty() && e.toString() !== "#") ||
        (!e.getDomain() && !e.getProtocol())
        ? !1
        : s.indexOf(e.getProtocol()) !== -1 && l.test(e.getDomain());
    }
    i.default = u;
  },
  66,
);
