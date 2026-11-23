__d(
  "MAIBATextCandidateFallbackPreviewUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(t, n, r) {
      if (t == null || r === "") return null;
      var o = e(t.object_story_spec);
      if (o == null || o.page_id == null) return null;
      var a = e(o.link_data),
        i = a == null ? void 0 : a.link;
      if (typeof i != "string" || i === "") return null;
      var l = { link: i },
        s = a == null ? void 0 : a.message,
        u = a == null ? void 0 : a.name;
      n === "primary_text"
        ? ((l.message = r), typeof u == "string" && u !== "" && (l.name = u))
        : ((l.name = r), typeof s == "string" && s !== "" && (l.message = s));
      var c = babelHelpers.extends({}, o, { link_data: l });
      return (
        delete c.photo_data,
        delete c.template_data,
        delete c.video_data,
        { object_story_spec: c }
      );
    }
    i.default = l;
  },
  66,
);
