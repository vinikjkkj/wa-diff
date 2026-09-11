__d(
  "orderWAWebBizAdCreationPreviewMedias",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t == null) return e;
      var n = new Map(
          e.map(function (e) {
            return [e.id, e];
          }),
        ),
        r = [];
      for (var o of t) {
        var a = n.get(o.key);
        a != null && (r.push(a), n.delete(o.key));
      }
      return [].concat(r, Array.from(n.values()));
    }
    i.default = e;
  },
  66,
);
