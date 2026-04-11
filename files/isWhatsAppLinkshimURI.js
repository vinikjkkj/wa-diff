__d(
  "isWhatsAppLinkshimURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("l\\.wl\\.co$", "i");
    function l(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol()) ||
        t.getProtocol() !== "https"
        ? !1
        : e.test(t.getDomain());
    }
    i.default = l;
  },
  66,
);
