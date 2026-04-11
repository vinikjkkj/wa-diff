__d(
  "isSecureOculusDotComURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)secure\\.oculus\\.com$", "i"),
      l = new RegExp("(^|\\.)work\\.meta\\.com$", "i"),
      s = ["https"];
    function u(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol())
        ? !1
        : s.indexOf(t.getProtocol()) !== -1 &&
            (e.test(t.getDomain()) || l.test(t.getDomain()));
    }
    i.default = u;
  },
  66,
);
