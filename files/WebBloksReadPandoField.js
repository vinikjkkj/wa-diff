__d(
  "WebBloksReadPandoField",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      if (t == null) return null;
      var r = /^is_fulfilled__\(.*\)$/;
      return n.match(r) ? !0 : t.getFieldValue([n], !1);
    }
    i.default = e;
  },
  66,
);
