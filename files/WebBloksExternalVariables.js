__d(
  "WebBloksExternalVariables",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.dataPropsEntries,
        n = new Map();
      for (var r of t) {
        var o = r.id,
          a = r.name;
        n.set(a, o);
      }
      return n;
    }
    function l(e, t) {
      var n = new Map();
      if (!e) return n;
      for (var r of e.entries()) {
        var o = r[0],
          a = r[1],
          i = t.get(o);
        i != null && n.set(i, a);
      }
      return n;
    }
    ((i.getProcessedDataPropEntries = e),
      (i.getProcessedExternalVariables = l));
  },
  66,
);
