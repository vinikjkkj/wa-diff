__d(
  "buildMAIBAImageVariantSelectionAttachments",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function s(e) {
      return e === !0 || e === "true";
    }
    function u(t, n, r) {
      if (r == null) return [];
      var o = e(n),
        a = e(t.variants);
      if (o == null || a == null) return [];
      var i = [],
        u = new Set();
      for (var c of Object.keys(o))
        if (s(o[c])) {
          if (a[c] != null) {
            u.add(c);
            continue;
          }
          var d = c.match(/(\d+)$/);
          d != null && a[d[1]] != null && u.add(d[1]);
        }
      for (var m of Object.keys(a))
        if (u.has(m)) {
          var p = e(a[m]);
          if (p != null) {
            var _ = l(p.image_hash);
            if (_ != null) {
              var f = l(p.image_id);
              i.push({
                account_id: r,
                image_hash: _,
                maiba_internal_kind: "IMAGE_HASH",
                media_id: f != null ? f : _,
                media_type: "MAIBA_INTERNAL",
                media_url: l(p.url),
              });
            }
          }
        }
      return i;
    }
    i.default = u;
  },
  66,
);
