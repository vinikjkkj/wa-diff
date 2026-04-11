__d(
  "isInstagramCDNURI",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol()) ||
        t.getProtocol() !== "https"
        ? !1
        : (e || (e = new RegExp("^static\\.cdninstagram\\.com$", "i")),
          e.test(t.getDomain()));
    }
    i.default = l;
  },
  66,
);
