__d(
  "WebBloksTreeMake",
  ["WebBloksErrors", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (
        var n = {},
          r = arguments.length,
          a = new Array(r > 2 ? r - 2 : 0),
          i = 2;
        i < r;
        i++
      )
        a[i - 2] = arguments[i];
      for (var l = 0; l < a.length; l += 2) {
        var s = a[l];
        if (typeof s == "string" || typeof s == "number")
          n[o("WebBloksModel").decodeWebBloksWireIdentifier(s)] = a[l + 1];
        else
          throw new (o("WebBloksErrors").WebBloksError)(
            "Invalid key type in `bk.action.tree.Make`.",
          );
      }
      var u = e.objectSet.environment,
        c = u.unminificationMap,
        d = u.useMinification,
        m = o("WebBloksModel").createWebBloksModelFromWire(
          o("WebBloksModel").decodeWebBloksWireIdentifier(t),
          n,
          c,
          d || c != null,
        );
      return ((m.keyPath = e.scope), m);
    }
    l.default = e;
  },
  98,
);
