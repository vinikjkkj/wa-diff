__d(
  "MAIBAA2UITypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      var n = {};
      for (var r of t)
        r.valueString != null
          ? (n[r.key] = r.valueString)
          : r.valueNumber != null
            ? (n[r.key] = r.valueNumber)
            : r.valueBoolean != null
              ? (n[r.key] = r.valueBoolean)
              : r.valueMap != null && (n[r.key] = e(r.valueMap));
      return n;
    }
    function l(t) {
      var n = new Map(),
        r = {},
        o = null,
        a = null,
        i = null;
      for (var l of t)
        if (l.surfaceUpdate != null) {
          var s = l.surfaceUpdate;
          a = s.surfaceId;
          for (var u of s.components) n.set(u.id, u);
        } else if (l.dataModelUpdate != null) {
          var c = l.dataModelUpdate,
            d = e(c.contents);
          r = babelHelpers.extends({}, r, d);
        } else if (l.beginRendering != null) {
          var m = l.beginRendering;
          ((o = m.root), (a = m.surfaceId), (i = m.styles));
        }
      return {
        componentMap: n,
        dataModel: r,
        rootId: o,
        surfaceId: a,
        styles: i,
      };
    }
    i.processMessages = l;
  },
  66,
);
