__d(
  "WAWebPluginCreateRegistryLookup",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = n.type,
          a = (r = n.subtype) != null ? r : null,
          i = t.get(o);
        (i == null && ((i = new Map()), t.set(o, i)), i.set(a, n));
      }
      return function (e, n) {
        var r;
        return (r = t.get(e)) == null ? void 0 : r.get(n != null ? n : null);
      };
    }
    i.createMsgTypeRegistryLookup = e;
  },
  66,
);
