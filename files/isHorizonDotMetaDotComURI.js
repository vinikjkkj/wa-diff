__d(
  "isHorizonDotMetaDotComURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)horizon\\.meta\\.com$", "i"),
      l = ["https"];
    function s(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol())
        ? !1
        : l.indexOf(t.getProtocol()) !== -1 && e.test(t.getDomain());
    }
    i.default = s;
  },
  66,
);
