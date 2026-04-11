__d(
  "isFacebookURI",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = ["http", "https"];
    function s(t) {
      e || (e = new RegExp("(^|\\.)facebook\\.com$", "i"));
      var n = e;
      return t.isEmpty() && t.toString() !== "#"
        ? !1
        : !t.getDomain() && !t.getProtocol()
          ? !0
          : l.indexOf(t.getProtocol()) !== -1 && n.test(t.getDomain());
    }
    ((s.setRegex = function (t) {
      e = t;
    }),
      (i.default = s));
  },
  66,
);
