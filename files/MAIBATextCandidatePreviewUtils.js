__d(
  "MAIBATextCandidatePreviewUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(t, n) {
      return !Array.isArray(t) || t.length === 0
        ? [{ text: n }]
        : t.map(function (t) {
            var r = e(t);
            return r == null
              ? { text: n }
              : babelHelpers.extends({}, r, { text: n });
          });
    }
    function s(t, n, r) {
      if (t == null || r === "") return null;
      var o = !1,
        a = e(t.object_story_spec);
      if (a != null) {
        var i = e(a.link_data);
        if (i != null) {
          var s =
            n === "primary_text"
              ? babelHelpers.extends({}, i, { message: r })
              : babelHelpers.extends({}, i, {
                  name: r,
                  child_attachments: Array.isArray(i.child_attachments)
                    ? i.child_attachments.map(function (t) {
                        var n = e(t);
                        return n == null
                          ? t
                          : babelHelpers.extends({}, n, { name: r });
                      })
                    : i.child_attachments,
                });
          ((a = babelHelpers.extends({}, a, { link_data: s })), (o = !0));
        }
        var u = e(a.video_data);
        u != null &&
          ((a = babelHelpers.extends({}, a, {
            video_data:
              n === "primary_text"
                ? babelHelpers.extends({}, u, { message: r })
                : babelHelpers.extends({}, u, { title: r }),
          })),
          (o = !0));
      }
      var c = e(t.asset_feed_spec);
      if (c != null) {
        var d,
          m = n === "primary_text" ? "bodies" : "titles";
        ((c = babelHelpers.extends({}, c, ((d = {}), (d[m] = l(c[m], r)), d))),
          (o = !0));
      }
      if (!o) return null;
      var p = babelHelpers.extends({}, t);
      return (
        a != null && (p.object_story_spec = a),
        c != null && (p.asset_feed_spec = c),
        p
      );
    }
    i.default = s;
  },
  66,
);
