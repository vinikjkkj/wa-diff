__d(
  "adsPagePostResponseShaper",
  ["getPostTypeFromAttachments"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s =
          (t =
            e == null || (n = e.attachments) == null || (n = n.data) == null
              ? void 0
              : n.length) != null
            ? t
            : 0,
        u = e == null || (o = e.attachments) == null ? void 0 : o.data[0],
        c = u == null ? void 0 : u.media_type,
        d = r("getPostTypeFromAttachments")({
          numAttachments: s,
          firstAttachmentMediaType: c,
          isFbStories: (e == null ? void 0 : e.is_fb_stories) === !0,
          firstAttachmentType: u == null ? void 0 : u.type,
        }),
        m = d === "event" ? e.message : u == null ? void 0 : u.description;
      return babelHelpers.extends({}, e, {
        caption: u == null ? void 0 : u.title,
        description: m,
        link:
          (a = u == null ? void 0 : u.unshimmed_url) != null
            ? a
            : u == null
              ? void 0
              : u.url,
        name: u == null ? void 0 : u.title,
        object_id: u == null || (i = u.target) == null ? void 0 : i.id,
        source: u == null || (l = u.media) == null ? void 0 : l.source,
        type: d,
      });
    }
    l.default = e;
  },
  98,
);
