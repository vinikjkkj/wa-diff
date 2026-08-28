__d(
  "A2UITreeParser",
  ["A2UITreeDataBinding"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500,
      s = "root";
    function u(e) {
      if (!Array.isArray(e) || e.length === 0) return !1;
      for (var t of e)
        if (t != null && typeof t == "object" && !Array.isArray(t)) {
          var n = t;
          if (
            n.version === "v0.9" &&
            (n.createSurface != null || n.updateComponents != null)
          )
            return !0;
        }
      return !1;
    }
    function c(t) {
      var n = new Map(),
        r = {};
      for (var a of t)
        if (!(a == null || a.version !== "v0.9")) {
          var i = a.updateComponents;
          if (i != null && Array.isArray(i.components))
            for (var l of i.components) {
              if (n.size >= e) break;
              l == null ||
                typeof l.id != "string" ||
                typeof l.component != "string" ||
                n.set(l.id, l);
            }
          var u = a.updateDataModel;
          u != null &&
            typeof u.path == "string" &&
            (r = o("A2UITreeDataBinding").mergeAtPath(r, u.path, u.value));
        }
      var c = n.has(s) ? s : null;
      return c == null ? null : { componentMap: n, dataModel: r, rootId: c };
    }
    function d(e) {
      try {
        var t = JSON.parse(e);
        if (!Array.isArray(t) || !u(t)) return null;
        var n = t;
        return c(n);
      } catch (e) {
        return null;
      }
    }
    ((l.isA2UITreeEnvelope = u), (l.parseA2UITree = d));
  },
  98,
);
