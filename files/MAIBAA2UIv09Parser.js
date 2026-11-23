__d(
  "MAIBAA2UIv09Parser",
  ["MAIBAA2UIParser", "MAIBAA2UIv09DataModelUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500,
      s = "root";
    function u(t) {
      var n = new Map(),
        r = {},
        a = null,
        i = null,
        l = null,
        u = null;
      for (var c of t)
        if (c.version === "v0.9")
          if (c.createSurface != null) {
            var d,
              m,
              p = c.createSurface;
            ((a = p.surfaceId),
              (i = p.catalogId),
              (l = (d = p.logging) != null ? d : null),
              (u = (m = p.theme) != null ? m : null));
          } else if (c.updateComponents != null) {
            for (var _ of c.updateComponents.components)
              if (_.id != null && (n.set(_.id, _), n.size > e)) break;
          } else if (c.updateDataModel != null) {
            var f = c.updateDataModel;
            r = o("MAIBAA2UIv09DataModelUtils").mergeAtPath(r, f.path, f.value);
          } else
            c.deleteSurface != null &&
              c.deleteSurface.surfaceId === a &&
              (n.clear(),
              (r = {}),
              (a = null),
              (i = null),
              (l = null),
              (u = null));
      var g = n.has(s) ? s : null;
      return {
        catalogId: i,
        componentMap: n,
        dataModel: r,
        rootId: g,
        surfaceLogging: l,
        surfaceId: a,
        theme: u,
      };
    }
    function c(e, t) {
      if (!t)
        try {
          var n = JSON.parse(e);
          if (!Array.isArray(n)) return null;
          var r = n;
          return u(r);
        } catch (e) {
          return null;
        }
      var a = o("MAIBAA2UIParser").extractCompleteObjects(e);
      if (a.length === 0) return null;
      var i = [];
      for (var l of a)
        try {
          var s = JSON.parse(l);
          i.push(s);
        } catch (e) {
          continue;
        }
      return i.length === 0 ? null : u(i);
    }
    function d(e) {
      for (var t of e)
        if (t != null && typeof t == "object" && !Array.isArray(t)) {
          var n = t;
          if (
            n.version === "v0.9" &&
            (n.createSurface != null ||
              n.updateComponents != null ||
              n.updateDataModel != null ||
              n.deleteSurface != null)
          )
            return !0;
        }
      return !1;
    }
    ((l.isV09MessageStream = d),
      (l.parseA2UIv09Payload = c),
      (l.processV09Messages = u));
  },
  98,
);
