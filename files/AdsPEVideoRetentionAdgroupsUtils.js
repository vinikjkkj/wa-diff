__d(
  "AdsPEVideoRetentionAdgroupsUtils",
  ["filterNulls"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.video_id;
      if (t == null) {
        var n;
        t =
          e == null ||
          (n = e.object_story_spec) == null ||
          (n = n.video_data) == null
            ? void 0
            : n.video_id;
      }
      if (t == null) {
        var o,
          a =
            e == null ||
            (o = e.object_story_spec) == null ||
            (o = o.link_data) == null
              ? void 0
              : o.child_attachments;
        if (a != null && a.length > 0) {
          var i = a.find(function (e) {
            return e.video_id != null;
          });
          i != null && (t = i.video_id);
        }
      }
      if (t == null) {
        var l,
          s = e == null || (l = e.asset_feed_spec) == null ? void 0 : l.videos;
        if (s && s.length > 0)
          return r("filterNulls")(
            s.map(function (e) {
              return e.video_id;
            }),
          ).reverse();
      }
      return t != null ? [t] : [];
    }
    function s(t) {
      var n = t.creative;
      return e(n);
    }
    ((l.getVideoIdFromCreative = e), (l.getVideoIDs = s));
  },
  98,
);
