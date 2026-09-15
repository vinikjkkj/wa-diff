__d(
  "WebBloksTreeMake",
  ["WebBloksErrors", "WebBloksMinificationUtils", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.objectSet.environment,
        r = n.minificationMaps,
        a = n.useMinification,
        i = typeof t == "number" && a ? String.fromCodePoint(t) : t;
      if (typeof i != "string")
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid style ID type in `bk.action.tree.Make`.",
        );
      for (
        var l = {},
          s = arguments.length,
          u = new Array(s > 2 ? s - 2 : 0),
          c = 2;
        c < s;
        c++
      )
        u[c - 2] = arguments[c];
      for (var d = 0; d < u.length; d += 2) {
        var m = u[d];
        if (typeof m == "string") l[m] = u[d + 1];
        else if (typeof m == "number" && a)
          l[String.fromCodePoint(m)] = u[d + 1];
        else
          throw new (o("WebBloksErrors").WebBloksError)(
            "Invalid key type in `bk.action.tree.Make`.",
          );
      }
      var p = a
        ? o("WebBloksModel").createWebBloksModelFromMinifiedValues(
            i,
            l,
            r.toLogicalStyle,
          )
        : o("WebBloksModel").createWebBloksModelFromLogicalValues(
            i,
            l,
            o("WebBloksMinificationUtils").requireWebBloksStyleMinificationMap(
              r.toMinifiedStyle,
            ),
          );
      return ((p.keyPath = e.scope), p);
    }
    l.default = e;
  },
  98,
);
