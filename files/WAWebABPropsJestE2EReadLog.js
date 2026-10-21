__d(
  "WAWebABPropsJestE2EReadLog",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(),
      s = null;
    function u() {
      return r("gkx")("26256");
    }
    function c(e) {
      s = e;
    }
    function d(e, t, n) {
      m(_(e, t, n));
    }
    function m(t) {
      if (!e.has(t)) {
        var n = s != null ? s : p();
        n != null && (e.add(t), n(t));
      }
    }
    function p() {
      return typeof window == "undefined"
        ? null
        : window.__je2e_recordABPropRead;
    }
    function _(e, t, n) {
      var r = (n == null ? void 0 : n.isOverridden) === !0,
        o = (n == null ? void 0 : n.hasServerValue) === !0,
        a = !1,
        i = String(t).replace(/\n/g, "\\n");
      return (
        "properties/read/key: " +
        e +
        " value: " +
        i +
        " isOverridden: " +
        String(r) +
        " hasServerValue: " +
        String(o) +
        " isDebugDefault: " +
        String(a)
      );
    }
    ((l.isABPropReadLogEnabledForJestE2E = u),
      (l.setABPropReadRecorderForJestE2E = c),
      (l.logABPropReadForJestE2E = d),
      (l.recordABPropReadLineForJestE2E = m));
  },
  98,
);
