__d(
  "isInstagramURI",
  [],
  function (t, n, r, o, a, i) {
    var e = "(^|\\.)instagram\\.com$",
      l = null;
    function s(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol()) ||
        t.getProtocol() !== "https"
        ? !1
        : (l || (l = new RegExp(e, "i")), l.test(t.getDomain()));
    }
    i.default = s;
  },
  66,
);
