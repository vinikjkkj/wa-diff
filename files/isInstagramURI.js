__d(
  "isInstagramURI",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol()) ||
        t.getProtocol() !== "https"
        ? !1
        : (e || (e = new RegExp("(^|\\.)instagram\\.com$", "i")),
          e.test(t.getDomain()));
    }
    i.default = l;
  },
  66,
);
