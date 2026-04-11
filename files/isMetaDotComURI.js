__d(
  "isMetaDotComURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("(^|\\.)meta\\.com$", "i"),
      l = ["https"];
    function s(t) {
      return t.isEmpty() && t.toString() !== "#"
        ? !1
        : !t.getDomain() && !t.getProtocol()
          ? !0
          : l.indexOf(t.getProtocol()) !== -1 && e.test(t.getDomain());
    }
    i.default = s;
  },
  66,
);
